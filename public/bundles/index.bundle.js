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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Index.jsx":
/*!***********************!*\
  !*** ./src/Index.jsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _db_images_magnifying_glass_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db_images/magnifying_glass.jpg */ \"./src/db_images/magnifying_glass.jpg\");\n/* harmony import */ var _db_images_waitress_food_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db_images/waitress_food.jpg */ \"./src/db_images/waitress_food.jpg\");\n/* MAIN MENU PAGE */\n//default images for cards\n\n\n/*\n* Welcome Message Component\n* First component displayed on start of MasterChef application\n*/\n\nclass WelcomeComponent extends React.Component {\n  render() {\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: \"main\",\n      id: \"section1\"\n    }, /*#__PURE__*/React.createElement(\"div\", {\n      className: \"container\"\n    }, /*#__PURE__*/React.createElement(\"div\", {\n      className: \"header-container\"\n    }, /*#__PURE__*/React.createElement(\"p\", {\n      id: \"welcome-msg\"\n    }, \"Welcome to\"), /*#__PURE__*/React.createElement(\"p\", {\n      id: \"masterchef-msg\"\n    }, \"Masterchef\"), /*#__PURE__*/React.createElement(\"section\", {\n      id: \"section04\",\n      className: \"demo\"\n    }, /*#__PURE__*/React.createElement(\"a\", {\n      href: \"#section2\"\n    }, /*#__PURE__*/React.createElement(\"span\", null))))));\n  }\n\n}\n/*\n* Recommend Recipe Component\n* Consists of a card that the user can select if they opt for recipe recommendation\n*/\n\n\nclass RecommendRecipe extends React.Component {\n  render() {\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: \"card\"\n    }, /*#__PURE__*/React.createElement(\"img\", {\n      src: _db_images_waitress_food_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      alt: \"Recipe Recommendations\",\n      style: {\n        width: '100%'\n      }\n    }), /*#__PURE__*/React.createElement(\"div\", {\n      className: \"about-container\"\n    }, /*#__PURE__*/React.createElement(\"a\", {\n      className: \"a-optionlink\",\n      href: \"/ingredients\"\n    }, /*#__PURE__*/React.createElement(\"h1\", {\n      className: \"card-title\"\n    }, /*#__PURE__*/React.createElement(\"b\", null, \"Get Recipe Recommendations\")), /*#__PURE__*/React.createElement(\"p\", {\n      className: \"card-caption\"\n    }, \"Need help figuring out what to cook? We've got you covered. Tell us what ingredients you want to use from your pantry, a possible cuisine preference, the type of meal you're looking to make and finally how long you can cook, and presto - find the recipes meant for you today.\"))));\n  }\n\n}\n/*\n* Search for Recipe Component\n* Consists of a card that the user can select if they opt to search for recipes\n*/\n\n\nclass SearchRecipe extends React.Component {\n  render() {\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: \"card\"\n    }, /*#__PURE__*/React.createElement(\"img\", {\n      src: _db_images_magnifying_glass_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n      alt: \"Search Recipes\",\n      style: {\n        width: '100%'\n      }\n    }), /*#__PURE__*/React.createElement(\"div\", {\n      className: \"about-container\"\n    }, /*#__PURE__*/React.createElement(\"a\", {\n      className: \"a-optionlink\",\n      href: \"/searchResults\"\n    }, /*#__PURE__*/React.createElement(\"h1\", {\n      className: \"card-title\"\n    }, /*#__PURE__*/React.createElement(\"b\", null, \"Search for Recipes\")), /*#__PURE__*/React.createElement(\"p\", {\n      className: \"card-caption\"\n    }, \"Already have an idea of what you want to make today? Search for a favorite recipe from our collection and get top matches to get started.\"))));\n  }\n\n}\n/*\n* MasterChef Features Component\n* Second page that is scrolled to, from Welcome Message Component\n* Consists of both Recipe Recommendation and Recipe Search cards for user to choose from\n*/\n\n\nclass MasterChefOptions extends React.Component {\n  render() {\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: \"main\",\n      id: \"section2\"\n    }, /*#__PURE__*/React.createElement(\"div\", {\n      className: \"card-container\"\n    }, /*#__PURE__*/React.createElement(RecommendRecipe, null), /*#__PURE__*/React.createElement(SearchRecipe, null)));\n  }\n\n}\n/*\n* Top-Level Main Menu Parent Component\n*/\n\n\nclass MasterChefLanding extends React.Component {\n  render() {\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(WelcomeComponent, null), /*#__PURE__*/React.createElement(MasterChefOptions, null));\n  }\n\n}\n\nconst element = /*#__PURE__*/React.createElement(MasterChefLanding, null);\nReactDOM.render(element, document.getElementById('content'));\n\n//# sourceURL=webpack:///./src/Index.jsx?");

/***/ }),

/***/ "./src/db_images/magnifying_glass.jpg":
/*!********************************************!*\
  !*** ./src/db_images/magnifying_glass.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"dc3c494684e27efd18afb1c189238d09.jpg\");\n\n//# sourceURL=webpack:///./src/db_images/magnifying_glass.jpg?");

/***/ }),

/***/ "./src/db_images/waitress_food.jpg":
/*!*****************************************!*\
  !*** ./src/db_images/waitress_food.jpg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"16246de65f3157844b7fee63d6b3b710.jpg\");\n\n//# sourceURL=webpack:///./src/db_images/waitress_food.jpg?");

/***/ })

/******/ });