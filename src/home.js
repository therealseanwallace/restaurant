import { componentFactory } from './buildPage';
import Bakery from './bakery.JPG';

export default function addHomeContent() {
  const makeH2 = componentFactory('mainH2', 'h2', 'main', undefined, undefined, undefined, 'Classic French Pastries and Breads Hand Crafted Daily');
  makeH2.createDOMNode();
  const makeHomeDiv = componentFactory('homeDiv', 'div', 'main', 'home-div');
  makeHomeDiv.createDOMNode();
  const makeImg = componentFactory('homeImg', 'img', '.home-div', 'main-img', undefined, Bakery);
  makeImg.createDOMNode();
  const makePara = componentFactory('mainDesc', 'p', '.home-div', undefined, undefined, undefined, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum efficitur urna ac accumsan. Cras sit amet laoreet lorem. In egestas sagittis lorem, pretium aliquet purus.');
  makePara.createDOMNode();
}
