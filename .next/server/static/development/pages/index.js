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

/***/ "./components/LandingPage.js":
/*!***********************************!*\
  !*** ./components/LandingPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\chris\\Documents\\Workspace\\xanadu\\components\\LandingPage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

//import React from "react";
function LandingPage(props) {
  return __jsx("div", {
    class: "container mx-auto px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("nav", {
    class: "flex flex-wrap items-center justify-between p-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "flex flex-shrink-0 mr-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 68
    }
  }, __jsx("a", {
    class: "text-xl text-indigo-500 font-semibold",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 106
    }
  }, __jsx("img", {
    src: "static/images/ethereum_castle_in_the_sky2.png",
    alt: "Xanadu",
    width: "50",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 164
    }
  }))), __jsx("div", {
    class: "block lg:hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    class: "divbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 38
    }
  }, __jsx("svg", {
    class: "fill-current h-3 w-3",
    viewbox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 142
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 231
    }
  }, "Menu"), __jsx("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 250
    }
  }))), "    "), __jsx("div", {
    class: "divbar-menu hidden lg:flex lg:flex-grow lg:items-center w-full lg:w-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    class: "lg:mr-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, __jsx("a", {
    class: "block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 35
    }
  }, "Why"), __jsx("a", {
    class: "block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 137
    }
  }, "How"), __jsx("a", {
    class: "block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 239
    }
  }, "Product"), __jsx("a", {
    class: "block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 345
    }
  }, "Product examples")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx("a", {
    class: "block lg:inline-block mt-4 lg:mt-0 lg:mr-8 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 16
    }
  }, "Add note"), __jsx("a", {
    class: "inline-block py-3 px-6 mt-4 lg:mt-0 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 125
    }
  }, "Auth with Ethereum")))), __jsx("section", {
    class: "py-12 px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "flex flex-wrap items-center text-center lg:text-left -mx-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 35
    }
  }, __jsx("div", {
    class: "lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx("h2", {
    class: "text-5xl mb-6 leading-tight font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "incentivising eth devs to share knowledge, exactly where its needed"), __jsx("p", {
    class: "mb-8 text-gray-500 leading-relaxed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "why || user, community needs || problems || goals text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("a", {
    class: "inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 18
    }
  }, "Sign up"), __jsx("a", {
    class: "text-blue-700 hover:underline",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 150
    }
  }, "Learn more"))), __jsx("div", {
    class: "lg:w-1/2 px-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, " ", __jsx("img", {
    src: "static/images/chongqing.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 39
    }
  })))), __jsx("section", {
    class: "p-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "flex flex-wrap text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 28
    }
  }, __jsx("div", {
    class: "md:w-1/2 py-4 md:px-10 mb-4 md:mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("img", {
    class: "mx-auto mb-3",
    src: "static/placeholders/icons/shield.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 60
    }
  }), __jsx("h3", {
    class: "text-2xl mb-3 font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 137
    }
  }, "the experienced community member \\\\ publisher"), __jsx("p", {
    class: "text-gray-500 leading-relaxed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "they want ... need...")), __jsx("div", {
    class: "md:w-1/2 py-4 md:px-10 mb-4 md:mb-0 md:border-l",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("img", {
    class: "mx-auto mb-3",
    src: "static/placeholders/icons/cloud-tools.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 72
    }
  }), __jsx("h3", {
    class: "text-2xl mb-3 font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 154
    }
  }, "the web3 newbie"), __jsx("p", {
    class: "text-gray-500 leading-relaxed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "they want ... need...")))), __jsx("section", {
    class: "py-8 px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "flex flex-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 34
    }
  }, __jsx("div", {
    class: "md:w-1/2 py-4 md:px-16 mb-4 md:mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("img", {
    class: "w-24 mb-4",
    src: "static/placeholders/logos/realweb.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 60
    }
  }), __jsx("p", {
    class: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 135
    }
  }, "motivation \\\\ why \\\\ reason \\\\ theory 1................................. ......................................... text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text "), __jsx("p", {
    class: "text-sm font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "Christian Lackawanna"), __jsx("p", {
    class: "text-sm text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "CEO at Realweb")), __jsx("div", {
    class: "md:w-1/2 py-4 md:px-16 mb-4 md:mb-0 md:border-l",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx("img", {
    class: "w-24 mb-4",
    src: "static/placeholders/logos/plucky.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 72
    }
  }), __jsx("p", {
    class: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 146
    }
  }, "motivation \\\\ why \\\\ reason \\\\ theory 2................................. ......................................... text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text "), __jsx("p", {
    class: "text-sm font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "Barbara Allen"), __jsx("p", {
    class: "text-sm text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "CFO at Plucky")))), __jsx("section", {
    class: "py-12 px-4 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("h2", {
    class: "text-4xl mb-2 leading-tight font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 47
    }
  }, "so we match these two sites, exactly where they now dont meet. this is how it works..."), __jsx("p", {
    class: "text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "click the div to auth with ethereum and open your first note"), __jsx("div", {
    class: "flex flex-wrap items-center -mx-8 mt-12 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("div", {
    class: "lg:w-1/3 px-8 mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx("img", {
    class: "w-1/2 mx-auto mb-8",
    src: "static/images/fu-chenqi-.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 43
    }
  }), __jsx("h3", {
    class: "text-2xl mb-4 font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 118
    }
  }, __jsx("span", {
    class: "inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 157
    }
  }, "1 "), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 255
    }
  }, "open notes")), __jsx("p", {
    class: "text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "text text text text text text text text text text text text text text text text text text text text ")), __jsx("div", {
    class: "lg:w-1/3 px-8 mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("img", {
    class: "w-1/2 mx-auto mb-8",
    src: "static/images/fu-chenqi-1.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 43
    }
  }), __jsx("h3", {
    class: "text-2xl mb-4 font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 119
    }
  }, __jsx("span", {
    class: "inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 158
    }
  }, "2 "), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 256
    }
  }, "share notes")), __jsx("p", {
    class: "text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "text text text text text text text text text text text text text text text text text text text text ")), __jsx("div", {
    class: "lg:w-1/3 px-8 mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("img", {
    class: "w-1/2 mx-auto mb-8",
    src: "static/images/ghost_in_the_shell.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 43
    }
  }), __jsx("h3", {
    class: "text-2xl mb-4 font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 126
    }
  }, __jsx("span", {
    class: "inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 165
    }
  }, "3 "), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 263
    }
  }, "get rewarded")), __jsx("p", {
    class: "text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "text text text text text text text text text text text text text text text text text text text text "))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("a", {
    class: "inline-block py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 14
    }
  }, "Add a message to this site"))), __jsx("section", {
    class: "py-12 px-4 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx("h2", {
    class: "text-4xl mb-4 font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 47
    }
  }, "Product examples"), __jsx("p", {
    class: "max-w-2xl mx-auto mb-12 text-gray-500 leading-relaxed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, "who can use this. how can use this......... hover one pic to open a text field, explaining examples"), __jsx("div", {
    class: "flex max-w-lg mx-auto mb-12 border-b-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("div", {
    class: "w-1/3 pb-2 border-b-4 border-indigo-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "All")), __jsx("div", {
    class: "w-1/3 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, "Dev")), __jsx("div", {
    class: "w-1/3 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, "Media"))), __jsx("div", {
    class: "flex flex-wrap -mx-4 -mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx("div", {
    class: "hidden md:block md:w-1/2 px-4 mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx("div", {
    class: "h-full w-full bg-cover rounded shadow-md big-background-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  })), __jsx("div", {
    class: "h-auto md:w-1/2 px-4 mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx("div", {
    class: "mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("img", {
    class: "rounded shadow-md",
    src: "static/images/chongqing.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 31
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx("img", {
    class: "rounded shadow-md",
    src: "static/images/shanghai_3.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 18
    }
  }))))), __jsx("section", {
    class: "py-12 px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "flex flex-wrap -mx-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 35
    }
  }, __jsx("div", {
    class: "w-full lg:w-1/2 px-4 mb-8 lg:mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx("div", {
    class: "flex flex-col h-full p-8 bg-gray-200 rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx("h2", {
    class: "text-3xl font-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, "Use this textbox in the above div"), __jsx("p", {
    class: "max-w-sm mt-auto mb-8 text-gray-500 leading-relaxed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text"), __jsx("a", {
    class: "text-right text-blue-700 hover:underline",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 381
    }
  }, "View link to github repo"))), __jsx("div", {
    class: "lg:w-1/2 px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx("div", {
    class: "flex flex-wrap -m-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, __jsx("div", {
    class: "w-1/2 p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }, __jsx("img", {
    class: "rounded shadow-md",
    src: "static/images/hongkong_1.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 38
    }
  })), __jsx("div", {
    class: "w-1/2 p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, __jsx("img", {
    class: "rounded shadow-md",
    src: "static/images/Kronental-France-housing-projects.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 38
    }
  })), __jsx("div", {
    class: "w-1/2 p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }, __jsx("img", {
    class: "rounded shadow-md",
    src: "static/images/bladerunner.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 38
    }
  })), __jsx("div", {
    class: "w-1/2 p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, __jsx("img", {
    class: "rounded shadow-md",
    src: "static/images/fu-chenqi-.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 38
    }
  })))))), __jsx("footer", {
    class: "flex flex-wrap items-center justify-between p-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "w-full lg:w-auto lg:mr-6 mb-4 lg:mb-0 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 71
    }
  }, "\xA9 2020 Xanadu"), __jsx("div", {
    class: "flex flex-col lg:flex-row items-center w-full lg:w-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx("div", {
    class: "mx-auto lg:mx-0 lg:ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, __jsx("a", {
    class: "inline-block mt-0 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 51
    }
  }, "FAQ"), __jsx("a", {
    class: "inline-block mt-0 ml-8 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 130
    }
  }, "Github"), __jsx("a", {
    class: "inline-block mt-0 ml-8 text-blue-900 hover:text-blue-700",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 217
    }
  }, "Discord")), __jsx("div", {
    class: "flex justify-center mt-4 lg:mt-0 lg:ml-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, __jsx("img", {
    class: "w-6 h-6 mr-6",
    src: "static/placeholders/icons/message.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 65
    }
  }), __jsx("img", {
    class: "w-6 h-6",
    src: "static/placeholders/icons/share.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 143
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

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
/* harmony import */ var _components_LandingPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/LandingPage */ "./components/LandingPage.js");
var _jsxFileName = "C:\\Users\\chris\\Documents\\Workspace\\xanadu\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}, "Xanadu"), __jsx("meta", {
  name: "short_name",
  content: "Xanadu short name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "name",
  content: "Xanadu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "description",
  content: "Xanadu description",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "generator",
  content: "Xanadu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "keywords",
  content: "Blockchain, cryptocurrency, Ethereum, Bitcoin",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "author",
  content: "Chris Seifert",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "twitter:card",
  content: "summary_large_image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "twitter:site",
  content: "@hello_amigo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "twitter:title",
  content: "Xanadu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "twitter:description",
  content: "Xanadu description",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "twitter:creator",
  content: "@chriscyber2000",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "twitter:image",
  content: "https://pbs.twimg.com/profile_banners/826747074255417344/1542032600/600x200",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 7
  }
}), __jsx("meta", {
  property: "og:type",
  content: "website",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }
}), __jsx("meta", {
  property: "og:url",
  content: "https://amigo.id/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 7
  }
}), __jsx("meta", {
  property: "og:title",
  content: "Xanadu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 7
  }
}), __jsx("meta", {
  property: "og:description",
  content: "Xanadu description",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 7
  }
}), __jsx("meta", {
  property: "og:site_name",
  content: "Xanadu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 7
  }
}), __jsx("meta", {
  property: "og:image",
  content: "https://pbs.twimg.com/profile_banners/826747074255417344/1542032600/600x200",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "theme-color",
  content: "#000000",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 7
  }
}), __jsx("meta", {
  content: "text/html; charset=UTF-8",
  name: "Content-Type",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 7
  }
}), "//", __jsx("link", {
  rel: "shortcut icon",
  href: "/static/favicon.ico",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  charset: "UTF-8",
  href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 7
  }
})), __jsx(_components_LandingPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }
})));

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