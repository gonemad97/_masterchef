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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Ingredients.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Ingredients.jsx":
/*!*****************************!*\
  !*** ./src/Ingredients.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* INGREDIENTS PAGE*/\nclass IngCheckBox extends React.Component {\n  render() {\n    const ingInfo = this.props.ing;\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"input\", {\n      type: \"checkbox\",\n      id: ingInfo.id,\n      name: ingInfo.id,\n      value: ingInfo.id\n    }), /*#__PURE__*/React.createElement(\"label\", {\n      htmlFor: ingInfo.id\n    }, /*#__PURE__*/React.createElement(\"img\", {\n      src: ingInfo.img_url\n    }), /*#__PURE__*/React.createElement(\"p\", null, ingInfo.name)));\n  }\n\n}\n\nclass IngCheckBoxListItem extends React.Component {\n  render() {\n    const ingredient = this.props.ingredient;\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"li\", null, /*#__PURE__*/React.createElement(IngCheckBox, {\n      ing: ingredient\n    })));\n  }\n\n}\n\nclass IngCheckBoxList extends React.Component {\n  render() {\n    const ingredients = this.props.ingredients;\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"ul\", null, this.props.ingredients.map(ingredient => /*#__PURE__*/React.createElement(IngCheckBoxListItem, {\n      key: ingredient.id,\n      ingredient: ingredient\n    }))));\n  }\n\n}\n\nclass IngCatComponent extends React.Component {\n  render() {\n    const catTitle = this.props.title;\n    const ingredients = this.props.ingredients;\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"h2\", null, catTitle), /*#__PURE__*/React.createElement(IngCheckBoxList, {\n      ingredients: ingredients\n    }));\n  }\n\n}\n\nclass IngredientsSelectionComponent extends React.Component {\n  render() {\n    const milkIngredients = this.props.ingRecord.milkIngredients;\n    const vegIngredients = this.props.ingRecord.vegIngredients;\n    const meatIngredients = this.props.ingRecord.meatIngredients;\n    const breadIngredients = this.props.ingRecord.breadIngredients;\n    const spiceIngredients = this.props.ingRecord.spicesIngredients;\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IngCatComponent, {\n      title: \"Dairy & Eggs\",\n      ingredients: milkIngredients\n    }), /*#__PURE__*/React.createElement(IngCatComponent, {\n      title: \"Fruits & Vegetables\",\n      ingredients: vegIngredients\n    }), /*#__PURE__*/React.createElement(IngCatComponent, {\n      title: \"Meats\",\n      ingredients: meatIngredients\n    }), /*#__PURE__*/React.createElement(IngCatComponent, {\n      title: \"Bread & Bakery\",\n      ingredients: breadIngredients\n    }), /*#__PURE__*/React.createElement(IngCatComponent, {\n      title: \"Herbs & Spices\",\n      ingredients: spiceIngredients\n    }));\n  }\n\n}\n\nclass IngredientsFormComponent extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      ingRecords: null,\n      isLoaded: false\n    };\n  }\n\n  componentDidMount() {\n    fetch('/ingredientInfo').then(response => response.json()).then(data => this.setState({\n      ingRecords: data.ingredients,\n      isLoaded: true\n    }));\n  }\n\n  render() {\n    const {\n      ingRecords,\n      isLoaded\n    } = this.state;\n\n    if (!isLoaded) {\n      return /*#__PURE__*/React.createElement(\"div\", null, \"Sorry something went wrong!\");\n    } else {\n      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"h1\", null, \" Select Ingredients \"), /*#__PURE__*/React.createElement(\"form\", {\n        action: \"/cuisinetime\",\n        method: \"post\"\n      }, /*#__PURE__*/React.createElement(IngredientsSelectionComponent, {\n        ingRecord: ingRecords\n      }), /*#__PURE__*/React.createElement(\"button\", {\n        type: \"submit\",\n        className: \"btn\"\n      }, \"Next \")));\n    }\n  }\n\n}\n\nconst element = /*#__PURE__*/React.createElement(IngredientsFormComponent, null);\nReactDOM.render(element, document.getElementById('content'));\n\n//# sourceURL=webpack:///./src/Ingredients.jsx?");

/***/ })

/******/ });