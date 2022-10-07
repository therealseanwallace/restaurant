// componentFactory = (name, type, parent, classes, id, src, text, value)

import { componentFactory } from './buildPage';
import MilleFeuille from './milleFeuille.JPG';
import Croissant from './croissant.JPG';
import PainAuChocolat from './painauchocolat.JPG';
import Baguette from './baguette.JPG';
import Pain from './pain-campagne.JPG';

export default function makeFoodMenu() {
  // If the container isn't empty, run emptyContainer before proceeding
  const makeMenuItem = (item, description, img) => {
    const makeimgDiv = componentFactory(item, 'div', '.food-menu', 'menu-img-div', `${item}-img-div`);
    makeimgDiv.createDOMNode();
    const makeMenuImg = componentFactory(`${item}Img`, 'img', `#${item}-img-div`, 'menu-img', `${item}img`);
    makeMenuImg.createDOMNode();
    document.getElementById(`${item}img`).src = img;
    const descDiv = componentFactory(`${item}DescDiv`, 'div', '.food-menu', 'desc-div', `${item}-desc-div`);
    descDiv.createDOMNode();
    const desc = componentFactory(`${item}-desc`, 'p', `#${item}-desc-div`, 'desc', `${item}-desc`);
    //const desc = componentFactory(`${item}-desc`, 'p', 'croissant-desc-div', 'desc', `${item}-desc`);
    desc.createDOMNode();
    const selectDesc = document.querySelector(`#${item}-desc`);
    selectDesc.textContent = description;
  };
  const makeMenu = componentFactory('foodMenu', 'div', 'main', 'food-menu');
  makeMenu.createDOMNode();
  makeMenuItem('croissant', 'Croissant de Tradition', Croissant);
  makeMenuItem('milleFeuille', 'Mille Feuille', MilleFeuille);
  makeMenuItem('painAuChocolat', 'Pain au Chocolat', PainAuChocolat);
  makeMenuItem('baguette', 'Baguette de Tradition', Baguette);
  makeMenuItem('pain', 'Pain de Campagne', Pain);
}
