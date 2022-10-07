import { componentFactory } from './buildPage';
import Baker from './baker.JPG';

export default function addContactContent() {
  const makeH2 = componentFactory('mainH2', 'h2', 'main', undefined, undefined, undefined, 'Contact Us');
  makeH2.createDOMNode();
  const makeContactDiv = componentFactory('homeDiv', 'div', 'main', 'contact-div');
  makeContactDiv.createDOMNode();
  const makeImg = componentFactory('ContactImg', 'img', '.contact-div', 'contact-img', undefined, Baker);
  makeImg.createDOMNode();
  const makePara = componentFactory('mainDesc', 'p', '.contact-div', undefined, undefined, undefined, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum efficitur urna ac accumsan. Cras sit amet laoreet lorem. In egestas sagittis lorem, pretium aliquet purus.');
  makePara.createDOMNode();
}
