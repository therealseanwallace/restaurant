import pageBuilder from "./buildPage";
import makeFoodMenu from './menu';
import './style.css';
import componentFactory from './buildPage';
import addHomeContent from './home';
import addContactContent from './contact';

const clearContent = () => {
  const getMain = document.getElementsByTagName('main');
  getMain[0].innerHTML = '';
  console.log(getMain);
};

const loadTab = (e) => {
  clearContent();
  if (e.target.id === 'menu') {
    makeFoodMenu();
  }
  if (e.target.id === 'home') {
    addHomeContent();
  }
  if (e.target.id === 'contact') {
    addContactContent();
  }
};

pageBuilder();
addHomeContent();

const addMenuListeners = () => {
  const ul = document.querySelector('.menu');
  const listItems = ul.getElementsByTagName('li');
  for (let i = 0; i < listItems.length; i += 1) {
    console.log(listItems[i]);
    listItems[i].addEventListener('click', loadTab);
  }
};

addMenuListeners();
