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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Results.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Results.jsx":
/*!*************************!*\
  !*** ./src/Results.jsx ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _db_images_tomatoes_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db_images/tomatoes.jpg */ \"./src/db_images/tomatoes.jpg\");\n/* harmony import */ var _db_images_pasta_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db_images/pasta.jpg */ \"./src/db_images/pasta.jpg\");\n/* harmony import */ var _db_images_fruit_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db_images/fruit.jpg */ \"./src/db_images/fruit.jpg\");\n/* harmony import */ var _db_images_soup_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./db_images/soup.jpg */ \"./src/db_images/soup.jpg\");\n/* harmony import */ var _db_images_dessert_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./db_images/dessert.jpg */ \"./src/db_images/dessert.jpg\");\n/* harmony import */ var _db_images_meat_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./db_images/meat.jpg */ \"./src/db_images/meat.jpg\");\n/* RESULTS PAGE COMPONENTS */\n//default images for cards\n\n\n\n\n\n\n/* Header Result Component */\n\nfunction ResultHeader() {\n  return /*#__PURE__*/React.createElement(\"header\", null, /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"p\", {\n    id: \"page-intro\"\n  }, /*#__PURE__*/React.createElement(\"b\", null, \"Here's our recommended picks:\"))));\n}\n/*\n* Result Recommendation Card List Component\n*/\n\n\nfunction ResultCardList(props) {\n  const allRecipes = props.recipes.map(recipe => /*#__PURE__*/React.createElement(ResultCards, {\n    key: recipe.id,\n    name: recipe.name,\n    minutes: recipe.minutes,\n    recipe: recipe\n  }));\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"result-body\"\n  }, allRecipes);\n}\n/*\n* Result Single Card Component\n* Each card contains image, recipe name and it's prep time\n*/\n\n\nfunction ResultCards(props) {\n  const recipe = props.recipe;\n  /* converts first letter of every word in recipe title to capital letter */\n\n  function capital_letter(recipeName) {\n    recipeName = recipeName.split(\" \");\n\n    for (var i = 0, x = recipeName.length; i < x; i++) {\n      if (recipeName[i] != \"\") {\n        recipeName[i] = recipeName[i][0].toUpperCase() + recipeName[i].substr(1);\n      }\n    }\n\n    return recipeName.join(\" \");\n  }\n  /* creates the URL redirect from recipe card to original recipe on Food.com */\n\n\n  function recipeRedirect(recipeName, id) {\n    const url = \"https://www.food.com/recipe/\";\n    recipeName = recipeName.split(\" \");\n    recipeName.push(id.toString());\n    const arr = [];\n\n    for (var i = 0, x = recipeName.length; i < x; i++) {\n      if (recipeName[i] != \"\") {\n        arr.push(recipeName[i]);\n      }\n    }\n\n    var recipeUrl = arr.join(\"-\");\n    return url + recipeUrl;\n  }\n  /* Picks an approximate matching picture for the recipe card */\n\n\n  function choosePicture(recipeName) {\n    const pasta = [\"noodles\", \"pasta\", \"spaghetti\", \"lasagna\", \"ramen\"];\n    const dessert = [\"cake\", \"pie\", \"chocolate\", \"ice cream\", \"brownies\", \"dessert\", \"cupcake\", \"muffin\", \"cheesecake\", \"cookies\"];\n    const meat = [\"fish\", \"chicken\", \"meat\", \"bacon\", \"pork\", \"beef\", \"eggs\", \"turkey\", \"omelet\"];\n    const soup = [\"soup\", \"salad\"];\n    const fruit = [\"apple\", \"orange\", \"watermelon\", \"grape\", \"banana\", \"lemon\", \"avocado\"];\n\n    for (let i = 0; i < pasta.length; i++) {\n      if (recipeName.toLowerCase().includes(pasta[i])) {\n        return _db_images_pasta_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n      }\n    }\n\n    for (let i = 0; i < dessert.length; i++) {\n      if (recipeName.toLowerCase().includes(dessert[i])) {\n        return _db_images_dessert_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n      }\n    }\n\n    for (let i = 0; i < meat.length; i++) {\n      if (recipeName.toLowerCase().includes(meat[i])) {\n        return _db_images_meat_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n      }\n    }\n\n    for (let i = 0; i < fruit.length; i++) {\n      if (recipeName.toLowerCase().includes(fruit[i])) {\n        return _db_images_fruit_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n      }\n    }\n\n    for (let i = 0; i < soup.length; i++) {\n      if (recipeName.toLowerCase().includes(soup[i])) {\n        return _db_images_soup_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n      }\n    }\n\n    return _db_images_tomatoes_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  }\n\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"card\"\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    src: choosePicture(recipe.name),\n    alt: \"Food Image\",\n    height: \"180px\",\n    style: {\n      width: '100%'\n    }\n  }), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    id: \"a-recipe-link\",\n    target: \"_blank\",\n    href: recipeRedirect(recipe.name, recipe.id)\n  }, /*#__PURE__*/React.createElement(\"p\", {\n    id: \"card-title\"\n  }, /*#__PURE__*/React.createElement(\"b\", null, capital_letter(recipe.name)))), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"prep-time\"\n  }, /*#__PURE__*/React.createElement(\"b\", {\n    id: \"card-prep-time\"\n  }, \"PREP TIME:\")), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"time-taken\"\n  }, recipe.minutes)));\n}\n/* Footer Result Component */\n\n\nfunction ResultFooter() {\n  return /*#__PURE__*/React.createElement(\"footer\", null, /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"form\", {\n    action: \"/ingredients\"\n  }, /*#__PURE__*/React.createElement(\"button\", {\n    className: \"button-redo\",\n    type: \"submit\"\n  }, /*#__PURE__*/React.createElement(\"b\", null, \"Search Again?\"))), /*#__PURE__*/React.createElement(\"form\", {\n    action: \"/index\"\n  }, /*#__PURE__*/React.createElement(\"button\", {\n    className: \"button-main-menu\",\n    type: \"submit\"\n  }, /*#__PURE__*/React.createElement(\"b\", null, \"Main Menu\")))));\n}\n/*\n* Top-Level Recipe Recommendation Parent Component\n* Creates loading spinner icon while recipe list is fetched from database\n*/\n\n\nclass RecipeResults extends React.Component {\n  constructor() {\n    super(); // must call super constructor\n\n    this.state = {\n      recipes: [],\n      loading: true\n    };\n  }\n\n  render() {\n    if (this.state.loading) {\n      return null; //app is not ready (fake request is in process)\n    }\n\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ResultHeader, null), /*#__PURE__*/React.createElement(ResultCardList, {\n      recipes: this.state.recipes\n    }), /*#__PURE__*/React.createElement(ResultFooter, null));\n  }\n  /** load initial data and add new data */\n\n\n  componentDidMount() {\n    this.loadData();\n  }\n\n  fakeRequest() {\n    return new Promise(resolve => setTimeout(() => resolve(), 2500));\n  }\n\n  // loads data from database and displays on user's browser\n  // loader icon spins until data is fetched\n  loadData() {\n    fetch(\"/recipeInfo\").then(resp => resp.json() // promised data\n    ).then(data => {\n      // once promised data available\n      this.fakeRequest().then(() => {\n        const el = document.querySelector(\".loader-container\");\n\n        if (el) {\n          el.remove(); // removing the spinner element\n\n          this.setState({\n            loading: false\n          }); // showing the app\n        }\n      });\n      this.setState({\n        recipes: data.recipes.ops\n      }); // set state with data\n    }).catch(error => {\n      console.log(\"Request failed\", error);\n    });\n  }\n\n}\n\nconst element = /*#__PURE__*/React.createElement(RecipeResults, null);\nReactDOM.render(element, document.getElementById('results'));\n\n//# sourceURL=webpack:///./src/Results.jsx?");

/***/ }),

/***/ "./src/db_images/dessert.jpg":
/*!***********************************!*\
  !*** ./src/db_images/dessert.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"0c701be2074c610bbfa43cfa8195b8f6.jpg\");\n\n//# sourceURL=webpack:///./src/db_images/dessert.jpg?");

/***/ }),

/***/ "./src/db_images/fruit.jpg":
/*!*********************************!*\
  !*** ./src/db_images/fruit.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"20790d2e72d043cc07965d30597f5a96.jpg\");\n\n//# sourceURL=webpack:///./src/db_images/fruit.jpg?");

/***/ }),

/***/ "./src/db_images/meat.jpg":
/*!********************************!*\
  !*** ./src/db_images/meat.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6f886762dc75e616eb5bc4038ca717db.jpg\");\n\n//# sourceURL=webpack:///./src/db_images/meat.jpg?");

/***/ }),

/***/ "./src/db_images/pasta.jpg":
/*!*********************************!*\
  !*** ./src/db_images/pasta.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"dfe98d43df44662a3f1e636c1e999aff.jpg\");\n\n//# sourceURL=webpack:///./src/db_images/pasta.jpg?");

/***/ }),

/***/ "./src/db_images/soup.jpg":
/*!********************************!*\
  !*** ./src/db_images/soup.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"5419feaae72f2ff5018f4fde7294c9d2.jpg\");\n\n//# sourceURL=webpack:///./src/db_images/soup.jpg?");

/***/ }),

/***/ "./src/db_images/tomatoes.jpg":
/*!************************************!*\
  !*** ./src/db_images/tomatoes.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"59cce056171c205987a1c1be3d7e900a.jpg\");\n\n//# sourceURL=webpack:///./src/db_images/tomatoes.jpg?");

/***/ })

/******/ });