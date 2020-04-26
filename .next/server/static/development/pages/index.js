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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
    className: "flex flex-wrap items-center justify-between p-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "flex flex-shrink-0 mr-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "text-xl text-indigo-500 font-semibold",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "static/images/eth.png",
    alt: "Xanadu",
    width: "50",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }))), __jsx("div", {
    className: "block lg:hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "divbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("svg", {
    className: "fill-current h-3 w-3",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, "Menu"), __jsx("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  })))), __jsx("div", {
    className: "divbar-menu hidden lg:flex lg:flex-grow lg:items-center w-full lg:w-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "lg:mr-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Follow users"), __jsx("a", {
    className: "block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "Follow lists"), __jsx("a", {
    className: "block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "View commented websites"), __jsx("a", {
    className: "block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "my landing feed"), __jsx("a", {
    className: "block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "my profile"), __jsx("a", {
    className: "block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "my dashboard to whitelist"))));
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
    className: "flex flex-wrap items-center justify-between p-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full lg:w-auto lg:mr-6 mb-4 lg:mb-0 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 73
    }
  }, "\xA9 2020 Xanadu"), __jsx("div", {
    className: "flex flex-col lg:flex-row items-center w-full lg:w-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "mx-auto lg:mx-0 lg:ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "inline-block mt-0 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 53
    }
  }, "FAQ"), __jsx("a", {
    className: "inline-block mt-0 ml-8 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 136
    }
  }, "Github"), __jsx("a", {
    className: "inline-block mt-0 ml-8 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 227
    }
  }, "Discord")), __jsx("div", {
    className: "flex justify-center mt-4 lg:mt-0 lg:ml-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "w-6 h-6 mr-6",
    src: "static/placeholders/icons/message.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 67
    }
  }), __jsx("img", {
    className: "w-6 h-6",
    src: "static/placeholders/icons/share.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 149
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
    className: "py-12 px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "flex flex-wrap items-center text-center lg:text-left -mx-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "lg:w-3/6 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none items-center text-center mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-row items-center -mx-8 mt-12 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "static/images/eth.png",
    alt: "Xanadu",
    width: "50",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "text-5xl mb-6 leading-tight font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 15
    }
  }, "share your personal ", "\n", " version of the web"), __jsx("h3", {
    className: "mb-6 leading-tight font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }, "Edit any website, just like a google doc, share it & get rewards"))))), __jsx("div", {
    className: "items-center text-center my-24 -mx-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "mb-4 text-gray-700 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "What do you think about this proposition?"), __jsx("a", {
    className: "inline-block py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "Add your shitty opinion")));
}

/* harmony default export */ __webpack_exports__["default"] = (HeroSection);
{
  /* DESIGN
   first, user can press the button
  
   then, they scroll down > which reveals comments all around the site
  
  */
}

/***/ }),

/***/ "./components/3BenefitsSection.js":
/*!****************************************!*\
  !*** ./components/3BenefitsSection.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\chris\\Documents\\Workspace\\xanadu\\components\\3BenefitsSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function BenefitsSection(props) {
  return __jsx("section", {
    className: "py-12 px-4 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "flex flex-wrap items-center -mx-8 mt-12 mb-2 font-mono",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "lg:w-1/4 px-8 mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: " mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, "personalized content")), __jsx("div", {
    className: "lg:w-1/4 px-8 mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: " mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "data privacy")), __jsx("div", {
    className: "lg:w-1/4 px-8 mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: " mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "rewards on the blockchain")), __jsx("div", {
    className: "lg:w-1/4 px-8 mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: " mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "interoperable"))));
}

/* harmony default export */ __webpack_exports__["default"] = (BenefitsSection);

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
    className: "p-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "text-4xl mb-12 leading-tight font-heading text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, "how to gather knowledge, when starting to building Ethereum products?"), __jsx("h2", {
    className: "text-xl mb-12 leading-tight font-heading text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, "put this as tabs down in 'products'. and add the full version to dev,to"), __jsx("div", {
    className: "flex flex-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "md:w-1/2 py-4 md:px-10 mb-4 md:mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "mx-auto mb-3",
    src: "static/images/people/experts.png",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx("h3", {
    className: "text-2xl mb-3 font-heading text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "the experienced wants reward for sharing"), __jsx("p", {
    className: "text-gray-500 leading-relaxed text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "He's been working in Ethereum for a year, using DApps daily."), __jsx("h3", {
    className: "font-semibold mb-3 mt-8 font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "needs, goals"), __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "He shares ideas on twitter. Shares his code on github. Receives positive feedback, but does not get paid.", __jsx("ul", {
    className: "list-disc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, "Wish he could share to a list of friends"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, "Wish he could monetize access to that list, like a paid twitter account"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, "Wants more twitter followers"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, "Wants measurable reputation as helpful community member"))), __jsx("h3", {
    className: "font-semibold mb-3 mt-8 font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "current problems"), __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "asdasdasd", __jsx("ul", {
    className: "list-decimal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, "asdasd."), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "asdasd")))), __jsx("div", {
    className: "md:w-1/2 py-4 md:px-10 mb-4 md:mb-0 md:border-l",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "mx-auto mb-3",
    src: "static/images/people/newbs.png",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }), __jsx("h3", {
    className: "text-2xl mb-3 font-heading text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "the web3 newbie needs mentorship"), __jsx("p", {
    className: "text-gray-500 leading-relaxed text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "She works at web2.com & is starting an Ethereum DApp side project."), __jsx("h3", {
    className: "font-semibold mb-3 mt-8 font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "needs, goals"), __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "She has a rough idea what to build, but its hard to get an overview on related content.", __jsx("ul", {
    className: "list-disc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, "Which projects build similar stuff?"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, "Who can guide me?"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, "Where to ask questions?"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, "Where to follow the most recent news?"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "Is that code secure?"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, "Can I trust that team to maintain their code?"))), __jsx("h3", {
    className: "font-semibold mb-3 mt-8 font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "current problems"), __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "right now, there are two ways to find information", __jsx("ul", {
    className: "list-decimal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, "search your way through google, reddit, stackoverflow, etc."), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, "or follow a guide on social media"))), __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, "search is focused on content, but monetizing content = ads."), __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, "social gives you guiding experts, but also continuous noise. No universal reputation.")))));
}

/* harmony default export */ __webpack_exports__["default"] = (ProblemSection);

/***/ }),

/***/ "./components/6FlowSection.js":
/*!************************************!*\
  !*** ./components/6FlowSection.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\chris\\Documents\\Workspace\\xanadu\\components\\6FlowSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function FlowSection(props) {
  return __jsx("section", {
    className: "py-12 px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "max-w-2xl mx-auto text-gray-500 leading-relaxed text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, "HOW IT WORKS"), __jsx("div", {
    className: "flex flex-wrap items-center -mx-8 mt-12 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "lg:w-1/3 px-8 mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "w-1/2 mx-auto mb-8",
    src: "static/images/flow/create.png",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }), __jsx("h3", {
    className: "text-2xl mb-2 font-heading text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "1 "), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "Post anywhere")), __jsx("p", {
    className: "text-gray-500 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "Edit the web:"), __jsx("ul", {
    className: "list-disc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "Comment (gdoc)"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "Highlight text (medium)"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Link to similar content"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Rate the site (google schema)"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "Edit css (dark mode)"))), __jsx("div", {
    className: "lg:w-1/3 px-8 mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "w-1/2 mx-auto mb-8",
    src: "static/images/flow/share.png",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx("h3", {
    className: "text-2xl mb-2 font-heading text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "2 "), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "Share it")), __jsx("p", {
    className: "text-gray-500 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "via twitter, or anonymously with eth auth, in private"), __jsx("ul", {
    className: "list-disc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "simple mode with twitter auth"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "advanced privacy with ETH auth"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "whitelist followers per post"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "set different privacy levels for different followers"))), __jsx("div", {
    className: "lg:w-1/3 px-8 mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "w-1/2 mx-auto mb-8",
    src: "static/images/flow/reward.png",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }), __jsx("h3", {
    className: "text-2xl mb-2 font-heading text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "3 "), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "Get rewarded")), __jsx("p", {
    className: "text-gray-500 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "If people like your content:"), __jsx("ul", {
    className: "list-disc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "You gain followers"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "You gain money"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "Your posts show up on top"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "Onchain reputation")))));
}

/* harmony default export */ __webpack_exports__["default"] = (FlowSection);

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
    className: "py-12 px-4 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "max-w-2xl mx-auto text-gray-500 leading-relaxed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, "PRODUCT EXAMPLES"), __jsx("h2", {
    className: "text-4xl mb-4 font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "So how does this create value?"), __jsx("p", {
    className: "max-w-2xl mx-auto mb-12 text-gray-500 leading-relaxed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, "who can use this. how can use this. Where value? How growth?"), __jsx("div", {
    className: "flex max-w-lg mx-auto mb-12 border-b-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-1/3 pb-2 border-b-4 border-indigo-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "Help Ethereum onboarding")), __jsx("div", {
    className: "w-1/3 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, "or different target groups categories")), __jsx("div", {
    className: "w-1/3 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "or???"))), __jsx("div", {
    className: "flex flex-wrap -mx-4 -mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "hidden md:block md:w-1/2 px-4 mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mb-8 relative hover-trigger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "rounded shadow-md hover-background",
    src: "static/images/tesla_on_mars.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "hover-target absolute top-0 left-0 right-0 flex flex-col h-full p-8  rounded mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "text-3xl font-heading text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, "Use this textbox in the above div"), __jsx("p", {
    className: "max-w-sm mt-auto mb-8 text-white leading-relaxed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, "text text text text text text text text text text text"), __jsx("a", {
    className: "text-right text-blue-100 hover:underline",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, "View link")))), __jsx("div", {
    className: "h-auto md:w-1/2 px-4 mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mb-8 relative hover-trigger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "rounded shadow-md hover-background",
    src: "static/images/chongqing.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "hover-target absolute top-0 left-0 right-0 flex flex-col h-full p-8  rounded mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "text-3xl font-heading text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, "Use this textbox in the above div"), __jsx("p", {
    className: "max-w-sm mt-auto mb-8 text-white leading-relaxed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, "text text text text text text text text text text text"), __jsx("a", {
    className: "text-right text-blue-100 hover:underline",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, "View link"))), __jsx("div", {
    className: "mb-8 relative hover-trigger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "rounded shadow-md hover-background",
    src: "static/images/shanghai_3.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "hover-target absolute top-0 left-0 right-0 flex flex-col h-full p-8  rounded mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "text-3xl font-heading text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, "Use this textbox in the above div"), __jsx("p", {
    className: "max-w-sm mt-auto mb-8 text-white leading-relaxed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, "text text text text text text text text text text text"), __jsx("a", {
    className: "text-right text-blue-100 hover:underline",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, "View link"))))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "inline-block m-16 py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, "Which other use cases come to your mind?"))));
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
/* harmony import */ var _components_3BenefitsSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/3BenefitsSection */ "./components/3BenefitsSection.js");
/* harmony import */ var _components_4ProblemSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/4ProblemSection */ "./components/4ProblemSection.js");
/* harmony import */ var _components_6FlowSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../components/6FlowSection */ "./components/6FlowSection.js");
/* harmony import */ var _components_8ProductSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/8ProductSection */ "./components/8ProductSection.js");
/* harmony import */ var _components_10FooterSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../components/10FooterSection */ "./components/10FooterSection.js");
var _jsxFileName = "C:\\Users\\chris\\Documents\\Workspace\\xanadu\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }
}, "Xanadu"), __jsx("meta", {
  name: "short_name",
  content: "Xanadu short name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "name",
  content: "Xanadu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "description",
  content: "Xanadu description",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "generator",
  content: "Xanadu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "keywords",
  content: "Blockchain, cryptocurrency, Ethereum, Bitcoin",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "author",
  content: "Chris Seifert",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "twitter:card",
  content: "summary_large_image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "twitter:site",
  content: "@hello_amigo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "twitter:title",
  content: "Xanadu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "twitter:description",
  content: "Xanadu description",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "twitter:creator",
  content: "@chriscyber2000",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "twitter:image",
  content: "https://pbs.twimg.com/profile_banners/826747074255417344/1542032600/600x200",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 7
  }
}), __jsx("meta", {
  property: "og:type",
  content: "website",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 7
  }
}), __jsx("meta", {
  property: "og:url",
  content: "https://amigo.id/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 7
  }
}), __jsx("meta", {
  property: "og:title",
  content: "Xanadu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }
}), __jsx("meta", {
  property: "og:description",
  content: "Xanadu description",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 7
  }
}), __jsx("meta", {
  property: "og:site_name",
  content: "Xanadu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 7
  }
}), __jsx("meta", {
  property: "og:image",
  content: "https://pbs.twimg.com/profile_banners/826747074255417344/1542032600/600x200",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "theme-color",
  content: "#000000",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 7
  }
}), __jsx("meta", {
  content: "text/html; charset=UTF-8",
  name: "Content-Type",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 7
  }
}), "//", __jsx("link", {
  rel: "shortcut icon",
  href: "/static/favicon.ico",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css?family=Ubuntu:300,300i,400i,400,500,500i,700,700i|Lato:100,100i,300,300i,400i,400,700,700i,900,900i|Ubuntu+Mono:400i,400,700,700i&subset=latin",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  charSet: "UTF-8",
  href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 7
  }
})), __jsx("div", {
  className: "container mx-auto px-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 7
  }
}, __jsx(_components_0NavSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }
}), __jsx(_components_2HeroSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }
}), __jsx(_components_6FlowSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }
}), __jsx(_components_3BenefitsSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }
}), __jsx(_components_8ProductSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }
}), __jsx(_components_10FooterSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }
}), __jsx(_components_4ProblemSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }
}))));

/***/ }),

/***/ 3:
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