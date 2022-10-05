/* eslint-disable no-console */

const componentFactory = (name, type, parent, classes, id, html, text, value) => {
  // Creates a DOM node corresponding to the new object and assigns appropriate attributes
  const createDOMNode = () => {
    const selectParent = document.querySelector(parent);
    const makeComponent = document.createElement(type);
    if (classes !== undefined) {
      makeComponent.classList.add(classes);
    }
    if (id !== undefined) {
      makeComponent.id = id;
    }
    if (html !== undefined) {
      makeComponent.innerHTML = html;
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
    name, type, parent, classes, id, html, text, value, createDOMNode,
  };
};

export default function pageBuilder() {
  console.log('pageBuilder active');
  const header = 'header';
  const content = '#content';
  const main = 'main';
  const div = 'div';
  const menu = 'menu';
  const newHeader = () => {
    const makeHeader = componentFactory(header, header, content);
    makeHeader.createDOMNode();
  };
  const newMain = () => {
    const makeMain = componentFactory(main, main, content);
    makeMain.createDOMNode();
  };
  const newHero = () => {
    const makeHero = componentFactory('hero', div, main, 'hero');
    makeHero.createDOMNode();
  };
  const newMenu = () => {
    const makeMenu = componentFactory(menu, menu, header);
    makeMenu.createDOMNode();
    const makeOption0 = componentFactory('option0', 'li', 'menu', undefined, undefined, undefined, 'Home');
    makeOption0.createDOMNode();
    const makeOption1 = componentFactory('option1', 'li', 'menu', undefined, undefined, undefined, 'Menu');
    makeOption1.createDOMNode();
    const makeOption2 = componentFactory('option2', 'li', 'menu', undefined, undefined, undefined, 'Contact Us');
    makeOption2.createDOMNode();
  };
  newHeader();
  newMain();
  newHero();
  newMenu();
}
