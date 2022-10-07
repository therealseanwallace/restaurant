/* eslint-disable max-len */
/* eslint-disable no-console */

export const componentFactory = (name, type, parent, classes, id, src, text, value) => {
  const createDOMNode = () => {// Creates a DOM node corresponding to the new object and assigns appropriate attributes
    const selectParent = document.querySelector(parent);
    const makeComponent = document.createElement(type);
    if (classes !== undefined) {
      makeComponent.classList.add(classes);
    }
    if (id !== undefined) {
      makeComponent.id = id;
    }
    if (src !== undefined) {
      makeComponent.src = src;
    }
    if (text !== undefined) {
      makeComponent.textContent = text;
    }
    if (value !== undefined) {
      makeComponent.value = value;
    }
    selectParent.append(makeComponent);
  };
  return {
    name, type, parent, classes, id, src, text, value, createDOMNode,
  };
};

/*function makeFoodMenu() {
  const makeMenu = componentFactory('foodMenu', 'div', 'main');
  makeMenu.createDOMNode();
}*/

export default function pageBuilder() {
  console.log('pageBuilder active');
  const header = 'header';
  const content = '#content';
  const div = 'div';
  const menu = 'menu';
  const hero = '.hero';
  const main = 'main';
  const newHero = () => {
    const makeHero = componentFactory('hero', div, content, 'hero', 'hero');
    makeHero.createDOMNode();
  };
  const newHeader = () => {
    const makeHeader = componentFactory(header, header, hero);
    makeHeader.createDOMNode();
  };
  const newMain = () => {
    const makeMain = componentFactory(main, main, content);
    makeMain.createDOMNode();
  };
  const newMenu = () => {
    const makeMenu = componentFactory(menu, menu, header, 'menu');
    makeMenu.createDOMNode();
    const makeOption0 = componentFactory('option0', 'li', 'menu', undefined, 'home', undefined, 'Home');
    makeOption0.createDOMNode();
    const makeOption1 = componentFactory('option1', 'li', 'menu', undefined, 'menu', undefined, 'Menu');
    makeOption1.createDOMNode();
    const makeOption2 = componentFactory('option2', 'li', 'menu', undefined, 'contact', undefined, 'Contact');
    makeOption2.createDOMNode();
  };
  const newHeroText = () => {
    const makeHero = componentFactory('h1', 'h1', hero, undefined, undefined, undefined, 'Traditional French Breads and Pastries');
    makeHero.createDOMNode();
    const makeHeroH2 = componentFactory('heroh2', 'h2', hero, undefined, undefined, undefined, "'Le Croissant'");
    makeHeroH2.createDOMNode();
  }
  const addHomeContent = () => {
    const makeH2 = componentFactory('mainH2', 'h2', main, undefined, undefined, undefined, 'French Pastries and Breads Crafted by Hand Daily');
  };
  
  newHero();
  newHeader();
  newMenu();
  newMain();
  //newLogo();
  newHeroText();
}
