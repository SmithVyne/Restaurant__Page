/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _majors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./majors */ \"./src/majors.js\");\n\n\n\nconst loadContent = () => {\n  const contentBox = document.querySelector('#content');\n  Object(_majors__WEBPACK_IMPORTED_MODULE_1__[\"header\"])(contentBox);\n  Object(_navbar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contentBox);\n  Object(_majors__WEBPACK_IMPORTED_MODULE_1__[\"pageBody\"])(contentBox);\n};\n\nloadContent();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/majors.js":
/*!***********************!*\
  !*** ./src/majors.js ***!
  \***********************/
/*! exports provided: header, pageBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"header\", function() { return header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageBody\", function() { return pageBody; });\nconst header = (contentBox) => {\n  contentBox.innerHTML = `<h1 id=\"header\">\n  A Great Restaurant\n</h1>`;\n};\n\nconst pageBody = (contentBox) => {\n  contentBox.innerHTML += `<div class=\"tab-content\" id=\"nav-tabContent\">\n <div class=\"tab-pane fade show active p-2\" id=\"nav-home\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\n   <div id=\"home-img\"></div>\n   <p>\n     Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus blanditiis in fuga corporis, itaque, natus nihil commodi dolorem beatae aliquid dolor magni quasi atque cumque. Consequatur fugit iste sint nemo!\n   </p>\n </div>\n\n <div class=\"tab-pane fade\" id=\"nav-profile\" role=\"tabpanel\" aria-labelledby=\"nav-profile-tab\">\n   <div class=\"menu-items\">\n     <div class=\"menu-itm\">\n       <div class=\"menu-img\"></div>\n       <span class=\"d-block\">Pancakes</span>\n     </div>\n     <div class=\"menu-itm\">\n       <div class=\"menu-img\"></div>\n       <span class=\"d-block\">IceCream</span>\n     </div>\n     <div class=\"menu-itm\">\n       <div class=\"menu-img\"></div>\n       <span class=\"d-block\">Candy</span>\n     </div>\n   </div>\n </div>\n\n <div class=\"tab-pane fade p-4\" id=\"nav-contact\" role=\"tabpanel\" aria-labelledby=\"nav-contact-tab\">\n   <form id=\"contact-form\">\n     <div class=\"d-flex\">\n       <div class=\"labels mr-2\">\n         <div>Your Request: </div>\n         <div class=\"mt-3\">Email here: </div>\n       </div>\n       <div class=\"entries\">\n         <input type=\"text\" id=\"request-box\">\n         <input type=\"email\" id=\"email-box\" class=\"mt-2\">\n       </div>\n     </div>\n     <button type=\"submit\" class=\"mt-3 btn btn-primary\">Submit</button>\n   </form>\n </div>\n</div>`;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/majors.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst navBar = (contentBox) => {\n  contentBox.innerHTML += `<nav>\n  <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\n    <a class=\"nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" href=\"#nav-home\" role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\">Home</a>\n    <a class=\"nav-link\" id=\"nav-profile-tab\" data-toggle=\"tab\" href=\"#nav-profile\" role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\">Menu</a>\n    <a class=\"nav-link\" id=\"nav-contact-tab\" data-toggle=\"tab\" href=\"#nav-contact\" role=\"tab\" aria-controls=\"nav-contact\" aria-selected=\"false\">Contact</a>\n  </div>\n</nav>`;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navBar);\n\n//# sourceURL=webpack:///./src/navbar.js?");

/***/ })

/******/ });