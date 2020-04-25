module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/0NavSection.js":
/*!***********************************!*\
  !*** ./components/0NavSection.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\chris\\Documents\\Workspace\\xanadu\\components\\0NavSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function NavSection(props) {
  return __jsx("nav", {
    class: "flex flex-wrap items-center justify-between p-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("div", {
    class: "flex flex-shrink-0 mr-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 66
    }
  }, __jsx("a", {
    class: "text-xl text-indigo-500 font-semibold",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 104
    }
  }, __jsx("img", {
    src: "static/images/ethereum_castle_in_the_sky2.png",
    alt: "Xanadu",
    width: "50",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 162
    }
  }))), __jsx("div", {
    class: "block lg:hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "divbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 36
    }
  }, __jsx("svg", {
    class: "fill-current h-3 w-3",
    viewbox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 140
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 229
    }
  }, "Menu"), __jsx("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 248
    }
  }))), "    "), __jsx("div", {
    class: "divbar-menu hidden lg:flex lg:flex-grow lg:items-center w-full lg:w-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "lg:mr-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("a", {
    class: "block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 33
    }
  }, "Why"), __jsx("a", {
    class: "block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 135
    }
  }, "How"), __jsx("a", {
    class: "block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 237
    }
  }, "Product"), __jsx("a", {
    class: "block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 343
    }
  }, "Product examples")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("a", {
    class: "block lg:inline-block mt-4 lg:mt-0 lg:mr-8 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 14
    }
  }, "Add note"), __jsx("a", {
    class: "inline-block py-3 px-6 mt-4 lg:mt-0 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 123
    }
  }, "Auth with Ethereum"))));
}

/* harmony default export */ __webpack_exports__["default"] = (NavSection);

/***/ }),

/***/ "./components/10FooterSection.js":
/*!***************************************!*\
  !*** ./components/10FooterSection.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\chris\\Documents\\Workspace\\xanadu\\components\\10FooterSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ProductSection(props) {
  return __jsx("footer", {
    class: "flex flex-wrap items-center justify-between p-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("div", {
    class: "w-full lg:w-auto lg:mr-6 mb-4 lg:mb-0 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 69
    }
  }, "\xA9 2020 Xanadu"), __jsx("div", {
    class: "flex flex-col lg:flex-row items-center w-full lg:w-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "mx-auto lg:mx-0 lg:ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("a", {
    class: "inline-block mt-0 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 49
    }
  }, "FAQ"), __jsx("a", {
    class: "inline-block mt-0 ml-8 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 128
    }
  }, "Github"), __jsx("a", {
    class: "inline-block mt-0 ml-8 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 215
    }
  }, "Discord")), __jsx("div", {
    class: "flex justify-center mt-4 lg:mt-0 lg:ml-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("img", {
    class: "w-6 h-6 mr-6",
    src: "static/placeholders/icons/message.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 63
    }
  }), __jsx("img", {
    class: "w-6 h-6",
    src: "static/placeholders/icons/share.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 141
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductSection);

/***/ }),

/***/ "./components/2HeroSection.js":
/*!************************************!*\
  !*** ./components/2HeroSection.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\chris\\Documents\\Workspace\\xanadu\\components\\2HeroSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function HeroSection(props) {
  return __jsx("section", {
    class: "py-12 px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("div", {
    class: "flex flex-wrap items-center text-center lg:text-left -mx-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("h2", {
    class: "text-5xl mb-6 leading-tight font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 11
    }
  }, "share your personal web"), __jsx("p", {
    class: "mb-8 text-gray-500 leading-relaxed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 11
    }
  }, "incentivising eth devs to share knowledge, exactly where its needed why || user, community needs || problems || goals text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx("a", {
    class: "inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 16
    }
  }, "Sign up"), __jsx("a", {
    class: "text-blue-700 hover:underline",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 148
    }
  }, "Learn more"))), __jsx("div", {
    class: "lg:w-1/2 px-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, " ", __jsx("img", {
    src: "static/images/chongqing.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 37
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (HeroSection);

/***/ }),

/***/ "./components/4ProblemSection.js":
/*!***************************************!*\
  !*** ./components/4ProblemSection.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\chris\\Documents\\Workspace\\xanadu\\components\\4ProblemSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ProblemSection(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    class: "p-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "flex flex-wrap text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 28
    }
  }, __jsx("div", {
    class: "md:w-1/2 py-4 md:px-10 mb-4 md:mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 11
    }
  }, __jsx("img", {
    class: "mx-auto mb-3",
    src: "static/placeholders/icons/shield.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 60
    }
  }), __jsx("h3", {
    class: "text-2xl mb-3 font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 137
    }
  }, "the experienced community member \\\\ publisher"), __jsx("p", {
    class: "text-gray-500 leading-relaxed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, "they want ... need...")), __jsx("div", {
    class: "md:w-1/2 py-4 md:px-10 mb-4 md:mb-0 md:border-l",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, __jsx("img", {
    class: "mx-auto mb-3",
    src: "static/placeholders/icons/cloud-tools.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 72
    }
  }), __jsx("h3", {
    class: "text-2xl mb-3 font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 154
    }
  }, "the web3 newbie"), __jsx("p", {
    class: "text-gray-500 leading-relaxed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "they want ... need...")))), __jsx("section", {
    class: "py-8 px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "flex flex-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 34
    }
  }, __jsx("div", {
    class: "md:w-1/2 py-4 md:px-16 mb-4 md:mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("img", {
    class: "w-24 mb-4",
    src: "static/placeholders/logos/realweb.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 60
    }
  }), __jsx("p", {
    class: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 135
    }
  }, "motivation \\\\ why \\\\ reason \\\\ theory 1................................. ......................................... text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text "), __jsx("p", {
    class: "text-sm font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "Christian Lackawanna"), __jsx("p", {
    class: "text-sm text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "CEO at Realweb")), __jsx("div", {
    class: "md:w-1/2 py-4 md:px-16 mb-4 md:mb-0 md:border-l",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("img", {
    class: "w-24 mb-4",
    src: "static/placeholders/logos/plucky.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 72
    }
  }), __jsx("p", {
    class: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 146
    }
  }, "motivation \\\\ why \\\\ reason \\\\ theory 2................................. ......................................... text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text "), __jsx("p", {
    class: "text-sm font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Barbara Allen"), __jsx("p", {
    class: "text-sm text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "CFO at Plucky")))));
}

/* harmony default export */ __webpack_exports__["default"] = (ProblemSection);

/***/ }),

/***/ "./components/6SolutionSection.js":
/*!****************************************!*\
  !*** ./components/6SolutionSection.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\chris\\Documents\\Workspace\\xanadu\\components\\6SolutionSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function SolutionSection(props) {
  return __jsx("section", {
    class: "py-12 px-4 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("h2", {
    class: "text-4xl mb-2 leading-tight font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 45
    }
  }, "so we match these two sites, exactly where they now dont meet. this is how it works..."), __jsx("p", {
    class: "text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, "click the div to auth with ethereum and open your first note"), __jsx("div", {
    class: "flex flex-wrap items-center -mx-8 mt-12 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "lg:w-1/3 px-8 mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("img", {
    class: "w-1/2 mx-auto mb-8",
    src: "static/images/fu-chenqi-.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 41
    }
  }), __jsx("h3", {
    class: "text-2xl mb-4 font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 116
    }
  }, __jsx("span", {
    class: "inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 155
    }
  }, "1 "), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 253
    }
  }, "open notes")), __jsx("p", {
    class: "text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 11
    }
  }, "text text text text text text text text text text text text text text text text text text text text ")), __jsx("div", {
    class: "lg:w-1/3 px-8 mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("img", {
    class: "w-1/2 mx-auto mb-8",
    src: "static/images/fu-chenqi-1.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 41
    }
  }), __jsx("h3", {
    class: "text-2xl mb-4 font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 117
    }
  }, __jsx("span", {
    class: "inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 156
    }
  }, "2 "), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 254
    }
  }, "share notes")), __jsx("p", {
    class: "text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, "text text text text text text text text text text text text text text text text text text text text ")), __jsx("div", {
    class: "lg:w-1/3 px-8 mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("img", {
    class: "w-1/2 mx-auto mb-8",
    src: "static/images/ghost_in_the_shell.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 41
    }
  }), __jsx("h3", {
    class: "text-2xl mb-4 font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 124
    }
  }, __jsx("span", {
    class: "inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 163
    }
  }, "3 "), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 261
    }
  }, "get rewarded")), __jsx("p", {
    class: "text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "text text text text text text text text text text text text text text text text text text text text "))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("a", {
    class: "inline-block py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 12
    }
  }, "Add a message to this site")));
}

/* harmony default export */ __webpack_exports__["default"] = (SolutionSection);

/***/ }),

/***/ "./components/8ProductSection.js":
/*!***************************************!*\
  !*** ./components/8ProductSection.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\chris\\Documents\\Workspace\\xanadu\\components\\8ProductSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ProductSection(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    class: "py-12 px-4 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, __jsx("h2", {
    class: "text-4xl mb-4 font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, "Product examples"), __jsx("p", {
    class: "max-w-2xl mx-auto mb-12 text-gray-500 leading-relaxed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "who can use this. how can use this......... hover one pic to open a text field, explaining examples"), __jsx("div", {
    class: "flex max-w-lg mx-auto mb-12 border-b-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "w-1/3 pb-2 border-b-4 border-indigo-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "v1.0")), __jsx("div", {
    class: "w-1/3 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, "v2.0")), __jsx("div", {
    class: "w-1/3 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "v3.0"))), __jsx("div", {
    class: "flex flex-wrap -mx-4 -mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "hidden md:block md:w-1/2 px-4 mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    class: "h-full w-full bg-cover rounded shadow-md big-background-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  })), __jsx("div", {
    class: "h-auto md:w-1/2 px-4 mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    class: "mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("img", {
    class: "rounded shadow-md",
    src: "static/images/chongqing.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("img", {
    class: "rounded shadow-md",
    src: "static/images/shanghai_3.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 16
    }
  }))))), __jsx("section", {
    class: "py-12 px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("div", {
    class: "flex flex-wrap -mx-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 33
    }
  }, __jsx("div", {
    class: "w-full lg:w-1/2 px-4 mb-8 lg:mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("div", {
    class: "flex flex-col h-full p-8 bg-gray-200 rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("h2", {
    class: "text-3xl font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "Use this textbox in the above div"), __jsx("p", {
    class: "max-w-sm mt-auto mb-8 text-gray-500 leading-relaxed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text"), __jsx("a", {
    class: "text-right text-blue-700 hover:underline",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 379
    }
  }, "View link to github repo"))), __jsx("div", {
    class: "lg:w-1/2 px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("div", {
    class: "flex flex-wrap -m-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("div", {
    class: "w-1/2 p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("img", {
    class: "rounded shadow-md",
    src: "static/images/hongkong_1.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 36
    }
  })), __jsx("div", {
    class: "w-1/2 p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("img", {
    class: "rounded shadow-md",
    src: "static/images/Kronental-France-housing-projects.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 36
    }
  })), __jsx("div", {
    class: "w-1/2 p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("img", {
    class: "rounded shadow-md",
    src: "static/images/bladerunner.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 36
    }
  })), __jsx("div", {
    class: "w-1/2 p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("img", {
    class: "rounded shadow-md",
    src: "static/images/fu-chenqi-.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 36
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductSection);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_0NavSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/0NavSection */ "./components/0NavSection.js");
/* harmony import */ var _components_2HeroSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/2HeroSection */ "./components/2HeroSection.js");
/* harmony import */ var _components_4ProblemSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/4ProblemSection */ "./components/4ProblemSection.js");
/* harmony import */ var _components_6SolutionSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/6SolutionSection */ "./components/6SolutionSection.js");
/* harmony import */ var _components_8ProductSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../components/8ProductSection */ "./components/8ProductSection.js");
/* harmony import */ var _components_10FooterSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/10FooterSection */ "./components/10FooterSection.js");
var _jsxFileName = "C:\\Users\\chris\\Documents\\Workspace\\xanadu\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}, "Xanadu"), __jsx("meta", {
  name: "short_name",
  content: "Xanadu short name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "name",
  content: "Xanadu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "description",
  content: "Xanadu description",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "generator",
  content: "Xanadu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "keywords",
  content: "Blockchain, cryptocurrency, Ethereum, Bitcoin",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "author",
  content: "Chris Seifert",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "twitter:card",
  content: "summary_large_image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "twitter:site",
  content: "@hello_amigo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "twitter:title",
  content: "Xanadu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "twitter:description",
  content: "Xanadu description",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "twitter:creator",
  content: "@chriscyber2000",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "twitter:image",
  content: "https://pbs.twimg.com/profile_banners/826747074255417344/1542032600/600x200",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 7
  }
}), __jsx("meta", {
  property: "og:type",
  content: "website",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 7
  }
}), __jsx("meta", {
  property: "og:url",
  content: "https://amigo.id/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 7
  }
}), __jsx("meta", {
  property: "og:title",
  content: "Xanadu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 7
  }
}), __jsx("meta", {
  property: "og:description",
  content: "Xanadu description",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }
}), __jsx("meta", {
  property: "og:site_name",
  content: "Xanadu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 7
  }
}), __jsx("meta", {
  property: "og:image",
  content: "https://pbs.twimg.com/profile_banners/826747074255417344/1542032600/600x200",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "theme-color",
  content: "#000000",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 7
  }
}), __jsx("meta", {
  content: "text/html; charset=UTF-8",
  name: "Content-Type",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 7
  }
}), "//", __jsx("link", {
  rel: "shortcut icon",
  href: "/static/favicon.ico",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css?family=Ubuntu:300,300i,400i,400,500,500i,700,700i|Lato:100,100i,300,300i,400i,400,700,700i,900,900i|Ubuntu+Mono:400i,400,700,700i&subset=latin",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  charset: "UTF-8",
  href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 7
  }
})), __jsx("body", {
  class: "bg-body text-body font-body",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }
}, __jsx("div", {
  class: "container mx-auto px-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 7
  }
}, __jsx(_components_0NavSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }
}), __jsx(_components_2HeroSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }
}), __jsx(_components_4ProblemSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }
}), __jsx(_components_6SolutionSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }
}), __jsx(_components_8ProductSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }
}), __jsx(_components_10FooterSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }
})))));

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\chris\Documents\Workspace\xanadu\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map