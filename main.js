/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/buildPage.js":
/*!**************************!*\
  !*** ./src/buildPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageBuilder)\n/* harmony export */ });\n/* eslint-disable no-console */\n\nconst componentFactory = (name, type, parent, classes, id, html, text, value) => {\n  // Creates a DOM node corresponding to the new object and assigns appropriate attributes\n  const createDOMNode = () => {\n    const selectParent = document.querySelector(parent);\n    const makeComponent = document.createElement(type);\n    if (classes !== undefined) {\n      makeComponent.classList.add(classes);\n    }\n    if (id !== undefined) {\n      makeComponent.id = id;\n    }\n    if (html !== undefined) {\n      makeComponent.innerHTML = html;\n    }\n    if (text !== undefined) {\n      makeComponent.textContent = text;\n    }\n    if (value !== undefined) {\n      makeComponent.value = value;\n    }\n    selectParent.append(makeComponent);\n  };\n  return {\n    name, type, parent, classes, id, html, text, value, createDOMNode,\n  };\n};\n\nfunction pageBuilder() {\n  console.log('pageBuilder active');\n  const header = 'header';\n  const content = '#content';\n  const main = 'main';\n  const div = 'div';\n  const menu = 'menu';\n  const newHeader = () => {\n    const makeHeader = componentFactory(header, header, content);\n    makeHeader.createDOMNode();\n  };\n  const newMain = () => {\n    const makeMain = componentFactory(main, main, content);\n    makeMain.createDOMNode();\n  };\n  const newHero = () => {\n    const makeHero = componentFactory('hero', div, main, 'hero');\n    makeHero.createDOMNode();\n  };\n  const newMenu = () => {\n    const makeMenu = componentFactory(menu, menu, header);\n    makeMenu.createDOMNode();\n    const makeOption0 = componentFactory('option0', 'li', 'menu', undefined, undefined, undefined, 'Home');\n    makeOption0.createDOMNode();\n    const makeOption1 = componentFactory('option1', 'li', 'menu', undefined, undefined, undefined, 'Menu');\n    makeOption1.createDOMNode();\n    const makeOption2 = componentFactory('option2', 'li', 'menu', undefined, undefined, undefined, 'Contact Us');\n    makeOption2.createDOMNode();\n  };\n  newHeader();\n  newMain();\n  newHero();\n  newMenu();\n}\n\n\n//# sourceURL=webpack://restaurant/./src/buildPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _buildPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildPage */ \"./src/buildPage.js\");\n\n(0,_buildPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;