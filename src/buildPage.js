/* eslint-disable no-console */

const newComponent = (type, classes, id, parent) => {
  const selectParent = document.querySelector(parent);
  console.log('selectParent is', selectParent);
  const makeComponent = document.createElement(type);
  if (classes !== null) {
    makeComponent.classList.add(classes);
  }
  if (id !== null) {
    makeComponent.id = id;
  }
  selectParent.append(makeComponent);
};

const builder = () => {
  newComponent('header', null, null, '#content');
  newComponent('menu', 'site-menu', null, '#content');
  newComponent('main', null, null, '#content');
};

export {
  newComponent,
  builder,
};
