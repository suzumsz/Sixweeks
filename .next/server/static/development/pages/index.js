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

/***/ "./components/coinName.js":
/*!********************************!*\
  !*** ./components/coinName.js ***!
  \********************************/
/*! exports provided: coinNameKR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coinNameKR", function() { return coinNameKR; });
/*
 * Coin Name Setting JS
 *
 */
var coinNameKR = {
  bithumb: {
    BTC: "비트코인",
    ETH: "이더리움",
    DASH: "대시",
    LTC: "라이트코인",
    ETC: "이더리움 클래식",
    XRP: "리플",
    BCH: "비트코인 캐시",
    XMR: "모네로",
    ZEC: "제트캐시",
    QTUM: "퀀텀",
    BTG: "비트코인 골드",
    EOS: "이오스",
    ICX: "아이콘",
    VET: "비체인",
    TRX: "트론",
    ELF: "엘프",
    MITH: "미스릴",
    MCO: "크립토닷컴",
    OMG: "오미세고",
    KNC: "카이버 네트워크",
    GNT: "골렘",
    ZIL: "질리카",
    ETHOS: "에토스",
    PAY: "텐엑스",
    WAX: "왁스",
    POWR: "파워렛져",
    LRC: "루프링",
    GTO: "기프토",
    STEEM: "스팀",
    STRAT: "스트라티스",
    ZRX: "제로엑스",
    REP: "어거",
    AE: "애터니티",
    XEM: "넴",
    SNT: "스테이터스네트워크토큰",
    ADA: "에이다",
    PPT: "파퓰러스",
    CTXC: "코르텍스",
    CMT: "사이버마일즈",
    THETA: "쎄타토큰",
    WTC: "울턴체인",
    ITC: "아이오티체인",
    TRUE: "트루체인",
    ABT: "아크블록",
    RNT: "원루트 네트워크",
    PLY: "플레이코인",
    WAVES: "웨이브",
    LINK: "체인링크",
    ENJ: "엔진코인",
    PST: "프리마스",
    SALT: "솔트",
    RDN: "레이든네트워크토큰",
    LOOM: "룸네트워크",
    PIVX: "피벡스",
    INS: "아이앤에스",
    BCD: "비트코인 다이아몬드",
    BZNT: "베잔트",
    XLM: "스텔라루멘",
    OCN: "오디세이",
    BSV: "비트코인에스브이",
    TMTG: "더마이다스터치골드",
    BAT: "베이직어텐션토큰",
    WET: "위쇼토큰",
    XVG: "버지",
    IOST: "이오스트",
    POLY: "폴리매스",
    HC: "하이퍼캐시",
    ROM: "롬",
    AMO: "아모코인",
    ETZ: "이더제로",
    ARN: "에어론",
    APIS: "아피스",
    MTL: "메탈",
    DACC: "디에이씨씨",
    DAC: "다빈치",
    BHP: "비에이치피",
    BTT: "비트토렌트",
    HDAC: "에이치닥",
    NPXS: "펀디엑스",
    AUTO: "큐브",
    GXC: "지엑스체인",
    ORBS: "오브스",
    VALOR: "밸러토큰",
    CON: "코넌",
    ANKR: "앵커",
    MIX: "믹스마블",
    HYC: "하이콘",
    LBA: "크레드"
  }
};


/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default, MainBody, UserMenu, AdminMenuItem, SigninModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBody", function() { return MainBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenu", function() { return UserMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMenuItem", function() { return AdminMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninModal", function() { return SigninModal; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_signup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/signup */ "./pages/signup.js");
/* harmony import */ var _pages_opinion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/opinion */ "./pages/opinion.js");
/* harmony import */ var _pages_board__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/board */ "./pages/board.js");
/* harmony import */ var _userFunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userFunction */ "./components/userFunction.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile */ "./components/profile.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signin */ "./components/signin.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _package__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../package */ "./package.json");
var _package__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package */ "./package.json", 1);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../css/index.scss */ "./css/index.scss");
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_css_index_scss__WEBPACK_IMPORTED_MODULE_15__);

var _jsxFileName = "D:\\work\\sixweeks\\components\\layout.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

















var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  _createClass(_default, null, [{
    key: "propTypes",
    value: function propTypes() {
      return {
        session: react__WEBPACK_IMPORTED_MODULE_1___default.a.PropTypes.object.isRequired,
        providers: react__WEBPACK_IMPORTED_MODULE_1___default.a.PropTypes.object.isRequired,
        children: react__WEBPACK_IMPORTED_MODULE_1___default.a.PropTypes.object.isRequired,
        fluid: react__WEBPACK_IMPORTED_MODULE_1___default.a.PropTypes.boolean,
        navmenu: react__WEBPACK_IMPORTED_MODULE_1___default.a.PropTypes.boolean,
        signinBtn: react__WEBPACK_IMPORTED_MODULE_1___default.a.PropTypes.boolean
      };
    }
  }]);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
    _this.state = {
      navOpen: false,
      modal: false,
      providers: null
    };
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(_default, [{
    key: "toggleModal",
    value: function () {
      var _toggleModal = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var cookies;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (e) e.preventDefault(); // Save current URL so user is redirected back here after signing in

                if (this.state.modal !== true) {
                  cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_13___default.a();
                  cookies.set("redirect_url", window.location.pathname, {
                    path: "/"
                  });
                }

                _context.t0 = this;
                _context.t1 = this.state.providers;

                if (_context.t1) {
                  _context.next = 8;
                  break;
                }

                _context.next = 7;
                return next_auth_client__WEBPACK_IMPORTED_MODULE_12__["NextAuth"].providers();

              case 7:
                _context.t1 = _context.sent;

              case 8:
                _context.t2 = _context.t1;
                _context.t3 = !this.state.modal;
                _context.t4 = {
                  providers: _context.t2,
                  modal: _context.t3
                };

                _context.t0.setState.call(_context.t0, _context.t4);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function toggleModal(_x) {
        return _toggleModal.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        charSet: "UTF-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, this.props.title || "Next.js Starter Project"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _css_index_scss__WEBPACK_IMPORTED_MODULE_15___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
        src: "https://cdn.polyfill.io/v2/polyfill.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Navbar"], {
        light: true,
        className: "navbar navbar-expand-md pt-3 pb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        prefetch: true,
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavbarBrand"], {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/img/logo.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: "nojs-navbar-check",
        id: "nojs-navbar-check",
        type: "checkbox",
        "aria-label": "Menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        tabIndex: "1",
        htmlFor: "nojs-navbar-check",
        className: "nojs-navbar-label mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "nojs-navbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Nav"], {
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        tabIndex: "1",
        className: "dropdown nojs-dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "dropdo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "\uAC70\uB798\uC18C")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "dropdo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "\uC785\uCD9C\uAE08")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "dropdo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "\uD22C\uC790\uB0B4\uC5ED")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "dropdo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "\uACE0\uAC1D\uC13C\uD130"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UserMenu, {
        session: this.props.session,
        toggleModal: this.toggleModal,
        signinBtn: this.props.signinBtn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MainBody, {
        navmenu: this.props.navmenu,
        fluid: this.props.fluid,
        container: this.props.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SigninModal, {
        modal: this.state.modal,
        toggleModal: this.toggleModal,
        session: this.props.session,
        providers: this.state.providers,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


var MainBody =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(MainBody, _React$Component2);

  function MainBody() {
    _classCallCheck(this, MainBody);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainBody).apply(this, arguments));
  }

  _createClass(MainBody, [{
    key: "render",
    value: function render() {
      if (this.props.container === false) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }, this.props.children);
      } else if (this.props.navmenu === false) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
          fluid: this.props.fluid,
          style: {
            marginTop: "1em"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }, this.props.children);
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
          fluid: this.props.fluid,
          style: {
            marginTop: "1em"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
          xs: "12",
          md: "9",
          lg: "10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }, this.props.children)));
      }
    }
  }]);

  return MainBody;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
var UserMenu =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(UserMenu, _React$Component3);

  function UserMenu(props) {
    var _this2;

    _classCallCheck(this, UserMenu);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(UserMenu).call(this, props));
    _this2.handleSignoutSubmit = _this2.handleSignoutSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this2)));
    return _this2;
  }

  _createClass(UserMenu, [{
    key: "handleSignoutSubmit",
    value: function () {
      var _handleSignoutSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
        var cookies;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault(); // Save current URL so user is redirected back here after signing out

                cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_13___default.a();
                cookies.set("redirect_url", window.location.pathname, {
                  path: "/"
                });
                _context2.next = 5;
                return next_auth_client__WEBPACK_IMPORTED_MODULE_12__["NextAuth"].signout();

              case 5:
                next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function handleSignoutSubmit(_x2) {
        return _handleSignoutSubmit.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      if (this.props.session && this.props.session.user) {
        // If signed in display user dropdown menu
        var session = this.props.session;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Nav"], {
          className: "ml-auto",
          navbar: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          tabIndex: "2",
          className: "dropdown nojs-dropdown",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "nav-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "dropdown-toggle nav-link d-none d-md-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "icon ion-md-contact",
          style: {
            fontSize: "2em",
            position: "absolute",
            top: -5,
            left: -25
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "dropdown-toggle nav-link d-block d-md-none",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "icon ion-md-contact mr-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          },
          __self: this
        }), session.user.name || session.user.email)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "dropdown-menu",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          prefetch: true,
          href: "/account",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "/account",
          className: "dropdown-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "icon ion-md-person mr-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          },
          __self: this
        }), " Your Account")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AdminMenuItem, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "dropdown-divider d-none d-md-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "dropdown-item p-0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], {
          id: "signout",
          method: "post",
          action: "/auth/signout",
          onSubmit: this.handleSignoutSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          name: "_csrf",
          type: "hidden",
          value: this.props.session.csrfToken,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          type: "submit",
          block: true,
          className: "pl-4 rounded-0 text-left dropdown-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "icon ion-md-log-out mr-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          },
          __self: this
        }), " Sign out"))))));
      }

      if (this.props.signinBtn === false) {
        // If not signed in, don't display sign in button if disabled
        return null;
      } else {
        // If not signed in, display sign in button
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Nav"], {
          className: "ml-auto",
          navbar: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavItem"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "bar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          __self: this
        }, "|"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "../newboard",
          className: "board_1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "board",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246
          },
          __self: this
        }, " BOARD")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "/auth?redirect=/",
          className: "board_1",
          onClick: this.props.toggleModal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "login",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          },
          __self: this
        }), " LOGIN"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "#",
          className: "board_2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 253
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: "static/img/search.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          },
          __self: this
        }))));
      }
    }
  }]);

  return UserMenu;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
var AdminMenuItem =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(AdminMenuItem, _React$Component4);

  function AdminMenuItem() {
    _classCallCheck(this, AdminMenuItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(AdminMenuItem).apply(this, arguments));
  }

  _createClass(AdminMenuItem, [{
    key: "render",
    value: function render() {
      if (this.props.session.user && this.props.session.user.admin === true) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          prefetch: true,
          href: "/admin",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 268
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "/admin",
          className: "dropdown-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 269
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "icon ion-md-settings mr-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270
          },
          __self: this
        }), " Admin")));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 276
          },
          __self: this
        });
      }
    }
  }]);

  return AdminMenuItem;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
var SigninModal =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(SigninModal, _React$Component5);

  function SigninModal() {
    var _this3;

    _classCallCheck(this, SigninModal);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(SigninModal).call(this));
    _this3.state = {
      email: "",
      password: ""
    };
    _this3.onChange = _this3.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this3)));
    _this3.onSubmit = _this3.onSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this3)));
    return _this3;
  }

  _createClass(SigninModal, [{
    key: "onChange",
    value: function onChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      var user = {
        email: this.state.email,
        password: this.state.password
      };
      Object(_userFunction__WEBPACK_IMPORTED_MODULE_8__["login"])(user).then(function (res) {}).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.providers === null) return null;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
        isOpen: this.props.modal,
        toggle: this.props.toggleModal,
        style: {
          maxWidth: 773
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalBody"], {
        className: "ModalBody",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "logi",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "logimg",
        src: "static/img/sixweekslogin.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "logcheck",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, "\uB85C\uADF8\uC778\uD558\uB294 \uC0AC\uC774\uD2B8\uC758 \uC8FC\uC18C\uAC00 \uC544\uB798\uC640 \uAC19\uC740\uC9C0 \uD655\uC778\uD558\uC138\uC694"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "site",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/img/lock.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }), "https://www.SIXWEEKS.com"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "formm",
        className: "form-group row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "inputEmail3",
        className: "col-sm-2 col-form-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        id: "inputEmail3",
        placeholder: "\uC774\uBA54\uC77C",
        name: "email",
        value: this.state.email,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "formm",
        className: "form-group row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "inputPassword3",
        className: "col-sm-2 col-form-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        id: "inputPassword3",
        placeholder: "\uBE44\uBC00\uBC88\uD638",
        name: "password",
        value: this.state.password,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-auto my-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "custom-control custom-checkbox mr-sm-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "checkbox",
        className: "custom-control-input",
        id: "customControlAutosizing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "custom-control-label",
        htmlFor: "customControlAutosizing",
        id: "memory",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }, "\uBE44\uBC00\uBC88\uD638\uC800\uC7A5"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "findid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, "\uC544\uC774\uB514 / \uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        className: "lobtn",
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, "Login"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        className: "lobtn1",
        outline: true,
        color: "secondary",
        href: "../signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }, "Sign up"), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "button",
        className: "naver-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/img/naver-img.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        },
        __self: this
      }), "NAVER \uB85C\uADF8\uC778"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "button",
        className: "google-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/img/google-img.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }), "GOOGLE \uB85C\uADF8\uC778"))));
    }
  }]);

  return SigninModal;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/***/ }),

/***/ "./components/page.js":
/*!****************************!*\
  !*** ./components/page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\work\\sixweeks\\components\\page.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "adminAccessOnly",
    value: function adminAccessOnly() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, this.props, {
        navmenu: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "text-center pt-5 pb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "display-4 mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Access Denied"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "lead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "You must be signed in as an administrator to access this page.")));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                _context.next = 3;
                return next_auth_client__WEBPACK_IMPORTED_MODULE_3__["NextAuth"].init({
                  req: req
                });

              case 3:
                _context.t0 = _context.sent;
                return _context.abrupt("return", {
                  session: _context.t0,
                  lang: 'en'
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ "./components/profile.js":
/*!*******************************!*\
  !*** ./components/profile.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\work\\sixweeks\\components\\profile.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Profile =
/*#__PURE__*/
function (_Component) {
  _inherits(Profile, _Component);

  function Profile() {
    var _this;

    _classCallCheck(this, Profile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Profile).call(this));
    _this.state = {
      email: ""
    };
    return _this;
  }

  _createClass(Profile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var token = localStorage.usertoken;
      var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(token);
      this.setState({
        email: decoded.email
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Profile");
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./components/signin.js":
/*!******************************!*\
  !*** ./components/signin.js ***!
  \******************************/
/*! exports provided: default, SignInButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInButtons", function() { return SignInButtons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\work\\sixweeks\\components\\signin.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
    _this.state = {
      email: "",
      session: _this.props.session,
      providers: _this.props.providers,
      submitting: false
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleEmailChange = _this.handleEmailChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(_default, [{
    key: "handleEmailChange",
    value: function handleEmailChange(event) {
      this.setState({
        email: event.target.value.trim()
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      if (!this.state.email) return;
      this.setState({
        submitting: true
      }); // Save current URL so user is redirected back here after signing in

      var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_3___default.a();
      cookies.set("redirect_url", window.location.pathname, {
        path: "/"
      });
      next_auth_client__WEBPACK_IMPORTED_MODULE_4__["NextAuth"].signin(this.state.email).then(function () {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/auth/check-email?email=".concat(_this2.state.email));
      }).catch(function (err) {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/auth/error?action=signin&type=email&email=".concat(_this2.state.email));
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.session.user) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "text-center",
          style: {
            marginTop: 10,
            marginBottom: 30
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, "If you don't have an account, one will be created when you sign in."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: 12,
          md: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SignInButtons, {
          providers: this.props.providers,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: 12,
          md: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
          id: "signin",
          method: "post",
          action: "/auth/email/signin",
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          name: "_csrf",
          type: "hidden",
          value: this.state.session.csrfToken,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
          htmlFor: "email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, "Email address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          name: "email",
          disabled: this.state.submitting,
          type: "text",
          placeholder: "j.smith@example.com",
          id: "email",
          className: "form-control",
          value: this.state.email,
          onChange: this.handleEmailChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          id: "submitButton",
          disabled: this.state.submitting,
          outline: true,
          color: "dark",
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, this.state.submitting === true && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "icon icon-spin ion-md-refresh mr-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }), "Sign in with email"))))));
      }
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


var SignInButtons =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(SignInButtons, _React$Component2);

  function SignInButtons() {
    _classCallCheck(this, SignInButtons);

    return _possibleConstructorReturn(this, _getPrototypeOf(SignInButtons).apply(this, arguments));
  }

  _createClass(SignInButtons, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, Object.keys(this.props.providers).map(function (provider, i) {
        if (!_this3.props.providers[provider].signin) return null;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "btn btn-block btn-outline-secondary",
          href: _this3.props.providers[provider].signin,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, "Sign in with ", provider));
      }));
    }
  }]);

  return SignInButtons;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./components/ssr-test.js":
/*!********************************!*\
  !*** ./components/ssr-test.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tableSetting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tableSetting */ "./components/tableSetting.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-data-table-component */ "react-data-table-component");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_data_table_component__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "D:\\work\\sixweeks\\components\\ssr-test.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/* Price Comma Function */

function addComma(num) {
  var regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ",");
}
/* Title Component */


var titleComponent = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "logoContainer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
});

var SSRTest =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SSRTest, _React$Component);

  function SSRTest() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SSRTest);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SSRTest)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "Load",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Load data from API Server..."),
      status: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "initLoading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "LOADING WAIT!!"),
      data: []
    });

    return _this;
  }

  _createClass(SSRTest, [{
    key: "componentDidCatch",

    /* Error Catch */
    value: function componentDidCatch(error, info) {
      console.log(error, info);
    }
    /* ComponentDidMount Cycle */

  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var exchangeResponse, exchangeData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD");

              case 2:
                exchangeResponse = _context.sent;
                exchangeData = exchangeResponse.data[0].basePrice;
                this.getCoinData(exchangeData); // Initial get coin Data

                this.interval = setInterval(function () {
                  _this2.getCoinData(exchangeData);
                }, 5000); // Interval 5 Seconds

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
    /* componentWillUnmount Cycle */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval); // Prevent memory leaks

      this.cancelSetState = true;
    }
  }, {
    key: "getCoinData",
    value: function () {
      var _getCoinData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(exchangeData) {
        var chartData, response, usdCoinData, _arr, _i, _arr$_i, key, value, premiumPrice, premiumPriceGap, usdPrice;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                chartData = []; //  Initial chart array

                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("https://api.bithumb.com/public/ticker/ALL");

              case 3:
                response = _context2.sent;
                _context2.next = 6;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,DASH,LTC,ETC,XRP,BCH,XMR,ZEC,QTUM,BTG,EOS,ICX,VET,TRX,ELF,MITH,MCO,OMG,KNC,GNT,ZIL,ETHOS,PAY,WAX,POWR,LRC,GTO,STEEM,STRAT,ZRX,REP,AE,XEM,SNT,ADA,PPT,CTXC,CMT,THETA,WTC,ITC,TRUE,ABT,RNT,PLY,WAVES,LINK,ENJ,PST,SALT,RDN,LOOM,PIVX,INS,BCD,BZNT,XLM,OCN,BSV,TMTG,BAT,WET,XVG,IOST,POLY,HC,ROM,AMO,ETZ,ARN,APIS,MTL,DACC,DAC,BHP,BTT,HDAC,NPXS,AUTO,GXC,ORBS,VALOR,CON,ANKR,MIX&tsyms=USD");

              case 6:
                usdCoinData = _context2.sent;

                if (!this.cancelSetState) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return");

              case 9:
                /* If API Status Success */
                if (response.data.status === "0000") {
                  delete response.data.data["date"]; // Remove 'date' data from object

                  /* Create table data */

                  _arr = Object.entries(response.data.data);

                  for (_i = 0; _i < _arr.length; _i++) {
                    _arr$_i = _slicedToArray(_arr[_i], 2), key = _arr$_i[0], value = _arr$_i[1];
                    premiumPrice = void 0, premiumPriceGap = void 0;

                    if (typeof usdCoinData.data.DISPLAY[key] === "undefined") {
                      // If Coin data not exists set '-'
                      premiumPrice = premiumPriceGap = "-";
                    } else {
                      /* Calculate USD * KRW data */
                      usdPrice = usdCoinData.data.DISPLAY[key].USD.PRICE.replace("$ ", "").replace(",", "") * exchangeData;
                      premiumPrice = ((value.sell_price - usdPrice) / usdPrice * 100).toFixed(2);
                      premiumPriceGap = (value.sell_price - usdPrice).toFixed(2);
                    }
                    /* Create Final Data */


                    chartData.push({
                      key: key,
                      Price: "".concat(addComma(value.sell_price), "\uC6D0"),
                      FluctateRate: "".concat(value["24H_fluctate_rate"]),
                      FluctateRate24: "".concat(addComma(value["24H_fluctate"])),
                      premium: addComma(premiumPrice),
                      premiumGap: addComma(premiumPriceGap)
                    });
                  }
                  /* If Server Status Success */


                  this.setState({
                    statue: "success",
                    data: chartData,
                    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 93
                      },
                      __self: this
                    }, titleComponent)
                  });
                } else {
                  /* If Server Status Fails */
                  this.setState({
                    statue: "fail",
                    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 100
                      },
                      __self: this
                    }, titleComponent, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                      id: "statusFail",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 102
                      },
                      __self: this
                    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                      className: "apiFail",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 103
                      },
                      __self: this
                    }, " API is not wokring. Something is Wrong"))
                  });
                }

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getCoinData(_x) {
        return _getCoinData.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          data = _this$state.data,
          title = _this$state.title; // console.log(data);

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_data_table_component__WEBPACK_IMPORTED_MODULE_8___default.a, {
        title: title,
        columns: _tableSetting__WEBPACK_IMPORTED_MODULE_6__["columns"],
        data: data,
        responsive: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      });
    }
  }]);

  return SSRTest;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SSRTest);

/***/ }),

/***/ "./components/tableSetting.js":
/*!************************************!*\
  !*** ./components/tableSetting.js ***!
  \************************************/
/*! exports provided: darkTheme, columns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkTheme", function() { return darkTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columns", function() { return columns; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coinName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coinName */ "./components/coinName.js");
var _jsxFileName = "D:\\work\\sixweeks\\components\\tableSetting.js";


/* Theme Setting */

var darkTheme = {
  title: {
    fontSize: "22px",
    fontColor: "#FFFFFF",
    backgroundColor: "#363640"
  },
  contextMenu: {
    backgroundColor: "#E91E63",
    fontColor: "#FFFFFF"
  },
  header: {
    fontSize: "12px",
    fontColor: "#FFFFFF",
    backgroundColor: "#363640"
  },
  rows: {
    fontColor: "#FFFFFF",
    backgroundColor: "#363640",
    hoverFontColor: "black",
    hoverBackgroundColor: "rgba(0, 0, 0, .24)"
  },
  cells: {
    cellPadding: "10px"
  }
};
/* Columns Setting */

var columns = [{
  className: "columnsCSS",
  selector: "key",
  sortable: true,
  ignoreRowClick: true,
  width: "27%",
  cell: function cell(row) {
    function getKeyByValue(object, row) {
      // Data from coinName.js Object
      return object[row]; // Returns Korean Coin Name
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "coinName",
      href: "https://www.bithumb.com/trade/order/" + row.key,
      target: "_blank",
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, row.key, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sub",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, getKeyByValue(_coinName__WEBPACK_IMPORTED_MODULE_1__["coinNameKR"].bithumb, row.key)));
  }
}, {
  className: "priceName",
  selector: "Price",
  sortable: true,
  ignoreRowClick: true,
  width: "20%"
}, {
  selector: "FluctateRate",
  sortable: true,
  ignoreRowClick: true,
  cell: function cell(row) {
    if (row.FluctateRate < 0) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "minus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, row.FluctateRate, "% (", row.FluctateRate24, "\uC6D0)");
    } else if (row.FluctateRate >= 0) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "+", row.FluctateRate, "% (+", row.FluctateRate24, "\uC6D0)");
    }
  }
}, {
  /* KRW-USD premium */
  selector: "premium",
  sortable: true,
  cell: function cell(row) {
    if (row.premium < 0) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "minus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, row.premium, "% (", row.premiumGap, "\uC6D0)");
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "+", row.premium, "% (+", row.premiumGap, "\uC6D0)");
    }
  }
}];


/***/ }),

/***/ "./components/userFunction.js":
/*!************************************!*\
  !*** ./components/userFunction.js ***!
  \************************************/
/*! exports provided: register, login, write, email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "write", function() { return write; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var register = function register(newUser) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("http://ec2-13-125-250-20.ap-northeast-2.compute.amazonaws.com/user/register", {
    national: newUser.national,
    first_name: newUser.first_name,
    last_name: newUser.last_name,
    address: newUser.address,
    email: newUser.email,
    password: newUser.password,
    ponenumber: newUser.ponenumber,
    secu_pass: newUser.secu_pass
  }).then(function (res) {
    console.log(res);
  });
};
var login = function login(user) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("http://ec2-13-125-250-20.ap-northeast-2.compute.amazonaws.com/user/login", {
    email: user.email,
    password: user.password
  }).then(function (res) {
    console.log("login!!");
    localStorage.setItem("usertoken", res.data);
    return res.data;
  }).catch(function (err) {
    console.log(err);
  });
};
var write = function write(note) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("http://ec2-13-125-250-20.ap-northeast-2.compute.amazonaws.com/write", {
    title: note.title,
    name: note.name,
    content: note.content
  }).then(function (res) {
    console.log(res);
  }).catch(function (err) {
    console.log(err);
  });
};
var email = function email(auth) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("http://ec2-13-125-250-20.ap-northeast-2.compute.amazonaws.com/email", {
    email: auth.email
  }).then(function (res) {
    console.log(res);
  }).catch(function (err) {
    console.log(err);
  });
};

/***/ }),

/***/ "./css/index.scss":
/*!************************!*\
  !*** ./css/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*!\n  Ionicons, v3.0.0-alpha.3\n  Created by Ben Sperry for the Ionic Framework, http://ionicons.com/\n  https://twitter.com/benjsperry  https://twitter.com/ionicframework\n  MIT License: https://github.com/driftyco/ionicons\n\n  Android-style icons originally built by Google’s\n  Material Design Icons: https://github.com/google/material-design-icons\n  used under CC BY http://creativecommons.org/licenses/by/4.0/\n  Modified icons to fit ionicon’s grid from original.\n*/\n@import https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap;\n@font-face {\n  font-family: \"Ionicons\";\n  src: url(\"/fonts/ionicons/ionicons.eot?v=3.0.0-alpha.3\");\n  src: url(\"/fonts/ionicons/ionicons.eot?v=3.0.0-alpha.3#iefix\") format(\"embedded-opentype\"), url(\"/fonts/ionicons/ionicons.woff2?v=3.0.0-alpha.3\") format(\"woff2\"), url(\"/fonts/ionicons/ionicons.woff?v=3.0.0-alpha.3\") format(\"woff\"), url(\"/fonts/ionicons/ionicons.ttf?v=3.0.0-alpha.3\") format(\"truetype\"), url(\"/fonts/ionicons/ionicons.svg?v=3.0.0-alpha.3#Ionicons\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n.ion, .ionicons,\n.ion-ios-add:before,\n.ion-ios-add-circle:before,\n.ion-ios-add-circle-outline:before,\n.ion-ios-airplane:before,\n.ion-ios-alarm:before,\n.ion-ios-albums:before,\n.ion-ios-alert:before,\n.ion-ios-american-football:before,\n.ion-ios-analytics:before,\n.ion-ios-aperture:before,\n.ion-ios-apps:before,\n.ion-ios-appstore:before,\n.ion-ios-archive:before,\n.ion-ios-arrow-back:before,\n.ion-ios-arrow-down:before,\n.ion-ios-arrow-dropdown:before,\n.ion-ios-arrow-dropdown-circle:before,\n.ion-ios-arrow-dropleft:before,\n.ion-ios-arrow-dropleft-circle:before,\n.ion-ios-arrow-dropright:before,\n.ion-ios-arrow-dropright-circle:before,\n.ion-ios-arrow-dropup:before,\n.ion-ios-arrow-dropup-circle:before,\n.ion-ios-arrow-forward:before,\n.ion-ios-arrow-round-back:before,\n.ion-ios-arrow-round-down:before,\n.ion-ios-arrow-round-forward:before,\n.ion-ios-arrow-round-up:before,\n.ion-ios-arrow-up:before,\n.ion-ios-at:before,\n.ion-ios-attach:before,\n.ion-ios-backspace:before,\n.ion-ios-barcode:before,\n.ion-ios-baseball:before,\n.ion-ios-basket:before,\n.ion-ios-basketball:before,\n.ion-ios-battery-charging:before,\n.ion-ios-battery-dead:before,\n.ion-ios-battery-full:before,\n.ion-ios-beaker:before,\n.ion-ios-bed:before,\n.ion-ios-beer:before,\n.ion-ios-bicycle:before,\n.ion-ios-bluetooth:before,\n.ion-ios-boat:before,\n.ion-ios-body:before,\n.ion-ios-bonfire:before,\n.ion-ios-book:before,\n.ion-ios-bookmark:before,\n.ion-ios-bookmarks:before,\n.ion-ios-bowtie:before,\n.ion-ios-briefcase:before,\n.ion-ios-browsers:before,\n.ion-ios-brush:before,\n.ion-ios-bug:before,\n.ion-ios-build:before,\n.ion-ios-bulb:before,\n.ion-ios-bus:before,\n.ion-ios-business:before,\n.ion-ios-cafe:before,\n.ion-ios-calculator:before,\n.ion-ios-calendar:before,\n.ion-ios-call:before,\n.ion-ios-camera:before,\n.ion-ios-car:before,\n.ion-ios-card:before,\n.ion-ios-cart:before,\n.ion-ios-cash:before,\n.ion-ios-cellular:before,\n.ion-ios-chatboxes:before,\n.ion-ios-chatbubbles:before,\n.ion-ios-checkbox:before,\n.ion-ios-checkbox-outline:before,\n.ion-ios-checkmark:before,\n.ion-ios-checkmark-circle:before,\n.ion-ios-checkmark-circle-outline:before,\n.ion-ios-clipboard:before,\n.ion-ios-clock:before,\n.ion-ios-close:before,\n.ion-ios-close-circle:before,\n.ion-ios-close-circle-outline:before,\n.ion-ios-cloud:before,\n.ion-ios-cloud-circle:before,\n.ion-ios-cloud-done:before,\n.ion-ios-cloud-download:before,\n.ion-ios-cloud-outline:before,\n.ion-ios-cloud-upload:before,\n.ion-ios-cloudy:before,\n.ion-ios-cloudy-night:before,\n.ion-ios-code:before,\n.ion-ios-code-download:before,\n.ion-ios-code-working:before,\n.ion-ios-cog:before,\n.ion-ios-color-fill:before,\n.ion-ios-color-filter:before,\n.ion-ios-color-palette:before,\n.ion-ios-color-wand:before,\n.ion-ios-compass:before,\n.ion-ios-construct:before,\n.ion-ios-contact:before,\n.ion-ios-contacts:before,\n.ion-ios-contract:before,\n.ion-ios-contrast:before,\n.ion-ios-copy:before,\n.ion-ios-create:before,\n.ion-ios-crop:before,\n.ion-ios-cube:before,\n.ion-ios-cut:before,\n.ion-ios-desktop:before,\n.ion-ios-disc:before,\n.ion-ios-document:before,\n.ion-ios-done-all:before,\n.ion-ios-download:before,\n.ion-ios-easel:before,\n.ion-ios-egg:before,\n.ion-ios-exit:before,\n.ion-ios-expand:before,\n.ion-ios-eye:before,\n.ion-ios-eye-off:before,\n.ion-ios-fastforward:before,\n.ion-ios-female:before,\n.ion-ios-filing:before,\n.ion-ios-film:before,\n.ion-ios-finger-print:before,\n.ion-ios-fitness:before,\n.ion-ios-flag:before,\n.ion-ios-flame:before,\n.ion-ios-flash:before,\n.ion-ios-flash-off:before,\n.ion-ios-flashlight:before,\n.ion-ios-flask:before,\n.ion-ios-flower:before,\n.ion-ios-folder:before,\n.ion-ios-folder-open:before,\n.ion-ios-football:before,\n.ion-ios-funnel:before,\n.ion-ios-gift:before,\n.ion-ios-git-branch:before,\n.ion-ios-git-commit:before,\n.ion-ios-git-compare:before,\n.ion-ios-git-merge:before,\n.ion-ios-git-network:before,\n.ion-ios-git-pull-request:before,\n.ion-ios-glasses:before,\n.ion-ios-globe:before,\n.ion-ios-grid:before,\n.ion-ios-hammer:before,\n.ion-ios-hand:before,\n.ion-ios-happy:before,\n.ion-ios-headset:before,\n.ion-ios-heart:before,\n.ion-ios-heart-dislike:before,\n.ion-ios-heart-empty:before,\n.ion-ios-heart-half:before,\n.ion-ios-help:before,\n.ion-ios-help-buoy:before,\n.ion-ios-help-circle:before,\n.ion-ios-help-circle-outline:before,\n.ion-ios-home:before,\n.ion-ios-hourglass:before,\n.ion-ios-ice-cream:before,\n.ion-ios-image:before,\n.ion-ios-images:before,\n.ion-ios-infinite:before,\n.ion-ios-information:before,\n.ion-ios-information-circle:before,\n.ion-ios-information-circle-outline:before,\n.ion-ios-jet:before,\n.ion-ios-journal:before,\n.ion-ios-key:before,\n.ion-ios-keypad:before,\n.ion-ios-laptop:before,\n.ion-ios-leaf:before,\n.ion-ios-link:before,\n.ion-ios-list:before,\n.ion-ios-list-box:before,\n.ion-ios-locate:before,\n.ion-ios-lock:before,\n.ion-ios-log-in:before,\n.ion-ios-log-out:before,\n.ion-ios-magnet:before,\n.ion-ios-mail:before,\n.ion-ios-mail-open:before,\n.ion-ios-mail-unread:before,\n.ion-ios-male:before,\n.ion-ios-man:before,\n.ion-ios-map:before,\n.ion-ios-medal:before,\n.ion-ios-medical:before,\n.ion-ios-medkit:before,\n.ion-ios-megaphone:before,\n.ion-ios-menu:before,\n.ion-ios-mic:before,\n.ion-ios-mic-off:before,\n.ion-ios-microphone:before,\n.ion-ios-moon:before,\n.ion-ios-more:before,\n.ion-ios-move:before,\n.ion-ios-musical-note:before,\n.ion-ios-musical-notes:before,\n.ion-ios-navigate:before,\n.ion-ios-notifications:before,\n.ion-ios-notifications-off:before,\n.ion-ios-notifications-outline:before,\n.ion-ios-nuclear:before,\n.ion-ios-nutrition:before,\n.ion-ios-open:before,\n.ion-ios-options:before,\n.ion-ios-outlet:before,\n.ion-ios-paper:before,\n.ion-ios-paper-plane:before,\n.ion-ios-partly-sunny:before,\n.ion-ios-pause:before,\n.ion-ios-paw:before,\n.ion-ios-people:before,\n.ion-ios-person:before,\n.ion-ios-person-add:before,\n.ion-ios-phone-landscape:before,\n.ion-ios-phone-portrait:before,\n.ion-ios-photos:before,\n.ion-ios-pie:before,\n.ion-ios-pin:before,\n.ion-ios-pint:before,\n.ion-ios-pizza:before,\n.ion-ios-planet:before,\n.ion-ios-play:before,\n.ion-ios-play-circle:before,\n.ion-ios-podium:before,\n.ion-ios-power:before,\n.ion-ios-pricetag:before,\n.ion-ios-pricetags:before,\n.ion-ios-print:before,\n.ion-ios-pulse:before,\n.ion-ios-qr-scanner:before,\n.ion-ios-quote:before,\n.ion-ios-radio:before,\n.ion-ios-radio-button-off:before,\n.ion-ios-radio-button-on:before,\n.ion-ios-rainy:before,\n.ion-ios-recording:before,\n.ion-ios-redo:before,\n.ion-ios-refresh:before,\n.ion-ios-refresh-circle:before,\n.ion-ios-remove:before,\n.ion-ios-remove-circle:before,\n.ion-ios-remove-circle-outline:before,\n.ion-ios-reorder:before,\n.ion-ios-repeat:before,\n.ion-ios-resize:before,\n.ion-ios-restaurant:before,\n.ion-ios-return-left:before,\n.ion-ios-return-right:before,\n.ion-ios-reverse-camera:before,\n.ion-ios-rewind:before,\n.ion-ios-ribbon:before,\n.ion-ios-rocket:before,\n.ion-ios-rose:before,\n.ion-ios-sad:before,\n.ion-ios-save:before,\n.ion-ios-school:before,\n.ion-ios-search:before,\n.ion-ios-send:before,\n.ion-ios-settings:before,\n.ion-ios-share:before,\n.ion-ios-share-alt:before,\n.ion-ios-shirt:before,\n.ion-ios-shuffle:before,\n.ion-ios-skip-backward:before,\n.ion-ios-skip-forward:before,\n.ion-ios-snow:before,\n.ion-ios-speedometer:before,\n.ion-ios-square:before,\n.ion-ios-square-outline:before,\n.ion-ios-star:before,\n.ion-ios-star-half:before,\n.ion-ios-star-outline:before,\n.ion-ios-stats:before,\n.ion-ios-stopwatch:before,\n.ion-ios-subway:before,\n.ion-ios-sunny:before,\n.ion-ios-swap:before,\n.ion-ios-switch:before,\n.ion-ios-sync:before,\n.ion-ios-tablet-landscape:before,\n.ion-ios-tablet-portrait:before,\n.ion-ios-tennisball:before,\n.ion-ios-text:before,\n.ion-ios-thermometer:before,\n.ion-ios-thumbs-down:before,\n.ion-ios-thumbs-up:before,\n.ion-ios-thunderstorm:before,\n.ion-ios-time:before,\n.ion-ios-timer:before,\n.ion-ios-today:before,\n.ion-ios-train:before,\n.ion-ios-transgender:before,\n.ion-ios-trash:before,\n.ion-ios-trending-down:before,\n.ion-ios-trending-up:before,\n.ion-ios-trophy:before,\n.ion-ios-tv:before,\n.ion-ios-umbrella:before,\n.ion-ios-undo:before,\n.ion-ios-unlock:before,\n.ion-ios-videocam:before,\n.ion-ios-volume-high:before,\n.ion-ios-volume-low:before,\n.ion-ios-volume-mute:before,\n.ion-ios-volume-off:before,\n.ion-ios-walk:before,\n.ion-ios-wallet:before,\n.ion-ios-warning:before,\n.ion-ios-watch:before,\n.ion-ios-water:before,\n.ion-ios-wifi:before,\n.ion-ios-wine:before,\n.ion-ios-woman:before,\n.ion-logo-android:before,\n.ion-logo-angular:before,\n.ion-logo-apple:before,\n.ion-logo-bitbucket:before,\n.ion-logo-bitcoin:before,\n.ion-logo-buffer:before,\n.ion-logo-chrome:before,\n.ion-logo-closed-captioning:before,\n.ion-logo-codepen:before,\n.ion-logo-css3:before,\n.ion-logo-designernews:before,\n.ion-logo-dribbble:before,\n.ion-logo-dropbox:before,\n.ion-logo-euro:before,\n.ion-logo-facebook:before,\n.ion-logo-flickr:before,\n.ion-logo-foursquare:before,\n.ion-logo-freebsd-devil:before,\n.ion-logo-game-controller-a:before,\n.ion-logo-game-controller-b:before,\n.ion-logo-github:before,\n.ion-logo-google:before,\n.ion-logo-googleplus:before,\n.ion-logo-hackernews:before,\n.ion-logo-html5:before,\n.ion-logo-instagram:before,\n.ion-logo-ionic:before,\n.ion-logo-ionitron:before,\n.ion-logo-javascript:before,\n.ion-logo-linkedin:before,\n.ion-logo-markdown:before,\n.ion-logo-model-s:before,\n.ion-logo-no-smoking:before,\n.ion-logo-nodejs:before,\n.ion-logo-npm:before,\n.ion-logo-octocat:before,\n.ion-logo-pinterest:before,\n.ion-logo-playstation:before,\n.ion-logo-polymer:before,\n.ion-logo-python:before,\n.ion-logo-reddit:before,\n.ion-logo-rss:before,\n.ion-logo-sass:before,\n.ion-logo-skype:before,\n.ion-logo-slack:before,\n.ion-logo-snapchat:before,\n.ion-logo-steam:before,\n.ion-logo-tumblr:before,\n.ion-logo-tux:before,\n.ion-logo-twitch:before,\n.ion-logo-twitter:before,\n.ion-logo-usd:before,\n.ion-logo-vimeo:before,\n.ion-logo-vk:before,\n.ion-logo-whatsapp:before,\n.ion-logo-windows:before,\n.ion-logo-wordpress:before,\n.ion-logo-xbox:before,\n.ion-logo-xing:before,\n.ion-logo-yahoo:before,\n.ion-logo-yen:before,\n.ion-logo-youtube:before,\n.ion-md-add:before,\n.ion-md-add-circle:before,\n.ion-md-add-circle-outline:before,\n.ion-md-airplane:before,\n.ion-md-alarm:before,\n.ion-md-albums:before,\n.ion-md-alert:before,\n.ion-md-american-football:before,\n.ion-md-analytics:before,\n.ion-md-aperture:before,\n.ion-md-apps:before,\n.ion-md-appstore:before,\n.ion-md-archive:before,\n.ion-md-arrow-back:before,\n.ion-md-arrow-down:before,\n.ion-md-arrow-dropdown:before,\n.ion-md-arrow-dropdown-circle:before,\n.ion-md-arrow-dropleft:before,\n.ion-md-arrow-dropleft-circle:before,\n.ion-md-arrow-dropright:before,\n.ion-md-arrow-dropright-circle:before,\n.ion-md-arrow-dropup:before,\n.ion-md-arrow-dropup-circle:before,\n.ion-md-arrow-forward:before,\n.ion-md-arrow-round-back:before,\n.ion-md-arrow-round-down:before,\n.ion-md-arrow-round-forward:before,\n.ion-md-arrow-round-up:before,\n.ion-md-arrow-up:before,\n.ion-md-at:before,\n.ion-md-attach:before,\n.ion-md-backspace:before,\n.ion-md-barcode:before,\n.ion-md-baseball:before,\n.ion-md-basket:before,\n.ion-md-basketball:before,\n.ion-md-battery-charging:before,\n.ion-md-battery-dead:before,\n.ion-md-battery-full:before,\n.ion-md-beaker:before,\n.ion-md-bed:before,\n.ion-md-beer:before,\n.ion-md-bicycle:before,\n.ion-md-bluetooth:before,\n.ion-md-boat:before,\n.ion-md-body:before,\n.ion-md-bonfire:before,\n.ion-md-book:before,\n.ion-md-bookmark:before,\n.ion-md-bookmarks:before,\n.ion-md-bowtie:before,\n.ion-md-briefcase:before,\n.ion-md-browsers:before,\n.ion-md-brush:before,\n.ion-md-bug:before,\n.ion-md-build:before,\n.ion-md-bulb:before,\n.ion-md-bus:before,\n.ion-md-business:before,\n.ion-md-cafe:before,\n.ion-md-calculator:before,\n.ion-md-calendar:before,\n.ion-md-call:before,\n.ion-md-camera:before,\n.ion-md-car:before,\n.ion-md-card:before,\n.ion-md-cart:before,\n.ion-md-cash:before,\n.ion-md-cellular:before,\n.ion-md-chatboxes:before,\n.ion-md-chatbubbles:before,\n.ion-md-checkbox:before,\n.ion-md-checkbox-outline:before,\n.ion-md-checkmark:before,\n.ion-md-checkmark-circle:before,\n.ion-md-checkmark-circle-outline:before,\n.ion-md-clipboard:before,\n.ion-md-clock:before,\n.ion-md-close:before,\n.ion-md-close-circle:before,\n.ion-md-close-circle-outline:before,\n.ion-md-cloud:before,\n.ion-md-cloud-circle:before,\n.ion-md-cloud-done:before,\n.ion-md-cloud-download:before,\n.ion-md-cloud-outline:before,\n.ion-md-cloud-upload:before,\n.ion-md-cloudy:before,\n.ion-md-cloudy-night:before,\n.ion-md-code:before,\n.ion-md-code-download:before,\n.ion-md-code-working:before,\n.ion-md-cog:before,\n.ion-md-color-fill:before,\n.ion-md-color-filter:before,\n.ion-md-color-palette:before,\n.ion-md-color-wand:before,\n.ion-md-compass:before,\n.ion-md-construct:before,\n.ion-md-contact:before,\n.ion-md-contacts:before,\n.ion-md-contract:before,\n.ion-md-contrast:before,\n.ion-md-copy:before,\n.ion-md-create:before,\n.ion-md-crop:before,\n.ion-md-cube:before,\n.ion-md-cut:before,\n.ion-md-desktop:before,\n.ion-md-disc:before,\n.ion-md-document:before,\n.ion-md-done-all:before,\n.ion-md-download:before,\n.ion-md-easel:before,\n.ion-md-egg:before,\n.ion-md-exit:before,\n.ion-md-expand:before,\n.ion-md-eye:before,\n.ion-md-eye-off:before,\n.ion-md-fastforward:before,\n.ion-md-female:before,\n.ion-md-filing:before,\n.ion-md-film:before,\n.ion-md-finger-print:before,\n.ion-md-fitness:before,\n.ion-md-flag:before,\n.ion-md-flame:before,\n.ion-md-flash:before,\n.ion-md-flash-off:before,\n.ion-md-flashlight:before,\n.ion-md-flask:before,\n.ion-md-flower:before,\n.ion-md-folder:before,\n.ion-md-folder-open:before,\n.ion-md-football:before,\n.ion-md-funnel:before,\n.ion-md-gift:before,\n.ion-md-git-branch:before,\n.ion-md-git-commit:before,\n.ion-md-git-compare:before,\n.ion-md-git-merge:before,\n.ion-md-git-network:before,\n.ion-md-git-pull-request:before,\n.ion-md-glasses:before,\n.ion-md-globe:before,\n.ion-md-grid:before,\n.ion-md-hammer:before,\n.ion-md-hand:before,\n.ion-md-happy:before,\n.ion-md-headset:before,\n.ion-md-heart:before,\n.ion-md-heart-dislike:before,\n.ion-md-heart-empty:before,\n.ion-md-heart-half:before,\n.ion-md-help:before,\n.ion-md-help-buoy:before,\n.ion-md-help-circle:before,\n.ion-md-help-circle-outline:before,\n.ion-md-home:before,\n.ion-md-hourglass:before,\n.ion-md-ice-cream:before,\n.ion-md-image:before,\n.ion-md-images:before,\n.ion-md-infinite:before,\n.ion-md-information:before,\n.ion-md-information-circle:before,\n.ion-md-information-circle-outline:before,\n.ion-md-jet:before,\n.ion-md-journal:before,\n.ion-md-key:before,\n.ion-md-keypad:before,\n.ion-md-laptop:before,\n.ion-md-leaf:before,\n.ion-md-link:before,\n.ion-md-list:before,\n.ion-md-list-box:before,\n.ion-md-locate:before,\n.ion-md-lock:before,\n.ion-md-log-in:before,\n.ion-md-log-out:before,\n.ion-md-magnet:before,\n.ion-md-mail:before,\n.ion-md-mail-open:before,\n.ion-md-mail-unread:before,\n.ion-md-male:before,\n.ion-md-man:before,\n.ion-md-map:before,\n.ion-md-medal:before,\n.ion-md-medical:before,\n.ion-md-medkit:before,\n.ion-md-megaphone:before,\n.ion-md-menu:before,\n.ion-md-mic:before,\n.ion-md-mic-off:before,\n.ion-md-microphone:before,\n.ion-md-moon:before,\n.ion-md-more:before,\n.ion-md-move:before,\n.ion-md-musical-note:before,\n.ion-md-musical-notes:before,\n.ion-md-navigate:before,\n.ion-md-notifications:before,\n.ion-md-notifications-off:before,\n.ion-md-notifications-outline:before,\n.ion-md-nuclear:before,\n.ion-md-nutrition:before,\n.ion-md-open:before,\n.ion-md-options:before,\n.ion-md-outlet:before,\n.ion-md-paper:before,\n.ion-md-paper-plane:before,\n.ion-md-partly-sunny:before,\n.ion-md-pause:before,\n.ion-md-paw:before,\n.ion-md-people:before,\n.ion-md-person:before,\n.ion-md-person-add:before,\n.ion-md-phone-landscape:before,\n.ion-md-phone-portrait:before,\n.ion-md-photos:before,\n.ion-md-pie:before,\n.ion-md-pin:before,\n.ion-md-pint:before,\n.ion-md-pizza:before,\n.ion-md-planet:before,\n.ion-md-play:before,\n.ion-md-play-circle:before,\n.ion-md-podium:before,\n.ion-md-power:before,\n.ion-md-pricetag:before,\n.ion-md-pricetags:before,\n.ion-md-print:before,\n.ion-md-pulse:before,\n.ion-md-qr-scanner:before,\n.ion-md-quote:before,\n.ion-md-radio:before,\n.ion-md-radio-button-off:before,\n.ion-md-radio-button-on:before,\n.ion-md-rainy:before,\n.ion-md-recording:before,\n.ion-md-redo:before,\n.ion-md-refresh:before,\n.ion-md-refresh-circle:before,\n.ion-md-remove:before,\n.ion-md-remove-circle:before,\n.ion-md-remove-circle-outline:before,\n.ion-md-reorder:before,\n.ion-md-repeat:before,\n.ion-md-resize:before,\n.ion-md-restaurant:before,\n.ion-md-return-left:before,\n.ion-md-return-right:before,\n.ion-md-reverse-camera:before,\n.ion-md-rewind:before,\n.ion-md-ribbon:before,\n.ion-md-rocket:before,\n.ion-md-rose:before,\n.ion-md-sad:before,\n.ion-md-save:before,\n.ion-md-school:before,\n.ion-md-search:before,\n.ion-md-send:before,\n.ion-md-settings:before,\n.ion-md-share:before,\n.ion-md-share-alt:before,\n.ion-md-shirt:before,\n.ion-md-shuffle:before,\n.ion-md-skip-backward:before,\n.ion-md-skip-forward:before,\n.ion-md-snow:before,\n.ion-md-speedometer:before,\n.ion-md-square:before,\n.ion-md-square-outline:before,\n.ion-md-star:before,\n.ion-md-star-half:before,\n.ion-md-star-outline:before,\n.ion-md-stats:before,\n.ion-md-stopwatch:before,\n.ion-md-subway:before,\n.ion-md-sunny:before,\n.ion-md-swap:before,\n.ion-md-switch:before,\n.ion-md-sync:before,\n.ion-md-tablet-landscape:before,\n.ion-md-tablet-portrait:before,\n.ion-md-tennisball:before,\n.ion-md-text:before,\n.ion-md-thermometer:before,\n.ion-md-thumbs-down:before,\n.ion-md-thumbs-up:before,\n.ion-md-thunderstorm:before,\n.ion-md-time:before,\n.ion-md-timer:before,\n.ion-md-today:before,\n.ion-md-train:before,\n.ion-md-transgender:before,\n.ion-md-trash:before,\n.ion-md-trending-down:before,\n.ion-md-trending-up:before,\n.ion-md-trophy:before,\n.ion-md-tv:before,\n.ion-md-umbrella:before,\n.ion-md-undo:before,\n.ion-md-unlock:before,\n.ion-md-videocam:before,\n.ion-md-volume-high:before,\n.ion-md-volume-low:before,\n.ion-md-volume-mute:before,\n.ion-md-volume-off:before,\n.ion-md-walk:before,\n.ion-md-wallet:before,\n.ion-md-warning:before,\n.ion-md-watch:before,\n.ion-md-water:before,\n.ion-md-wifi:before,\n.ion-md-wine:before,\n.ion-md-woman:before {\n  display: inline-block;\n  font-family: \"Ionicons\";\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  text-rendering: auto;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.ion-ios-add:before {\n  content: \"\\f102\"; }\n\n.ion-ios-add-circle:before {\n  content: \"\\f101\"; }\n\n.ion-ios-add-circle-outline:before {\n  content: \"\\f100\"; }\n\n.ion-ios-airplane:before {\n  content: \"\\f137\"; }\n\n.ion-ios-alarm:before {\n  content: \"\\f3c8\"; }\n\n.ion-ios-albums:before {\n  content: \"\\f3ca\"; }\n\n.ion-ios-alert:before {\n  content: \"\\f104\"; }\n\n.ion-ios-american-football:before {\n  content: \"\\f106\"; }\n\n.ion-ios-analytics:before {\n  content: \"\\f3ce\"; }\n\n.ion-ios-aperture:before {\n  content: \"\\f108\"; }\n\n.ion-ios-apps:before {\n  content: \"\\f10a\"; }\n\n.ion-ios-appstore:before {\n  content: \"\\f10c\"; }\n\n.ion-ios-archive:before {\n  content: \"\\f10e\"; }\n\n.ion-ios-arrow-back:before {\n  content: \"\\f3cf\"; }\n\n.ion-ios-arrow-down:before {\n  content: \"\\f3d0\"; }\n\n.ion-ios-arrow-dropdown:before {\n  content: \"\\f110\"; }\n\n.ion-ios-arrow-dropdown-circle:before {\n  content: \"\\f125\"; }\n\n.ion-ios-arrow-dropleft:before {\n  content: \"\\f112\"; }\n\n.ion-ios-arrow-dropleft-circle:before {\n  content: \"\\f129\"; }\n\n.ion-ios-arrow-dropright:before {\n  content: \"\\f114\"; }\n\n.ion-ios-arrow-dropright-circle:before {\n  content: \"\\f12b\"; }\n\n.ion-ios-arrow-dropup:before {\n  content: \"\\f116\"; }\n\n.ion-ios-arrow-dropup-circle:before {\n  content: \"\\f12d\"; }\n\n.ion-ios-arrow-forward:before {\n  content: \"\\f3d1\"; }\n\n.ion-ios-arrow-round-back:before {\n  content: \"\\f117\"; }\n\n.ion-ios-arrow-round-down:before {\n  content: \"\\f118\"; }\n\n.ion-ios-arrow-round-forward:before {\n  content: \"\\f119\"; }\n\n.ion-ios-arrow-round-up:before {\n  content: \"\\f11a\"; }\n\n.ion-ios-arrow-up:before {\n  content: \"\\f3d8\"; }\n\n.ion-ios-at:before {\n  content: \"\\f3da\"; }\n\n.ion-ios-attach:before {\n  content: \"\\f11b\"; }\n\n.ion-ios-backspace:before {\n  content: \"\\f11d\"; }\n\n.ion-ios-barcode:before {\n  content: \"\\f3dc\"; }\n\n.ion-ios-baseball:before {\n  content: \"\\f3de\"; }\n\n.ion-ios-basket:before {\n  content: \"\\f11f\"; }\n\n.ion-ios-basketball:before {\n  content: \"\\f3e0\"; }\n\n.ion-ios-battery-charging:before {\n  content: \"\\f120\"; }\n\n.ion-ios-battery-dead:before {\n  content: \"\\f121\"; }\n\n.ion-ios-battery-full:before {\n  content: \"\\f122\"; }\n\n.ion-ios-beaker:before {\n  content: \"\\f124\"; }\n\n.ion-ios-bed:before {\n  content: \"\\f139\"; }\n\n.ion-ios-beer:before {\n  content: \"\\f126\"; }\n\n.ion-ios-bicycle:before {\n  content: \"\\f127\"; }\n\n.ion-ios-bluetooth:before {\n  content: \"\\f128\"; }\n\n.ion-ios-boat:before {\n  content: \"\\f12a\"; }\n\n.ion-ios-body:before {\n  content: \"\\f3e4\"; }\n\n.ion-ios-bonfire:before {\n  content: \"\\f12c\"; }\n\n.ion-ios-book:before {\n  content: \"\\f3e8\"; }\n\n.ion-ios-bookmark:before {\n  content: \"\\f12e\"; }\n\n.ion-ios-bookmarks:before {\n  content: \"\\f3ea\"; }\n\n.ion-ios-bowtie:before {\n  content: \"\\f130\"; }\n\n.ion-ios-briefcase:before {\n  content: \"\\f3ee\"; }\n\n.ion-ios-browsers:before {\n  content: \"\\f3f0\"; }\n\n.ion-ios-brush:before {\n  content: \"\\f132\"; }\n\n.ion-ios-bug:before {\n  content: \"\\f134\"; }\n\n.ion-ios-build:before {\n  content: \"\\f136\"; }\n\n.ion-ios-bulb:before {\n  content: \"\\f138\"; }\n\n.ion-ios-bus:before {\n  content: \"\\f13a\"; }\n\n.ion-ios-business:before {\n  content: \"\\f1a3\"; }\n\n.ion-ios-cafe:before {\n  content: \"\\f13c\"; }\n\n.ion-ios-calculator:before {\n  content: \"\\f3f2\"; }\n\n.ion-ios-calendar:before {\n  content: \"\\f3f4\"; }\n\n.ion-ios-call:before {\n  content: \"\\f13e\"; }\n\n.ion-ios-camera:before {\n  content: \"\\f3f6\"; }\n\n.ion-ios-car:before {\n  content: \"\\f140\"; }\n\n.ion-ios-card:before {\n  content: \"\\f142\"; }\n\n.ion-ios-cart:before {\n  content: \"\\f3f8\"; }\n\n.ion-ios-cash:before {\n  content: \"\\f144\"; }\n\n.ion-ios-cellular:before {\n  content: \"\\f13d\"; }\n\n.ion-ios-chatboxes:before {\n  content: \"\\f3fa\"; }\n\n.ion-ios-chatbubbles:before {\n  content: \"\\f146\"; }\n\n.ion-ios-checkbox:before {\n  content: \"\\f148\"; }\n\n.ion-ios-checkbox-outline:before {\n  content: \"\\f147\"; }\n\n.ion-ios-checkmark:before {\n  content: \"\\f3ff\"; }\n\n.ion-ios-checkmark-circle:before {\n  content: \"\\f14a\"; }\n\n.ion-ios-checkmark-circle-outline:before {\n  content: \"\\f149\"; }\n\n.ion-ios-clipboard:before {\n  content: \"\\f14c\"; }\n\n.ion-ios-clock:before {\n  content: \"\\f403\"; }\n\n.ion-ios-close:before {\n  content: \"\\f406\"; }\n\n.ion-ios-close-circle:before {\n  content: \"\\f14e\"; }\n\n.ion-ios-close-circle-outline:before {\n  content: \"\\f14d\"; }\n\n.ion-ios-cloud:before {\n  content: \"\\f40c\"; }\n\n.ion-ios-cloud-circle:before {\n  content: \"\\f152\"; }\n\n.ion-ios-cloud-done:before {\n  content: \"\\f154\"; }\n\n.ion-ios-cloud-download:before {\n  content: \"\\f408\"; }\n\n.ion-ios-cloud-outline:before {\n  content: \"\\f409\"; }\n\n.ion-ios-cloud-upload:before {\n  content: \"\\f40b\"; }\n\n.ion-ios-cloudy:before {\n  content: \"\\f410\"; }\n\n.ion-ios-cloudy-night:before {\n  content: \"\\f40e\"; }\n\n.ion-ios-code:before {\n  content: \"\\f157\"; }\n\n.ion-ios-code-download:before {\n  content: \"\\f155\"; }\n\n.ion-ios-code-working:before {\n  content: \"\\f156\"; }\n\n.ion-ios-cog:before {\n  content: \"\\f412\"; }\n\n.ion-ios-color-fill:before {\n  content: \"\\f159\"; }\n\n.ion-ios-color-filter:before {\n  content: \"\\f414\"; }\n\n.ion-ios-color-palette:before {\n  content: \"\\f15b\"; }\n\n.ion-ios-color-wand:before {\n  content: \"\\f416\"; }\n\n.ion-ios-compass:before {\n  content: \"\\f15d\"; }\n\n.ion-ios-construct:before {\n  content: \"\\f15f\"; }\n\n.ion-ios-contact:before {\n  content: \"\\f41a\"; }\n\n.ion-ios-contacts:before {\n  content: \"\\f161\"; }\n\n.ion-ios-contract:before {\n  content: \"\\f162\"; }\n\n.ion-ios-contrast:before {\n  content: \"\\f163\"; }\n\n.ion-ios-copy:before {\n  content: \"\\f41c\"; }\n\n.ion-ios-create:before {\n  content: \"\\f165\"; }\n\n.ion-ios-crop:before {\n  content: \"\\f41e\"; }\n\n.ion-ios-cube:before {\n  content: \"\\f168\"; }\n\n.ion-ios-cut:before {\n  content: \"\\f16a\"; }\n\n.ion-ios-desktop:before {\n  content: \"\\f16c\"; }\n\n.ion-ios-disc:before {\n  content: \"\\f16e\"; }\n\n.ion-ios-document:before {\n  content: \"\\f170\"; }\n\n.ion-ios-done-all:before {\n  content: \"\\f171\"; }\n\n.ion-ios-download:before {\n  content: \"\\f420\"; }\n\n.ion-ios-easel:before {\n  content: \"\\f173\"; }\n\n.ion-ios-egg:before {\n  content: \"\\f175\"; }\n\n.ion-ios-exit:before {\n  content: \"\\f177\"; }\n\n.ion-ios-expand:before {\n  content: \"\\f178\"; }\n\n.ion-ios-eye:before {\n  content: \"\\f425\"; }\n\n.ion-ios-eye-off:before {\n  content: \"\\f17a\"; }\n\n.ion-ios-fastforward:before {\n  content: \"\\f427\"; }\n\n.ion-ios-female:before {\n  content: \"\\f17b\"; }\n\n.ion-ios-filing:before {\n  content: \"\\f429\"; }\n\n.ion-ios-film:before {\n  content: \"\\f42b\"; }\n\n.ion-ios-finger-print:before {\n  content: \"\\f17c\"; }\n\n.ion-ios-fitness:before {\n  content: \"\\f1ab\"; }\n\n.ion-ios-flag:before {\n  content: \"\\f42d\"; }\n\n.ion-ios-flame:before {\n  content: \"\\f42f\"; }\n\n.ion-ios-flash:before {\n  content: \"\\f17e\"; }\n\n.ion-ios-flash-off:before {\n  content: \"\\f12f\"; }\n\n.ion-ios-flashlight:before {\n  content: \"\\f141\"; }\n\n.ion-ios-flask:before {\n  content: \"\\f431\"; }\n\n.ion-ios-flower:before {\n  content: \"\\f433\"; }\n\n.ion-ios-folder:before {\n  content: \"\\f435\"; }\n\n.ion-ios-folder-open:before {\n  content: \"\\f180\"; }\n\n.ion-ios-football:before {\n  content: \"\\f437\"; }\n\n.ion-ios-funnel:before {\n  content: \"\\f182\"; }\n\n.ion-ios-gift:before {\n  content: \"\\f191\"; }\n\n.ion-ios-git-branch:before {\n  content: \"\\f183\"; }\n\n.ion-ios-git-commit:before {\n  content: \"\\f184\"; }\n\n.ion-ios-git-compare:before {\n  content: \"\\f185\"; }\n\n.ion-ios-git-merge:before {\n  content: \"\\f186\"; }\n\n.ion-ios-git-network:before {\n  content: \"\\f187\"; }\n\n.ion-ios-git-pull-request:before {\n  content: \"\\f188\"; }\n\n.ion-ios-glasses:before {\n  content: \"\\f43f\"; }\n\n.ion-ios-globe:before {\n  content: \"\\f18a\"; }\n\n.ion-ios-grid:before {\n  content: \"\\f18c\"; }\n\n.ion-ios-hammer:before {\n  content: \"\\f18e\"; }\n\n.ion-ios-hand:before {\n  content: \"\\f190\"; }\n\n.ion-ios-happy:before {\n  content: \"\\f192\"; }\n\n.ion-ios-headset:before {\n  content: \"\\f194\"; }\n\n.ion-ios-heart:before {\n  content: \"\\f443\"; }\n\n.ion-ios-heart-dislike:before {\n  content: \"\\f13f\"; }\n\n.ion-ios-heart-empty:before {\n  content: \"\\f19b\"; }\n\n.ion-ios-heart-half:before {\n  content: \"\\f19d\"; }\n\n.ion-ios-help:before {\n  content: \"\\f446\"; }\n\n.ion-ios-help-buoy:before {\n  content: \"\\f196\"; }\n\n.ion-ios-help-circle:before {\n  content: \"\\f198\"; }\n\n.ion-ios-help-circle-outline:before {\n  content: \"\\f197\"; }\n\n.ion-ios-home:before {\n  content: \"\\f448\"; }\n\n.ion-ios-hourglass:before {\n  content: \"\\f103\"; }\n\n.ion-ios-ice-cream:before {\n  content: \"\\f19a\"; }\n\n.ion-ios-image:before {\n  content: \"\\f19c\"; }\n\n.ion-ios-images:before {\n  content: \"\\f19e\"; }\n\n.ion-ios-infinite:before {\n  content: \"\\f44a\"; }\n\n.ion-ios-information:before {\n  content: \"\\f44d\"; }\n\n.ion-ios-information-circle:before {\n  content: \"\\f1a0\"; }\n\n.ion-ios-information-circle-outline:before {\n  content: \"\\f19f\"; }\n\n.ion-ios-jet:before {\n  content: \"\\f1a5\"; }\n\n.ion-ios-journal:before {\n  content: \"\\f189\"; }\n\n.ion-ios-key:before {\n  content: \"\\f1a7\"; }\n\n.ion-ios-keypad:before {\n  content: \"\\f450\"; }\n\n.ion-ios-laptop:before {\n  content: \"\\f1a8\"; }\n\n.ion-ios-leaf:before {\n  content: \"\\f1aa\"; }\n\n.ion-ios-link:before {\n  content: \"\\f22a\"; }\n\n.ion-ios-list:before {\n  content: \"\\f454\"; }\n\n.ion-ios-list-box:before {\n  content: \"\\f143\"; }\n\n.ion-ios-locate:before {\n  content: \"\\f1ae\"; }\n\n.ion-ios-lock:before {\n  content: \"\\f1b0\"; }\n\n.ion-ios-log-in:before {\n  content: \"\\f1b1\"; }\n\n.ion-ios-log-out:before {\n  content: \"\\f1b2\"; }\n\n.ion-ios-magnet:before {\n  content: \"\\f1b4\"; }\n\n.ion-ios-mail:before {\n  content: \"\\f1b8\"; }\n\n.ion-ios-mail-open:before {\n  content: \"\\f1b6\"; }\n\n.ion-ios-mail-unread:before {\n  content: \"\\f145\"; }\n\n.ion-ios-male:before {\n  content: \"\\f1b9\"; }\n\n.ion-ios-man:before {\n  content: \"\\f1bb\"; }\n\n.ion-ios-map:before {\n  content: \"\\f1bd\"; }\n\n.ion-ios-medal:before {\n  content: \"\\f1bf\"; }\n\n.ion-ios-medical:before {\n  content: \"\\f45c\"; }\n\n.ion-ios-medkit:before {\n  content: \"\\f45e\"; }\n\n.ion-ios-megaphone:before {\n  content: \"\\f1c1\"; }\n\n.ion-ios-menu:before {\n  content: \"\\f1c3\"; }\n\n.ion-ios-mic:before {\n  content: \"\\f461\"; }\n\n.ion-ios-mic-off:before {\n  content: \"\\f45f\"; }\n\n.ion-ios-microphone:before {\n  content: \"\\f1c6\"; }\n\n.ion-ios-moon:before {\n  content: \"\\f468\"; }\n\n.ion-ios-more:before {\n  content: \"\\f1c8\"; }\n\n.ion-ios-move:before {\n  content: \"\\f1cb\"; }\n\n.ion-ios-musical-note:before {\n  content: \"\\f46b\"; }\n\n.ion-ios-musical-notes:before {\n  content: \"\\f46c\"; }\n\n.ion-ios-navigate:before {\n  content: \"\\f46e\"; }\n\n.ion-ios-notifications:before {\n  content: \"\\f1d3\"; }\n\n.ion-ios-notifications-off:before {\n  content: \"\\f1d1\"; }\n\n.ion-ios-notifications-outline:before {\n  content: \"\\f133\"; }\n\n.ion-ios-nuclear:before {\n  content: \"\\f1d5\"; }\n\n.ion-ios-nutrition:before {\n  content: \"\\f470\"; }\n\n.ion-ios-open:before {\n  content: \"\\f1d7\"; }\n\n.ion-ios-options:before {\n  content: \"\\f1d9\"; }\n\n.ion-ios-outlet:before {\n  content: \"\\f1db\"; }\n\n.ion-ios-paper:before {\n  content: \"\\f472\"; }\n\n.ion-ios-paper-plane:before {\n  content: \"\\f1dd\"; }\n\n.ion-ios-partly-sunny:before {\n  content: \"\\f1df\"; }\n\n.ion-ios-pause:before {\n  content: \"\\f478\"; }\n\n.ion-ios-paw:before {\n  content: \"\\f47a\"; }\n\n.ion-ios-people:before {\n  content: \"\\f47c\"; }\n\n.ion-ios-person:before {\n  content: \"\\f47e\"; }\n\n.ion-ios-person-add:before {\n  content: \"\\f1e1\"; }\n\n.ion-ios-phone-landscape:before {\n  content: \"\\f1e2\"; }\n\n.ion-ios-phone-portrait:before {\n  content: \"\\f1e3\"; }\n\n.ion-ios-photos:before {\n  content: \"\\f482\"; }\n\n.ion-ios-pie:before {\n  content: \"\\f484\"; }\n\n.ion-ios-pin:before {\n  content: \"\\f1e5\"; }\n\n.ion-ios-pint:before {\n  content: \"\\f486\"; }\n\n.ion-ios-pizza:before {\n  content: \"\\f1e7\"; }\n\n.ion-ios-planet:before {\n  content: \"\\f1eb\"; }\n\n.ion-ios-play:before {\n  content: \"\\f488\"; }\n\n.ion-ios-play-circle:before {\n  content: \"\\f113\"; }\n\n.ion-ios-podium:before {\n  content: \"\\f1ed\"; }\n\n.ion-ios-power:before {\n  content: \"\\f1ef\"; }\n\n.ion-ios-pricetag:before {\n  content: \"\\f48d\"; }\n\n.ion-ios-pricetags:before {\n  content: \"\\f48f\"; }\n\n.ion-ios-print:before {\n  content: \"\\f1f1\"; }\n\n.ion-ios-pulse:before {\n  content: \"\\f493\"; }\n\n.ion-ios-qr-scanner:before {\n  content: \"\\f1f3\"; }\n\n.ion-ios-quote:before {\n  content: \"\\f1f5\"; }\n\n.ion-ios-radio:before {\n  content: \"\\f1f9\"; }\n\n.ion-ios-radio-button-off:before {\n  content: \"\\f1f6\"; }\n\n.ion-ios-radio-button-on:before {\n  content: \"\\f1f7\"; }\n\n.ion-ios-rainy:before {\n  content: \"\\f495\"; }\n\n.ion-ios-recording:before {\n  content: \"\\f497\"; }\n\n.ion-ios-redo:before {\n  content: \"\\f499\"; }\n\n.ion-ios-refresh:before {\n  content: \"\\f49c\"; }\n\n.ion-ios-refresh-circle:before {\n  content: \"\\f135\"; }\n\n.ion-ios-remove:before {\n  content: \"\\f1fc\"; }\n\n.ion-ios-remove-circle:before {\n  content: \"\\f1fb\"; }\n\n.ion-ios-remove-circle-outline:before {\n  content: \"\\f1fa\"; }\n\n.ion-ios-reorder:before {\n  content: \"\\f1fd\"; }\n\n.ion-ios-repeat:before {\n  content: \"\\f1fe\"; }\n\n.ion-ios-resize:before {\n  content: \"\\f1ff\"; }\n\n.ion-ios-restaurant:before {\n  content: \"\\f201\"; }\n\n.ion-ios-return-left:before {\n  content: \"\\f202\"; }\n\n.ion-ios-return-right:before {\n  content: \"\\f203\"; }\n\n.ion-ios-reverse-camera:before {\n  content: \"\\f49f\"; }\n\n.ion-ios-rewind:before {\n  content: \"\\f4a1\"; }\n\n.ion-ios-ribbon:before {\n  content: \"\\f205\"; }\n\n.ion-ios-rocket:before {\n  content: \"\\f14b\"; }\n\n.ion-ios-rose:before {\n  content: \"\\f4a3\"; }\n\n.ion-ios-sad:before {\n  content: \"\\f207\"; }\n\n.ion-ios-save:before {\n  content: \"\\f1a6\"; }\n\n.ion-ios-school:before {\n  content: \"\\f209\"; }\n\n.ion-ios-search:before {\n  content: \"\\f4a5\"; }\n\n.ion-ios-send:before {\n  content: \"\\f20c\"; }\n\n.ion-ios-settings:before {\n  content: \"\\f4a7\"; }\n\n.ion-ios-share:before {\n  content: \"\\f211\"; }\n\n.ion-ios-share-alt:before {\n  content: \"\\f20f\"; }\n\n.ion-ios-shirt:before {\n  content: \"\\f213\"; }\n\n.ion-ios-shuffle:before {\n  content: \"\\f4a9\"; }\n\n.ion-ios-skip-backward:before {\n  content: \"\\f215\"; }\n\n.ion-ios-skip-forward:before {\n  content: \"\\f217\"; }\n\n.ion-ios-snow:before {\n  content: \"\\f218\"; }\n\n.ion-ios-speedometer:before {\n  content: \"\\f4b0\"; }\n\n.ion-ios-square:before {\n  content: \"\\f21a\"; }\n\n.ion-ios-square-outline:before {\n  content: \"\\f15c\"; }\n\n.ion-ios-star:before {\n  content: \"\\f4b3\"; }\n\n.ion-ios-star-half:before {\n  content: \"\\f4b1\"; }\n\n.ion-ios-star-outline:before {\n  content: \"\\f4b2\"; }\n\n.ion-ios-stats:before {\n  content: \"\\f21c\"; }\n\n.ion-ios-stopwatch:before {\n  content: \"\\f4b5\"; }\n\n.ion-ios-subway:before {\n  content: \"\\f21e\"; }\n\n.ion-ios-sunny:before {\n  content: \"\\f4b7\"; }\n\n.ion-ios-swap:before {\n  content: \"\\f21f\"; }\n\n.ion-ios-switch:before {\n  content: \"\\f221\"; }\n\n.ion-ios-sync:before {\n  content: \"\\f222\"; }\n\n.ion-ios-tablet-landscape:before {\n  content: \"\\f223\"; }\n\n.ion-ios-tablet-portrait:before {\n  content: \"\\f24e\"; }\n\n.ion-ios-tennisball:before {\n  content: \"\\f4bb\"; }\n\n.ion-ios-text:before {\n  content: \"\\f250\"; }\n\n.ion-ios-thermometer:before {\n  content: \"\\f252\"; }\n\n.ion-ios-thumbs-down:before {\n  content: \"\\f254\"; }\n\n.ion-ios-thumbs-up:before {\n  content: \"\\f256\"; }\n\n.ion-ios-thunderstorm:before {\n  content: \"\\f4bd\"; }\n\n.ion-ios-time:before {\n  content: \"\\f4bf\"; }\n\n.ion-ios-timer:before {\n  content: \"\\f4c1\"; }\n\n.ion-ios-today:before {\n  content: \"\\f14f\"; }\n\n.ion-ios-train:before {\n  content: \"\\f258\"; }\n\n.ion-ios-transgender:before {\n  content: \"\\f259\"; }\n\n.ion-ios-trash:before {\n  content: \"\\f4c5\"; }\n\n.ion-ios-trending-down:before {\n  content: \"\\f25a\"; }\n\n.ion-ios-trending-up:before {\n  content: \"\\f25b\"; }\n\n.ion-ios-trophy:before {\n  content: \"\\f25d\"; }\n\n.ion-ios-tv:before {\n  content: \"\\f115\"; }\n\n.ion-ios-umbrella:before {\n  content: \"\\f25f\"; }\n\n.ion-ios-undo:before {\n  content: \"\\f4c7\"; }\n\n.ion-ios-unlock:before {\n  content: \"\\f261\"; }\n\n.ion-ios-videocam:before {\n  content: \"\\f4cd\"; }\n\n.ion-ios-volume-high:before {\n  content: \"\\f11c\"; }\n\n.ion-ios-volume-low:before {\n  content: \"\\f11e\"; }\n\n.ion-ios-volume-mute:before {\n  content: \"\\f263\"; }\n\n.ion-ios-volume-off:before {\n  content: \"\\f264\"; }\n\n.ion-ios-walk:before {\n  content: \"\\f266\"; }\n\n.ion-ios-wallet:before {\n  content: \"\\f18b\"; }\n\n.ion-ios-warning:before {\n  content: \"\\f268\"; }\n\n.ion-ios-watch:before {\n  content: \"\\f269\"; }\n\n.ion-ios-water:before {\n  content: \"\\f26b\"; }\n\n.ion-ios-wifi:before {\n  content: \"\\f26d\"; }\n\n.ion-ios-wine:before {\n  content: \"\\f26f\"; }\n\n.ion-ios-woman:before {\n  content: \"\\f271\"; }\n\n.ion-logo-android:before {\n  content: \"\\f225\"; }\n\n.ion-logo-angular:before {\n  content: \"\\f227\"; }\n\n.ion-logo-apple:before {\n  content: \"\\f229\"; }\n\n.ion-logo-bitbucket:before {\n  content: \"\\f193\"; }\n\n.ion-logo-bitcoin:before {\n  content: \"\\f22b\"; }\n\n.ion-logo-buffer:before {\n  content: \"\\f22d\"; }\n\n.ion-logo-chrome:before {\n  content: \"\\f22f\"; }\n\n.ion-logo-closed-captioning:before {\n  content: \"\\f105\"; }\n\n.ion-logo-codepen:before {\n  content: \"\\f230\"; }\n\n.ion-logo-css3:before {\n  content: \"\\f231\"; }\n\n.ion-logo-designernews:before {\n  content: \"\\f232\"; }\n\n.ion-logo-dribbble:before {\n  content: \"\\f233\"; }\n\n.ion-logo-dropbox:before {\n  content: \"\\f234\"; }\n\n.ion-logo-euro:before {\n  content: \"\\f235\"; }\n\n.ion-logo-facebook:before {\n  content: \"\\f236\"; }\n\n.ion-logo-flickr:before {\n  content: \"\\f107\"; }\n\n.ion-logo-foursquare:before {\n  content: \"\\f237\"; }\n\n.ion-logo-freebsd-devil:before {\n  content: \"\\f238\"; }\n\n.ion-logo-game-controller-a:before {\n  content: \"\\f13b\"; }\n\n.ion-logo-game-controller-b:before {\n  content: \"\\f181\"; }\n\n.ion-logo-github:before {\n  content: \"\\f239\"; }\n\n.ion-logo-google:before {\n  content: \"\\f23a\"; }\n\n.ion-logo-googleplus:before {\n  content: \"\\f23b\"; }\n\n.ion-logo-hackernews:before {\n  content: \"\\f23c\"; }\n\n.ion-logo-html5:before {\n  content: \"\\f23d\"; }\n\n.ion-logo-instagram:before {\n  content: \"\\f23e\"; }\n\n.ion-logo-ionic:before {\n  content: \"\\f150\"; }\n\n.ion-logo-ionitron:before {\n  content: \"\\f151\"; }\n\n.ion-logo-javascript:before {\n  content: \"\\f23f\"; }\n\n.ion-logo-linkedin:before {\n  content: \"\\f240\"; }\n\n.ion-logo-markdown:before {\n  content: \"\\f241\"; }\n\n.ion-logo-model-s:before {\n  content: \"\\f153\"; }\n\n.ion-logo-no-smoking:before {\n  content: \"\\f109\"; }\n\n.ion-logo-nodejs:before {\n  content: \"\\f242\"; }\n\n.ion-logo-npm:before {\n  content: \"\\f195\"; }\n\n.ion-logo-octocat:before {\n  content: \"\\f243\"; }\n\n.ion-logo-pinterest:before {\n  content: \"\\f244\"; }\n\n.ion-logo-playstation:before {\n  content: \"\\f245\"; }\n\n.ion-logo-polymer:before {\n  content: \"\\f15e\"; }\n\n.ion-logo-python:before {\n  content: \"\\f246\"; }\n\n.ion-logo-reddit:before {\n  content: \"\\f247\"; }\n\n.ion-logo-rss:before {\n  content: \"\\f248\"; }\n\n.ion-logo-sass:before {\n  content: \"\\f249\"; }\n\n.ion-logo-skype:before {\n  content: \"\\f24a\"; }\n\n.ion-logo-slack:before {\n  content: \"\\f10b\"; }\n\n.ion-logo-snapchat:before {\n  content: \"\\f24b\"; }\n\n.ion-logo-steam:before {\n  content: \"\\f24c\"; }\n\n.ion-logo-tumblr:before {\n  content: \"\\f24d\"; }\n\n.ion-logo-tux:before {\n  content: \"\\f2ae\"; }\n\n.ion-logo-twitch:before {\n  content: \"\\f2af\"; }\n\n.ion-logo-twitter:before {\n  content: \"\\f2b0\"; }\n\n.ion-logo-usd:before {\n  content: \"\\f2b1\"; }\n\n.ion-logo-vimeo:before {\n  content: \"\\f2c4\"; }\n\n.ion-logo-vk:before {\n  content: \"\\f10d\"; }\n\n.ion-logo-whatsapp:before {\n  content: \"\\f2c5\"; }\n\n.ion-logo-windows:before {\n  content: \"\\f32f\"; }\n\n.ion-logo-wordpress:before {\n  content: \"\\f330\"; }\n\n.ion-logo-xbox:before {\n  content: \"\\f34c\"; }\n\n.ion-logo-xing:before {\n  content: \"\\f10f\"; }\n\n.ion-logo-yahoo:before {\n  content: \"\\f34d\"; }\n\n.ion-logo-yen:before {\n  content: \"\\f34e\"; }\n\n.ion-logo-youtube:before {\n  content: \"\\f34f\"; }\n\n.ion-md-add:before {\n  content: \"\\f273\"; }\n\n.ion-md-add-circle:before {\n  content: \"\\f272\"; }\n\n.ion-md-add-circle-outline:before {\n  content: \"\\f158\"; }\n\n.ion-md-airplane:before {\n  content: \"\\f15a\"; }\n\n.ion-md-alarm:before {\n  content: \"\\f274\"; }\n\n.ion-md-albums:before {\n  content: \"\\f275\"; }\n\n.ion-md-alert:before {\n  content: \"\\f276\"; }\n\n.ion-md-american-football:before {\n  content: \"\\f277\"; }\n\n.ion-md-analytics:before {\n  content: \"\\f278\"; }\n\n.ion-md-aperture:before {\n  content: \"\\f279\"; }\n\n.ion-md-apps:before {\n  content: \"\\f27a\"; }\n\n.ion-md-appstore:before {\n  content: \"\\f27b\"; }\n\n.ion-md-archive:before {\n  content: \"\\f27c\"; }\n\n.ion-md-arrow-back:before {\n  content: \"\\f27d\"; }\n\n.ion-md-arrow-down:before {\n  content: \"\\f27e\"; }\n\n.ion-md-arrow-dropdown:before {\n  content: \"\\f280\"; }\n\n.ion-md-arrow-dropdown-circle:before {\n  content: \"\\f27f\"; }\n\n.ion-md-arrow-dropleft:before {\n  content: \"\\f282\"; }\n\n.ion-md-arrow-dropleft-circle:before {\n  content: \"\\f281\"; }\n\n.ion-md-arrow-dropright:before {\n  content: \"\\f284\"; }\n\n.ion-md-arrow-dropright-circle:before {\n  content: \"\\f283\"; }\n\n.ion-md-arrow-dropup:before {\n  content: \"\\f286\"; }\n\n.ion-md-arrow-dropup-circle:before {\n  content: \"\\f285\"; }\n\n.ion-md-arrow-forward:before {\n  content: \"\\f287\"; }\n\n.ion-md-arrow-round-back:before {\n  content: \"\\f288\"; }\n\n.ion-md-arrow-round-down:before {\n  content: \"\\f289\"; }\n\n.ion-md-arrow-round-forward:before {\n  content: \"\\f28a\"; }\n\n.ion-md-arrow-round-up:before {\n  content: \"\\f28b\"; }\n\n.ion-md-arrow-up:before {\n  content: \"\\f28c\"; }\n\n.ion-md-at:before {\n  content: \"\\f28d\"; }\n\n.ion-md-attach:before {\n  content: \"\\f28e\"; }\n\n.ion-md-backspace:before {\n  content: \"\\f28f\"; }\n\n.ion-md-barcode:before {\n  content: \"\\f290\"; }\n\n.ion-md-baseball:before {\n  content: \"\\f291\"; }\n\n.ion-md-basket:before {\n  content: \"\\f292\"; }\n\n.ion-md-basketball:before {\n  content: \"\\f293\"; }\n\n.ion-md-battery-charging:before {\n  content: \"\\f294\"; }\n\n.ion-md-battery-dead:before {\n  content: \"\\f295\"; }\n\n.ion-md-battery-full:before {\n  content: \"\\f296\"; }\n\n.ion-md-beaker:before {\n  content: \"\\f297\"; }\n\n.ion-md-bed:before {\n  content: \"\\f160\"; }\n\n.ion-md-beer:before {\n  content: \"\\f298\"; }\n\n.ion-md-bicycle:before {\n  content: \"\\f299\"; }\n\n.ion-md-bluetooth:before {\n  content: \"\\f29a\"; }\n\n.ion-md-boat:before {\n  content: \"\\f29b\"; }\n\n.ion-md-body:before {\n  content: \"\\f29c\"; }\n\n.ion-md-bonfire:before {\n  content: \"\\f29d\"; }\n\n.ion-md-book:before {\n  content: \"\\f29e\"; }\n\n.ion-md-bookmark:before {\n  content: \"\\f29f\"; }\n\n.ion-md-bookmarks:before {\n  content: \"\\f2a0\"; }\n\n.ion-md-bowtie:before {\n  content: \"\\f2a1\"; }\n\n.ion-md-briefcase:before {\n  content: \"\\f2a2\"; }\n\n.ion-md-browsers:before {\n  content: \"\\f2a3\"; }\n\n.ion-md-brush:before {\n  content: \"\\f2a4\"; }\n\n.ion-md-bug:before {\n  content: \"\\f2a5\"; }\n\n.ion-md-build:before {\n  content: \"\\f2a6\"; }\n\n.ion-md-bulb:before {\n  content: \"\\f2a7\"; }\n\n.ion-md-bus:before {\n  content: \"\\f2a8\"; }\n\n.ion-md-business:before {\n  content: \"\\f1a4\"; }\n\n.ion-md-cafe:before {\n  content: \"\\f2a9\"; }\n\n.ion-md-calculator:before {\n  content: \"\\f2aa\"; }\n\n.ion-md-calendar:before {\n  content: \"\\f2ab\"; }\n\n.ion-md-call:before {\n  content: \"\\f2ac\"; }\n\n.ion-md-camera:before {\n  content: \"\\f2ad\"; }\n\n.ion-md-car:before {\n  content: \"\\f2b2\"; }\n\n.ion-md-card:before {\n  content: \"\\f2b3\"; }\n\n.ion-md-cart:before {\n  content: \"\\f2b4\"; }\n\n.ion-md-cash:before {\n  content: \"\\f2b5\"; }\n\n.ion-md-cellular:before {\n  content: \"\\f164\"; }\n\n.ion-md-chatboxes:before {\n  content: \"\\f2b6\"; }\n\n.ion-md-chatbubbles:before {\n  content: \"\\f2b7\"; }\n\n.ion-md-checkbox:before {\n  content: \"\\f2b9\"; }\n\n.ion-md-checkbox-outline:before {\n  content: \"\\f2b8\"; }\n\n.ion-md-checkmark:before {\n  content: \"\\f2bc\"; }\n\n.ion-md-checkmark-circle:before {\n  content: \"\\f2bb\"; }\n\n.ion-md-checkmark-circle-outline:before {\n  content: \"\\f2ba\"; }\n\n.ion-md-clipboard:before {\n  content: \"\\f2bd\"; }\n\n.ion-md-clock:before {\n  content: \"\\f2be\"; }\n\n.ion-md-close:before {\n  content: \"\\f2c0\"; }\n\n.ion-md-close-circle:before {\n  content: \"\\f2bf\"; }\n\n.ion-md-close-circle-outline:before {\n  content: \"\\f166\"; }\n\n.ion-md-cloud:before {\n  content: \"\\f2c9\"; }\n\n.ion-md-cloud-circle:before {\n  content: \"\\f2c2\"; }\n\n.ion-md-cloud-done:before {\n  content: \"\\f2c3\"; }\n\n.ion-md-cloud-download:before {\n  content: \"\\f2c6\"; }\n\n.ion-md-cloud-outline:before {\n  content: \"\\f2c7\"; }\n\n.ion-md-cloud-upload:before {\n  content: \"\\f2c8\"; }\n\n.ion-md-cloudy:before {\n  content: \"\\f2cb\"; }\n\n.ion-md-cloudy-night:before {\n  content: \"\\f2ca\"; }\n\n.ion-md-code:before {\n  content: \"\\f2ce\"; }\n\n.ion-md-code-download:before {\n  content: \"\\f2cc\"; }\n\n.ion-md-code-working:before {\n  content: \"\\f2cd\"; }\n\n.ion-md-cog:before {\n  content: \"\\f2cf\"; }\n\n.ion-md-color-fill:before {\n  content: \"\\f2d0\"; }\n\n.ion-md-color-filter:before {\n  content: \"\\f2d1\"; }\n\n.ion-md-color-palette:before {\n  content: \"\\f2d2\"; }\n\n.ion-md-color-wand:before {\n  content: \"\\f2d3\"; }\n\n.ion-md-compass:before {\n  content: \"\\f2d4\"; }\n\n.ion-md-construct:before {\n  content: \"\\f2d5\"; }\n\n.ion-md-contact:before {\n  content: \"\\f2d6\"; }\n\n.ion-md-contacts:before {\n  content: \"\\f2d7\"; }\n\n.ion-md-contract:before {\n  content: \"\\f2d8\"; }\n\n.ion-md-contrast:before {\n  content: \"\\f2d9\"; }\n\n.ion-md-copy:before {\n  content: \"\\f2da\"; }\n\n.ion-md-create:before {\n  content: \"\\f2db\"; }\n\n.ion-md-crop:before {\n  content: \"\\f2dc\"; }\n\n.ion-md-cube:before {\n  content: \"\\f2dd\"; }\n\n.ion-md-cut:before {\n  content: \"\\f2de\"; }\n\n.ion-md-desktop:before {\n  content: \"\\f2df\"; }\n\n.ion-md-disc:before {\n  content: \"\\f2e0\"; }\n\n.ion-md-document:before {\n  content: \"\\f2e1\"; }\n\n.ion-md-done-all:before {\n  content: \"\\f2e2\"; }\n\n.ion-md-download:before {\n  content: \"\\f2e3\"; }\n\n.ion-md-easel:before {\n  content: \"\\f2e4\"; }\n\n.ion-md-egg:before {\n  content: \"\\f2e5\"; }\n\n.ion-md-exit:before {\n  content: \"\\f2e6\"; }\n\n.ion-md-expand:before {\n  content: \"\\f2e7\"; }\n\n.ion-md-eye:before {\n  content: \"\\f2e9\"; }\n\n.ion-md-eye-off:before {\n  content: \"\\f2e8\"; }\n\n.ion-md-fastforward:before {\n  content: \"\\f2ea\"; }\n\n.ion-md-female:before {\n  content: \"\\f2eb\"; }\n\n.ion-md-filing:before {\n  content: \"\\f2ec\"; }\n\n.ion-md-film:before {\n  content: \"\\f2ed\"; }\n\n.ion-md-finger-print:before {\n  content: \"\\f2ee\"; }\n\n.ion-md-fitness:before {\n  content: \"\\f1ac\"; }\n\n.ion-md-flag:before {\n  content: \"\\f2ef\"; }\n\n.ion-md-flame:before {\n  content: \"\\f2f0\"; }\n\n.ion-md-flash:before {\n  content: \"\\f2f1\"; }\n\n.ion-md-flash-off:before {\n  content: \"\\f169\"; }\n\n.ion-md-flashlight:before {\n  content: \"\\f16b\"; }\n\n.ion-md-flask:before {\n  content: \"\\f2f2\"; }\n\n.ion-md-flower:before {\n  content: \"\\f2f3\"; }\n\n.ion-md-folder:before {\n  content: \"\\f2f5\"; }\n\n.ion-md-folder-open:before {\n  content: \"\\f2f4\"; }\n\n.ion-md-football:before {\n  content: \"\\f2f6\"; }\n\n.ion-md-funnel:before {\n  content: \"\\f2f7\"; }\n\n.ion-md-gift:before {\n  content: \"\\f199\"; }\n\n.ion-md-git-branch:before {\n  content: \"\\f2fa\"; }\n\n.ion-md-git-commit:before {\n  content: \"\\f2fb\"; }\n\n.ion-md-git-compare:before {\n  content: \"\\f2fc\"; }\n\n.ion-md-git-merge:before {\n  content: \"\\f2fd\"; }\n\n.ion-md-git-network:before {\n  content: \"\\f2fe\"; }\n\n.ion-md-git-pull-request:before {\n  content: \"\\f2ff\"; }\n\n.ion-md-glasses:before {\n  content: \"\\f300\"; }\n\n.ion-md-globe:before {\n  content: \"\\f301\"; }\n\n.ion-md-grid:before {\n  content: \"\\f302\"; }\n\n.ion-md-hammer:before {\n  content: \"\\f303\"; }\n\n.ion-md-hand:before {\n  content: \"\\f304\"; }\n\n.ion-md-happy:before {\n  content: \"\\f305\"; }\n\n.ion-md-headset:before {\n  content: \"\\f306\"; }\n\n.ion-md-heart:before {\n  content: \"\\f308\"; }\n\n.ion-md-heart-dislike:before {\n  content: \"\\f167\"; }\n\n.ion-md-heart-empty:before {\n  content: \"\\f1a1\"; }\n\n.ion-md-heart-half:before {\n  content: \"\\f1a2\"; }\n\n.ion-md-help:before {\n  content: \"\\f30b\"; }\n\n.ion-md-help-buoy:before {\n  content: \"\\f309\"; }\n\n.ion-md-help-circle:before {\n  content: \"\\f30a\"; }\n\n.ion-md-help-circle-outline:before {\n  content: \"\\f16d\"; }\n\n.ion-md-home:before {\n  content: \"\\f30c\"; }\n\n.ion-md-hourglass:before {\n  content: \"\\f111\"; }\n\n.ion-md-ice-cream:before {\n  content: \"\\f30d\"; }\n\n.ion-md-image:before {\n  content: \"\\f30e\"; }\n\n.ion-md-images:before {\n  content: \"\\f30f\"; }\n\n.ion-md-infinite:before {\n  content: \"\\f310\"; }\n\n.ion-md-information:before {\n  content: \"\\f312\"; }\n\n.ion-md-information-circle:before {\n  content: \"\\f311\"; }\n\n.ion-md-information-circle-outline:before {\n  content: \"\\f16f\"; }\n\n.ion-md-jet:before {\n  content: \"\\f315\"; }\n\n.ion-md-journal:before {\n  content: \"\\f18d\"; }\n\n.ion-md-key:before {\n  content: \"\\f316\"; }\n\n.ion-md-keypad:before {\n  content: \"\\f317\"; }\n\n.ion-md-laptop:before {\n  content: \"\\f318\"; }\n\n.ion-md-leaf:before {\n  content: \"\\f319\"; }\n\n.ion-md-link:before {\n  content: \"\\f22e\"; }\n\n.ion-md-list:before {\n  content: \"\\f31b\"; }\n\n.ion-md-list-box:before {\n  content: \"\\f31a\"; }\n\n.ion-md-locate:before {\n  content: \"\\f31c\"; }\n\n.ion-md-lock:before {\n  content: \"\\f31d\"; }\n\n.ion-md-log-in:before {\n  content: \"\\f31e\"; }\n\n.ion-md-log-out:before {\n  content: \"\\f31f\"; }\n\n.ion-md-magnet:before {\n  content: \"\\f320\"; }\n\n.ion-md-mail:before {\n  content: \"\\f322\"; }\n\n.ion-md-mail-open:before {\n  content: \"\\f321\"; }\n\n.ion-md-mail-unread:before {\n  content: \"\\f172\"; }\n\n.ion-md-male:before {\n  content: \"\\f323\"; }\n\n.ion-md-man:before {\n  content: \"\\f324\"; }\n\n.ion-md-map:before {\n  content: \"\\f325\"; }\n\n.ion-md-medal:before {\n  content: \"\\f326\"; }\n\n.ion-md-medical:before {\n  content: \"\\f327\"; }\n\n.ion-md-medkit:before {\n  content: \"\\f328\"; }\n\n.ion-md-megaphone:before {\n  content: \"\\f329\"; }\n\n.ion-md-menu:before {\n  content: \"\\f32a\"; }\n\n.ion-md-mic:before {\n  content: \"\\f32c\"; }\n\n.ion-md-mic-off:before {\n  content: \"\\f32b\"; }\n\n.ion-md-microphone:before {\n  content: \"\\f32d\"; }\n\n.ion-md-moon:before {\n  content: \"\\f32e\"; }\n\n.ion-md-more:before {\n  content: \"\\f1c9\"; }\n\n.ion-md-move:before {\n  content: \"\\f331\"; }\n\n.ion-md-musical-note:before {\n  content: \"\\f332\"; }\n\n.ion-md-musical-notes:before {\n  content: \"\\f333\"; }\n\n.ion-md-navigate:before {\n  content: \"\\f334\"; }\n\n.ion-md-notifications:before {\n  content: \"\\f338\"; }\n\n.ion-md-notifications-off:before {\n  content: \"\\f336\"; }\n\n.ion-md-notifications-outline:before {\n  content: \"\\f337\"; }\n\n.ion-md-nuclear:before {\n  content: \"\\f339\"; }\n\n.ion-md-nutrition:before {\n  content: \"\\f33a\"; }\n\n.ion-md-open:before {\n  content: \"\\f33b\"; }\n\n.ion-md-options:before {\n  content: \"\\f33c\"; }\n\n.ion-md-outlet:before {\n  content: \"\\f33d\"; }\n\n.ion-md-paper:before {\n  content: \"\\f33f\"; }\n\n.ion-md-paper-plane:before {\n  content: \"\\f33e\"; }\n\n.ion-md-partly-sunny:before {\n  content: \"\\f340\"; }\n\n.ion-md-pause:before {\n  content: \"\\f341\"; }\n\n.ion-md-paw:before {\n  content: \"\\f342\"; }\n\n.ion-md-people:before {\n  content: \"\\f343\"; }\n\n.ion-md-person:before {\n  content: \"\\f345\"; }\n\n.ion-md-person-add:before {\n  content: \"\\f344\"; }\n\n.ion-md-phone-landscape:before {\n  content: \"\\f346\"; }\n\n.ion-md-phone-portrait:before {\n  content: \"\\f347\"; }\n\n.ion-md-photos:before {\n  content: \"\\f348\"; }\n\n.ion-md-pie:before {\n  content: \"\\f349\"; }\n\n.ion-md-pin:before {\n  content: \"\\f34a\"; }\n\n.ion-md-pint:before {\n  content: \"\\f34b\"; }\n\n.ion-md-pizza:before {\n  content: \"\\f354\"; }\n\n.ion-md-planet:before {\n  content: \"\\f356\"; }\n\n.ion-md-play:before {\n  content: \"\\f357\"; }\n\n.ion-md-play-circle:before {\n  content: \"\\f174\"; }\n\n.ion-md-podium:before {\n  content: \"\\f358\"; }\n\n.ion-md-power:before {\n  content: \"\\f359\"; }\n\n.ion-md-pricetag:before {\n  content: \"\\f35a\"; }\n\n.ion-md-pricetags:before {\n  content: \"\\f35b\"; }\n\n.ion-md-print:before {\n  content: \"\\f35c\"; }\n\n.ion-md-pulse:before {\n  content: \"\\f35d\"; }\n\n.ion-md-qr-scanner:before {\n  content: \"\\f35e\"; }\n\n.ion-md-quote:before {\n  content: \"\\f35f\"; }\n\n.ion-md-radio:before {\n  content: \"\\f362\"; }\n\n.ion-md-radio-button-off:before {\n  content: \"\\f360\"; }\n\n.ion-md-radio-button-on:before {\n  content: \"\\f361\"; }\n\n.ion-md-rainy:before {\n  content: \"\\f363\"; }\n\n.ion-md-recording:before {\n  content: \"\\f364\"; }\n\n.ion-md-redo:before {\n  content: \"\\f365\"; }\n\n.ion-md-refresh:before {\n  content: \"\\f366\"; }\n\n.ion-md-refresh-circle:before {\n  content: \"\\f228\"; }\n\n.ion-md-remove:before {\n  content: \"\\f368\"; }\n\n.ion-md-remove-circle:before {\n  content: \"\\f367\"; }\n\n.ion-md-remove-circle-outline:before {\n  content: \"\\f176\"; }\n\n.ion-md-reorder:before {\n  content: \"\\f369\"; }\n\n.ion-md-repeat:before {\n  content: \"\\f36a\"; }\n\n.ion-md-resize:before {\n  content: \"\\f36b\"; }\n\n.ion-md-restaurant:before {\n  content: \"\\f36c\"; }\n\n.ion-md-return-left:before {\n  content: \"\\f36d\"; }\n\n.ion-md-return-right:before {\n  content: \"\\f36e\"; }\n\n.ion-md-reverse-camera:before {\n  content: \"\\f36f\"; }\n\n.ion-md-rewind:before {\n  content: \"\\f370\"; }\n\n.ion-md-ribbon:before {\n  content: \"\\f371\"; }\n\n.ion-md-rocket:before {\n  content: \"\\f179\"; }\n\n.ion-md-rose:before {\n  content: \"\\f372\"; }\n\n.ion-md-sad:before {\n  content: \"\\f373\"; }\n\n.ion-md-save:before {\n  content: \"\\f1a9\"; }\n\n.ion-md-school:before {\n  content: \"\\f374\"; }\n\n.ion-md-search:before {\n  content: \"\\f375\"; }\n\n.ion-md-send:before {\n  content: \"\\f376\"; }\n\n.ion-md-settings:before {\n  content: \"\\f377\"; }\n\n.ion-md-share:before {\n  content: \"\\f379\"; }\n\n.ion-md-share-alt:before {\n  content: \"\\f378\"; }\n\n.ion-md-shirt:before {\n  content: \"\\f37a\"; }\n\n.ion-md-shuffle:before {\n  content: \"\\f37b\"; }\n\n.ion-md-skip-backward:before {\n  content: \"\\f37c\"; }\n\n.ion-md-skip-forward:before {\n  content: \"\\f37d\"; }\n\n.ion-md-snow:before {\n  content: \"\\f37e\"; }\n\n.ion-md-speedometer:before {\n  content: \"\\f37f\"; }\n\n.ion-md-square:before {\n  content: \"\\f381\"; }\n\n.ion-md-square-outline:before {\n  content: \"\\f380\"; }\n\n.ion-md-star:before {\n  content: \"\\f384\"; }\n\n.ion-md-star-half:before {\n  content: \"\\f382\"; }\n\n.ion-md-star-outline:before {\n  content: \"\\f383\"; }\n\n.ion-md-stats:before {\n  content: \"\\f385\"; }\n\n.ion-md-stopwatch:before {\n  content: \"\\f386\"; }\n\n.ion-md-subway:before {\n  content: \"\\f387\"; }\n\n.ion-md-sunny:before {\n  content: \"\\f388\"; }\n\n.ion-md-swap:before {\n  content: \"\\f389\"; }\n\n.ion-md-switch:before {\n  content: \"\\f38a\"; }\n\n.ion-md-sync:before {\n  content: \"\\f38b\"; }\n\n.ion-md-tablet-landscape:before {\n  content: \"\\f38c\"; }\n\n.ion-md-tablet-portrait:before {\n  content: \"\\f38d\"; }\n\n.ion-md-tennisball:before {\n  content: \"\\f38e\"; }\n\n.ion-md-text:before {\n  content: \"\\f38f\"; }\n\n.ion-md-thermometer:before {\n  content: \"\\f390\"; }\n\n.ion-md-thumbs-down:before {\n  content: \"\\f391\"; }\n\n.ion-md-thumbs-up:before {\n  content: \"\\f392\"; }\n\n.ion-md-thunderstorm:before {\n  content: \"\\f393\"; }\n\n.ion-md-time:before {\n  content: \"\\f394\"; }\n\n.ion-md-timer:before {\n  content: \"\\f395\"; }\n\n.ion-md-today:before {\n  content: \"\\f17d\"; }\n\n.ion-md-train:before {\n  content: \"\\f396\"; }\n\n.ion-md-transgender:before {\n  content: \"\\f397\"; }\n\n.ion-md-trash:before {\n  content: \"\\f398\"; }\n\n.ion-md-trending-down:before {\n  content: \"\\f399\"; }\n\n.ion-md-trending-up:before {\n  content: \"\\f39a\"; }\n\n.ion-md-trophy:before {\n  content: \"\\f39b\"; }\n\n.ion-md-tv:before {\n  content: \"\\f17f\"; }\n\n.ion-md-umbrella:before {\n  content: \"\\f39c\"; }\n\n.ion-md-undo:before {\n  content: \"\\f39d\"; }\n\n.ion-md-unlock:before {\n  content: \"\\f39e\"; }\n\n.ion-md-videocam:before {\n  content: \"\\f39f\"; }\n\n.ion-md-volume-high:before {\n  content: \"\\f123\"; }\n\n.ion-md-volume-low:before {\n  content: \"\\f131\"; }\n\n.ion-md-volume-mute:before {\n  content: \"\\f3a1\"; }\n\n.ion-md-volume-off:before {\n  content: \"\\f3a2\"; }\n\n.ion-md-walk:before {\n  content: \"\\f3a4\"; }\n\n.ion-md-wallet:before {\n  content: \"\\f18f\"; }\n\n.ion-md-warning:before {\n  content: \"\\f3a5\"; }\n\n.ion-md-watch:before {\n  content: \"\\f3a6\"; }\n\n.ion-md-water:before {\n  content: \"\\f3a7\"; }\n\n.ion-md-wifi:before {\n  content: \"\\f3a8\"; }\n\n.ion-md-wine:before {\n  content: \"\\f3a9\"; }\n\n.ion-md-woman:before {\n  content: \"\\f3aa\"; }\n\n/*!\n * Bootstrap v4.1.3 (https://getbootstrap.com/)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n:root {\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #6c757d;\n  --gray-dark: #343a40;\n  --primary: #007bff;\n  --secondary: #6c757d;\n  --success: #28a745;\n  --info: #17a2b8;\n  --warning: #ffc107;\n  --danger: #dc3545;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\n@-ms-viewport {\n  width: device-width; }\n\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block; }\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff; }\n\n[tabindex=\"-1\"]:focus {\n  outline: 0 !important; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: 700; }\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\ndfn {\n  font-style: italic; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -.25em; }\n\nsup {\n  top: -.5em; }\n\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\n  a:hover {\n    color: #0056b3;\n    text-decoration: underline; }\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none; }\n  a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n    color: inherit;\n    text-decoration: none; }\n  a:not([href]):not([tabindex]):focus {\n    outline: 0; }\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 1em; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle;\n  border-style: none; }\n\nsvg {\n  overflow: hidden;\n  vertical-align: middle; }\n\ntable {\n  border-collapse: collapse; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: inherit; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: 0.5rem; }\n\nbutton {\n  border-radius: 0; }\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color; }\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\nbutton,\ninput {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox; }\n\ntextarea {\n  overflow: auto;\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\n\nprogress {\n  vertical-align: baseline; }\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\n\noutput {\n  display: inline-block; }\n\nsummary {\n  display: list-item;\n  cursor: pointer; }\n\ntemplate {\n  display: none; }\n\n[hidden] {\n  display: none !important; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.2;\n  color: inherit; }\n\nh1, .h1 {\n  font-size: 2.5rem; }\n\nh2, .h2 {\n  font-size: 2rem; }\n\nh3, .h3 {\n  font-size: 1.75rem; }\n\nh4, .h4 {\n  font-size: 1.5rem; }\n\nh5, .h5 {\n  font-size: 1.25rem; }\n\nh6, .h6 {\n  font-size: 1rem; }\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300; }\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: 400; }\n\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline-item {\n  display: inline-block; }\n  .list-inline-item:not(:last-child) {\n    margin-right: 0.5rem; }\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase; }\n\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem; }\n\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #6c757d; }\n  .blockquote-footer::before {\n    content: \"\\2014 \\00A0\"; }\n\n.img-fluid {\n  max-width: 100%;\n  height: auto; }\n\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto; }\n\n.figure {\n  display: inline-block; }\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1; }\n\n.figure-caption {\n  font-size: 90%;\n  color: #6c757d; }\n\ncode {\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-break: break-word; }\n  a > code {\n    color: inherit; }\n\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem; }\n  kbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: 700; }\n\npre {\n  display: block;\n  font-size: 87.5%;\n  color: #212529; }\n  pre code {\n    font-size: inherit;\n    color: inherit;\n    word-break: normal; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n  @media (min-width: 576px) {\n    .container {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .container {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n  .no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%; }\n\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none; }\n\n.col-1 {\n  flex: 0 0 8.33333%;\n  max-width: 8.33333%; }\n\n.col-2 {\n  flex: 0 0 16.66667%;\n  max-width: 16.66667%; }\n\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%; }\n\n.col-4 {\n  flex: 0 0 33.33333%;\n  max-width: 33.33333%; }\n\n.col-5 {\n  flex: 0 0 41.66667%;\n  max-width: 41.66667%; }\n\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%; }\n\n.col-7 {\n  flex: 0 0 58.33333%;\n  max-width: 58.33333%; }\n\n.col-8 {\n  flex: 0 0 66.66667%;\n  max-width: 66.66667%; }\n\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%; }\n\n.col-10 {\n  flex: 0 0 83.33333%;\n  max-width: 83.33333%; }\n\n.col-11 {\n  flex: 0 0 91.66667%;\n  max-width: 91.66667%; }\n\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%; }\n\n.order-first {\n  order: -1; }\n\n.order-last {\n  order: 13; }\n\n.order-0 {\n  order: 0; }\n\n.order-1 {\n  order: 1; }\n\n.order-2 {\n  order: 2; }\n\n.order-3 {\n  order: 3; }\n\n.order-4 {\n  order: 4; }\n\n.order-5 {\n  order: 5; }\n\n.order-6 {\n  order: 6; }\n\n.order-7 {\n  order: 7; }\n\n.order-8 {\n  order: 8; }\n\n.order-9 {\n  order: 9; }\n\n.order-10 {\n  order: 10; }\n\n.order-11 {\n  order: 11; }\n\n.order-12 {\n  order: 12; }\n\n.offset-1 {\n  margin-left: 8.33333%; }\n\n.offset-2 {\n  margin-left: 16.66667%; }\n\n.offset-3 {\n  margin-left: 25%; }\n\n.offset-4 {\n  margin-left: 33.33333%; }\n\n.offset-5 {\n  margin-left: 41.66667%; }\n\n.offset-6 {\n  margin-left: 50%; }\n\n.offset-7 {\n  margin-left: 58.33333%; }\n\n.offset-8 {\n  margin-left: 66.66667%; }\n\n.offset-9 {\n  margin-left: 75%; }\n\n.offset-10 {\n  margin-left: 83.33333%; }\n\n.offset-11 {\n  margin-left: 91.66667%; }\n\n@media (min-width: 576px) {\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-sm-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-sm-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-sm-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-sm-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-sm-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    order: -1; }\n  .order-sm-last {\n    order: 13; }\n  .order-sm-0 {\n    order: 0; }\n  .order-sm-1 {\n    order: 1; }\n  .order-sm-2 {\n    order: 2; }\n  .order-sm-3 {\n    order: 3; }\n  .order-sm-4 {\n    order: 4; }\n  .order-sm-5 {\n    order: 5; }\n  .order-sm-6 {\n    order: 6; }\n  .order-sm-7 {\n    order: 7; }\n  .order-sm-8 {\n    order: 8; }\n  .order-sm-9 {\n    order: 9; }\n  .order-sm-10 {\n    order: 10; }\n  .order-sm-11 {\n    order: 11; }\n  .order-sm-12 {\n    order: 12; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.33333%; }\n  .offset-sm-2 {\n    margin-left: 16.66667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333%; }\n  .offset-sm-5 {\n    margin-left: 41.66667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333%; }\n  .offset-sm-8 {\n    margin-left: 66.66667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333%; }\n  .offset-sm-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 768px) {\n  .col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-md-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-md-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-md-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-md-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-md-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    order: -1; }\n  .order-md-last {\n    order: 13; }\n  .order-md-0 {\n    order: 0; }\n  .order-md-1 {\n    order: 1; }\n  .order-md-2 {\n    order: 2; }\n  .order-md-3 {\n    order: 3; }\n  .order-md-4 {\n    order: 4; }\n  .order-md-5 {\n    order: 5; }\n  .order-md-6 {\n    order: 6; }\n  .order-md-7 {\n    order: 7; }\n  .order-md-8 {\n    order: 8; }\n  .order-md-9 {\n    order: 9; }\n  .order-md-10 {\n    order: 10; }\n  .order-md-11 {\n    order: 11; }\n  .order-md-12 {\n    order: 12; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.33333%; }\n  .offset-md-2 {\n    margin-left: 16.66667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333%; }\n  .offset-md-5 {\n    margin-left: 41.66667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333%; }\n  .offset-md-8 {\n    margin-left: 66.66667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333%; }\n  .offset-md-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 992px) {\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-lg-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-lg-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-lg-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-lg-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-lg-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    order: -1; }\n  .order-lg-last {\n    order: 13; }\n  .order-lg-0 {\n    order: 0; }\n  .order-lg-1 {\n    order: 1; }\n  .order-lg-2 {\n    order: 2; }\n  .order-lg-3 {\n    order: 3; }\n  .order-lg-4 {\n    order: 4; }\n  .order-lg-5 {\n    order: 5; }\n  .order-lg-6 {\n    order: 6; }\n  .order-lg-7 {\n    order: 7; }\n  .order-lg-8 {\n    order: 8; }\n  .order-lg-9 {\n    order: 9; }\n  .order-lg-10 {\n    order: 10; }\n  .order-lg-11 {\n    order: 11; }\n  .order-lg-12 {\n    order: 12; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.33333%; }\n  .offset-lg-2 {\n    margin-left: 16.66667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333%; }\n  .offset-lg-5 {\n    margin-left: 41.66667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333%; }\n  .offset-lg-8 {\n    margin-left: 66.66667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333%; }\n  .offset-lg-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 1200px) {\n  .col-xl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-xl-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-xl-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-xl-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-xl-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-xl-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    order: -1; }\n  .order-xl-last {\n    order: 13; }\n  .order-xl-0 {\n    order: 0; }\n  .order-xl-1 {\n    order: 1; }\n  .order-xl-2 {\n    order: 2; }\n  .order-xl-3 {\n    order: 3; }\n  .order-xl-4 {\n    order: 4; }\n  .order-xl-5 {\n    order: 5; }\n  .order-xl-6 {\n    order: 6; }\n  .order-xl-7 {\n    order: 7; }\n  .order-xl-8 {\n    order: 8; }\n  .order-xl-9 {\n    order: 9; }\n  .order-xl-10 {\n    order: 10; }\n  .order-xl-11 {\n    order: 11; }\n  .order-xl-12 {\n    order: 12; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.33333%; }\n  .offset-xl-2 {\n    margin-left: 16.66667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333%; }\n  .offset-xl-5 {\n    margin-left: 41.66667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333%; }\n  .offset-xl-8 {\n    margin-left: 66.66667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333%; }\n  .offset-xl-11 {\n    margin-left: 91.66667%; } }\n\n.table {\n  width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent; }\n  .table th,\n  .table td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #dee2e6; }\n  .table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #dee2e6; }\n  .table tbody + tbody {\n    border-top: 2px solid #dee2e6; }\n  .table .table {\n    background-color: #fff; }\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n\n.table-bordered {\n  border: 1px solid #dee2e6; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6; }\n  .table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n\n.table-borderless th,\n.table-borderless td,\n.table-borderless thead th,\n.table-borderless tbody + tbody {\n  border: 0; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.table-hover tbody tr:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #b8daff; }\n\n.table-hover .table-primary:hover {\n  background-color: #9fcdff; }\n  .table-hover .table-primary:hover > td,\n  .table-hover .table-primary:hover > th {\n    background-color: #9fcdff; }\n\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #d6d8db; }\n\n.table-hover .table-secondary:hover {\n  background-color: #c8cbcf; }\n  .table-hover .table-secondary:hover > td,\n  .table-hover .table-secondary:hover > th {\n    background-color: #c8cbcf; }\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #c3e6cb; }\n\n.table-hover .table-success:hover {\n  background-color: #b1dfbb; }\n  .table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #b1dfbb; }\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #bee5eb; }\n\n.table-hover .table-info:hover {\n  background-color: #abdde5; }\n  .table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #abdde5; }\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffeeba; }\n\n.table-hover .table-warning:hover {\n  background-color: #ffe8a1; }\n  .table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #ffe8a1; }\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f5c6cb; }\n\n.table-hover .table-danger:hover {\n  background-color: #f1b0b7; }\n  .table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #f1b0b7; }\n\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe; }\n\n.table-hover .table-light:hover {\n  background-color: #ececf6; }\n  .table-hover .table-light:hover > td,\n  .table-hover .table-light:hover > th {\n    background-color: #ececf6; }\n\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca; }\n\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe; }\n  .table-hover .table-dark:hover > td,\n  .table-hover .table-dark:hover > th {\n    background-color: #b9bbbe; }\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n  .table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: rgba(0, 0, 0, 0.075); }\n\n.table .thead-dark th {\n  color: #fff;\n  background-color: #212529;\n  border-color: #32383e; }\n\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6; }\n\n.table-dark {\n  color: #fff;\n  background-color: #212529; }\n  .table-dark th,\n  .table-dark td,\n  .table-dark thead th {\n    border-color: #32383e; }\n  .table-dark.table-bordered {\n    border: 0; }\n  .table-dark.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05); }\n  .table-dark.table-hover tbody tr:hover {\n    background-color: rgba(255, 255, 255, 0.075); }\n\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-sm > .table-bordered {\n      border: 0; } }\n\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-md > .table-bordered {\n      border: 0; } }\n\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-lg > .table-bordered {\n      border: 0; } }\n\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-xl > .table-bordered {\n      border: 0; } }\n\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar; }\n  .table-responsive > .table-bordered {\n    border: 0; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .form-control {\n      transition: none; } }\n  .form-control::-ms-expand {\n    background-color: transparent;\n    border: 0; }\n  .form-control:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #80bdff;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n  .form-control::placeholder {\n    color: #6c757d;\n    opacity: 1; }\n  .form-control:disabled, .form-control[readonly] {\n    background-color: #e9ecef;\n    opacity: 1; }\n\nselect.form-control:focus::-ms-value {\n  color: #495057;\n  background-color: #fff; }\n\n.form-control-file,\n.form-control-range {\n  display: block;\n  width: 100%; }\n\n.col-form-label {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5; }\n\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5; }\n\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0;\n  line-height: 1.5;\n  color: #212529;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0; }\n  .form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\n    padding-right: 0;\n    padding-left: 0; }\n\n.form-control-sm {\n  height: calc(1.8125rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.form-control-lg {\n  height: calc(2.875rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n\nselect.form-control[size], select.form-control[multiple] {\n  height: auto; }\n\ntextarea.form-control {\n  height: auto; }\n\n.form-group {\n  margin-bottom: 1rem; }\n\n.form-text {\n  display: block;\n  margin-top: 0.25rem; }\n\n.form-row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px; }\n  .form-row > .col,\n  .form-row > [class*=\"col-\"] {\n    padding-right: 5px;\n    padding-left: 5px; }\n\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem; }\n\n.form-check-input {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem; }\n  .form-check-input:disabled ~ .form-check-label {\n    color: #6c757d; }\n\n.form-check-label {\n  margin-bottom: 0; }\n\n.form-check-inline {\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem; }\n  .form-check-inline .form-check-input {\n    position: static;\n    margin-top: 0;\n    margin-right: 0.3125rem;\n    margin-left: 0; }\n\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #28a745; }\n\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(40, 167, 69, 0.9);\n  border-radius: 0.25rem; }\n\n.was-validated .form-control:valid, .form-control.is-valid, .was-validated\n.custom-select:valid,\n.custom-select.is-valid {\n  border-color: #28a745; }\n  .was-validated .form-control:valid:focus, .form-control.is-valid:focus, .was-validated\n  .custom-select:valid:focus,\n  .custom-select.is-valid:focus {\n    border-color: #28a745;\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n  .was-validated .form-control:valid ~ .valid-feedback,\n  .was-validated .form-control:valid ~ .valid-tooltip, .form-control.is-valid ~ .valid-feedback,\n  .form-control.is-valid ~ .valid-tooltip, .was-validated\n  .custom-select:valid ~ .valid-feedback,\n  .was-validated\n  .custom-select:valid ~ .valid-tooltip,\n  .custom-select.is-valid ~ .valid-feedback,\n  .custom-select.is-valid ~ .valid-tooltip {\n    display: block; }\n\n.was-validated .form-control-file:valid ~ .valid-feedback,\n.was-validated .form-control-file:valid ~ .valid-tooltip, .form-control-file.is-valid ~ .valid-feedback,\n.form-control-file.is-valid ~ .valid-tooltip {\n  display: block; }\n\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #28a745; }\n\n.was-validated .form-check-input:valid ~ .valid-feedback,\n.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\n.form-check-input.is-valid ~ .valid-tooltip {\n  display: block; }\n\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\n  color: #28a745; }\n  .was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\n    background-color: #71dd8a; }\n\n.was-validated .custom-control-input:valid ~ .valid-feedback,\n.was-validated .custom-control-input:valid ~ .valid-tooltip, .custom-control-input.is-valid ~ .valid-feedback,\n.custom-control-input.is-valid ~ .valid-tooltip {\n  display: block; }\n\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\n  background-color: #34ce57; }\n\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\n  border-color: #28a745; }\n  .was-validated .custom-file-input:valid ~ .custom-file-label::after, .custom-file-input.is-valid ~ .custom-file-label::after {\n    border-color: inherit; }\n\n.was-validated .custom-file-input:valid ~ .valid-feedback,\n.was-validated .custom-file-input:valid ~ .valid-tooltip, .custom-file-input.is-valid ~ .valid-feedback,\n.custom-file-input.is-valid ~ .valid-tooltip {\n  display: block; }\n\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545; }\n\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.9);\n  border-radius: 0.25rem; }\n\n.was-validated .form-control:invalid, .form-control.is-invalid, .was-validated\n.custom-select:invalid,\n.custom-select.is-invalid {\n  border-color: #dc3545; }\n  .was-validated .form-control:invalid:focus, .form-control.is-invalid:focus, .was-validated\n  .custom-select:invalid:focus,\n  .custom-select.is-invalid:focus {\n    border-color: #dc3545;\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n  .was-validated .form-control:invalid ~ .invalid-feedback,\n  .was-validated .form-control:invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback,\n  .form-control.is-invalid ~ .invalid-tooltip, .was-validated\n  .custom-select:invalid ~ .invalid-feedback,\n  .was-validated\n  .custom-select:invalid ~ .invalid-tooltip,\n  .custom-select.is-invalid ~ .invalid-feedback,\n  .custom-select.is-invalid ~ .invalid-tooltip {\n    display: block; }\n\n.was-validated .form-control-file:invalid ~ .invalid-feedback,\n.was-validated .form-control-file:invalid ~ .invalid-tooltip, .form-control-file.is-invalid ~ .invalid-feedback,\n.form-control-file.is-invalid ~ .invalid-tooltip {\n  display: block; }\n\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #dc3545; }\n\n.was-validated .form-check-input:invalid ~ .invalid-feedback,\n.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\n.form-check-input.is-invalid ~ .invalid-tooltip {\n  display: block; }\n\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\n  color: #dc3545; }\n  .was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\n    background-color: #efa2a9; }\n\n.was-validated .custom-control-input:invalid ~ .invalid-feedback,\n.was-validated .custom-control-input:invalid ~ .invalid-tooltip, .custom-control-input.is-invalid ~ .invalid-feedback,\n.custom-control-input.is-invalid ~ .invalid-tooltip {\n  display: block; }\n\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\n  background-color: #e4606d; }\n\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\n  border-color: #dc3545; }\n  .was-validated .custom-file-input:invalid ~ .custom-file-label::after, .custom-file-input.is-invalid ~ .custom-file-label::after {\n    border-color: inherit; }\n\n.was-validated .custom-file-input:invalid ~ .invalid-feedback,\n.was-validated .custom-file-input:invalid ~ .invalid-tooltip, .custom-file-input.is-invalid ~ .invalid-feedback,\n.custom-file-input.is-invalid ~ .invalid-tooltip {\n  display: block; }\n\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n\n.form-inline {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center; }\n  .form-inline .form-check {\n    width: 100%; }\n  @media (min-width: 576px) {\n    .form-inline label {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 0; }\n    .form-inline .form-group {\n      display: flex;\n      flex: 0 0 auto;\n      flex-flow: row wrap;\n      align-items: center;\n      margin-bottom: 0; }\n    .form-inline .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .form-inline .form-control-plaintext {\n      display: inline-block; }\n    .form-inline .input-group,\n    .form-inline .custom-select {\n      width: auto; }\n    .form-inline .form-check {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: auto;\n      padding-left: 0; }\n    .form-inline .form-check-input {\n      position: relative;\n      margin-top: 0;\n      margin-right: 0.25rem;\n      margin-left: 0; }\n    .form-inline .custom-control {\n      align-items: center;\n      justify-content: center; }\n    .form-inline .custom-control-label {\n      margin-bottom: 0; } }\n\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .btn {\n      transition: none; } }\n  .btn:hover, .btn:focus {\n    text-decoration: none; }\n  .btn:focus, .btn.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n  .btn.disabled, .btn:disabled {\n    opacity: 0.65; }\n  .btn:not(:disabled):not(.disabled) {\n    cursor: pointer; }\n\na.btn.disabled,\nfieldset:disabled a.btn {\n  pointer-events: none; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #0069d9;\n    border-color: #0062cc; }\n  .btn-primary:focus, .btn-primary.focus {\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n  .btn-primary.disabled, .btn-primary:disabled {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n  .btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,\n  .show > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #0062cc;\n    border-color: #005cbf; }\n    .btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-primary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n\n.btn-secondary {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d; }\n  .btn-secondary:hover {\n    color: #fff;\n    background-color: #5a6268;\n    border-color: #545b62; }\n  .btn-secondary:focus, .btn-secondary.focus {\n    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n  .btn-secondary.disabled, .btn-secondary:disabled {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n  .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,\n  .show > .btn-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #545b62;\n    border-color: #4e555b; }\n    .btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-secondary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n\n.btn-success {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #218838;\n    border-color: #1e7e34; }\n  .btn-success:focus, .btn-success.focus {\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n  .btn-success.disabled, .btn-success:disabled {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745; }\n  .btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,\n  .show > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #1e7e34;\n    border-color: #1c7430; }\n    .btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-success.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n\n.btn-info {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #138496;\n    border-color: #117a8b; }\n  .btn-info:focus, .btn-info.focus {\n    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n  .btn-info.disabled, .btn-info:disabled {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8; }\n  .btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,\n  .show > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #117a8b;\n    border-color: #10707f; }\n    .btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-info.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n\n.btn-warning {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107; }\n  .btn-warning:hover {\n    color: #212529;\n    background-color: #e0a800;\n    border-color: #d39e00; }\n  .btn-warning:focus, .btn-warning.focus {\n    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n  .btn-warning.disabled, .btn-warning:disabled {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n  .btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,\n  .show > .btn-warning.dropdown-toggle {\n    color: #212529;\n    background-color: #d39e00;\n    border-color: #c69500; }\n    .btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-warning.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #c82333;\n    border-color: #bd2130; }\n  .btn-danger:focus, .btn-danger.focus {\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n  .btn-danger.disabled, .btn-danger:disabled {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n  .btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,\n  .show > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #bd2130;\n    border-color: #b21f2d; }\n    .btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-danger.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n\n.btn-light {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa; }\n  .btn-light:hover {\n    color: #212529;\n    background-color: #e2e6ea;\n    border-color: #dae0e5; }\n  .btn-light:focus, .btn-light.focus {\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n  .btn-light.disabled, .btn-light:disabled {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n  .btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,\n  .show > .btn-light.dropdown-toggle {\n    color: #212529;\n    background-color: #dae0e5;\n    border-color: #d3d9df; }\n    .btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-light.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n\n.btn-dark {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40; }\n  .btn-dark:hover {\n    color: #fff;\n    background-color: #23272b;\n    border-color: #1d2124; }\n  .btn-dark:focus, .btn-dark.focus {\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n  .btn-dark.disabled, .btn-dark:disabled {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40; }\n  .btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,\n  .show > .btn-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #1d2124;\n    border-color: #171a1d; }\n    .btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-dark.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n\n.btn-outline-primary {\n  color: #007bff;\n  background-color: transparent;\n  background-image: none;\n  border-color: #007bff; }\n  .btn-outline-primary:hover {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n  .btn-outline-primary:focus, .btn-outline-primary.focus {\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n  .btn-outline-primary.disabled, .btn-outline-primary:disabled {\n    color: #007bff;\n    background-color: transparent; }\n  .btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n    .btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-primary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n\n.btn-outline-secondary {\n  color: #6c757d;\n  background-color: transparent;\n  background-image: none;\n  border-color: #6c757d; }\n  .btn-outline-secondary:hover {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n  .btn-outline-secondary:focus, .btn-outline-secondary.focus {\n    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n  .btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n    color: #6c757d;\n    background-color: transparent; }\n  .btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n    .btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-secondary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n\n.btn-outline-success {\n  color: #28a745;\n  background-color: transparent;\n  background-image: none;\n  border-color: #28a745; }\n  .btn-outline-success:hover {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745; }\n  .btn-outline-success:focus, .btn-outline-success.focus {\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n  .btn-outline-success.disabled, .btn-outline-success:disabled {\n    color: #28a745;\n    background-color: transparent; }\n  .btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-success.dropdown-toggle {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745; }\n    .btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-success.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n\n.btn-outline-info {\n  color: #17a2b8;\n  background-color: transparent;\n  background-image: none;\n  border-color: #17a2b8; }\n  .btn-outline-info:hover {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8; }\n  .btn-outline-info:focus, .btn-outline-info.focus {\n    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n  .btn-outline-info.disabled, .btn-outline-info:disabled {\n    color: #17a2b8;\n    background-color: transparent; }\n  .btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-info.dropdown-toggle {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8; }\n    .btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-info.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n\n.btn-outline-warning {\n  color: #ffc107;\n  background-color: transparent;\n  background-image: none;\n  border-color: #ffc107; }\n  .btn-outline-warning:hover {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n  .btn-outline-warning:focus, .btn-outline-warning.focus {\n    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n  .btn-outline-warning.disabled, .btn-outline-warning:disabled {\n    color: #ffc107;\n    background-color: transparent; }\n  .btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-warning.dropdown-toggle {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n    .btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-warning.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n\n.btn-outline-danger {\n  color: #dc3545;\n  background-color: transparent;\n  background-image: none;\n  border-color: #dc3545; }\n  .btn-outline-danger:hover {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n  .btn-outline-danger:focus, .btn-outline-danger.focus {\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n  .btn-outline-danger.disabled, .btn-outline-danger:disabled {\n    color: #dc3545;\n    background-color: transparent; }\n  .btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n    .btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-danger.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n\n.btn-outline-light {\n  color: #f8f9fa;\n  background-color: transparent;\n  background-image: none;\n  border-color: #f8f9fa; }\n  .btn-outline-light:hover {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n  .btn-outline-light:focus, .btn-outline-light.focus {\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n  .btn-outline-light.disabled, .btn-outline-light:disabled {\n    color: #f8f9fa;\n    background-color: transparent; }\n  .btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-light.dropdown-toggle {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n    .btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-light.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n\n.btn-outline-dark {\n  color: #343a40;\n  background-color: transparent;\n  background-image: none;\n  border-color: #343a40; }\n  .btn-outline-dark:hover {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40; }\n  .btn-outline-dark:focus, .btn-outline-dark.focus {\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n  .btn-outline-dark.disabled, .btn-outline-dark:disabled {\n    color: #343a40;\n    background-color: transparent; }\n  .btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40; }\n    .btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-dark.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n\n.btn-link {\n  font-weight: 400;\n  color: #007bff;\n  background-color: transparent; }\n  .btn-link:hover {\n    color: #0056b3;\n    text-decoration: underline;\n    background-color: transparent;\n    border-color: transparent; }\n  .btn-link:focus, .btn-link.focus {\n    text-decoration: underline;\n    border-color: transparent;\n    box-shadow: none; }\n  .btn-link:disabled, .btn-link.disabled {\n    color: #6c757d;\n    pointer-events: none; }\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n  .btn-block + .btn-block {\n    margin-top: 0.5rem; }\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n\n.fade {\n  transition: opacity 0.15s linear; }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .fade {\n      transition: none; } }\n  .fade:not(.show) {\n    opacity: 0; }\n\n.collapse:not(.show) {\n  display: none; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease; }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .collapsing {\n      transition: none; } }\n\n.dropup,\n.dropright,\n.dropdown,\n.dropleft {\n  position: relative; }\n\n.dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent; }\n\n.dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem; }\n\n.dropdown-menu-right {\n  right: 0;\n  left: auto; }\n\n.dropup .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: 0.125rem; }\n\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent; }\n\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropright .dropdown-menu {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: 0.125rem; }\n\n.dropright .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid; }\n\n.dropright .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropright .dropdown-toggle::after {\n  vertical-align: 0; }\n\n.dropleft .dropdown-menu {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: 0.125rem; }\n\n.dropleft .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\"; }\n\n.dropleft .dropdown-toggle::after {\n  display: none; }\n\n.dropleft .dropdown-toggle::before {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent; }\n\n.dropleft .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropleft .dropdown-toggle::before {\n  vertical-align: 0; }\n\n.dropdown-menu[x-placement^=\"top\"], .dropdown-menu[x-placement^=\"right\"], .dropdown-menu[x-placement^=\"bottom\"], .dropdown-menu[x-placement^=\"left\"] {\n  right: auto;\n  bottom: auto; }\n\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef; }\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0; }\n  .dropdown-item:hover, .dropdown-item:focus {\n    color: #16181b;\n    text-decoration: none;\n    background-color: #f8f9fa; }\n  .dropdown-item.active, .dropdown-item:active {\n    color: #fff;\n    text-decoration: none;\n    background-color: #007bff; }\n  .dropdown-item.disabled, .dropdown-item:disabled {\n    color: #6c757d;\n    background-color: transparent; }\n\n.dropdown-menu.show {\n  display: block; }\n\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap; }\n\n.dropdown-item-text {\n  display: block;\n  padding: 0.25rem 1.5rem;\n  color: #212529; }\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle; }\n  .btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    flex: 0 1 auto; }\n    .btn-group > .btn:hover,\n    .btn-group-vertical > .btn:hover {\n      z-index: 1; }\n    .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 1; }\n  .btn-group .btn + .btn,\n  .btn-group .btn + .btn-group,\n  .btn-group .btn-group + .btn,\n  .btn-group .btn-group + .btn-group,\n  .btn-group-vertical .btn + .btn,\n  .btn-group-vertical .btn + .btn-group,\n  .btn-group-vertical .btn-group + .btn,\n  .btn-group-vertical .btn-group + .btn-group {\n    margin-left: -1px; }\n\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n  .btn-toolbar .input-group {\n    width: auto; }\n\n.btn-group > .btn:first-child {\n  margin-left: 0; }\n\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem; }\n  .dropdown-toggle-split::after,\n  .dropup .dropdown-toggle-split::after,\n  .dropright .dropdown-toggle-split::after {\n    margin-left: 0; }\n  .dropleft .dropdown-toggle-split::before {\n    margin-right: 0; }\n\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem; }\n\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem; }\n\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center; }\n  .btn-group-vertical .btn,\n  .btn-group-vertical .btn-group {\n    width: 100%; }\n  .btn-group-vertical > .btn + .btn,\n  .btn-group-vertical > .btn + .btn-group,\n  .btn-group-vertical > .btn-group + .btn,\n  .btn-group-vertical > .btn-group + .btn-group {\n    margin-top: -1px;\n    margin-left: 0; }\n  .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n  .btn-group-vertical > .btn-group:not(:last-child) > .btn {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0; }\n  .btn-group-vertical > .btn:not(:first-child),\n  .btn-group-vertical > .btn-group:not(:first-child) > .btn {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n\n.btn-group-toggle > .btn,\n.btn-group-toggle > .btn-group > .btn {\n  margin-bottom: 0; }\n  .btn-group-toggle > .btn input[type=\"radio\"],\n  .btn-group-toggle > .btn input[type=\"checkbox\"],\n  .btn-group-toggle > .btn-group > .btn input[type=\"radio\"],\n  .btn-group-toggle > .btn-group > .btn input[type=\"checkbox\"] {\n    position: absolute;\n    clip: rect(0, 0, 0, 0);\n    pointer-events: none; }\n\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%; }\n  .input-group > .form-control,\n  .input-group > .custom-select,\n  .input-group > .custom-file {\n    position: relative;\n    flex: 1 1 auto;\n    width: 1%;\n    margin-bottom: 0; }\n    .input-group > .form-control + .form-control,\n    .input-group > .form-control + .custom-select,\n    .input-group > .form-control + .custom-file,\n    .input-group > .custom-select + .form-control,\n    .input-group > .custom-select + .custom-select,\n    .input-group > .custom-select + .custom-file,\n    .input-group > .custom-file + .form-control,\n    .input-group > .custom-file + .custom-select,\n    .input-group > .custom-file + .custom-file {\n      margin-left: -1px; }\n  .input-group > .form-control:focus,\n  .input-group > .custom-select:focus,\n  .input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {\n    z-index: 3; }\n  .input-group > .custom-file .custom-file-input:focus {\n    z-index: 4; }\n  .input-group > .form-control:not(:last-child),\n  .input-group > .custom-select:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0; }\n  .input-group > .form-control:not(:first-child),\n  .input-group > .custom-select:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0; }\n  .input-group > .custom-file {\n    display: flex;\n    align-items: center; }\n    .input-group > .custom-file:not(:last-child) .custom-file-label,\n    .input-group > .custom-file:not(:last-child) .custom-file-label::after {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0; }\n    .input-group > .custom-file:not(:first-child) .custom-file-label {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0; }\n\n.input-group-prepend,\n.input-group-append {\n  display: flex; }\n  .input-group-prepend .btn,\n  .input-group-append .btn {\n    position: relative;\n    z-index: 2; }\n  .input-group-prepend .btn + .btn,\n  .input-group-prepend .btn + .input-group-text,\n  .input-group-prepend .input-group-text + .input-group-text,\n  .input-group-prepend .input-group-text + .btn,\n  .input-group-append .btn + .btn,\n  .input-group-append .btn + .input-group-text,\n  .input-group-append .input-group-text + .input-group-text,\n  .input-group-append .input-group-text + .btn {\n    margin-left: -1px; }\n\n.input-group-prepend {\n  margin-right: -1px; }\n\n.input-group-append {\n  margin-left: -1px; }\n\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem; }\n  .input-group-text input[type=\"radio\"],\n  .input-group-text input[type=\"checkbox\"] {\n    margin-top: 0; }\n\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-prepend > .input-group-text,\n.input-group-lg > .input-group-append > .input-group-text,\n.input-group-lg > .input-group-prepend > .btn,\n.input-group-lg > .input-group-append > .btn {\n  height: calc(2.875rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-prepend > .input-group-text,\n.input-group-sm > .input-group-append > .input-group-text,\n.input-group-sm > .input-group-prepend > .btn,\n.input-group-sm > .input-group-append > .btn {\n  height: calc(1.8125rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.input-group > .input-group-prepend > .btn,\n.input-group > .input-group-prepend > .input-group-text,\n.input-group > .input-group-append:not(:last-child) > .btn,\n.input-group > .input-group-append:not(:last-child) > .input-group-text,\n.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.input-group > .input-group-append > .btn,\n.input-group > .input-group-append > .input-group-text,\n.input-group > .input-group-prepend:not(:first-child) > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\n.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.custom-control {\n  position: relative;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem; }\n\n.custom-control-inline {\n  display: inline-flex;\n  margin-right: 1rem; }\n\n.custom-control-input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0; }\n  .custom-control-input:checked ~ .custom-control-label::before {\n    color: #fff;\n    background-color: #007bff; }\n  .custom-control-input:focus ~ .custom-control-label::before {\n    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n  .custom-control-input:active ~ .custom-control-label::before {\n    color: #fff;\n    background-color: #b3d7ff; }\n  .custom-control-input:disabled ~ .custom-control-label {\n    color: #6c757d; }\n    .custom-control-input:disabled ~ .custom-control-label::before {\n      background-color: #e9ecef; }\n\n.custom-control-label {\n  position: relative;\n  margin-bottom: 0; }\n  .custom-control-label::before {\n    position: absolute;\n    top: 0.25rem;\n    left: -1.5rem;\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    pointer-events: none;\n    content: \"\";\n    user-select: none;\n    background-color: #dee2e6; }\n  .custom-control-label::after {\n    position: absolute;\n    top: 0.25rem;\n    left: -1.5rem;\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    content: \"\";\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: 50% 50%; }\n\n.custom-checkbox .custom-control-label::before {\n  border-radius: 0.25rem; }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #007bff; }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\"); }\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\n  background-color: #007bff; }\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\"); }\n\n.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5); }\n\n.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5); }\n\n.custom-radio .custom-control-label::before {\n  border-radius: 50%; }\n\n.custom-radio .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #007bff; }\n\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\"); }\n\n.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5); }\n\n.custom-select {\n  display: inline-block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center;\n  background-size: 8px 10px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  appearance: none; }\n  .custom-select:focus {\n    border-color: #80bdff;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(128, 189, 255, 0.5); }\n    .custom-select:focus::-ms-value {\n      color: #495057;\n      background-color: #fff; }\n  .custom-select[multiple], .custom-select[size]:not([size=\"1\"]) {\n    height: auto;\n    padding-right: 0.75rem;\n    background-image: none; }\n  .custom-select:disabled {\n    color: #6c757d;\n    background-color: #e9ecef; }\n  .custom-select::-ms-expand {\n    opacity: 0; }\n\n.custom-select-sm {\n  height: calc(1.8125rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 75%; }\n\n.custom-select-lg {\n  height: calc(2.875rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 125%; }\n\n.custom-file {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  margin-bottom: 0; }\n\n.custom-file-input {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  margin: 0;\n  opacity: 0; }\n  .custom-file-input:focus ~ .custom-file-label {\n    border-color: #80bdff;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n    .custom-file-input:focus ~ .custom-file-label::after {\n      border-color: #80bdff; }\n  .custom-file-input:disabled ~ .custom-file-label {\n    background-color: #e9ecef; }\n  .custom-file-input:lang(en) ~ .custom-file-label::after {\n    content: \"Browse\"; }\n\n.custom-file-label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem; }\n  .custom-file-label::after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 3;\n    display: block;\n    height: 2.25rem;\n    padding: 0.375rem 0.75rem;\n    line-height: 1.5;\n    color: #495057;\n    content: \"Browse\";\n    background-color: #e9ecef;\n    border-left: 1px solid #ced4da;\n    border-radius: 0 0.25rem 0.25rem 0; }\n\n.custom-range {\n  width: 100%;\n  padding-left: 0;\n  background-color: transparent;\n  appearance: none; }\n  .custom-range:focus {\n    outline: none; }\n    .custom-range:focus::-webkit-slider-thumb {\n      box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n    .custom-range:focus::-moz-range-thumb {\n      box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n    .custom-range:focus::-ms-thumb {\n      box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n  .custom-range::-moz-focus-outer {\n    border: 0; }\n  .custom-range::-webkit-slider-thumb {\n    width: 1rem;\n    height: 1rem;\n    margin-top: -0.25rem;\n    background-color: #007bff;\n    border: 0;\n    border-radius: 1rem;\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    appearance: none; }\n    @media screen and (prefers-reduced-motion: reduce) {\n      .custom-range::-webkit-slider-thumb {\n        transition: none; } }\n    .custom-range::-webkit-slider-thumb:active {\n      background-color: #b3d7ff; }\n  .custom-range::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: #dee2e6;\n    border-color: transparent;\n    border-radius: 1rem; }\n  .custom-range::-moz-range-thumb {\n    width: 1rem;\n    height: 1rem;\n    background-color: #007bff;\n    border: 0;\n    border-radius: 1rem;\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    appearance: none; }\n    @media screen and (prefers-reduced-motion: reduce) {\n      .custom-range::-moz-range-thumb {\n        transition: none; } }\n    .custom-range::-moz-range-thumb:active {\n      background-color: #b3d7ff; }\n  .custom-range::-moz-range-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: #dee2e6;\n    border-color: transparent;\n    border-radius: 1rem; }\n  .custom-range::-ms-thumb {\n    width: 1rem;\n    height: 1rem;\n    margin-top: 0;\n    margin-right: 0.2rem;\n    margin-left: 0.2rem;\n    background-color: #007bff;\n    border: 0;\n    border-radius: 1rem;\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    appearance: none; }\n    @media screen and (prefers-reduced-motion: reduce) {\n      .custom-range::-ms-thumb {\n        transition: none; } }\n    .custom-range::-ms-thumb:active {\n      background-color: #b3d7ff; }\n  .custom-range::-ms-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: transparent;\n    border-color: transparent;\n    border-width: 0.5rem; }\n  .custom-range::-ms-fill-lower {\n    background-color: #dee2e6;\n    border-radius: 1rem; }\n  .custom-range::-ms-fill-upper {\n    margin-right: 15px;\n    background-color: #dee2e6;\n    border-radius: 1rem; }\n\n.custom-control-label::before,\n.custom-file-label,\n.custom-select {\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .custom-control-label::before,\n    .custom-file-label,\n    .custom-select {\n      transition: none; } }\n\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem; }\n  .nav-link:hover, .nav-link:focus {\n    text-decoration: none; }\n  .nav-link.disabled {\n    color: #6c757d; }\n\n.nav-tabs {\n  border-bottom: 1px solid #dee2e6; }\n  .nav-tabs .nav-item {\n    margin-bottom: -1px; }\n  .nav-tabs .nav-link {\n    border: 1px solid transparent;\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n    .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n      border-color: #e9ecef #e9ecef #dee2e6; }\n    .nav-tabs .nav-link.disabled {\n      color: #6c757d;\n      background-color: transparent;\n      border-color: transparent; }\n  .nav-tabs .nav-link.active,\n  .nav-tabs .nav-item.show .nav-link {\n    color: #495057;\n    background-color: #fff;\n    border-color: #dee2e6 #dee2e6 #fff; }\n  .nav-tabs .dropdown-menu {\n    margin-top: -1px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n\n.nav-pills .nav-link {\n  border-radius: 0.25rem; }\n\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #007bff; }\n\n.nav-fill .nav-item {\n  flex: 1 1 auto;\n  text-align: center; }\n\n.nav-justified .nav-item {\n  flex-basis: 0;\n  flex-grow: 1;\n  text-align: center; }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem; }\n  .navbar > .container,\n  .navbar > .container-fluid {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between; }\n\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap; }\n  .navbar-brand:hover, .navbar-brand:focus {\n    text-decoration: none; }\n\n.navbar-nav {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n  .navbar-nav .nav-link {\n    padding-right: 0;\n    padding-left: 0; }\n  .navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n\n.navbar-text {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem; }\n\n.navbar-collapse {\n  flex-basis: 100%;\n  flex-grow: 1;\n  align-items: center; }\n\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n  .navbar-toggler:hover, .navbar-toggler:focus {\n    text-decoration: none; }\n  .navbar-toggler:not(:disabled):not(.disabled) {\n    cursor: pointer; }\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%; }\n\n@media (max-width: 575.98px) {\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-sm .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-sm .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-sm .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-sm > .container,\n    .navbar-expand-sm > .container-fluid {\n      flex-wrap: nowrap; }\n    .navbar-expand-sm .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-sm .navbar-toggler {\n      display: none; } }\n\n@media (max-width: 767.98px) {\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-md .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-md .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-md .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-md > .container,\n    .navbar-expand-md > .container-fluid {\n      flex-wrap: nowrap; }\n    .navbar-expand-md .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-md .navbar-toggler {\n      display: none; } }\n\n@media (max-width: 991.98px) {\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-lg .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-lg .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-lg .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-lg > .container,\n    .navbar-expand-lg > .container-fluid {\n      flex-wrap: nowrap; }\n    .navbar-expand-lg .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-lg .navbar-toggler {\n      display: none; } }\n\n@media (max-width: 1199.98px) {\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-xl .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-xl .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-xl .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-xl > .container,\n    .navbar-expand-xl > .container-fluid {\n      flex-wrap: nowrap; }\n    .navbar-expand-xl .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-xl .navbar-toggler {\n      display: none; } }\n\n.navbar-expand {\n  flex-flow: row nowrap;\n  justify-content: flex-start; }\n  .navbar-expand > .container,\n  .navbar-expand > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; }\n  .navbar-expand .navbar-nav {\n    flex-direction: row; }\n    .navbar-expand .navbar-nav .dropdown-menu {\n      position: absolute; }\n    .navbar-expand .navbar-nav .nav-link {\n      padding-right: 0.5rem;\n      padding-left: 0.5rem; }\n  .navbar-expand > .container,\n  .navbar-expand > .container-fluid {\n    flex-wrap: nowrap; }\n  .navbar-expand .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto; }\n  .navbar-expand .navbar-toggler {\n    display: none; }\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9); }\n  .navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\n    color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5); }\n  .navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n    color: rgba(0, 0, 0, 0.7); }\n  .navbar-light .navbar-nav .nav-link.disabled {\n    color: rgba(0, 0, 0, 0.3); }\n\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1); }\n\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5); }\n  .navbar-light .navbar-text a {\n    color: rgba(0, 0, 0, 0.9); }\n    .navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {\n      color: rgba(0, 0, 0, 0.9); }\n\n.navbar-dark .navbar-brand {\n  color: #fff; }\n  .navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\n    color: #fff; }\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5); }\n  .navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\n    color: rgba(255, 255, 255, 0.75); }\n  .navbar-dark .navbar-nav .nav-link.disabled {\n    color: rgba(255, 255, 255, 0.25); }\n\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff; }\n\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1); }\n\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.5); }\n  .navbar-dark .navbar-text a {\n    color: #fff; }\n    .navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {\n      color: #fff; }\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem; }\n  .card > hr {\n    margin-right: 0;\n    margin-left: 0; }\n  .card > .list-group:first-child .list-group-item:first-child {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n  .card > .list-group:last-child .list-group-item:last-child {\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n\n.card-body {\n  flex: 1 1 auto;\n  padding: 1.25rem; }\n\n.card-title {\n  margin-bottom: 0.75rem; }\n\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0; }\n\n.card-text:last-child {\n  margin-bottom: 0; }\n\n.card-link:hover {\n  text-decoration: none; }\n\n.card-link + .card-link {\n  margin-left: 1.25rem; }\n\n.card-header {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125); }\n  .card-header:first-child {\n    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0; }\n  .card-header + .list-group .list-group-item:first-child {\n    border-top: 0; }\n\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125); }\n  .card-footer:last-child {\n    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px); }\n\n.card-header-tabs {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0; }\n\n.card-header-pills {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem; }\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem; }\n\n.card-img {\n  width: 100%;\n  border-radius: calc(0.25rem - 1px); }\n\n.card-img-top {\n  width: 100%;\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px); }\n\n.card-img-bottom {\n  width: 100%;\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px); }\n\n.card-deck {\n  display: flex;\n  flex-direction: column; }\n  .card-deck .card {\n    margin-bottom: 15px; }\n  @media (min-width: 576px) {\n    .card-deck {\n      flex-flow: row wrap;\n      margin-right: -15px;\n      margin-left: -15px; }\n      .card-deck .card {\n        display: flex;\n        flex: 1 0 0%;\n        flex-direction: column;\n        margin-right: 15px;\n        margin-bottom: 0;\n        margin-left: 15px; } }\n\n.card-group {\n  display: flex;\n  flex-direction: column; }\n  .card-group > .card {\n    margin-bottom: 15px; }\n  @media (min-width: 576px) {\n    .card-group {\n      flex-flow: row wrap; }\n      .card-group > .card {\n        flex: 1 0 0%;\n        margin-bottom: 0; }\n        .card-group > .card + .card {\n          margin-left: 0;\n          border-left: 0; }\n        .card-group > .card:first-child {\n          border-top-right-radius: 0;\n          border-bottom-right-radius: 0; }\n          .card-group > .card:first-child .card-img-top,\n          .card-group > .card:first-child .card-header {\n            border-top-right-radius: 0; }\n          .card-group > .card:first-child .card-img-bottom,\n          .card-group > .card:first-child .card-footer {\n            border-bottom-right-radius: 0; }\n        .card-group > .card:last-child {\n          border-top-left-radius: 0;\n          border-bottom-left-radius: 0; }\n          .card-group > .card:last-child .card-img-top,\n          .card-group > .card:last-child .card-header {\n            border-top-left-radius: 0; }\n          .card-group > .card:last-child .card-img-bottom,\n          .card-group > .card:last-child .card-footer {\n            border-bottom-left-radius: 0; }\n        .card-group > .card:only-child {\n          border-radius: 0.25rem; }\n          .card-group > .card:only-child .card-img-top,\n          .card-group > .card:only-child .card-header {\n            border-top-left-radius: 0.25rem;\n            border-top-right-radius: 0.25rem; }\n          .card-group > .card:only-child .card-img-bottom,\n          .card-group > .card:only-child .card-footer {\n            border-bottom-right-radius: 0.25rem;\n            border-bottom-left-radius: 0.25rem; }\n        .card-group > .card:not(:first-child):not(:last-child):not(:only-child) {\n          border-radius: 0; }\n          .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top,\n          .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,\n          .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-header,\n          .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-footer {\n            border-radius: 0; } }\n\n.card-columns .card {\n  margin-bottom: 0.75rem; }\n\n@media (min-width: 576px) {\n  .card-columns {\n    column-count: 3;\n    column-gap: 1.25rem;\n    orphans: 1;\n    widows: 1; }\n    .card-columns .card {\n      display: inline-block;\n      width: 100%; } }\n\n.accordion .card:not(:first-of-type):not(:last-of-type) {\n  border-bottom: 0;\n  border-radius: 0; }\n\n.accordion .card:not(:first-of-type) .card-header:first-child {\n  border-radius: 0; }\n\n.accordion .card:first-of-type {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.accordion .card:last-of-type {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #e9ecef;\n  border-radius: 0.25rem; }\n\n.breadcrumb-item + .breadcrumb-item {\n  padding-left: 0.5rem; }\n  .breadcrumb-item + .breadcrumb-item::before {\n    display: inline-block;\n    padding-right: 0.5rem;\n    color: #6c757d;\n    content: \"/\"; }\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: underline; }\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: none; }\n\n.breadcrumb-item.active {\n  color: #6c757d; }\n\n.pagination {\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem; }\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #007bff;\n  background-color: #fff;\n  border: 1px solid #dee2e6; }\n  .page-link:hover {\n    z-index: 2;\n    color: #0056b3;\n    text-decoration: none;\n    background-color: #e9ecef;\n    border-color: #dee2e6; }\n  .page-link:focus {\n    z-index: 2;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n  .page-link:not(:disabled):not(.disabled) {\n    cursor: pointer; }\n\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n\n.page-item.active .page-link {\n  z-index: 1;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff; }\n\n.page-item.disabled .page-link {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: auto;\n  background-color: #fff;\n  border-color: #dee2e6; }\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5; }\n\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem; }\n\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem; }\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem; }\n\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem; }\n\n.badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem; }\n  .badge:empty {\n    display: none; }\n\n.btn .badge {\n  position: relative;\n  top: -1px; }\n\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem; }\n\n.badge-primary {\n  color: #fff;\n  background-color: #007bff; }\n  .badge-primary[href]:hover, .badge-primary[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #0062cc; }\n\n.badge-secondary {\n  color: #fff;\n  background-color: #6c757d; }\n  .badge-secondary[href]:hover, .badge-secondary[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #545b62; }\n\n.badge-success {\n  color: #fff;\n  background-color: #28a745; }\n  .badge-success[href]:hover, .badge-success[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #1e7e34; }\n\n.badge-info {\n  color: #fff;\n  background-color: #17a2b8; }\n  .badge-info[href]:hover, .badge-info[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #117a8b; }\n\n.badge-warning {\n  color: #212529;\n  background-color: #ffc107; }\n  .badge-warning[href]:hover, .badge-warning[href]:focus {\n    color: #212529;\n    text-decoration: none;\n    background-color: #d39e00; }\n\n.badge-danger {\n  color: #fff;\n  background-color: #dc3545; }\n  .badge-danger[href]:hover, .badge-danger[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #bd2130; }\n\n.badge-light {\n  color: #212529;\n  background-color: #f8f9fa; }\n  .badge-light[href]:hover, .badge-light[href]:focus {\n    color: #212529;\n    text-decoration: none;\n    background-color: #dae0e5; }\n\n.badge-dark {\n  color: #fff;\n  background-color: #343a40; }\n  .badge-dark[href]:hover, .badge-dark[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #1d2124; }\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem; }\n  @media (min-width: 576px) {\n    .jumbotron {\n      padding: 4rem 2rem; } }\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0; }\n\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n\n.alert-heading {\n  color: inherit; }\n\n.alert-link {\n  font-weight: 700; }\n\n.alert-dismissible {\n  padding-right: 4rem; }\n  .alert-dismissible .close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 0.75rem 1.25rem;\n    color: inherit; }\n\n.alert-primary {\n  color: #004085;\n  background-color: #cce5ff;\n  border-color: #b8daff; }\n  .alert-primary hr {\n    border-top-color: #9fcdff; }\n  .alert-primary .alert-link {\n    color: #002752; }\n\n.alert-secondary {\n  color: #383d41;\n  background-color: #e2e3e5;\n  border-color: #d6d8db; }\n  .alert-secondary hr {\n    border-top-color: #c8cbcf; }\n  .alert-secondary .alert-link {\n    color: #202326; }\n\n.alert-success {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb; }\n  .alert-success hr {\n    border-top-color: #b1dfbb; }\n  .alert-success .alert-link {\n    color: #0b2e13; }\n\n.alert-info {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb; }\n  .alert-info hr {\n    border-top-color: #abdde5; }\n  .alert-info .alert-link {\n    color: #062c33; }\n\n.alert-warning {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba; }\n  .alert-warning hr {\n    border-top-color: #ffe8a1; }\n  .alert-warning .alert-link {\n    color: #533f03; }\n\n.alert-danger {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb; }\n  .alert-danger hr {\n    border-top-color: #f1b0b7; }\n  .alert-danger .alert-link {\n    color: #491217; }\n\n.alert-light {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe; }\n  .alert-light hr {\n    border-top-color: #ececf6; }\n  .alert-light .alert-link {\n    color: #686868; }\n\n.alert-dark {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca; }\n  .alert-dark hr {\n    border-top-color: #b9bbbe; }\n  .alert-dark .alert-link {\n    color: #040505; }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress {\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem; }\n\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #007bff;\n  transition: width 0.6s ease; }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .progress-bar {\n      transition: none; } }\n\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem; }\n\n.progress-bar-animated {\n  animation: progress-bar-stripes 1s linear infinite; }\n\n.media {\n  display: flex;\n  align-items: flex-start; }\n\n.media-body {\n  flex: 1; }\n\n.list-group {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0; }\n\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit; }\n  .list-group-item-action:hover, .list-group-item-action:focus {\n    color: #495057;\n    text-decoration: none;\n    background-color: #f8f9fa; }\n  .list-group-item-action:active {\n    color: #212529;\n    background-color: #e9ecef; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125); }\n  .list-group-item:first-child {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n  .list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n  .list-group-item:hover, .list-group-item:focus {\n    z-index: 1;\n    text-decoration: none; }\n  .list-group-item.disabled, .list-group-item:disabled {\n    color: #6c757d;\n    background-color: #fff; }\n  .list-group-item.active {\n    z-index: 2;\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n\n.list-group-flush .list-group-item {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0; }\n\n.list-group-flush:first-child .list-group-item:first-child {\n  border-top: 0; }\n\n.list-group-flush:last-child .list-group-item:last-child {\n  border-bottom: 0; }\n\n.list-group-item-primary {\n  color: #004085;\n  background-color: #b8daff; }\n  .list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\n    color: #004085;\n    background-color: #9fcdff; }\n  .list-group-item-primary.list-group-item-action.active {\n    color: #fff;\n    background-color: #004085;\n    border-color: #004085; }\n\n.list-group-item-secondary {\n  color: #383d41;\n  background-color: #d6d8db; }\n  .list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\n    color: #383d41;\n    background-color: #c8cbcf; }\n  .list-group-item-secondary.list-group-item-action.active {\n    color: #fff;\n    background-color: #383d41;\n    border-color: #383d41; }\n\n.list-group-item-success {\n  color: #155724;\n  background-color: #c3e6cb; }\n  .list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\n    color: #155724;\n    background-color: #b1dfbb; }\n  .list-group-item-success.list-group-item-action.active {\n    color: #fff;\n    background-color: #155724;\n    border-color: #155724; }\n\n.list-group-item-info {\n  color: #0c5460;\n  background-color: #bee5eb; }\n  .list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\n    color: #0c5460;\n    background-color: #abdde5; }\n  .list-group-item-info.list-group-item-action.active {\n    color: #fff;\n    background-color: #0c5460;\n    border-color: #0c5460; }\n\n.list-group-item-warning {\n  color: #856404;\n  background-color: #ffeeba; }\n  .list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\n    color: #856404;\n    background-color: #ffe8a1; }\n  .list-group-item-warning.list-group-item-action.active {\n    color: #fff;\n    background-color: #856404;\n    border-color: #856404; }\n\n.list-group-item-danger {\n  color: #721c24;\n  background-color: #f5c6cb; }\n  .list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\n    color: #721c24;\n    background-color: #f1b0b7; }\n  .list-group-item-danger.list-group-item-action.active {\n    color: #fff;\n    background-color: #721c24;\n    border-color: #721c24; }\n\n.list-group-item-light {\n  color: #818182;\n  background-color: #fdfdfe; }\n  .list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\n    color: #818182;\n    background-color: #ececf6; }\n  .list-group-item-light.list-group-item-action.active {\n    color: #fff;\n    background-color: #818182;\n    border-color: #818182; }\n\n.list-group-item-dark {\n  color: #1b1e21;\n  background-color: #c6c8ca; }\n  .list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\n    color: #1b1e21;\n    background-color: #b9bbbe; }\n  .list-group-item-dark.list-group-item-action.active {\n    color: #fff;\n    background-color: #1b1e21;\n    border-color: #1b1e21; }\n\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5; }\n  .close:not(:disabled):not(.disabled) {\n    cursor: pointer; }\n    .close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {\n      color: #000;\n      text-decoration: none;\n      opacity: .75; }\n\nbutton.close {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\n.modal-open {\n  overflow: hidden; }\n  .modal-open .modal {\n    overflow-x: hidden;\n    overflow-y: auto; }\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  outline: 0; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none; }\n  .modal.fade .modal-dialog {\n    transition: transform 0.3s ease-out;\n    transform: translate(0, -25%); }\n    @media screen and (prefers-reduced-motion: reduce) {\n      .modal.fade .modal-dialog {\n        transition: none; } }\n  .modal.show .modal-dialog {\n    transform: translate(0, 0); }\n\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - (0.5rem * 2)); }\n  .modal-dialog-centered::before {\n    display: block;\n    height: calc(100vh - (0.5rem * 2));\n    content: \"\"; }\n\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000; }\n  .modal-backdrop.fade {\n    opacity: 0; }\n  .modal-backdrop.show {\n    opacity: 0.5; }\n\n.modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1rem;\n  border-bottom: 1px solid #e9ecef;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem; }\n  .modal-header .close {\n    padding: 1rem;\n    margin: -1rem -1rem -1rem auto; }\n\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5; }\n\n.modal-body {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 1rem; }\n\n.modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 1rem;\n  border-top: 1px solid #e9ecef; }\n  .modal-footer > :not(:first-child) {\n    margin-left: .25rem; }\n  .modal-footer > :not(:last-child) {\n    margin-right: .25rem; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto; }\n  .modal-dialog-centered {\n    min-height: calc(100% - (1.75rem * 2)); }\n    .modal-dialog-centered::before {\n      height: calc(100vh - (1.75rem * 2)); }\n  .modal-sm {\n    max-width: 300px; } }\n\n@media (min-width: 992px) {\n  .modal-lg {\n    max-width: 800px; } }\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0; }\n  .tooltip.show {\n    opacity: 0.9; }\n  .tooltip .arrow {\n    position: absolute;\n    display: block;\n    width: 0.8rem;\n    height: 0.4rem; }\n    .tooltip .arrow::before {\n      position: absolute;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid; }\n\n.bs-tooltip-top, .bs-tooltip-auto[x-placement^=\"top\"] {\n  padding: 0.4rem 0; }\n  .bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^=\"top\"] .arrow {\n    bottom: 0; }\n    .bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^=\"top\"] .arrow::before {\n      top: 0;\n      border-width: 0.4rem 0.4rem 0;\n      border-top-color: #000; }\n\n.bs-tooltip-right, .bs-tooltip-auto[x-placement^=\"right\"] {\n  padding: 0 0.4rem; }\n  .bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^=\"right\"] .arrow {\n    left: 0;\n    width: 0.4rem;\n    height: 0.8rem; }\n    .bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^=\"right\"] .arrow::before {\n      right: 0;\n      border-width: 0.4rem 0.4rem 0.4rem 0;\n      border-right-color: #000; }\n\n.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^=\"bottom\"] {\n  padding: 0.4rem 0; }\n  .bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow {\n    top: 0; }\n    .bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before {\n      bottom: 0;\n      border-width: 0 0.4rem 0.4rem;\n      border-bottom-color: #000; }\n\n.bs-tooltip-left, .bs-tooltip-auto[x-placement^=\"left\"] {\n  padding: 0 0.4rem; }\n  .bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^=\"left\"] .arrow {\n    right: 0;\n    width: 0.4rem;\n    height: 0.8rem; }\n    .bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^=\"left\"] .arrow::before {\n      left: 0;\n      border-width: 0.4rem 0 0.4rem 0.4rem;\n      border-left-color: #000; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem; }\n  .popover .arrow {\n    position: absolute;\n    display: block;\n    width: 1rem;\n    height: 0.5rem;\n    margin: 0 0.3rem; }\n    .popover .arrow::before, .popover .arrow::after {\n      position: absolute;\n      display: block;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid; }\n\n.bs-popover-top, .bs-popover-auto[x-placement^=\"top\"] {\n  margin-bottom: 0.5rem; }\n  .bs-popover-top .arrow, .bs-popover-auto[x-placement^=\"top\"] .arrow {\n    bottom: calc((0.5rem + 1px) * -1); }\n  .bs-popover-top .arrow::before, .bs-popover-auto[x-placement^=\"top\"] .arrow::before,\n  .bs-popover-top .arrow::after,\n  .bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n    border-width: 0.5rem 0.5rem 0; }\n  .bs-popover-top .arrow::before, .bs-popover-auto[x-placement^=\"top\"] .arrow::before {\n    bottom: 0;\n    border-top-color: rgba(0, 0, 0, 0.25); }\n  \n  .bs-popover-top .arrow::after,\n  .bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n    bottom: 1px;\n    border-top-color: #fff; }\n\n.bs-popover-right, .bs-popover-auto[x-placement^=\"right\"] {\n  margin-left: 0.5rem; }\n  .bs-popover-right .arrow, .bs-popover-auto[x-placement^=\"right\"] .arrow {\n    left: calc((0.5rem + 1px) * -1);\n    width: 0.5rem;\n    height: 1rem;\n    margin: 0.3rem 0; }\n  .bs-popover-right .arrow::before, .bs-popover-auto[x-placement^=\"right\"] .arrow::before,\n  .bs-popover-right .arrow::after,\n  .bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n    border-width: 0.5rem 0.5rem 0.5rem 0; }\n  .bs-popover-right .arrow::before, .bs-popover-auto[x-placement^=\"right\"] .arrow::before {\n    left: 0;\n    border-right-color: rgba(0, 0, 0, 0.25); }\n  \n  .bs-popover-right .arrow::after,\n  .bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n    left: 1px;\n    border-right-color: #fff; }\n\n.bs-popover-bottom, .bs-popover-auto[x-placement^=\"bottom\"] {\n  margin-top: 0.5rem; }\n  .bs-popover-bottom .arrow, .bs-popover-auto[x-placement^=\"bottom\"] .arrow {\n    top: calc((0.5rem + 1px) * -1); }\n  .bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::before,\n  .bs-popover-bottom .arrow::after,\n  .bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n    border-width: 0 0.5rem 0.5rem 0.5rem; }\n  .bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::before {\n    top: 0;\n    border-bottom-color: rgba(0, 0, 0, 0.25); }\n  \n  .bs-popover-bottom .arrow::after,\n  .bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n    top: 1px;\n    border-bottom-color: #fff; }\n  .bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    display: block;\n    width: 1rem;\n    margin-left: -0.5rem;\n    content: \"\";\n    border-bottom: 1px solid #f7f7f7; }\n\n.bs-popover-left, .bs-popover-auto[x-placement^=\"left\"] {\n  margin-right: 0.5rem; }\n  .bs-popover-left .arrow, .bs-popover-auto[x-placement^=\"left\"] .arrow {\n    right: calc((0.5rem + 1px) * -1);\n    width: 0.5rem;\n    height: 1rem;\n    margin: 0.3rem 0; }\n  .bs-popover-left .arrow::before, .bs-popover-auto[x-placement^=\"left\"] .arrow::before,\n  .bs-popover-left .arrow::after,\n  .bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n    border-width: 0.5rem 0 0.5rem 0.5rem; }\n  .bs-popover-left .arrow::before, .bs-popover-auto[x-placement^=\"left\"] .arrow::before {\n    right: 0;\n    border-left-color: rgba(0, 0, 0, 0.25); }\n  \n  .bs-popover-left .arrow::after,\n  .bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n    right: 1px;\n    border-left-color: #fff; }\n\n.popover-header {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  color: inherit;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px); }\n  .popover-header:empty {\n    display: none; }\n\n.popover-body {\n  padding: 0.5rem 0.75rem;\n  color: #212529; }\n\n.carousel {\n  position: relative; }\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n\n.carousel-item {\n  position: relative;\n  display: none;\n  align-items: center;\n  width: 100%;\n  backface-visibility: hidden;\n  perspective: 1000px; }\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n  transition: transform 0.6s ease; }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .carousel-item.active,\n    .carousel-item-next,\n    .carousel-item-prev {\n      transition: none; } }\n\n.carousel-item-next,\n.carousel-item-prev {\n  position: absolute;\n  top: 0; }\n\n.carousel-item-next.carousel-item-left,\n.carousel-item-prev.carousel-item-right {\n  transform: translateX(0); }\n  @supports (transform-style: preserve-3d) {\n    .carousel-item-next.carousel-item-left,\n    .carousel-item-prev.carousel-item-right {\n      transform: translate3d(0, 0, 0); } }\n\n.carousel-item-next,\n.active.carousel-item-right {\n  transform: translateX(100%); }\n  @supports (transform-style: preserve-3d) {\n    .carousel-item-next,\n    .active.carousel-item-right {\n      transform: translate3d(100%, 0, 0); } }\n\n.carousel-item-prev,\n.active.carousel-item-left {\n  transform: translateX(-100%); }\n  @supports (transform-style: preserve-3d) {\n    .carousel-item-prev,\n    .active.carousel-item-left {\n      transform: translate3d(-100%, 0, 0); } }\n\n.carousel-fade .carousel-item {\n  opacity: 0;\n  transition-duration: .6s;\n  transition-property: opacity; }\n\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-left,\n.carousel-fade .carousel-item-prev.carousel-item-right {\n  opacity: 1; }\n\n.carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-right {\n  opacity: 0; }\n\n.carousel-fade .carousel-item-next,\n.carousel-fade .carousel-item-prev,\n.carousel-fade .carousel-item.active,\n.carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-prev {\n  transform: translateX(0); }\n  @supports (transform-style: preserve-3d) {\n    .carousel-fade .carousel-item-next,\n    .carousel-fade .carousel-item-prev,\n    .carousel-fade .carousel-item.active,\n    .carousel-fade .active.carousel-item-left,\n    .carousel-fade .active.carousel-item-prev {\n      transform: translate3d(0, 0, 0); } }\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5; }\n  .carousel-control-prev:hover, .carousel-control-prev:focus,\n  .carousel-control-next:hover,\n  .carousel-control-next:focus {\n    color: #fff;\n    text-decoration: none;\n    outline: 0;\n    opacity: .9; }\n\n.carousel-control-prev {\n  left: 0; }\n\n.carousel-control-next {\n  right: 0; }\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: transparent no-repeat center center;\n  background-size: 100% 100%; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\"); }\n\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\"); }\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 10px;\n  left: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none; }\n  .carousel-indicators li {\n    position: relative;\n    flex: 0 1 auto;\n    width: 30px;\n    height: 3px;\n    margin-right: 3px;\n    margin-left: 3px;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: rgba(255, 255, 255, 0.5); }\n    .carousel-indicators li::before {\n      position: absolute;\n      top: -10px;\n      left: 0;\n      display: inline-block;\n      width: 100%;\n      height: 10px;\n      content: \"\"; }\n    .carousel-indicators li::after {\n      position: absolute;\n      bottom: -10px;\n      left: 0;\n      display: inline-block;\n      width: 100%;\n      height: 10px;\n      content: \"\"; }\n  .carousel-indicators .active {\n    background-color: #fff; }\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center; }\n\n.align-baseline {\n  vertical-align: baseline !important; }\n\n.align-top {\n  vertical-align: top !important; }\n\n.align-middle {\n  vertical-align: middle !important; }\n\n.align-bottom {\n  vertical-align: bottom !important; }\n\n.align-text-bottom {\n  vertical-align: text-bottom !important; }\n\n.align-text-top {\n  vertical-align: text-top !important; }\n\n.bg-primary {\n  background-color: #007bff !important; }\n\na.bg-primary:hover, a.bg-primary:focus,\nbutton.bg-primary:hover,\nbutton.bg-primary:focus {\n  background-color: #0062cc !important; }\n\n.bg-secondary {\n  background-color: #6c757d !important; }\n\na.bg-secondary:hover, a.bg-secondary:focus,\nbutton.bg-secondary:hover,\nbutton.bg-secondary:focus {\n  background-color: #545b62 !important; }\n\n.bg-success {\n  background-color: #28a745 !important; }\n\na.bg-success:hover, a.bg-success:focus,\nbutton.bg-success:hover,\nbutton.bg-success:focus {\n  background-color: #1e7e34 !important; }\n\n.bg-info {\n  background-color: #17a2b8 !important; }\n\na.bg-info:hover, a.bg-info:focus,\nbutton.bg-info:hover,\nbutton.bg-info:focus {\n  background-color: #117a8b !important; }\n\n.bg-warning {\n  background-color: #ffc107 !important; }\n\na.bg-warning:hover, a.bg-warning:focus,\nbutton.bg-warning:hover,\nbutton.bg-warning:focus {\n  background-color: #d39e00 !important; }\n\n.bg-danger {\n  background-color: #dc3545 !important; }\n\na.bg-danger:hover, a.bg-danger:focus,\nbutton.bg-danger:hover,\nbutton.bg-danger:focus {\n  background-color: #bd2130 !important; }\n\n.bg-light {\n  background-color: #f8f9fa !important; }\n\na.bg-light:hover, a.bg-light:focus,\nbutton.bg-light:hover,\nbutton.bg-light:focus {\n  background-color: #dae0e5 !important; }\n\n.bg-dark {\n  background-color: #343a40 !important; }\n\na.bg-dark:hover, a.bg-dark:focus,\nbutton.bg-dark:hover,\nbutton.bg-dark:focus {\n  background-color: #1d2124 !important; }\n\n.bg-white {\n  background-color: #fff !important; }\n\n.bg-transparent {\n  background-color: transparent !important; }\n\n.border {\n  border: 1px solid #dee2e6 !important; }\n\n.border-top {\n  border-top: 1px solid #dee2e6 !important; }\n\n.border-right {\n  border-right: 1px solid #dee2e6 !important; }\n\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important; }\n\n.border-left {\n  border-left: 1px solid #dee2e6 !important; }\n\n.border-0 {\n  border: 0 !important; }\n\n.border-top-0 {\n  border-top: 0 !important; }\n\n.border-right-0 {\n  border-right: 0 !important; }\n\n.border-bottom-0 {\n  border-bottom: 0 !important; }\n\n.border-left-0 {\n  border-left: 0 !important; }\n\n.border-primary {\n  border-color: #007bff !important; }\n\n.border-secondary {\n  border-color: #6c757d !important; }\n\n.border-success {\n  border-color: #28a745 !important; }\n\n.border-info {\n  border-color: #17a2b8 !important; }\n\n.border-warning {\n  border-color: #ffc107 !important; }\n\n.border-danger {\n  border-color: #dc3545 !important; }\n\n.border-light {\n  border-color: #f8f9fa !important; }\n\n.border-dark {\n  border-color: #343a40 !important; }\n\n.border-white {\n  border-color: #fff !important; }\n\n.rounded {\n  border-radius: 0.25rem !important; }\n\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important; }\n\n.rounded-right {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important; }\n\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n\n.rounded-left {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n\n.rounded-circle {\n  border-radius: 50% !important; }\n\n.rounded-0 {\n  border-radius: 0 !important; }\n\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\"; }\n\n.d-none {\n  display: none !important; }\n\n.d-inline {\n  display: inline !important; }\n\n.d-inline-block {\n  display: inline-block !important; }\n\n.d-block {\n  display: block !important; }\n\n.d-table {\n  display: table !important; }\n\n.d-table-row {\n  display: table-row !important; }\n\n.d-table-cell {\n  display: table-cell !important; }\n\n.d-flex {\n  display: flex !important; }\n\n.d-inline-flex {\n  display: inline-flex !important; }\n\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-row {\n    display: table-row !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: inline-flex !important; } }\n\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-row {\n    display: table-row !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: inline-flex !important; } }\n\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-row {\n    display: table-row !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: inline-flex !important; } }\n\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-row {\n    display: table-row !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: inline-flex !important; } }\n\n@media print {\n  .d-print-none {\n    display: none !important; }\n  .d-print-inline {\n    display: inline !important; }\n  .d-print-inline-block {\n    display: inline-block !important; }\n  .d-print-block {\n    display: block !important; }\n  .d-print-table {\n    display: table !important; }\n  .d-print-table-row {\n    display: table-row !important; }\n  .d-print-table-cell {\n    display: table-cell !important; }\n  .d-print-flex {\n    display: flex !important; }\n  .d-print-inline-flex {\n    display: inline-flex !important; } }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive::before {\n    display: block;\n    content: \"\"; }\n  .embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0; }\n\n.embed-responsive-21by9::before {\n  padding-top: 42.85714%; }\n\n.embed-responsive-16by9::before {\n  padding-top: 56.25%; }\n\n.embed-responsive-4by3::before {\n  padding-top: 75%; }\n\n.embed-responsive-1by1::before {\n  padding-top: 100%; }\n\n.flex-row {\n  flex-direction: row !important; }\n\n.flex-column {\n  flex-direction: column !important; }\n\n.flex-row-reverse {\n  flex-direction: row-reverse !important; }\n\n.flex-column-reverse {\n  flex-direction: column-reverse !important; }\n\n.flex-wrap {\n  flex-wrap: wrap !important; }\n\n.flex-nowrap {\n  flex-wrap: nowrap !important; }\n\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important; }\n\n.flex-fill {\n  flex: 1 1 auto !important; }\n\n.flex-grow-0 {\n  flex-grow: 0 !important; }\n\n.flex-grow-1 {\n  flex-grow: 1 !important; }\n\n.flex-shrink-0 {\n  flex-shrink: 0 !important; }\n\n.flex-shrink-1 {\n  flex-shrink: 1 !important; }\n\n.justify-content-start {\n  justify-content: flex-start !important; }\n\n.justify-content-end {\n  justify-content: flex-end !important; }\n\n.justify-content-center {\n  justify-content: center !important; }\n\n.justify-content-between {\n  justify-content: space-between !important; }\n\n.justify-content-around {\n  justify-content: space-around !important; }\n\n.align-items-start {\n  align-items: flex-start !important; }\n\n.align-items-end {\n  align-items: flex-end !important; }\n\n.align-items-center {\n  align-items: center !important; }\n\n.align-items-baseline {\n  align-items: baseline !important; }\n\n.align-items-stretch {\n  align-items: stretch !important; }\n\n.align-content-start {\n  align-content: flex-start !important; }\n\n.align-content-end {\n  align-content: flex-end !important; }\n\n.align-content-center {\n  align-content: center !important; }\n\n.align-content-between {\n  align-content: space-between !important; }\n\n.align-content-around {\n  align-content: space-around !important; }\n\n.align-content-stretch {\n  align-content: stretch !important; }\n\n.align-self-auto {\n  align-self: auto !important; }\n\n.align-self-start {\n  align-self: flex-start !important; }\n\n.align-self-end {\n  align-self: flex-end !important; }\n\n.align-self-center {\n  align-self: center !important; }\n\n.align-self-baseline {\n  align-self: baseline !important; }\n\n.align-self-stretch {\n  align-self: stretch !important; }\n\n@media (min-width: 576px) {\n  .flex-sm-row {\n    flex-direction: row !important; }\n  .flex-sm-column {\n    flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-sm-wrap {\n    flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-sm-fill {\n    flex: 1 1 auto !important; }\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-sm-start {\n    justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    justify-content: center !important; }\n  .justify-content-sm-between {\n    justify-content: space-between !important; }\n  .justify-content-sm-around {\n    justify-content: space-around !important; }\n  .align-items-sm-start {\n    align-items: flex-start !important; }\n  .align-items-sm-end {\n    align-items: flex-end !important; }\n  .align-items-sm-center {\n    align-items: center !important; }\n  .align-items-sm-baseline {\n    align-items: baseline !important; }\n  .align-items-sm-stretch {\n    align-items: stretch !important; }\n  .align-content-sm-start {\n    align-content: flex-start !important; }\n  .align-content-sm-end {\n    align-content: flex-end !important; }\n  .align-content-sm-center {\n    align-content: center !important; }\n  .align-content-sm-between {\n    align-content: space-between !important; }\n  .align-content-sm-around {\n    align-content: space-around !important; }\n  .align-content-sm-stretch {\n    align-content: stretch !important; }\n  .align-self-sm-auto {\n    align-self: auto !important; }\n  .align-self-sm-start {\n    align-self: flex-start !important; }\n  .align-self-sm-end {\n    align-self: flex-end !important; }\n  .align-self-sm-center {\n    align-self: center !important; }\n  .align-self-sm-baseline {\n    align-self: baseline !important; }\n  .align-self-sm-stretch {\n    align-self: stretch !important; } }\n\n@media (min-width: 768px) {\n  .flex-md-row {\n    flex-direction: row !important; }\n  .flex-md-column {\n    flex-direction: column !important; }\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-md-wrap {\n    flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-md-fill {\n    flex: 1 1 auto !important; }\n  .flex-md-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-md-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-md-start {\n    justify-content: flex-start !important; }\n  .justify-content-md-end {\n    justify-content: flex-end !important; }\n  .justify-content-md-center {\n    justify-content: center !important; }\n  .justify-content-md-between {\n    justify-content: space-between !important; }\n  .justify-content-md-around {\n    justify-content: space-around !important; }\n  .align-items-md-start {\n    align-items: flex-start !important; }\n  .align-items-md-end {\n    align-items: flex-end !important; }\n  .align-items-md-center {\n    align-items: center !important; }\n  .align-items-md-baseline {\n    align-items: baseline !important; }\n  .align-items-md-stretch {\n    align-items: stretch !important; }\n  .align-content-md-start {\n    align-content: flex-start !important; }\n  .align-content-md-end {\n    align-content: flex-end !important; }\n  .align-content-md-center {\n    align-content: center !important; }\n  .align-content-md-between {\n    align-content: space-between !important; }\n  .align-content-md-around {\n    align-content: space-around !important; }\n  .align-content-md-stretch {\n    align-content: stretch !important; }\n  .align-self-md-auto {\n    align-self: auto !important; }\n  .align-self-md-start {\n    align-self: flex-start !important; }\n  .align-self-md-end {\n    align-self: flex-end !important; }\n  .align-self-md-center {\n    align-self: center !important; }\n  .align-self-md-baseline {\n    align-self: baseline !important; }\n  .align-self-md-stretch {\n    align-self: stretch !important; } }\n\n@media (min-width: 992px) {\n  .flex-lg-row {\n    flex-direction: row !important; }\n  .flex-lg-column {\n    flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-lg-wrap {\n    flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-lg-fill {\n    flex: 1 1 auto !important; }\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-lg-start {\n    justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    justify-content: center !important; }\n  .justify-content-lg-between {\n    justify-content: space-between !important; }\n  .justify-content-lg-around {\n    justify-content: space-around !important; }\n  .align-items-lg-start {\n    align-items: flex-start !important; }\n  .align-items-lg-end {\n    align-items: flex-end !important; }\n  .align-items-lg-center {\n    align-items: center !important; }\n  .align-items-lg-baseline {\n    align-items: baseline !important; }\n  .align-items-lg-stretch {\n    align-items: stretch !important; }\n  .align-content-lg-start {\n    align-content: flex-start !important; }\n  .align-content-lg-end {\n    align-content: flex-end !important; }\n  .align-content-lg-center {\n    align-content: center !important; }\n  .align-content-lg-between {\n    align-content: space-between !important; }\n  .align-content-lg-around {\n    align-content: space-around !important; }\n  .align-content-lg-stretch {\n    align-content: stretch !important; }\n  .align-self-lg-auto {\n    align-self: auto !important; }\n  .align-self-lg-start {\n    align-self: flex-start !important; }\n  .align-self-lg-end {\n    align-self: flex-end !important; }\n  .align-self-lg-center {\n    align-self: center !important; }\n  .align-self-lg-baseline {\n    align-self: baseline !important; }\n  .align-self-lg-stretch {\n    align-self: stretch !important; } }\n\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    flex-direction: row !important; }\n  .flex-xl-column {\n    flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-xl-wrap {\n    flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-xl-fill {\n    flex: 1 1 auto !important; }\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-xl-start {\n    justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    justify-content: center !important; }\n  .justify-content-xl-between {\n    justify-content: space-between !important; }\n  .justify-content-xl-around {\n    justify-content: space-around !important; }\n  .align-items-xl-start {\n    align-items: flex-start !important; }\n  .align-items-xl-end {\n    align-items: flex-end !important; }\n  .align-items-xl-center {\n    align-items: center !important; }\n  .align-items-xl-baseline {\n    align-items: baseline !important; }\n  .align-items-xl-stretch {\n    align-items: stretch !important; }\n  .align-content-xl-start {\n    align-content: flex-start !important; }\n  .align-content-xl-end {\n    align-content: flex-end !important; }\n  .align-content-xl-center {\n    align-content: center !important; }\n  .align-content-xl-between {\n    align-content: space-between !important; }\n  .align-content-xl-around {\n    align-content: space-around !important; }\n  .align-content-xl-stretch {\n    align-content: stretch !important; }\n  .align-self-xl-auto {\n    align-self: auto !important; }\n  .align-self-xl-start {\n    align-self: flex-start !important; }\n  .align-self-xl-end {\n    align-self: flex-end !important; }\n  .align-self-xl-center {\n    align-self: center !important; }\n  .align-self-xl-baseline {\n    align-self: baseline !important; }\n  .align-self-xl-stretch {\n    align-self: stretch !important; } }\n\n.float-left {\n  float: left !important; }\n\n.float-right {\n  float: right !important; }\n\n.float-none {\n  float: none !important; }\n\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left !important; }\n  .float-sm-right {\n    float: right !important; }\n  .float-sm-none {\n    float: none !important; } }\n\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left !important; }\n  .float-md-right {\n    float: right !important; }\n  .float-md-none {\n    float: none !important; } }\n\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left !important; }\n  .float-lg-right {\n    float: right !important; }\n  .float-lg-none {\n    float: none !important; } }\n\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float: left !important; }\n  .float-xl-right {\n    float: right !important; }\n  .float-xl-none {\n    float: none !important; } }\n\n.position-static {\n  position: static !important; }\n\n.position-relative {\n  position: relative !important; }\n\n.position-absolute {\n  position: absolute !important; }\n\n.position-fixed {\n  position: fixed !important; }\n\n.position-sticky {\n  position: sticky !important; }\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030; }\n\n@supports (position: sticky) {\n  .sticky-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020; } }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal; }\n\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important; }\n\n.shadow {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important; }\n\n.shadow-lg {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important; }\n\n.shadow-none {\n  box-shadow: none !important; }\n\n.w-25 {\n  width: 25% !important; }\n\n.w-50 {\n  width: 50% !important; }\n\n.w-75 {\n  width: 75% !important; }\n\n.w-100 {\n  width: 100% !important; }\n\n.w-auto {\n  width: auto !important; }\n\n.h-25 {\n  height: 25% !important; }\n\n.h-50 {\n  height: 50% !important; }\n\n.h-75 {\n  height: 75% !important; }\n\n.h-100 {\n  height: 100% !important; }\n\n.h-auto {\n  height: auto !important; }\n\n.mw-100 {\n  max-width: 100% !important; }\n\n.mh-100 {\n  max-height: 100% !important; }\n\n.m-0 {\n  margin: 0 !important; }\n\n.mt-0,\n.my-0 {\n  margin-top: 0 !important; }\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important; }\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important; }\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important; }\n\n.m-1 {\n  margin: 0.25rem !important; }\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important; }\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important; }\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important; }\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important; }\n\n.m-2 {\n  margin: 0.5rem !important; }\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important; }\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important; }\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important; }\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important; }\n\n.m-3 {\n  margin: 1rem !important; }\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important; }\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important; }\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important; }\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important; }\n\n.m-4 {\n  margin: 1.5rem !important; }\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important; }\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important; }\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important; }\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important; }\n\n.m-5 {\n  margin: 3rem !important; }\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important; }\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important; }\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important; }\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important; }\n\n.p-0 {\n  padding: 0 !important; }\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important; }\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important; }\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important; }\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important; }\n\n.p-1 {\n  padding: 0.25rem !important; }\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important; }\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important; }\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important; }\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important; }\n\n.p-2 {\n  padding: 0.5rem !important; }\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important; }\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important; }\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important; }\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important; }\n\n.p-3 {\n  padding: 1rem !important; }\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important; }\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important; }\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important; }\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important; }\n\n.p-4 {\n  padding: 1.5rem !important; }\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important; }\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important; }\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important; }\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important; }\n\n.p-5 {\n  padding: 3rem !important; }\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important; }\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important; }\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important; }\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important; }\n\n.m-auto {\n  margin: auto !important; }\n\n.mt-auto,\n.my-auto {\n  margin-top: auto !important; }\n\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important; }\n\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important; }\n\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important; }\n\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important; }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important; }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important; }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important; }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important; }\n  .m-sm-1 {\n    margin: 0.25rem !important; }\n  .mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important; }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important; }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important; }\n  .m-sm-2 {\n    margin: 0.5rem !important; }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important; }\n  .mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important; }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important; }\n  .m-sm-3 {\n    margin: 1rem !important; }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important; }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important; }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important; }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important; }\n  .m-sm-4 {\n    margin: 1.5rem !important; }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important; }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important; }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important; }\n  .m-sm-5 {\n    margin: 3rem !important; }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important; }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important; }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important; }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important; }\n  .p-sm-0 {\n    padding: 0 !important; }\n  .pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important; }\n  .pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important; }\n  .pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important; }\n  .pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important; }\n  .p-sm-1 {\n    padding: 0.25rem !important; }\n  .pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important; }\n  .pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important; }\n  .pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important; }\n  .p-sm-2 {\n    padding: 0.5rem !important; }\n  .pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important; }\n  .pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important; }\n  .pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important; }\n  .p-sm-3 {\n    padding: 1rem !important; }\n  .pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important; }\n  .pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important; }\n  .pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important; }\n  .pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important; }\n  .p-sm-4 {\n    padding: 1.5rem !important; }\n  .pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important; }\n  .pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important; }\n  .pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important; }\n  .p-sm-5 {\n    padding: 3rem !important; }\n  .pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important; }\n  .pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important; }\n  .pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important; }\n  .pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important; }\n  .m-sm-auto {\n    margin: auto !important; }\n  .mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important; }\n  .mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important; }\n  .mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important; }\n  .ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important; }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important; }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important; }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important; }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important; }\n  .m-md-1 {\n    margin: 0.25rem !important; }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important; }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important; }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important; }\n  .m-md-2 {\n    margin: 0.5rem !important; }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important; }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important; }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important; }\n  .m-md-3 {\n    margin: 1rem !important; }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important; }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important; }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important; }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important; }\n  .m-md-4 {\n    margin: 1.5rem !important; }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important; }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important; }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important; }\n  .m-md-5 {\n    margin: 3rem !important; }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important; }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important; }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important; }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important; }\n  .p-md-0 {\n    padding: 0 !important; }\n  .pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important; }\n  .pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important; }\n  .pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important; }\n  .pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important; }\n  .p-md-1 {\n    padding: 0.25rem !important; }\n  .pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important; }\n  .pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important; }\n  .pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important; }\n  .p-md-2 {\n    padding: 0.5rem !important; }\n  .pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important; }\n  .pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important; }\n  .pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important; }\n  .p-md-3 {\n    padding: 1rem !important; }\n  .pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important; }\n  .pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important; }\n  .pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important; }\n  .pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important; }\n  .p-md-4 {\n    padding: 1.5rem !important; }\n  .pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important; }\n  .pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important; }\n  .pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important; }\n  .p-md-5 {\n    padding: 3rem !important; }\n  .pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important; }\n  .pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important; }\n  .pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important; }\n  .pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important; }\n  .m-md-auto {\n    margin: auto !important; }\n  .mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important; }\n  .mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important; }\n  .mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important; }\n  .ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important; }\n  .mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important; }\n  .mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important; }\n  .mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important; }\n  .ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important; }\n  .m-lg-1 {\n    margin: 0.25rem !important; }\n  .mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important; }\n  .mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important; }\n  .mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important; }\n  .m-lg-2 {\n    margin: 0.5rem !important; }\n  .mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important; }\n  .mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important; }\n  .mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important; }\n  .m-lg-3 {\n    margin: 1rem !important; }\n  .mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important; }\n  .mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important; }\n  .mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important; }\n  .ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important; }\n  .m-lg-4 {\n    margin: 1.5rem !important; }\n  .mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important; }\n  .mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important; }\n  .mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important; }\n  .m-lg-5 {\n    margin: 3rem !important; }\n  .mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important; }\n  .mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important; }\n  .mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important; }\n  .ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important; }\n  .p-lg-0 {\n    padding: 0 !important; }\n  .pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important; }\n  .pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important; }\n  .pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important; }\n  .pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important; }\n  .p-lg-1 {\n    padding: 0.25rem !important; }\n  .pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important; }\n  .pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important; }\n  .pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important; }\n  .p-lg-2 {\n    padding: 0.5rem !important; }\n  .pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important; }\n  .pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important; }\n  .pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important; }\n  .p-lg-3 {\n    padding: 1rem !important; }\n  .pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important; }\n  .pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important; }\n  .pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important; }\n  .pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important; }\n  .p-lg-4 {\n    padding: 1.5rem !important; }\n  .pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important; }\n  .pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important; }\n  .pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important; }\n  .p-lg-5 {\n    padding: 3rem !important; }\n  .pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important; }\n  .pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important; }\n  .pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important; }\n  .pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important; }\n  .m-lg-auto {\n    margin: auto !important; }\n  .mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important; }\n  .mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important; }\n  .mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important; }\n  .ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important; }\n  .mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important; }\n  .mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important; }\n  .mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important; }\n  .ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important; }\n  .m-xl-1 {\n    margin: 0.25rem !important; }\n  .mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important; }\n  .mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important; }\n  .mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important; }\n  .m-xl-2 {\n    margin: 0.5rem !important; }\n  .mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important; }\n  .mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important; }\n  .mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important; }\n  .m-xl-3 {\n    margin: 1rem !important; }\n  .mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important; }\n  .mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important; }\n  .mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important; }\n  .ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important; }\n  .m-xl-4 {\n    margin: 1.5rem !important; }\n  .mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important; }\n  .mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important; }\n  .mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important; }\n  .m-xl-5 {\n    margin: 3rem !important; }\n  .mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important; }\n  .mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important; }\n  .mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important; }\n  .ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important; }\n  .p-xl-0 {\n    padding: 0 !important; }\n  .pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important; }\n  .pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important; }\n  .pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important; }\n  .pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important; }\n  .p-xl-1 {\n    padding: 0.25rem !important; }\n  .pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important; }\n  .pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important; }\n  .pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important; }\n  .p-xl-2 {\n    padding: 0.5rem !important; }\n  .pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important; }\n  .pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important; }\n  .pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important; }\n  .p-xl-3 {\n    padding: 1rem !important; }\n  .pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important; }\n  .pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important; }\n  .pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important; }\n  .pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important; }\n  .p-xl-4 {\n    padding: 1.5rem !important; }\n  .pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important; }\n  .pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important; }\n  .pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important; }\n  .p-xl-5 {\n    padding: 3rem !important; }\n  .pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important; }\n  .pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important; }\n  .pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important; }\n  .pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important; }\n  .m-xl-auto {\n    margin: auto !important; }\n  .mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important; }\n  .mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important; }\n  .mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important; }\n  .ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important; } }\n\n.text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }\n\n.text-justify {\n  text-align: justify !important; }\n\n.text-nowrap {\n  white-space: nowrap !important; }\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.text-left {\n  text-align: left !important; }\n\n.text-right {\n  text-align: right !important; }\n\n.text-center {\n  text-align: center !important; }\n\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align: left !important; }\n  .text-sm-right {\n    text-align: right !important; }\n  .text-sm-center {\n    text-align: center !important; } }\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important; }\n  .text-md-right {\n    text-align: right !important; }\n  .text-md-center {\n    text-align: center !important; } }\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important; }\n  .text-lg-right {\n    text-align: right !important; }\n  .text-lg-center {\n    text-align: center !important; } }\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important; }\n  .text-xl-right {\n    text-align: right !important; }\n  .text-xl-center {\n    text-align: center !important; } }\n\n.text-lowercase {\n  text-transform: lowercase !important; }\n\n.text-uppercase {\n  text-transform: uppercase !important; }\n\n.text-capitalize {\n  text-transform: capitalize !important; }\n\n.font-weight-light {\n  font-weight: 300 !important; }\n\n.font-weight-normal {\n  font-weight: 400 !important; }\n\n.font-weight-bold {\n  font-weight: 700 !important; }\n\n.font-italic {\n  font-style: italic !important; }\n\n.text-white {\n  color: #fff !important; }\n\n.text-primary {\n  color: #007bff !important; }\n\na.text-primary:hover, a.text-primary:focus {\n  color: #0062cc !important; }\n\n.text-secondary {\n  color: #6c757d !important; }\n\na.text-secondary:hover, a.text-secondary:focus {\n  color: #545b62 !important; }\n\n.text-success {\n  color: #28a745 !important; }\n\na.text-success:hover, a.text-success:focus {\n  color: #1e7e34 !important; }\n\n.text-info {\n  color: #17a2b8 !important; }\n\na.text-info:hover, a.text-info:focus {\n  color: #117a8b !important; }\n\n.text-warning {\n  color: #ffc107 !important; }\n\na.text-warning:hover, a.text-warning:focus {\n  color: #d39e00 !important; }\n\n.text-danger {\n  color: #dc3545 !important; }\n\na.text-danger:hover, a.text-danger:focus {\n  color: #bd2130 !important; }\n\n.text-light {\n  color: #f8f9fa !important; }\n\na.text-light:hover, a.text-light:focus {\n  color: #dae0e5 !important; }\n\n.text-dark {\n  color: #343a40 !important; }\n\na.text-dark:hover, a.text-dark:focus {\n  color: #1d2124 !important; }\n\n.text-body {\n  color: #212529 !important; }\n\n.text-muted {\n  color: #6c757d !important; }\n\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important; }\n\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important; }\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.visible {\n  visibility: visible !important; }\n\n.invisible {\n  visibility: hidden !important; }\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    box-shadow: none !important; }\n  a:not(.btn) {\n    text-decoration: underline; }\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\"; }\n  pre {\n    white-space: pre-wrap !important; }\n  pre,\n  blockquote {\n    border: 1px solid #adb5bd;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  @page {\n    size: a3; }\n  body {\n    min-width: 992px !important; }\n  .container {\n    min-width: 992px !important; }\n  .navbar {\n    display: none; }\n  .badge {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6 !important; }\n  .table-dark {\n    color: inherit; }\n    .table-dark th,\n    .table-dark td,\n    .table-dark thead th,\n    .table-dark tbody + tbody {\n      border-color: #dee2e6; }\n  .table .thead-dark th {\n    color: inherit;\n    border-color: #dee2e6; } }\n\n.react-bs-table .react-bs-container-header .sort-column, .s-alert-close, td.react-bs-table-expand-cell, th.react-bs-table-expand-cell > div {\n  cursor: pointer; }\n\n.react-bs-table-container .react-bs-table-search-form {\n  margin-bottom: 0; }\n\n.react-bs-table-bordered {\n  border: 1px solid #ddd;\n  border-radius: 5px; }\n\n.react-bs-table table {\n  margin-bottom: 0;\n  table-layout: fixed; }\n\n.react-bs-table table td, .react-bs-table table th {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.react-bs-table-pagination {\n  margin-top: 10px; }\n\n.react-bs-table-tool-bar {\n  margin-bottom: 5px; }\n\n.react-bs-container-footer, .react-bs-container-header {\n  overflow: hidden;\n  width: 100%; }\n\n.react-bs-container-body {\n  overflow: auto;\n  width: 100%; }\n\n.react-bootstrap-table-page-btns-ul {\n  float: right;\n  margin-top: 0; }\n\n.react-bs-table .table-bordered {\n  border: 0;\n  outline: 0 !important; }\n\n.react-bs-table .table-bordered > thead > tr > td, .react-bs-table .table-bordered > thead > tr > th {\n  border-bottom-width: 2px; }\n\n.react-bs-table .table-bordered > tbody > tr > td {\n  outline: 0 !important; }\n\n.react-bs-table .table-bordered > tbody > tr > td.default-focus-cell {\n  outline: #6495ed solid 3px !important;\n  outline-offset: -1px; }\n\n.react-bs-table .table-bordered > tfoot > tr > td, .react-bs-table .table-bordered > tfoot > tr > th {\n  border-top-width: 2px;\n  border-bottom-width: 0; }\n\n.react-bs-table .table-bordered > tbody > tr > td:first-child, .react-bs-table .table-bordered > tbody > tr > th:first-child, .react-bs-table .table-bordered > tfoot > tr > td:first-child, .react-bs-table .table-bordered > tfoot > tr > th:first-child, .react-bs-table .table-bordered > thead > tr > td:first-child, .react-bs-table .table-bordered > thead > tr > th:first-child {\n  border-left-width: 0; }\n\n.react-bs-table .table-bordered > tbody > tr > td:last-child, .react-bs-table .table-bordered > tbody > tr > th:last-child, .react-bs-table .table-bordered > tfoot > tr > td:last-child, .react-bs-table .table-bordered > tfoot > tr > th:last-child, .react-bs-table .table-bordered > thead > tr > td:last-child, .react-bs-table .table-bordered > thead > tr > th:last-child {\n  border-right-width: 0; }\n\n.react-bs-table .table-bordered > thead > tr:first-child > td, .react-bs-table .table-bordered > thead > tr:first-child > th {\n  border-top-width: 0; }\n\n.react-bs-table .table-bordered > tfoot > tr:last-child > td, .react-bs-table .table-bordered > tfoot > tr:last-child > th {\n  border-bottom-width: 0; }\n\n.react-bs-table .react-bs-container-footer > table > thead > tr > th, .react-bs-table .react-bs-container-header > table > thead > tr > th {\n  vertical-align: middle; }\n\n.react-bs-table .react-bs-container-footer > table > thead > tr > th .filter, .react-bs-table .react-bs-container-header > table > thead > tr > th .filter {\n  font-weight: 400; }\n\n.react-bs-table .react-bs-container-header > table > thead > tr > th .filter::-webkit-input-placeholder, .react-bs-table .react-bs-container-header > table > thead > tr > th .number-filter-input::-webkit-input-placeholder, .react-bs-table .react-bs-container-header > table > thead > tr > th .select-filter option[value=''], .react-bs-table .react-bs-container-header > table > thead > tr > th .select-filter.placeholder-selected {\n  color: #d3d3d3;\n  font-style: italic; }\n\n.react-bs-table .react-bs-container-footer > table > thead > tr > th .filter::-webkit-input-placeholder, .react-bs-table .react-bs-container-footer > table > thead > tr > th .number-filter-input::-webkit-input-placeholder, .react-bs-table .react-bs-container-footer > table > thead > tr > th .select-filter option[value=''], .react-bs-table .react-bs-container-footer > table > thead > tr > th .select-filter.placeholder-selected {\n  color: #d3d3d3;\n  font-style: italic; }\n\n.react-bs-table .react-bs-container-footer > table > thead > tr > th .select-filter.placeholder-selected option:not([value='']), .react-bs-table .react-bs-container-header > table > thead > tr > th .select-filter.placeholder-selected option:not([value='']) {\n  color: initial;\n  font-style: initial; }\n\n.react-bs-table .react-bs-container-footer > table > thead > tr > th .date-filter, .react-bs-table .react-bs-container-footer > table > thead > tr > th .number-filter, .react-bs-table .react-bs-container-header > table > thead > tr > th .date-filter, .react-bs-table .react-bs-container-header > table > thead > tr > th .number-filter {\n  display: flex; }\n\n.react-bs-table .react-bs-container-footer > table > thead > tr > th .date-filter-input, .react-bs-table .react-bs-container-footer > table > thead > tr > th .number-filter-input, .react-bs-table .react-bs-container-header > table > thead > tr > th .date-filter-input, .react-bs-table .react-bs-container-header > table > thead > tr > th .number-filter-input {\n  margin-left: 5px;\n  float: left;\n  width: calc(100% - 67px - 5px); }\n\n.react-bs-table .react-bs-container-footer > table > thead > tr > th .date-filter-comparator, .react-bs-table .react-bs-container-footer > table > thead > tr > th .number-filter-comparator, .react-bs-table .react-bs-container-header > table > thead > tr > th .date-filter-comparator, .react-bs-table .react-bs-container-header > table > thead > tr > th .number-filter-comparator {\n  width: 67px;\n  float: left; }\n\n.react-bs-container .textarea-save-btn {\n  position: absolute;\n  z-index: 100;\n  right: 0;\n  top: -21px; }\n\n.react-bs-table-no-data {\n  text-align: center; }\n\n.ReactModal__Overlay {\n  -webkit-perspective: 600;\n  perspective: 600;\n  opacity: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 101; }\n\n.ReactModal__Overlay--after-open {\n  opacity: 1;\n  transition: opacity 150ms ease-out; }\n\n.ReactModal__Content {\n  -webkit-transform: scale(0.5) rotateX(-30deg);\n  transform: scale(0.5) rotateX(-30deg); }\n\n.ReactModal__Content--after-open {\n  -webkit-transform: scale(1) rotateX(0);\n  transform: scale(1) rotateX(0);\n  transition: all 150ms ease-in; }\n\n.ReactModal__Overlay--before-close {\n  opacity: 0; }\n\n.ReactModal__Content--before-close {\n  -webkit-transform: scale(0.5) rotateX(30deg);\n  transform: scale(0.5) rotateX(30deg);\n  transition: all 150ms ease-in; }\n\n.ReactModal__Content.modal-dialog {\n  border: none;\n  background-color: transparent; }\n\n.animated {\n  animation-fill-mode: both; }\n\n.animated.bounceIn, .animated.bounceOut {\n  animation-duration: .75s; }\n\n.animated.shake {\n  animation-duration: .3s; }\n\n@keyframes shake {\n  from, to {\n    transform: translate3d(0, 0, 0); }\n  10%, 50%, 90% {\n    transform: translate3d(-10px, 0, 0); }\n  30%, 70% {\n    transform: translate3d(10px, 0, 0); } }\n\n.shake {\n  animation-name: shake; }\n\n@keyframes bounceIn {\n  20%, 40%, 60%, 80%, from, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3); }\n  20% {\n    transform: scale3d(1.1, 1.1, 1.1); }\n  40% {\n    transform: scale3d(0.9, 0.9, 0.9); }\n  60% {\n    opacity: 1;\n    transform: scale3d(1.03, 1.03, 1.03); }\n  80% {\n    transform: scale3d(0.97, 0.97, 0.97); }\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1); } }\n\n.bounceIn {\n  animation-name: bounceIn; }\n\n@keyframes bounceOut {\n  20% {\n    transform: scale3d(0.9, 0.9, 0.9); }\n  50%, 55% {\n    opacity: 1;\n    transform: scale3d(1.1, 1.1, 1.1); }\n  to {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3); } }\n\n.bounceOut {\n  animation-name: bounceOut; }\n\n.s-alert-box, .s-alert-box * {\n  box-sizing: border-box; }\n\n.s-alert-box {\n  position: fixed;\n  background: rgba(42, 45, 50, 0.85);\n  padding: 22px;\n  line-height: 1.4;\n  z-index: 1000;\n  pointer-events: none;\n  color: rgba(250, 251, 255, 0.95);\n  font-size: 100%;\n  font-family: 'Helvetica Neue','Segoe UI',Helvetica,Arial,sans-serif;\n  max-width: 300px;\n  -webkit-transition: top .4s,bottom .4s;\n  transition: top .4s,bottom .4s; }\n\n.s-alert-box.s-alert-show, .s-alert-box.s-alert-visible {\n  pointer-events: auto; }\n\n.s-alert-box a {\n  color: inherit;\n  opacity: .7;\n  font-weight: 700; }\n\n.s-alert-box a:focus, .s-alert-box a:hover {\n  opacity: 1; }\n\n.s-alert-box p {\n  margin: 0; }\n\n.s-alert-close {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 4px;\n  top: 4px;\n  overflow: hidden;\n  text-indent: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.s-alert-close:focus, .s-alert-close:hover {\n  outline: 0; }\n\n.s-alert-close::after, .s-alert-close::before {\n  content: '';\n  position: absolute;\n  width: 3px;\n  height: 60%;\n  top: 50%;\n  left: 50%;\n  background: #fff; }\n\n.s-alert-close:hover::after, .s-alert-close:hover::before {\n  background: #fff; }\n\n.s-alert-close::before {\n  -webkit-transform: translate(-50%, -50%) rotate(45deg);\n  transform: translate(-50%, -50%) rotate(45deg); }\n\n.s-alert-close::after {\n  -webkit-transform: translate(-50%, -50%) rotate(-45deg);\n  transform: translate(-50%, -50%) rotate(-45deg); }\n\n.s-alert-bottom-left {\n  top: auto;\n  right: auto;\n  bottom: 30px;\n  left: 30px; }\n\n.s-alert-top-left {\n  top: 30px;\n  right: auto;\n  bottom: auto;\n  left: 30px; }\n\n.s-alert-top-right {\n  top: 30px;\n  right: 30px;\n  bottom: auto;\n  left: auto; }\n\n.s-alert-bottom-right {\n  top: auto;\n  right: 30px;\n  bottom: 30px;\n  left: auto; }\n\n.s-alert-bottom, .s-alert-top {\n  width: 100%;\n  max-width: 100%;\n  left: 0;\n  right: 0; }\n\n.s-alert-bottom {\n  bottom: 0;\n  top: auto; }\n\n.s-alert-top {\n  top: 0;\n  bottom: auto; }\n\n.s-alert-info {\n  background: #00A2D3;\n  color: #fff; }\n\n.s-alert-success {\n  background: #27AE60;\n  color: #fff; }\n\n.s-alert-warning {\n  background: #F1C40F;\n  color: #fff; }\n\n.s-alert-error {\n  background: #E74C3C;\n  color: #fff; }\n\n[class*=\" s-alert-effect-\"].s-alert-hide, [class^=s-alert-effect-].s-alert-hide {\n  -webkit-animation-direction: reverse;\n  animation-direction: reverse; }\n\n.s-alert-box-height {\n  visibility: hidden;\n  position: fixed; }\n\n.s-alert-effect-scale a, .s-alert-effect-scale a:focus, .s-alert-effect-scale a:hover {\n  color: #fff; }\n\n.s-alert-effect-scale .s-alert-close::after, .s-alert-effect-scale .s-alert-close::before, .s-alert-effect-scale .s-alert-close:hover::after, .s-alert-effect-scale .s-alert-close:hover::before {\n  background: #fff; }\n\n.s-alert-effect-scale.s-alert-hide, .s-alert-effect-scale.s-alert-show {\n  -webkit-animation-name: animScale;\n  animation-name: animScale;\n  -webkit-animation-duration: .25s;\n  animation-duration: .25s; }\n\n@-webkit-keyframes animScale {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 40px, 0) scale3d(0.1, 0.6, 1); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1); } }\n\n@keyframes animScale {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 40px, 0) scale3d(0.1, 0.6, 1);\n    transform: translate3d(0, 40px, 0) scale3d(0.1, 0.6, 1); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1);\n    transform: translate3d(0, 0, 0) scale3d(1, 1, 1); } }\n\n/**\r\n * Pure CSS .nojs-dropdown & .nojs-navbar classes for Boostrap menus .\r\n *\r\n * @FIXME: While this works well for browsers without JavaScript, there are\r\n * accessibility issues for keyboard access and screen readers with this\r\n * implementation.\r\n **/\n/**\r\n * Add \".nojs-dropdown\" class to any Bootstrap \".dropdown\" for a pure CSS menu.\r\n * Note: Do not also add JavaScript to the dropdown.\r\n **/\n.nojs-dropdown {\n  position: relative;\n  display: inline-block;\n  outline: none; }\n\n.nojs-dropdown .dropdown-toggle {\n  cursor: pointer;\n  float: left; }\n\n.nojs-dropdown .dropdown-menu {\n  position: absolute !important;\n  z-index: 1000 !important;\n  display: block;\n  visibility: hidden !important;\n  transition: visibility 0.5s !important; }\n\n.nojs-dropdown:focus .dropdown-menu {\n  visibility: visible !important;\n  transition: opacity 0.1s !important; }\n\n@media (max-width: 767px) {\n  .nojs-dropdown .dropdown-menu {\n    top: 0px;\n    visibility: visible !important; } }\n\n/* For right-align menus (automatic and override with .nojs-dropdown-right) */\n.nojs-dropdown.pull-right .dropdown-menu,\n.ml-auto .nojs-dropdown .dropdown-menu,\n.nojs-dropdown.nojs-dropdown-right .dropdown-menu {\n  left: auto !important;\n  right: 0px !important; }\n\n/* Override default to left-align menus by adding .nojs-dropdown-left */\n.nojs-dropdown.nojs-dropdown-left .dropdown-menu {\n  left: 0px !important;\n  right: auto !important; }\n\n/**\r\n *  .nojs-navbar navigation menu\r\n *  \r\n * To use, add the following inside your navbar:\r\n * \r\n *  <input class=\"nojs-navbar-check\" id=\"nojs-navbar-check\" type=\"checkbox\" aria-label=\"Menu\"/>\r\n *  <label tabindex=\"1\" htmlFor=\"nojs-navbar-check\" class=\"nojs-navbar-label\" />\r\n *  <div class=\"nojs-navbar\"> <!-- Add your Navbar Menu --> </div>\r\n **/\n.nojs-navbar {\n  display: flex;\n  flex-basis: auto;\n  flex-grow: 1; }\n\n.nojs-navbar-label {\n  display: none; }\n\n.nojs-navbar-check {\n  display: none; }\n\n.nojs-navbar-check:checked ~ .nojs-navbar-label {\n  border-bottom: 3px solid transparent;\n  transition: border-bottom 0.8s ease-in-out; }\n  .nojs-navbar-check:checked ~ .nojs-navbar-label:before {\n    transform: rotate(-405deg) translateY(0px) translateX(-1px);\n    transition: transform 0.5s ease-in-out; }\n  .nojs-navbar-check:checked ~ .nojs-navbar-label:after {\n    transform: rotate(405deg) translateY(-5px) translateX(-6px);\n    transition: transform 0.5s ease-in-out; }\n\n.nojs-navbar-check:checked ~ .nojs-navbar {\n  max-height: 1000px; }\n\n@media (max-width: 767px) {\n  .nojs-navbar {\n    display: block;\n    width: 100%;\n    max-height: 0px;\n    overflow: hidden;\n    transition: max-height 0.5s ease-in-out !important; }\n  .nojs-navbar-label {\n    display: inline-block;\n    outline: 0;\n    cursor: pointer;\n    border-bottom: 3px solid currentColor;\n    width: 28px;\n    transition: border-bottom 1s ease-in-out; }\n    .nojs-navbar-label::-moz-focus-inner {\n      border: 0;\n      padding: 0; }\n    .nojs-navbar-label:before {\n      content: \"\";\n      display: block;\n      border-bottom: 3px solid currentColor;\n      width: 100%;\n      margin-bottom: 5px;\n      transition: transform 0.5s ease-in-out; }\n    .nojs-navbar-label:after {\n      content: \"\";\n      display: block;\n      border-bottom: 3px solid currentColor;\n      width: 100%;\n      margin-bottom: 5px;\n      transition: transform 0.5s ease-in-out; } }\n\n#board .body {\n  margin-top: 50px;\n  margin-left: 150px;\n  height: 1500px; }\n\n#board .body-title {\n  padding: 30px;\n  padding-left: 0px; }\n\n#board .body-QA {\n  padding: 20px;\n  padding-left: 0px;\n  border-bottom: 1px solid #0d4f9b;\n  margin-left: 30px; }\n\n#board .body-table {\n  margin-left: 50px; }\n\n#board .board-name {\n  margin-left: 20px; }\n\n#board .headTitle {\n  width: 300px; }\n\n#board .tableNumber {\n  width: 258px;\n  padding-right: 0px; }\n\n#board .tableTitle {\n  width: 400px;\n  padding: 12 px;\n  padding-left: 0px; }\n\n#board .headDate {\n  width: 109px;\n  padding-left: 0px; }\n\n#board .headWriter {\n  padding-left: 0px; }\n\n#board .tableName {\n  width: 250px;\n  padding-left: 0px; }\n\n#board .tableDate {\n  width: 159px;\n  padding-left: 30px; }\n\n#board .HomeButton {\n  float: left;\n  width: 155px;\n  margin-left: 30px; }\n\n#board .WriteButton {\n  float: right;\n  width: 155px; }\n\n#board .PagingLink {\n  display: inline-block;\n  margin-left: 250px; }\n\n#board .bottom {\n  margin-top: 50px; }\n\n#logi {\n  text-align: center;\n  height: 920px; }\n  #logi p {\n    color: #959798; }\n  #logi .logimg {\n    margin-bottom: 10px;\n    margin-top: 120px; }\n  #logi .site {\n    background: rgba(149, 151, 152, 0.2);\n    border-radius: 7px;\n    width: 400px;\n    margin-left: 170px;\n    margin-bottom: 50px;\n    color: #343638; }\n  #logi .site img {\n    margin-right: 5px;\n    margin-bottom: 4px; }\n  #logi #formm {\n    width: 580px;\n    margin-left: 35px;\n    margin-top: 30px; }\n  #logi #memory {\n    margin-left: 15px;\n    margin-top: 20px;\n    color: #959798;\n    cursor: pointer; }\n  #logi .findid {\n    margin-left: 155px; }\n    #logi .findid a {\n      color: #959798; }\n  #logi .lobtn {\n    width: 185px;\n    height: 50px;\n    margin-top: 42px;\n    margin-right: 30px;\n    margin-left: 30px;\n    background-color: #0d4f9b;\n    border: none; }\n  #logi .lobtn:hover {\n    background: rgba(13, 79, 155, 0.9); }\n  #logi .lobtn1 {\n    width: 185px;\n    height: 50px;\n    margin-top: 42px;\n    margin-right: 30px;\n    margin-left: 30px;\n    line-height: 31px; }\n  #logi .naver-btn {\n    border-radius: 3px;\n    border: none;\n    width: 435px;\n    height: 50px;\n    background-color: #36c027;\n    cursor: pointer;\n    margin-top: 70px;\n    color: #ffffff;\n    font-weight: bold; }\n    #logi .naver-btn img {\n      margin-top: -5px; }\n  #logi .google-btn {\n    border-radius: 3px;\n    border: solid 1px #343638;\n    width: 435px;\n    height: 50px;\n    background-color: #ffffff;\n    cursor: pointer;\n    margin-top: 15px;\n    font-weight: bold;\n    color: #707070; }\n    #logi .google-btn img {\n      margin-top: -5px;\n      margin-right: 5px; }\n\n.signup {\n  width: 100vw;\n  height: 1200px;\n  background: rgba(188, 224, 253, 0.5); }\n\n#sign {\n  margin-left: 270px;\n  width: 800px;\n  height: 1000px;\n  background-color: #ffffff;\n  text-align: center; }\n  #sign p {\n    color: #959798; }\n    #sign p a {\n      color: #2981e6; }\n  #sign .signimg {\n    margin-bottom: 10px;\n    margin-top: 120px; }\n  #sign .site {\n    background: rgba(149, 151, 152, 0.2);\n    border-radius: 7px;\n    width: 400px;\n    margin-left: 200px;\n    margin-bottom: 50px;\n    text-align: center;\n    margin-bottom: 70px;\n    color: #343638; }\n  #sign .site img {\n    margin-right: 5px;\n    margin-bottom: 4px; }\n  #sign .name1 {\n    width: 300px;\n    margin-left: 95px;\n    margin-right: 10px; }\n  #sign .name2 {\n    width: 300px; }\n  #sign .state {\n    width: 100px;\n    margin-left: 95px; }\n  #sign .tel {\n    width: 500px;\n    margin-left: 10px; }\n  #sign .address {\n    margin-left: 95px;\n    width: 610px; }\n  #sign .email {\n    margin-left: 95px;\n    width: 510px;\n    margin-right: 10px; }\n  #sign .checkbtn {\n    width: 90px;\n    background-color: #ffffff;\n    border: solid 1px #2981e6;\n    border-radius: 4px;\n    color: #2981e6;\n    cursor: pointer; }\n  #sign .pw {\n    margin-left: 95px;\n    width: 610px; }\n  #sign #agree {\n    margin-left: -365px;\n    color: #959798;\n    cursor: pointer; }\n  #sign .signupbtn {\n    width: 185px;\n    height: 50px;\n    margin-top: 70px;\n    margin-bottom: 10px;\n    border: none;\n    background-color: #0d4f9b;\n    border-radius: 5px;\n    color: #ffffff;\n    cursor: pointer; }\n  #sign .signupbtn:hover {\n    background: rgba(13, 79, 155, 0.9); }\n\n.body {\n  margin-top: 80px;\n  margin-left: 150px;\n  height: 1000px; }\n  .body .body-title {\n    padding: 30px;\n    padding-left: 0px; }\n  .body .board_box {\n    width: 1080px;\n    height: 695px;\n    border: solid 1px #0d4f9b;\n    margin-top: 50px; }\n  .body .write {\n    border-bottom: solid 2px #0d4f9b;\n    width: 75px;\n    margin-top: 100px;\n    margin-left: 100px;\n    margin-bottom: 50px; }\n  .body .input {\n    width: 770px;\n    height: 40px;\n    margin-left: 100px;\n    margin-bottom: 20px; }\n  .body .opinibtn {\n    width: 155px;\n    height: 35px;\n    margin-top: 20px; }\n  .body #btn1 {\n    margin-left: 100px; }\n  .body #btn2 {\n    margin-left: 450px; }\n\n.coinName {\n  margin-left: 65px; }\n\n.minus {\n  margin-left: 65px; }\n\n.plus {\n  margin-left: 65px; }\n\n* {\n  list-style: none;\n  text-decoration: none;\n  font-family: \"Nanum Gothic\", sans-serif; }\n\na {\n  color: #343638; }\n\nhtml,\nbody {\n  min-width: 1366px; }\n\n.container {\n  min-width: 1366px; }\n\n.bgcenter {\n  width: 1366px;\n  margin: 0 auto; }\n\n.bgcenter2 {\n  width: 1366px;\n  height: 1000px; }\n\n.navv {\n  cursor: pointer; }\n\n.sise_group {\n  width: 1130px;\n  height: 4610px;\n  text-align: center; }\n\n.sise {\n  width: 65px;\n  height: 40px;\n  background-color: #0d4f9b;\n  text-align: center;\n  line-height: 40px;\n  color: #ffffff;\n  float: left; }\n\n/*.input_search {\r\n  width: 300px;\r\n  height: 40px;\r\n  position: absolute;\r\n  z-index: 20;\r\n  margin-top: -175px;\r\n  margin-left: 830px;\r\n}*/\n.tab {\n  border-bottom: solid 1px #bcbcbc; }\n\n.board_2 {\n  margin-left: 20px; }\n\n.dropdo {\n  font-size: 15px;\n  margin-left: 30px;\n  color: #343638; }\n\n.cont {\n  width: 1366px;\n  margin-left: 250px;\n  margin: 0 auto; }\n\n.footerinfo {\n  width: 700px;\n  height: 400px;\n  margin-left: 650px;\n  text-align: right; }\n  .footerinfo img {\n    cursor: pointer; }\n\n.footerinfo img {\n  padding-top: 13px;\n  padding-left: 525px; }\n\n.footerinfo address {\n  padding-top: 120px; }\n\n.mainfoo {\n  float: left;\n  width: 200px;\n  height: 35px;\n  line-height: 35px;\n  text-align: center;\n  margin-top: 65px; }\n\n.subfooter {\n  font-size: 13px;\n  width: 180px; }\n\n.subfoo {\n  margin-left: -20px; }\n\n.logoco {\n  color: #0d4f9b; }\n\n.dropdown-toggle nav-link {\n  font-family: \"\";\n  font-size: 15px; }\n\n.text_box {\n  width: 770px;\n  height: 40px;\n  margin: 0 auto; }\n\n.board {\n  margin-right: 20px; }\n\n.bar {\n  margin-right: 20px; }\n\n.lead mb-5 {\n  text-align: center; }\n\n.footer {\n  height: 420px;\n  margin-top: 200px;\n  background-color: #bcbcbc; }\n\n.footer img {\n  margin-top: 60px;\n  float: left; }\n\n.footerin {\n  margin-left: 150px;\n  width: 1366px;\n  margin: 0 auto; }\n\n.about_sixweeks {\n  width: 1245px;\n  height: 250px;\n  margin-left: 140px; }\n\n.about {\n  margin-left: -50px; }\n\n.about_icon {\n  cursor: pointer;\n  height: 100px;\n  float: left;\n  margin-right: 190px;\n  margin-top: 100px; }\n\n.storymore {\n  color: #2981e6;\n  border-bottom: solid 1px #2981e6;\n  cursor: pointer; }\n\n.storytext_sub {\n  font-size: 14px;\n  margin-top: 5px; }\n\n.storytext {\n  font-size: 17px;\n  font-weight: bold;\n  margin-top: 5px; }\n\n.sixweeks_story {\n  width: 1245px;\n  height: 500px;\n  margin-top: 3980px;\n  margin-left: 140px;\n  margin-bottom: 50px; }\n\n.sixweeks_s {\n  width: 260px;\n  height: 187px;\n  float: left;\n  margin-right: 155px;\n  margin-top: 80px; }\n\n.coin {\n  width: 1080px;\n  height: 743px;\n  margin-top: 200px;\n  margin-left: 120px; }\n\n.squ-box {\n  margin-left: 315px;\n  position: absolute;\n  z-index: 10;\n  bottom: -100px; }\n\n.sq-box {\n  width: 300px;\n  height: 200px;\n  border: solid 1px #bcbcbc;\n  background-color: #ffffff;\n  float: left;\n  margin-right: 70px; }\n\n.display-2 {\n  width: 710px;\n  text-align: center; }\n\n.display-6 {\n  text-align: center;\n  margin-bottom: 210px; }\n\n.text-right {\n  margin-left: 590px;\n  margin-top: -150px;\n  background-color: #ffffff;\n  width: 150px;\n  height: 50px;\n  border-radius: 10px; }\n\n.more {\n  color: #343638;\n  text-align: center;\n  line-height: 50px;\n  font-weight: bold; }\n\n#__next {\n  /**\r\n * This is a fix for Reactstrap 5.0.0-alpha.4 not displaying menus in the \r\n * navbar correcrtly on mobile devices.\r\n **/\n  /**\r\n * Fix for Reactstrap\r\n **/ }\n  #__next .display-2 {\n    margin-top: -170px;\n    margin-left: 310px; }\n  #__next .lead {\n    font-size: 1.4em;\n    padding-left: 50px; }\n  #__next pre {\n    background-color: #333;\n    border-color: #333;\n    color: #eee;\n    padding: 10px 20px;\n    border-radius: 5px; }\n  #__next .navbar,\n  #__next .navbar .btn,\n  #__next .navbar .dropdown-item,\n  #__next .navbar button {\n    font-size: 15px;\n    background-image: url(static/img/navb.png);\n    background-size: cover; }\n  #__next .navbar {\n    padding-left: 150px;\n    padding-right: 150px; }\n  #__next .icon-spin {\n    display: inline-block;\n    animation: spin 1s infinite linear; }\n  #__next .navbar .dropdown {\n    display: block; }\n  #__next .react-bs-table-sizePerPage-dropdown .dropdown-item a {\n    display: block;\n    color: #000;\n    text-decoration: none; }\n  #__next .react-bs-table-sizePerPage-dropdown button {\n    background: #fff;\n    color: #000; }\n";

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, author, license, repository, main, dependencies, devDependencies, optionalDependencies, scripts, engines, proxy, default */
/***/ (function(module) {

module.exports = {"name":"nextjs-starter","version":"7.0.2","description":"A starter Next.js project with email and oAuth authentication","author":"Iain Collins <me@iaincollins.com>","license":"ISC","repository":"https://github.com/iaincollins/nextjs-starter.git","main":"index.js","dependencies":{"@ckeditor/ckeditor5-build-classic":"^12.3.1","@ckeditor/ckeditor5-react":"^1.1.3","@material-ui/core":"^4.3.0","axios":"^0.19.0","babel-core":"^6.26.3","babel-plugin-wrap-in-js":"^1.1.1","body-parser":"^1.19.0","bootstrap":"^4.1.3","connect-mongo":"^2.0.3","cors":"^2.8.5","dotenv":"^6.2.0","express":"^4.17.1","express-session":"^1.15.5","ionicons":"^4.5.1","isomorphic-fetch":"^2.2.1","isomorphic-unfetch":"^3.0.0","jquery":"^3.2.1","jwt-decode":"^2.2.0","mongodb":"^3.1.10","nedb":"^1.8.0","next":"^7.0.2","next-auth":"^1.12.1","node-sass":"^4.11.0","nodemailer":"^4.7.0","nodemailer-direct-transport":"^3.3.2","nodemailer-smtp-transport":"^2.7.4","passport-facebook":"^2.1.1","passport-google-oauth":"^1.0.0","passport-twitter":"^1.0.4","popper.js":"^1.14.6","raw-loader":"^0.5.1","react":"^16.7.0","react-bootstrap-table":"^4.3.1","react-data-table-component":"^2.1.1","react-dom":"^16.7.0","react-router-dom":"^5.0.1","react-syntax-highlighter":"^10.1.2","react-transition-group":"^2.5.1","reactstrap":"^6.5.0","sass-loader":"^7.1.0","socket.io":"^2.2.0","styled-components":"^4.3.2","tui-editor":"^1.4.5","universal-cookie":"^3.0.7"},"devDependencies":{"cross-env":"^5.1.6"},"optionalDependencies":{"fsevents":"*"},"scripts":{"dev":"cross-env NODE_ENV=development PORT=3000 node index.js","build":"next build","start":"node index.js","postinstall":"next build"},"engines":{"node":"8.11.x"},"proxy":"http://ec2-13-125-250-20.ap-northeast-2.compute.amazonaws.com/"};

/***/ }),

/***/ "./pages/board.js":
/*!************************!*\
  !*** ./pages/board.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\work\\sixweeks\\pages\\board.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Board =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board() {
    _classCallCheck(this, Board);

    return _possibleConstructorReturn(this, _getPrototypeOf(Board).apply(this, arguments));
  }

  _createClass(Board, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
        borderless: true,
        id: "board",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        scope: "row",
        className: "tableNumber",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, this.props.number), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "tableTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "tableName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, this.props.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "tableContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, this.props.content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "tableDate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, this.props.write_date))));
    }
  }]);

  return Board;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/page */ "./components/page.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_ssr_test__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ssr-test */ "./components/ssr-test.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! constants */ "constants");
/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(constants__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "D:\\work\\sixweeks\\pages\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var _default =
/*#__PURE__*/
function (_Page) {
  _inherits(_default, _Page);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      activeTab: "1"
    };
    return _this;
  }

  _createClass(_default, [{
    key: "toggle",
    value: function toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, this.props, {
        navmenu: false,
        container: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "text-light rounded-0",
        style: {
          backgroundImage: "url(static/img/bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingTop: 230,
          paddingBottom: 300,
          marginBottom: 100,
          position: "relative"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "bgcenter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        className: "mt-2 mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "display-2",
        style: {
          fontWeight: 300
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        style: {
          fontWeight: 380,
          fontSize: 30,
          color: "rgba(0, 0, 0, 1)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "v-block d-sm-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), "\uC548\uC804\uD55C \uAE00\uB85C\uBC8C \uC554\uD638\uD654\uD3D0 \uAC70\uB798\uC18C\uC758 \uD45C\uC900")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "display-6",
        style: {
          fontWeight: 300
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        style: {
          fontWeight: 380,
          fontSize: 35,
          color: "rgba(0, 0, 0, 1)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "v-block d-sm-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "logoco",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "SIXWEEKS"), " \uC5D0\uC11C \uB2E4\uC591\uD55C \uC554\uD638\uD654\uD3D0 \uAC70\uB798\uD574 \uBCF4\uC138\uC694")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://github.com/SUJEONG2YA/sixweeks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "more",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, " \uB354 \uC54C\uC544\uBCF4\uAE30")))), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "squ-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "sq-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "\uBE44\uD2B8\uCF54\uC778")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "sq-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "\uBE44\uD2B8\uCF54\uC778")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "sq-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "\uBE44\uD2B8\uCF54\uC778")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "coin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "sise_group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "sise",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "\uC2DC\uC138")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
        tabs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "navv",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()({
          active: this.state.activeTab === "1"
        }),
        onClick: function onClick() {
          _this2.toggle("1");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "KRW"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "navv",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()({
          active: this.state.activeTab === "2"
        }),
        onClick: function onClick() {
          _this2.toggle("2");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/img/star.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabContent"], {
        activeTab: this.state.activeTab,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabPane"], {
        tabId: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
        borderless: true,
        className: "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "headNumber",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "\uC774\uB984"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "headTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "\uC2DC\uAC00"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "headWriter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "\uBCC0\uB3D9\uB960%"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "headDate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "\uAC70\uB798\uB7C9")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ssr_test__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
        borderless: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabPane"], {
        tabId: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
        borderless: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "headNumber",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/img/star.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }), " \uC774\uB984"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "headTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "\uC2DC\uAC00"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "headWriter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "\uBCC0\uB3D9\uB960%"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "headDate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "\uAC70\uB798\uB7C9")))))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "sixweeks_story",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/img/sixweeksstory.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "sixweeks_s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/img/contents1.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "storytext",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "[ 8\uC6D4 3\uC8FC\uCC28 ] \uD63C\uC790 \uC6C0\uC9C1\uC774\uB294 \uBE44...")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "storytext_sub",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, "\uC774\uBC88 \uC8FC\uB3C4 \uBE44\uD2B8\uCF54\uC778\uC758 \uAC15\uC138\uB294 \uACC4\uC18D\uB418\uC5C8\uB2E4. \uB300\uBD80\uBD84\uC758 \uC54C \uD2B8\uCF54\uC778\uC774 \uD558\uB77D\uC744 \uBA74\uCE58 \uBABB\uD558\uC600\uC9C0\uB9CC \uBE44\uD2B8\uCF54\uC778 \uD63C\uC790 \uACC4 ..."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "storymore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "more")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "sixweeks_s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/img/contents2.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "storytext",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, "[ 8\uC6D4 3\uC8FC\uCC28 ] \uD63C\uC790 \uC6C0\uC9C1\uC774\uB294 \uBE44...")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "storytext_sub",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, "\uC774\uBC88 \uC8FC\uB3C4 \uBE44\uD2B8\uCF54\uC778\uC758 \uAC15\uC138\uB294 \uACC4\uC18D\uB418\uC5C8\uB2E4. \uB300\uBD80\uBD84\uC758 \uC54C \uD2B8\uCF54\uC778\uC774 \uD558\uB77D\uC744 \uBA74\uCE58 \uBABB\uD558\uC600\uC9C0\uB9CC \uBE44\uD2B8\uCF54\uC778 \uD63C\uC790 \uACC4 ..."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "storymore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, "more")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "sixweeks_s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/img/contents3.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "storytext",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, "[ 8\uC6D4 3\uC8FC\uCC28 ] \uD63C\uC790 \uC6C0\uC9C1\uC774\uB294 \uBE44...")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "storytext_sub",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, "\uC774\uBC88 \uC8FC\uB3C4 \uBE44\uD2B8\uCF54\uC778\uC758 \uAC15\uC138\uB294 \uACC4\uC18D\uB418\uC5C8\uB2E4. \uB300\uBD80\uBD84\uC758 \uC54C \uD2B8\uCF54\uC778\uC774 \uD558\uB77D\uC744 \uBA74\uCE58 \uBABB\uD558\uC600\uC9C0\uB9CC \uBE44\uD2B8\uCF54\uC778 \uD63C\uC790 \uACC4 ..."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "storymore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, "more"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "about_sixweeks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/img/aboutsixweeks.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "about_icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/img/cybermoney.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "about_icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/img/protectmoney.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "about_icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/img/technology.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "about_icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/img/callcenter.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footerin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/img/footerlogo.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "maainfooter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "mainfoo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, "\uD68C\uC0AC\uC815\uBCF4"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "subfooter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "subfoo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, "\uD68C\uC0AC\uC18C\uAC1C")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "subfoo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, "\uCC44\uC6A9\uC548\uB0B4")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "subfoo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, "\uBCF5\uC9C0\uC18C\uAC1C")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "mainfoo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, "\uACE0\uAC1D\uC9C0\uC6D0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "subfooter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "subfoo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, "\uC790\uC8FC\uD558\uB294\uC9C8\uBB38(FAQ)")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "subfoo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, "1 : 1 \uBB38\uC758\uD558\uAE30")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "subfoo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, "\uAC70\uB798 \uBC0F \uC785\uCD9C\uAE08 \uC774\uC6A9\uC548\uB0B4"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footerinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/img/Social.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("address", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uAC15\uB0A8\uAD6C \uD14C\uD5E4\uB780\uB85C 16\uAE38 17 (\uC218\uC815\uBE4C\uB529)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, "Copyright \u24D2 2019 SIXWEEKS. All rights reserved"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, "KR | EN"))))));
    }
  }]);

  return _default;
}(_components_page__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./pages/opinion.js":
/*!**************************!*\
  !*** ./pages/opinion.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_userFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/userFunction */ "./components/userFunction.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\work\\sixweeks\\pages\\opinion.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Opinion =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Opinion, _React$Component);

  function Opinion() {
    var _this;

    _classCallCheck(this, Opinion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Opinion).call(this));
    _this.state = {
      title: "",
      name: "",
      content: ""
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Opinion, [{
    key: "onChange",
    value: function onChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var user = {
        title: this.state.title,
        name: this.state.name,
        content: this.state.content
      };
      Object(_components_userFunction__WEBPACK_IMPORTED_MODULE_2__["write"])(user).then(function (res) {
        if (res) {
          _this2.props.history.push("../components/profile");
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "\uAC8C\uC2DC\uD310")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "board_box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "write",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "\uAE00\uC4F0\uAE30")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        className: "text_box",
        type: "text",
        id: "exampleAddress",
        placeholder: "\uC791\uC131\uC790",
        name: "name",
        value: this.state.name,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        className: "text_box",
        type: "text",
        id: "exampleAddress",
        placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694",
        name: "title",
        value: this.state.title,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "textarea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        type: "textarea",
        id: "exampleText",
        placeholder: "\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694",
        name: "content",
        value: this.state.content,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: "opinibtn",
        id: "btn1",
        outline: true,
        color: "secondary",
        href: "./newboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "\uBAA9\uB85D"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: "opinibtn",
        id: "btn2",
        outline: true,
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "\uAC8C\uC2DC"), " "))));
    }
  }]);

  return Opinion;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Opinion);

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_userFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/userFunction */ "./components/userFunction.js");
/* harmony import */ var _components_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/profile */ "./components/profile.js");
var _jsxFileName = "D:\\work\\sixweeks\\pages\\signup.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var Signup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Signup, _React$Component);

  function Signup() {
    var _this;

    _classCallCheck(this, Signup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Signup).call(this));
    _this.state = {
      national: "",
      first_name: "",
      last_name: "",
      address: "",
      email: "",
      password: "",
      ponenumber: "",
      secu_pass: ""
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this))); //this.handleSubmit = this.handleSubmit.bind(this);

    return _this;
  }

  _createClass(Signup, [{
    key: "onChange",
    value: function onChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var user = {
        national: this.state.national,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        address: this.state.address,
        email: this.state.email,
        password: this.state.password,
        ponenumber: this.state.ponenumber,
        secu_pass: this.state.secu_pass
      };
      Object(_components_userFunction__WEBPACK_IMPORTED_MODULE_2__["register"])(user).then(function (res) {
        if (res) {
          _this2.props.history.push("../components/profile");
        }
      });
    }
    /* handleSubmit(e) {
      e.preventDefault();
      const mail = {
        email: this.state.email
      };
      email(mail).then(res => {
        if (res) {
          this.props.history.push(`../components/profile`);
        }
      });
    }
    */

  }, {
    key: "render",
    value: function render() {
      var _React$createElement, _React$createElement2, _React$createElement3, _React$createElement4, _React$createElement5, _React$createElement6, _React$createElement7, _React$createElement8;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "sign",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "signimg",
        src: "static/img/sixweekslogin.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "\uD68C\uC6D0\uAC00\uC785\uD558\uB294 \uC0AC\uC774\uD2B8\uC758 \uC8FC\uC18C\uAC00 \uC544\uB798\uC640 \uAC19\uC740\uC9C0 \uD655\uC778\uD558\uC138\uC694"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "site",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "static/img/lock.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), "https://www.SIXWEEKS.com"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", (_React$createElement = {
        className: "col"
      }, _defineProperty(_React$createElement, "className", "name1"), _defineProperty(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 74
      }), _defineProperty(_React$createElement, "__self", this), _React$createElement), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        placeholder: "\uC131",
        name: "first_name",
        value: this.state.first_name,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", (_React$createElement2 = {
        className: "col"
      }, _defineProperty(_React$createElement2, "className", "name2"), _defineProperty(_React$createElement2, "__source", {
        fileName: _jsxFileName,
        lineNumber: 85
      }), _defineProperty(_React$createElement2, "__self", this), _React$createElement2), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        placeholder: "\uC774\uB984",
        name: "last_name",
        value: this.state.last_name,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "state",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "national",
        className: "form-control",
        name: "national",
        placeholder: "+\uAD6D\uAC00\uBC88\uD638",
        value: this.state.national,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "tel",
        className: "form-control",
        id: "tel",
        placeholder: "\uC804\uD654\uBC88\uD638",
        name: "ponenumber",
        value: this.state.ponenumber,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", (_React$createElement3 = {
        className: "col-sm-10"
      }, _defineProperty(_React$createElement3, "className", "address"), _defineProperty(_React$createElement3, "__source", {
        fileName: _jsxFileName,
        lineNumber: 120
      }), _defineProperty(_React$createElement3, "__self", this), _React$createElement3), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "inputAddress",
        placeholder: "\uC8FC\uC18C",
        name: "address",
        value: this.state.address,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", (_React$createElement4 = {
        className: "col-sm-10"
      }, _defineProperty(_React$createElement4, "className", "email"), _defineProperty(_React$createElement4, "__source", {
        fileName: _jsxFileName,
        lineNumber: 133
      }), _defineProperty(_React$createElement4, "__self", this), _React$createElement4), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        id: "inputEmail4",
        placeholder: "\uC774\uBA54\uC77C",
        name: "email",
        value: this.state.email,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "checkbtn"
        /*name="email"
        value={this.state.email}
        handleSubmit={this.handleSubmit}*/
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "\uC778\uC99D\uD558\uAE30")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          fontSize: 11,
          marginLeft: -310,
          marginTop: -10,
          color: "#2981e6"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "* \uC774\uBA54\uC77C \uC778\uC99D\uC744 \uBC1B\uC544\uC57C \uC0AC\uC6A9\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC815\uD655\uD788 \uC785\uB825\uD574 \uC8FC\uC138\uC694."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", (_React$createElement5 = {
        className: "col-sm-10"
      }, _defineProperty(_React$createElement5, "className", "pw"), _defineProperty(_React$createElement5, "__source", {
        fileName: _jsxFileName,
        lineNumber: 165
      }), _defineProperty(_React$createElement5, "__self", this), _React$createElement5), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        id: "inputPassword",
        placeholder: "\uBE44\uBC00\uBC88\uD638",
        name: "password",
        value: this.state.password,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", (_React$createElement6 = {
        className: "col-sm-10"
      }, _defineProperty(_React$createElement6, "className", "pw"), _defineProperty(_React$createElement6, "__source", {
        fileName: _jsxFileName,
        lineNumber: 178
      }), _defineProperty(_React$createElement6, "__self", this), _React$createElement6), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        id: "inputPasswordcheck",
        placeholder: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", (_React$createElement7 = {
        className: "col-sm-10"
      }, _defineProperty(_React$createElement7, "className", "pw"), _defineProperty(_React$createElement7, "__source", {
        fileName: _jsxFileName,
        lineNumber: 188
      }), _defineProperty(_React$createElement7, "__self", this), _React$createElement7), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        id: "secu_pass",
        placeholder: "\uBCF4\uC548 \uBE44\uBC00\uBC88\uD638",
        name: "secu_pass",
        value: this.state.secu_pass,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", (_React$createElement8 = {
        className: "col-sm-10"
      }, _defineProperty(_React$createElement8, "className", "pw"), _defineProperty(_React$createElement8, "__source", {
        fileName: _jsxFileName,
        lineNumber: 201
      }), _defineProperty(_React$createElement8, "__self", this), _React$createElement8), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        id: "inputsecuPasswordcheck",
        placeholder: "\uBCF4\uC548 \uBE44\uBC00\uBC88\uD638 \uD655\uC778",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto my-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "custom-control custom-checkbox mr-sm-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        className: "custom-control-input",
        id: "customControlAutosizing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "custom-control-label",
        id: "agree",
        htmlFor: "customControlAutosizing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "\uC774 \uACC4\uC815\uC744 \uB9CC\uB4DC\uB294 \uAC83\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "signupbtn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, "Sign up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "\uC774\uBBF8 \uACC4\uC815\uC774 \uC788\uC2B5\uB2C8\uAE4C? ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "\uB85C\uADF8\uC778"))))))));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "constants":
/*!****************************!*\
  !*** external "constants" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("constants");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-data-table-component":
/*!*********************************************!*\
  !*** external "react-data-table-component" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-data-table-component");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "universal-cookie":
/*!***********************************!*\
  !*** external "universal-cookie" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map