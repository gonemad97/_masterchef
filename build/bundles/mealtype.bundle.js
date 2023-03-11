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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/MealType.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/MealType.jsx":
/*!**************************!*\
  !*** ./src/MealType.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* Cuisine Preference Component */\nclass CuisinePref extends React.Component {\n  // variable states for type of meals are initially false as user hasn't checkboxed them. Once\n  // user checkboxes them on the onChange variable states turn true for respective\n  // variable meal types.\n  constructor(props) {\n    super(props);\n    this.state = {\n      Breakfast: false,\n      Lunch: false,\n      Appetizer: false,\n      Alcoholic_Beverage: false,\n      Milkshakes: false,\n      Drinks: false,\n      Dinner: false\n    };\n    this.handleChange = this.handleChange.bind(this);\n  }\n\n  handleChange(event) {\n    this.setState({\n      [event.target.name]: event.target.checked\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: \"mealTypes\"\n    }, /*#__PURE__*/React.createElement(\"input\", {\n      type: \"checkbox\",\n      id: \"Breakfast\",\n      name: \"Breakfast\",\n      onChange: this.handleChange,\n      value: this.state.Breakfast\n    }), /*#__PURE__*/React.createElement(\"label\", {\n      className: \"mealPreferences\",\n      htmlFor: \"Breakfast\"\n    }, \"Breakfast\"), /*#__PURE__*/React.createElement(\"input\", {\n      type: \"checkbox\",\n      id: \"Lunch\",\n      name: \"Lunch\",\n      onChange: this.handleChange,\n      value: this.state.Lunch\n    }), /*#__PURE__*/React.createElement(\"label\", {\n      className: \"mealPreferences\",\n      htmlFor: \"Lunch\"\n    }, \"Lunch\"), /*#__PURE__*/React.createElement(\"input\", {\n      type: \"checkbox\",\n      id: \"Appetizer\",\n      name: \"Appetizer\",\n      onChange: this.handleChange,\n      value: this.state.Appetizer\n    }), /*#__PURE__*/React.createElement(\"label\", {\n      className: \"mealPreferences\",\n      htmlFor: \"Appetizer\"\n    }, \"Appetizer\"), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"input\", {\n      type: \"checkbox\",\n      id: \"Alcoholic_Beverage\",\n      name: \"Alcoholic_Beverage\",\n      onChange: this.handleChange,\n      value: this.state.Alcoholic_Beverage\n    }), /*#__PURE__*/React.createElement(\"label\", {\n      className: \"mealPreferences\",\n      htmlFor: \"Alcoholic_Beverage\"\n    }, \"Alcoholic Beverage\"), /*#__PURE__*/React.createElement(\"input\", {\n      type: \"checkbox\",\n      id: \"Milkshakes\",\n      name: \"Milkshakes\",\n      onChange: this.handleChange,\n      value: this.state.Milkshakes\n    }), /*#__PURE__*/React.createElement(\"label\", {\n      className: \"mealPreferences\",\n      htmlFor: \"Milkshakes\"\n    }, \"Milkshakes\"), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"input\", {\n      type: \"checkbox\",\n      id: \"Drinks\",\n      name: \"Drinks\",\n      onChange: this.handleChange,\n      value: this.state.Drinks\n    }), /*#__PURE__*/React.createElement(\"label\", {\n      className: \"mealPreferences\",\n      htmlFor: \"Drinks\"\n    }, \"Drinks\"), /*#__PURE__*/React.createElement(\"input\", {\n      type: \"checkbox\",\n      id: \"Dinner\",\n      name: \"Dinner\",\n      onChange: this.handleChange,\n      value: this.state.Dinner\n    }), /*#__PURE__*/React.createElement(\"label\", {\n      className: \"mealPreferences\",\n      htmlFor: \"Dinner\"\n    }, \"Dinner\"), /*#__PURE__*/React.createElement(\"br\", null));\n  }\n\n}\n/* Footer Component */\n\n\nfunction Footer() {\n  return /*#__PURE__*/React.createElement(\"footer\", null, /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"form\", {\n    action: \"/cuisinetime\",\n    method: \"post\"\n  }, /*#__PURE__*/React.createElement(\"button\", {\n    className: \"backButton\"\n  }, \"Back\"))));\n}\n/* Container Component */\n\n\nclass Container extends React.Component {\n  render() {\n    return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"h1\", null, \"Preferences\"), /*#__PURE__*/React.createElement(\"form\", {\n      action: \"/results\",\n      method: \"post\"\n    }, /*#__PURE__*/React.createElement(\"h2\", null, \"Type of Meal:\"), /*#__PURE__*/React.createElement(CuisinePref, null), /*#__PURE__*/React.createElement(\"button\", {\n      className: \"nextButton\"\n    }, \"Next\")));\n  }\n\n}\n/* Top-Level MealTypePage Component */\n\n\nclass MealTypePage extends React.Component {\n  render() {\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Container, null), /*#__PURE__*/React.createElement(Footer, null));\n  }\n\n}\n\nconst element = /*#__PURE__*/React.createElement(MealTypePage, null);\nReactDOM.render(element, document.getElementById('mealType'));\n\n//# sourceURL=webpack:///./src/MealType.jsx?");

/***/ })

/******/ });