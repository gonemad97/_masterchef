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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/CuisineTime.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CuisineTime.jsx":
/*!*****************************!*\
  !*** ./src/CuisineTime.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* CUISINE/PREP TIME PAGE */\n\n/* Cuisine Preference Component */\nclass CuisinePref extends React.Component {\n  // variable states for cuisine types are initially false as user hasn't checkboxed them. Once\n  // user checkboxes them on the onChange variable states turn true for respective\n  // variable cuisine types.\n  constructor(props) {\n    super(props);\n    this.state = {\n      American: false,\n      Chinese: false,\n      Mexican: false,\n      Indian: false,\n      Persian: false\n    };\n    this.handleChange = this.handleChange.bind(this);\n  }\n\n  handleChange(event) {\n    this.setState({\n      [event.target.name]: event.target.checked\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: \"cuisine\"\n    }, /*#__PURE__*/React.createElement(\"input\", {\n      type: \"checkbox\",\n      id: \"American\",\n      name: \"American\",\n      onChange: this.handleChange,\n      value: this.state.American\n    }), /*#__PURE__*/React.createElement(\"label\", {\n      className: \"cuisinePreference\",\n      htmlFor: \"American\"\n    }, \"American\"), /*#__PURE__*/React.createElement(\"input\", {\n      type: \"checkbox\",\n      id: \"Chinese\",\n      name: \"Chinese\",\n      onChange: this.handleChange,\n      value: this.state.Chinese\n    }), /*#__PURE__*/React.createElement(\"label\", {\n      className: \"cuisinePreference\",\n      htmlFor: \"Chinese\"\n    }, \"Chinese\"), /*#__PURE__*/React.createElement(\"input\", {\n      type: \"checkbox\",\n      id: \"Mexican\",\n      name: \"Mexican\",\n      onChange: this.handleChange,\n      value: this.state.Mexican\n    }), /*#__PURE__*/React.createElement(\"label\", {\n      className: \"cuisinePreference\",\n      htmlFor: \"Mexican\"\n    }, \"Mexican\"), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"input\", {\n      type: \"checkbox\",\n      id: \"Indian\",\n      name: \"Indian\",\n      onChange: this.handleChange,\n      value: this.state.Indian\n    }), /*#__PURE__*/React.createElement(\"label\", {\n      className: \"cuisinePreference\",\n      htmlFor: \"Indian\"\n    }, \"Indian\"), /*#__PURE__*/React.createElement(\"input\", {\n      type: \"checkbox\",\n      id: \"Persian\",\n      name: \"Persian\",\n      onChange: this.handleChange,\n      value: this.state.Persian\n    }), /*#__PURE__*/React.createElement(\"label\", {\n      className: \"cuisinePreference\",\n      htmlFor: \"Persian\"\n    }, \"Persian\"), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"br\", null));\n  }\n\n}\n/* Hours and Minutes Input Component */\n\n\nclass HoursMinInput extends React.Component {\n  // variable states for hours and minutes are initially empty as user hasn't selected them. Once\n  // user selects them on the onChange variable states get the number value selected for respective\n  // hours and minutes\n  constructor() {\n    super();\n    this.state = {\n      hours: '',\n      minutes: ''\n    };\n    this.handleChangeHours = this.handleChangeHours.bind(this);\n    this.handleChangeMin = this.handleChangeMin.bind(this);\n  }\n\n  handleChangeHours(event) {\n    this.setState({\n      hours: event.target.value\n    });\n  }\n\n  handleChangeMin(event) {\n    this.setState({\n      minutes: event.target.value\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: \"timeInputs\"\n    }, /*#__PURE__*/React.createElement(\"label\", {\n      htmlFor: \"hours\"\n    }, \"Hours:  \"), /*#__PURE__*/React.createElement(\"select\", {\n      name: \"hours\",\n      id: \"hours\",\n      value: this.state.hours,\n      onChange: this.handleChangeHours\n    }, /*#__PURE__*/React.createElement(\"option\", {\n      value: \"\"\n    }), /*#__PURE__*/React.createElement(\"option\", {\n      value: \"1\"\n    }, \"1\"), /*#__PURE__*/React.createElement(\"option\", {\n      value: \"2\"\n    }, \"2\"), /*#__PURE__*/React.createElement(\"option\", {\n      value: \"3\"\n    }, \"3\"), /*#__PURE__*/React.createElement(\"option\", {\n      value: \"4\"\n    }, \"4\"), /*#__PURE__*/React.createElement(\"option\", {\n      value: \"5\"\n    }, \"5\"), /*#__PURE__*/React.createElement(\"option\", {\n      value: \"6\"\n    }, \"6\"), /*#__PURE__*/React.createElement(\"option\", {\n      value: \"7\"\n    }, \"7\"), /*#__PURE__*/React.createElement(\"option\", {\n      value: \"8\"\n    }, \"8\"), /*#__PURE__*/React.createElement(\"option\", {\n      value: \"9\"\n    }, \"9\")), /*#__PURE__*/React.createElement(\"label\", {\n      className: \"minutesInput\",\n      htmlFor: \"minutes\"\n    }, \"Minutes:  \"), /*#__PURE__*/React.createElement(\"select\", {\n      name: \"minutes\",\n      id: \"minutes\",\n      value: this.state.minutes,\n      onChange: this.handleChangeMin\n    }, /*#__PURE__*/React.createElement(\"option\", {\n      value: \"\"\n    }), /*#__PURE__*/React.createElement(\"option\", {\n      value: \"5\"\n    }, \"5\"), /*#__PURE__*/React.createElement(\"option\", {\n      value: \"10\"\n    }, \"10\"), /*#__PURE__*/React.createElement(\"option\", {\n      value: \"15\"\n    }, \"15\"), /*#__PURE__*/React.createElement(\"option\", {\n      value: \"20\"\n    }, \"20\"), /*#__PURE__*/React.createElement(\"option\", {\n      value: \"25\"\n    }, \"25\"), /*#__PURE__*/React.createElement(\"option\", {\n      value: \"30\"\n    }, \"30\"), /*#__PURE__*/React.createElement(\"option\", {\n      value: \"35\"\n    }, \"35\"), /*#__PURE__*/React.createElement(\"option\", {\n      value: \"40\"\n    }, \"40\"), /*#__PURE__*/React.createElement(\"option\", {\n      value: \"45\"\n    }, \"45\"), /*#__PURE__*/React.createElement(\"option\", {\n      value: \"50\"\n    }, \"50\"), /*#__PURE__*/React.createElement(\"option\", {\n      value: \"55\"\n    }, \"55\")));\n  }\n\n}\n/* Footer Component */\n\n\nfunction Footer() {\n  return /*#__PURE__*/React.createElement(\"footer\", null, /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"form\", {\n    action: \"/ingredients\",\n    method: \"get\"\n  }, /*#__PURE__*/React.createElement(\"button\", {\n    className: \"backButton\"\n  }, \"Back\"))));\n}\n/* Container Component */\n\n\nclass Container extends React.Component {\n  render() {\n    return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"h1\", null, \"Preferences\"), /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"form\", {\n      action: \"/mealtype\",\n      method: \"post\"\n    }, /*#__PURE__*/React.createElement(\"h2\", null, \"Cook Time\"), /*#__PURE__*/React.createElement(HoursMinInput, null), /*#__PURE__*/React.createElement(\"h2\", null, \"Cuisine\"), /*#__PURE__*/React.createElement(CuisinePref, null), /*#__PURE__*/React.createElement(\"button\", {\n      className: \"nextButton\"\n    }, \"Next\"))));\n  }\n\n}\n/* Top-Level SelectPage Component */\n\n\nclass SelectPage extends React.Component {\n  render() {\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Container, null), /*#__PURE__*/React.createElement(Footer, null));\n  }\n\n}\n\nconst element = /*#__PURE__*/React.createElement(SelectPage, null);\nReactDOM.render(element, document.getElementById('cuisineTime'));\n\n//# sourceURL=webpack:///./src/CuisineTime.jsx?");

/***/ })

/******/ });