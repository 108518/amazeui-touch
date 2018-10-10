/** Amaze UI Touch2 v2.0.1-beta.1 | by Amaze UI Team
  * (c) 2018 AllMobilize, Inc., Licensed under MIT
  * 2018-09-28T15:02:19+0800
  */
  (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["AMUITouch2"] = factory(require("react"), require("react-dom"));
	else
		root["AMUITouch2"] = factory(root["React"], root["ReactDOM"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(35)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(37)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassName = exports.setClassNS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(38);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NameSpace = _config.NAMESPACE ? _config.NAMESPACE + '-' : '';

var setClassNS = exports.setClassNS = function setClassNS() {
  var classPrefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return NameSpace + classPrefix;
};

var ClassName = exports.ClassName = function () {
  function ClassName(props) {
    var _this = this;

    _classCallCheck(this, ClassName);

    this.getClassSet = function (ignorePrefix) {
      var classNames = {};
      var _props = _this.props,
          classPrefix = _props.classPrefix,
          amSize = _props.amSize,
          amStyle = _props.amStyle,
          hollow = _props.hollow,
          radius = _props.radius,
          square = _props.square,
          rounded = _props.rounded,
          active = _props.active,
          selected = _props.selected,
          disabled = _props.disabled,
          inset = _props.inset;

      // uses `.am-` as prefix if `classPrefix` is not defined

      var prefix = classPrefix ? _this.className + '-' : _this.namespace;

      // don't return prefix if ignore flag set
      !ignorePrefix && (classNames[_this.className] = true);

      if (amSize) {
        classNames[prefix + amSize] = true;
      }
      if (amStyle) {
        classNames[prefix + amStyle] = true;
      }

      classNames[prefix + 'hollow'] = hollow;
      classNames[prefix + 'square'] = square;
      classNames[prefix + 'radius'] = radius;
      classNames[prefix + 'rounded'] = rounded;
      classNames[prefix + 'inset'] = inset;

      // state className
      // `selected` is an alias of active
      classNames[_config.CLASSNAMES['active']] = active || selected;
      classNames[_config.CLASSNAMES['disabled']] = disabled;
      // shape
      // classNames[constants.CLASSES.radius] = this.props.radius;
      // classNames[constants.CLASSES.round] = this.props.round;
      return _extends({}, classNames);
    };

    this.prefixClass = function (classname) {
      return _this.className + '-' + classname;
    };

    this.props = props;

    this.classPrefix = this.props.classPrefix;
    this.namespace = NameSpace;

    this.className = '' + this.namespace + this.classPrefix;

    this.classNames = this.getClassSet();
  }

  _createClass(ClassName, [{
    key: 'classSet',
    get: function get() {
      return _extends({}, this.classNames);
    }
  }]);

  return ClassName;
}();

exports.default = function (props) {
  return new ClassName(props);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;

      var _props = this.props,
          Component = _props.component,
          className = _props.className,
          name = _props.name,
          props = _objectWithoutProperties(_props, ['component', 'className', 'name']);

      delete props.classPrefix;

      Component = props.href ? 'a' : Component;

      // icon-[iconName]
      classSet[classNS.prefixClass(name)] = true;

      return _react2.default.createElement(
        Component,
        _extends({}, props, {
          className: (0, _classnames2.default)(classSet, className)
        }),
        this.props.children
      );
    }
  }]);

  return Icon;
}(_react2.default.Component);

Icon.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  component: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  name: _propTypes2.default.string.isRequired,
  href: _propTypes2.default.string
  // amStyle: PropTypes.string,
  // button: PropTypes.bool,
  // size: PropTypes.string,
};
Icon.defaultProps = {
  classPrefix: 'icon',
  component: 'span'
};
exports.default = Icon;
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.removeUnknownProp = function (props) {
      // For performance, just delete
      delete props.classPrefix;
      delete props.amStyle;
      delete props.amSize;
      delete props.square;
      delete props.rounded;
      delete props.hollow;
      delete props.block;
      delete props.active;

      return props;
    }, _this.iOSTouchStart = function () {
      if (/CPU.+Mac OS X/.test(navigator.userAgent)) {
        return {
          onTouchStart: function onTouchStart() {}
        };
      } else {
        return {};
      }
    }, _this.renderAnchor = function (classes) {
      var _this$props = _this.props,
          href = _this$props.href,
          Component = _this$props.component,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ['href', 'component', 'children']);

      Component = Component || 'a';

      href = href || '#';

      return _react2.default.createElement(
        Component,
        _extends({}, _this.iOSTouchStart(), _this.removeUnknownProp(props), {
          href: href,
          className: classes,
          role: 'button'
        }),
        children
      );
    }, _this.renderButton = function (classes) {
      var _this$props2 = _this.props,
          Component = _this$props2.component,
          children = _this$props2.children,
          props = _objectWithoutProperties(_this$props2, ['component', 'children']);

      Component = Component || 'button';

      return _react2.default.createElement(
        Component,
        _extends({}, _this.iOSTouchStart(), _this.removeUnknownProp(props), {
          className: classes
        }),
        children
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // iOS active pesudo-class


  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;

      var _props = this.props,
          href = _props.href,
          target = _props.target,
          block = _props.block,
          className = _props.className;


      var renderType = href || target ? 'renderAnchor' : 'renderButton';

      // block button
      classSet[classNS.prefixClass('block')] = block;

      return this[renderType]((0, _classnames2.default)(classSet, className));
    }
  }]);

  return _class;
}(_react2.default.Component);

_class.defaultProps = {
  classPrefix: 'btn'
};
_class.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  component: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  href: _propTypes2.default.string,
  target: _propTypes2.default.string,
  amStyle: _propTypes2.default.string,
  amSize: _propTypes2.default.string,
  hollow: _propTypes2.default.bool,
  rounded: _propTypes2.default.bool,
  square: _propTypes2.default.bool,
  block: _propTypes2.default.bool,
  active: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool
};
exports.default = _class;
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Card);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.renderItem = function (element, role) {
      if (!element) {
        return null;
      }

      return element.type && element.type === Card.Child ? element : _react2.default.createElement(
        Card.Child,
        { role: role },
        element
      );
    }, _this.renderHeader = function (header) {
      return _this.renderItem(header, "header");
    }, _this.renderFooter = function (footer) {
      return _this.renderItem(footer, "footer");
    }, _this.renderTitle = function (title, noMargin, external) {
      return _this.renderItem(_react2.default.createElement(
        'h2',
        {
          className: (0, _classnames2.default)(_this.prefixClass("title"), noMargin && _this.prefixClass("title-noMargin"), external && _this.prefixClass("title-external"))
        },
        title
      ));
    }, _this.renderTitleOrHeader = function (header, noMargin, external) {
      return typeof header == "string" ? _this.renderTitle(header, noMargin, external) : _this.renderHeader(header);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Card, [{
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;
      this.prefixClass = classNS.prefixClass;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          header = _props.header,
          footer = _props.footer,
          noMargin = _props.noMargin,
          noPadding = _props.noPadding,
          external = _props.external,
          noLine = _props.noLine,
          bodyStyle = _props.bodyStyle,
          bodyClassName = _props.bodyClassName,
          props = _objectWithoutProperties(_props, ['children', 'className', 'header', 'footer', 'noMargin', 'noPadding', 'external', 'noLine', 'bodyStyle', 'bodyClassName']);

      delete props.classPrefix;

      var bodyCls = (0, _classnames2.default)(bodyClassName, this.prefixClass("body"), _defineProperty({}, this.prefixClass("body-noPadding"), noPadding));

      classSet[this.prefixClass("external")] = external;
      classSet[this.prefixClass("noMargin")] = noMargin;
      classSet[this.prefixClass("noline")] = noLine;

      return _react2.default.createElement(
        'div',
        _extends({}, props, {
          className: (0, _classnames2.default)(classSet, className)
        }),
        this.renderTitleOrHeader(header, noMargin, external),
        _react2.default.createElement(
          'div',
          {
            className: bodyCls,
            style: bodyStyle
          },
          children
        ),
        this.renderFooter(footer)
      );
    }
  }]);

  return Card;
}(_react2.default.Component);

Card.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  bodyClassName: _propTypes2.default.string,
  bodyStyle: _propTypes2.default.object,
  header: _propTypes2.default.node,
  footer: _propTypes2.default.node,
  noMargin: _propTypes2.default.bool,
  noPadding: _propTypes2.default.bool,
  external: _propTypes2.default.bool,
  noLine: _propTypes2.default.bool
};
Card.defaultProps = {
  classPrefix: "card",
  noMargin: false,
  noPadding: false,
  external: false,
  noLine: false
};

var CardChild = function (_React$Component2) {
  _inherits(CardChild, _React$Component2);

  function CardChild() {
    _classCallCheck(this, CardChild);

    return _possibleConstructorReturn(this, (CardChild.__proto__ || Object.getPrototypeOf(CardChild)).apply(this, arguments));
  }

  _createClass(CardChild, [{
    key: 'render',
    value: function render() {
      var _classSet;

      var classNS = (0, _className2.default)(this.props);
      this.prefixClass = classNS.prefixClass;

      var _props2 = this.props,
          role = _props2.role,
          className = _props2.className,
          cover = _props2.cover,
          props = _objectWithoutProperties(_props2, ['role', 'className', 'cover']);

      var classSet = (_classSet = {}, _defineProperty(_classSet, this.prefixClass(role), true), _defineProperty(_classSet, this.prefixClass("cover"), cover), _classSet);

      var style = null;

      if (cover) {
        style = {
          backgroundImage: "url(" + cover + ")"
        };
      }

      delete props.classPrefix;

      return _react2.default.createElement(
        'div',
        _extends({}, props, {
          className: (0, _classnames2.default)(className, classSet),
          role: 'card-' + role,
          style: style
        }),
        this.props.children
      );
    }
  }]);

  return CardChild;
}(_react2.default.Component);

CardChild.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  role: _propTypes2.default.oneOf(["header", "footer"]),
  cover: _propTypes2.default.string
};
CardChild.defaultProps = {
  classPrefix: "card",
  role: "header"
};


Card.Child = CardChild;

exports.default = Card;
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CSSCore = __webpack_require__(15);

var _CSSCore2 = _interopRequireDefault(_CSSCore);

var _exenv = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * EVENT_NAME_MAP is used to determine which event fired when a
 * transition/animation ends, based on the style property used to
 * define that event.
 */
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * modified version of:
 * https://github.com/facebook/react/blob/0.13-stable/src/addons/transitions/ReactTransitionEvents.js
 */

var EVENT_NAME_MAP = {
  transitionend: {
    'transition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'mozTransitionEnd',
    'OTransition': 'oTransitionEnd',
    'msTransition': 'MSTransitionEnd'
  },

  animationend: {
    'animation': 'animationend',
    'WebkitAnimation': 'webkitAnimationEnd',
    'MozAnimation': 'mozAnimationEnd',
    'OAnimation': 'oAnimationEnd',
    'msAnimation': 'MSAnimationEnd'
  }
};

var endEvents = [];
var support = {};

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  // On some platforms, in particular some releases of Android 4.x,
  // the un-prefixed "animation" and "transition" properties are defined on the
  // style object but the events that fire will still be prefixed, so we need
  // to check if the un-prefixed events are useable, and if not remove them
  // from the map
  if (!('AnimationEvent' in window)) {
    delete EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete EVENT_NAME_MAP.transitionend.transition;
  }

  for (var baseEventName in EVENT_NAME_MAP) {
    var baseEvents = EVENT_NAME_MAP[baseEventName];
    support[baseEventName] = false;

    for (var styleName in baseEvents) {
      if (styleName in style) {
        support[baseEventName] = baseEvents[styleName];
        endEvents.push(baseEvents[styleName]);
        break;
      }
    }
  }
}

if (_exenv.canUseDOM) {
  detectEvents();
}

if (support.animationend) {
  _CSSCore2.default.addClass(document.documentElement, 'cssanimations');
}

// We use the raw {add|remove}EventListener() call because EventListener
// does not know how to remove event listeners and we really should
// clean up. Also, these events are not triggered in older browsers
// so we should be A-OK here.

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  on: function on(node, eventListener) {
    if (endEvents.length === 0) {
      // If CSS transitions are not supported, trigger an "end animation"
      // event immediately.
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  off: function off(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  },


  support: support
};

exports.default = TransitionEvents;
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isStudio = window.studioEditing;
var bodyElement = document.body;

if (isStudio) {
  var isEngine = document.getElementById("engine_browser");
  if (isEngine && isEngine.contentWindow.document.body) {
    bodyElement = isEngine.contentWindow.document.body;
  }
}

exports.default = bodyElement;
module.exports = exports["default"];

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Grid = function (_React$Component) {
  _inherits(Grid, _React$Component);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
  }

  _createClass(Grid, [{
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;
      this.prefixClass = classNS.prefixClass;

      var _props = this.props,
          Component = _props.component,
          className = _props.className,
          collapse = _props.collapse,
          bordered = _props.bordered,
          avg = _props.avg,
          align = _props.align,
          wrap = _props.wrap,
          props = _objectWithoutProperties(_props, ['component', 'className', 'collapse', 'bordered', 'avg', 'align', 'wrap']);

      delete props.classPrefix;

      // .g-collapse
      classSet[this.prefixClass('collapse')] = collapse;

      // .g-bordered
      classSet[this.prefixClass('bordered')] = bordered;

      // .g-wrap
      classSet[this.prefixClass(wrap)] = wrap;

      if (avg) {
        classSet[this.prefixClass('avg-' + avg)] = true;
      }

      if (align) {
        classSet[this.prefixClass(align)] = true;
      }

      return _react2.default.createElement(
        Component,
        _extends({}, props, {
          className: (0, _classnames2.default)(className, classSet)
        }),
        this.props.children
      );
    }
  }]);

  return Grid;
}(_react2.default.Component);

Grid.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  component: _propTypes2.default.node.isRequired,
  collapse: _propTypes2.default.bool,
  avg: _propTypes2.default.number,
  align: _propTypes2.default.oneOf(['right', 'center', 'between', 'around']),
  wrap: _propTypes2.default.oneOf(['wrap', 'wrap-reverse']),
  bordered: _propTypes2.default.bool
};
Grid.defaultProps = {
  classPrefix: 'g',
  component: 'div'
};
exports.default = Grid;
module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Col = function (_React$Component) {
  _inherits(Col, _React$Component);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
  }

  _createClass(Col, [{
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;
      this.prefixClass = classNS.prefixClass;

      var _props = this.props,
          Component = _props.component,
          cols = _props.cols,
          offset = _props.offset,
          shrink = _props.shrink,
          className = _props.className,
          props = _objectWithoutProperties(_props, ['component', 'cols', 'offset', 'shrink', 'className']);

      delete props.classPrefix;

      if (cols) {
        classSet[this.prefixClass(cols)] = true;
      }

      if (offset) {
        classSet[this.prefixClass('offset-' + offset)] = true;
      }

      classSet[this.prefixClass('shrink')] = shrink;

      return _react2.default.createElement(
        Component,
        _extends({}, props, {
          className: (0, _classnames2.default)(className, classSet)
        }),
        this.props.children
      );
    }
  }]);

  return Col;
}(_react2.default.Component);

Col.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  component: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  cols: _propTypes2.default.number,
  offset: _propTypes2.default.number,
  shrink: _propTypes2.default.bool
};
Col.defaultProps = {
  classPrefix: 'col',
  component: 'div'
};
exports.default = Col;
module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @via https://github.com/facebook/react/blob/master/src/vendor/core/CSSCore.js
 */

var CSSCore = {

  /**
   * Adds the class passed in to the element if it doesn't already have it.
   *
   * @param {DOMElement} element the element to set the class on
   * @param {string} className the CSS className
   * @return {DOMElement} the element passed in
   * @see http://caniuse.com/#feat=classlist
   */
  addClass: function addClass(element, className) {
    if (className) {
      if (element.classList) {
        element.classList.add(className);
      } else if (!CSSCore.hasClass(element, className)) {
        element.className = element.className + ' ' + className;
      }
    }
    return element;
  },


  /**
   * Removes the class passed in from the element
   *
   * @param {DOMElement} element the element to set the class on
   * @param {string} className the CSS className
   * @return {DOMElement} the element passed in
   */
  removeClass: function removeClass(element, className) {
    if (className) {
      if (element.classList) {
        element.classList.remove(className);
      } else if (CSSCore.hasClass(element, className)) {
        element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
        .replace(/^\s*|\s*$/g, ''); // trim the ends
      }
    }
    return element;
  },


  /**
   * Helper to add or remove a class from an element based on a condition.
   *
   * @param {DOMElement} element the element to set the class on
   * @param {string} className the CSS className
   * @param {*} bool condition to whether to add or remove the class
   * @return {DOMElement} the element passed in
   */
  conditionClass: function conditionClass(element, className, bool) {
    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
  },


  /**
   * Tests whether the element has the class specified.
   *
   * @param {DOMNode|DOMWindow} element the element to set the class on
   * @param {string} className the CSS className
   * @return {boolean} true if the element has the class, false if not
   */
  hasClass: function hasClass(element, className) {
    if (element.classList) {
      return !!className && element.classList.contains(className);
    }
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
  },
  toggleClass: function toggleClass(element, className) {
    return CSSCore.hasClass(element, className) ? CSSCore.removeClass(element, className) : CSSCore.addClass(element, className);
  }
};

exports.default = CSSCore;
module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonGroup = function (_React$Component) {
  _inherits(ButtonGroup, _React$Component);

  function ButtonGroup() {
    _classCallCheck(this, ButtonGroup);

    return _possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).apply(this, arguments));
  }

  _createClass(ButtonGroup, [{
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;

      var _props = this.props,
          className = _props.className,
          amStyle = _props.amStyle,
          amSize = _props.amSize,
          hollow = _props.hollow,
          gapped = _props.gapped,
          stacked = _props.stacked,
          justify = _props.justify,
          props = _objectWithoutProperties(_props, ['className', 'amStyle', 'amSize', 'hollow', 'gapped', 'stacked', 'justify']);

      delete props.classPrefix;

      classSet[classNS.prefixClass('gapped')] = gapped;
      classSet[classNS.prefixClass('stacked')] = stacked;
      classSet[classNS.prefixClass('justify')] = justify;

      return _react2.default.createElement(
        'div',
        _extends({}, props, {
          className: (0, _classnames2.default)(className, classSet)
        }),
        _react2.default.Children.map(this.props.children, function (child, i) {
          return (0, _react.cloneElement)(child, _extends({
            amStyle: amStyle,
            amSize: amSize,
            hollow: hollow
          }, child.props));
        })
      );
    }
  }]);

  return ButtonGroup;
}(_react2.default.Component);

ButtonGroup.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  amStyle: _propTypes2.default.string,
  amSize: _propTypes2.default.string,
  hollow: _propTypes2.default.bool,
  gapped: _propTypes2.default.bool,
  justify: _propTypes2.default.bool,
  stacked: _propTypes2.default.bool
};
ButtonGroup.defaultProps = {
  classPrefix: 'btn-group'
};
exports.default = ButtonGroup;
;
module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Switch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Switch.__proto__ || Object.getPrototypeOf(Switch)).call.apply(_ref, [this].concat(args))), _this), _this.getValue = function () {
      return _this.field.checked;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Switch, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;
      this.prefixClass = classNS.prefixClass;

      var _props = this.props,
          name = _props.name,
          shape = _props.shape,
          className = _props.className,
          onValueChange = _props.onValueChange,
          checked = _props.checked,
          defaultChecked = _props.defaultChecked,
          disabled = _props.disabled,
          props = _objectWithoutProperties(_props, ['name', 'shape', 'className', 'onValueChange', 'checked', 'defaultChecked', 'disabled']);

      delete props.classPrefix;
      delete props.amStyle;

      return _react2.default.createElement(
        'label',
        _extends({}, props, {
          className: (0, _classnames2.default)(classSet, className)
        }),
        _react2.default.createElement('input', {
          onChange: onValueChange.bind(this),
          name: name,
          type: 'checkbox',
          ref: function ref(input) {
            _this2.field = input;
          },
          checked: checked,
          defaultChecked: defaultChecked,
          disabled: disabled
        }),
        _react2.default.createElement('span', { className: this.prefixClass(shape ? shape : 'label') })
      );
    }
  }]);

  return Switch;
}(_react2.default.Component);

Switch.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string,
  shape: _propTypes2.default.string,
  amStyle: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  checked: _propTypes2.default.bool,
  defaultChecked: _propTypes2.default.bool,
  onValueChange: _propTypes2.default.func
};
Switch.defaultProps = {
  classPrefix: 'switch',
  onValueChange: function onValueChange() {}
};
exports.default = Switch;
module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _ModalPortal = __webpack_require__(47);

var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ModalPortal2.default; // import '../../scss/components/_modal.scss';

module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @see https://github.com/JedWatson/react-container
// @license MIT Copyright (c) 2015 Jed Watson

function hasChildrenWithVerticalFill(children) {
  var result = false;

  _react2.default.Children.forEach(children, function (child) {
    if (result) {
      return; // early-exit
    }

    if (!child) {
      return;
    }

    if (!child.type) {
      return;
    }

    result = !!child.type.shouldFillVerticalSpace;
  });

  return result;
}

function initScrollable(defaultPos) {
  if (!defaultPos) {
    defaultPos = {};
  }

  var pos = void 0;
  var scrollable = {
    reset: function reset() {
      pos = { left: defaultPos.left || 0, top: defaultPos.top || 0 };
    },
    getPos: function getPos() {
      return { left: pos.left, top: pos.top };
    },
    mount: function mount(element) {
      var node = _react2.default.findDOMNode(element);
      node.scrollLeft = pos.left;
      node.scrollTop = pos.top;
    },
    unmount: function unmount(element) {
      var node = _react2.default.findDOMNode(element);
      pos.left = node.scrollLeft;
      pos.top = node.scrollTop;
    }
  };

  scrollable.reset();

  return scrollable;
}

var TRANSITION_TIMEOUT = 500;

var Container = function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.scrollable && this.props.scrollable.mount) {
        this.props.scrollable.mount(this);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.scrollable && this.props.scrollable.unmount) {
        this.props.scrollable.unmount(this);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _cx;

      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;
      this.prefixClass = classNS.prefixClass;

      var _props = this.props,
          className = _props.className,
          Component = _props.component,
          children = _props.children,
          direction = _props.direction,
          fill = _props.fill,
          align = _props.align,
          justify = _props.justify,
          scrollable = _props.scrollable,
          transition = _props.transition,
          props = _objectWithoutProperties(_props, ['className', 'component', 'children', 'direction', 'fill', 'align', 'justify', 'scrollable', 'transition']);

      delete props.classPrefix;

      // As view transition container
      if (transition) {
        return _react2.default.createElement(
          'div',
          props,
          children
        );
      }

      if (!direction) {
        if (hasChildrenWithVerticalFill(children)) {
          direction = 'column';
        }
      }

      if (direction === 'column' || scrollable) {
        fill = true;
      }

      if (direction === 'column' && align === 'top') {
        align = 'start';
      }

      if (direction === 'column' && align === 'bottom') {
        align = 'end';
      }

      if (direction === 'row' && align === 'left') {
        align = 'start';
      }

      if (direction === 'row' && align === 'right') {
        align = 'end';
      }

      var classes = (0, _classnames2.default)(classSet, className, (_cx = {}, _defineProperty(_cx, this.prefixClass('fill'), fill), _defineProperty(_cx, this.prefixClass('column'), direction === 'column'), _defineProperty(_cx, this.prefixClass('row'), direction === 'row'), _defineProperty(_cx, this.prefixClass('align-center'), align === 'center'), _defineProperty(_cx, this.prefixClass('align-start'), align === 'start'), _defineProperty(_cx, this.prefixClass('align-end'), align === 'end'), _defineProperty(_cx, this.prefixClass('justify-center'), justify === 'center'), _defineProperty(_cx, this.prefixClass('justify-start'), justify === 'start'), _defineProperty(_cx, this.prefixClass('justify-end'), justify === 'end'), _defineProperty(_cx, this.prefixClass('justified'), justify === true), _defineProperty(_cx, this.prefixClass('scrollable'), scrollable), _cx));

      return _react2.default.createElement(
        Component,
        _extends({
          className: classes
        }, props),
        children
      );
    }
  }]);

  return Container;
}(_react2.default.Component);

Container.propTypes = {
  classPrefix: _propTypes2.default.string,
  component: _propTypes2.default.node,
  align: _propTypes2.default.oneOf(['end', 'center', 'start']),
  direction: _propTypes2.default.oneOf(['column', 'row']),
  fill: _propTypes2.default.bool,
  grow: _propTypes2.default.bool,
  justify: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['end', 'center', 'start'])]),
  scrollable: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
  transition: _propTypes2.default.string
};
Container.defaultProps = {
  classPrefix: 'container',
  component: 'div'
};


Container.initScrollable = initScrollable;

exports.default = Container;
module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

var _Icon = __webpack_require__(4);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Badge = function (_React$Component) {
  _inherits(Badge, _React$Component);

  function Badge() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Badge);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Badge.__proto__ || Object.getPrototypeOf(Badge)).call.apply(_ref, [this].concat(args))), _this), _this.renderWrap = function () {
      var _this$props = _this.props,
          wrapClassName = _this$props.wrapClassName,
          children = _this$props.children;

      var wrapCls = (0, _classnames2.default)(_this.prefixClass('wrap'), wrapClassName);

      return _react2.default.createElement(
        'div',
        { className: wrapCls },
        children,
        _this.renderBadge()
      );
    }, _this.renderPoint = function () {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Badge, [{
    key: 'renderBadge',
    value: function renderBadge() {
      var _props = this.props,
          Component = _props.component,
          className = _props.className,
          href = _props.href,
          icon = _props.icon,
          text = _props.text,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['component', 'className', 'href', 'icon', 'text', 'children']);

      delete props.classPrefix;
      delete props.amStyle;
      delete props.rounded;

      Component = href ? "a" : Component;

      var pointCls = this.prefixClass('point');

      if (icon || text !== undefined) {
        return _react2.default.createElement(
          Component,
          _extends({}, props, { className: (0, _classnames2.default)(this.classSet, className) }),
          text !== undefined ? text : _react2.default.createElement(_Icon2.default, { name: icon })
        );
      } else {
        return _react2.default.createElement('span', _extends({}, props, { className: (0, _classnames2.default)(pointCls, this.classSet, className) }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      var classNS = (0, _className2.default)(this.props);
      this.classSet = classNS.classSet;
      this.prefixClass = classNS.prefixClass;

      return children ? this.renderWrap() : this.renderBadge();
    }
  }]);

  return Badge;
}(_react2.default.Component);

Badge.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  component: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  href: _propTypes2.default.string,
  amStyle: _propTypes2.default.string,
  // radius: PropTypes.bool,
  rounded: _propTypes2.default.bool,
  icon: _propTypes2.default.string,
  text: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};
Badge.defaultProps = {
  classPrefix: "badge",
  component: "span"
};
exports.default = Badge;
module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonContainer = function (_React$Component) {
  _inherits(ButtonContainer, _React$Component);

  function ButtonContainer() {
    _classCallCheck(this, ButtonContainer);

    return _possibleConstructorReturn(this, (ButtonContainer.__proto__ || Object.getPrototypeOf(ButtonContainer)).apply(this, arguments));
  }

  _createClass(ButtonContainer, [{
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;

      var _props = this.props,
          className = _props.className,
          more = _props.more,
          props = _objectWithoutProperties(_props, ['className', 'more']);

      delete props.classPrefix;

      classSet[classNS.prefixClass('more')] = more;

      return _react2.default.createElement(
        'div',
        _extends({}, props, {
          className: (0, _classnames2.default)(className, classSet)
        }),
        this.props.children
      );
    }
  }]);

  return ButtonContainer;
}(_react2.default.Component);

ButtonContainer.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  more: _propTypes2.default.bool
};
ButtonContainer.defaultProps = {
  classPrefix: 'btn-container'
};
exports.default = ButtonContainer;
module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _Icon = __webpack_require__(4);

var _Icon2 = _interopRequireDefault(_Icon);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectableButton = function (_React$Component) {
  _inherits(SelectableButton, _React$Component);

  function SelectableButton(props) {
    _classCallCheck(this, SelectableButton);

    var _this = _possibleConstructorReturn(this, (SelectableButton.__proto__ || Object.getPrototypeOf(SelectableButton)).call(this, props));

    var _this$props = _this.props,
        selected = _this$props.selected,
        defaultSelected = _this$props.defaultSelected;

    _this.state = {
      selected: typeof selected === 'boolean' ? selected : defaultSelected
    };
    return _this;
  }

  _createClass(SelectableButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var classNS = (0, _className2.default)(this.props);
      this.prefixClass = classNS.prefixClass;

      var _props = this.props,
          classPrefix = _props.classPrefix,
          children = _props.children,
          className = _props.className,
          selected = _props.selected,
          defaultSelected = _props.defaultSelected,
          amStyle = _props.amStyle,
          disabled = _props.disabled,
          _onClick = _props.onClick,
          onValueChange = _props.onValueChange,
          href = _props.href,
          target = _props.target,
          square = _props.square,
          rounded = _props.rounded,
          hollow = _props.hollow,
          active = _props.active,
          others = _objectWithoutProperties(_props, ['classPrefix', 'children', 'className', 'selected', 'defaultSelected', 'amStyle', 'disabled', 'onClick', 'onValueChange', 'href', 'target', 'square', 'rounded', 'hollow', 'active']);

      selected = typeof selected === 'boolean' ? selected : this.state.selected;

      return _react2.default.createElement(
        _Button2.default,
        _extends({
          className: (0, _classnames2.default)(this.prefixClass('selectable'), className),
          hollow: true,
          disabled: disabled,
          amStyle: disabled ? '' : amStyle,
          'data-selected': this.state.selected
        }, others, {
          onClick: function onClick() {
            _this2.setState({
              selected: !_this2.state.selected
            }, function () {
              _onClick && _onClick();
              onValueChange && onValueChange(_this2.state.selected);
            });
          }
        }),
        children,
        _react2.default.createElement(
          'span',
          { className: this.prefixClass('selectable-helper') },
          selected && _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('i', { className: this.prefixClass('selectable-helper-traingle') }),
            _react2.default.createElement(
              'small',
              { className: this.prefixClass('selectable-helper-check') },
              _react2.default.createElement(_Icon2.default, { name: 'elect' })
            )
          )
        )
      );
    }
  }]);

  return SelectableButton;
}(_react2.default.Component);

SelectableButton.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  amStyle: _propTypes2.default.string,
  amSize: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  selected: _propTypes2.default.bool,
  defaultSelected: _propTypes2.default.bool.isRequired,
  onClick: _propTypes2.default.func,
  onValueChange: _propTypes2.default.func
};
SelectableButton.defaultProps = {
  classPrefix: 'btn',
  defaultSelected: false,
  amStyle: 'warning'
};
exports.default = SelectableButton;
module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 移除 React 对原生 input 的包装
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 非受控组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var DefaultInput = function (_React$Component) {
  _inherits(DefaultInput, _React$Component);

  function DefaultInput() {
    _classCallCheck(this, DefaultInput);

    return _possibleConstructorReturn(this, (DefaultInput.__proto__ || Object.getPrototypeOf(DefaultInput)).apply(this, arguments));
  }

  _createClass(DefaultInput, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.input.value = nextProps.value;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var value = this.props.value;

      this.input.value = value;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.value,
          props = _objectWithoutProperties(_props, ['value']);

      return _react2.default.createElement('input', _extends({ ref: function ref(_ref) {
          _this2.input = _ref;
        } }, props));
    }
  }]);

  return DefaultInput;
}(_react2.default.Component);

DefaultInput.defaultProps = {
  value: ''
};
exports.default = DefaultInput;
module.exports = exports['default'];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 移除 React 对原生 textarea 的包装
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 非受控组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var DefaultTextarea = function (_React$Component) {
  _inherits(DefaultTextarea, _React$Component);

  function DefaultTextarea() {
    _classCallCheck(this, DefaultTextarea);

    return _possibleConstructorReturn(this, (DefaultTextarea.__proto__ || Object.getPrototypeOf(DefaultTextarea)).apply(this, arguments));
  }

  _createClass(DefaultTextarea, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.input.value = nextProps.value;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var value = this.props.value;

      this.input.value = value;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.value,
          props = _objectWithoutProperties(_props, ['value']);

      return _react2.default.createElement('textarea', _extends({ ref: function ref(_ref) {
          _this2.input = _ref;
        } }, props));
    }
  }]);

  return DefaultTextarea;
}(_react2.default.Component);

DefaultTextarea.defaultProps = {
  value: ''
};
exports.default = DefaultTextarea;
module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

var _Icon = __webpack_require__(4);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_React$Component) {
  _inherits(List, _React$Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;
      this.prefixClass = classNS.prefixClass;

      var _props = this.props,
          className = _props.className,
          inset = _props.inset,
          props = _objectWithoutProperties(_props, ['className', 'inset']);

      delete props.classPrefix;

      classSet[this.prefixClass('inset')] = inset;

      // TODO: 使用 ul 可能不是太好的选择，在一些需要定义 component 的场合缺乏灵活性
      return _react2.default.createElement('ul', _extends({}, props, {
        className: (0, _classnames2.default)(classSet, className)
      }));
    }
  }]);

  return List;
}(_react2.default.Component);

List.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  inset: _propTypes2.default.bool
};
List.defaultProps = {
  classPrefix: 'list'
};

var ListItem = function (_React$Component2) {
  _inherits(ListItem, _React$Component2);

  function ListItem() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, ListItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call.apply(_ref, [this].concat(args))), _this2), _this2.renderTitleRow = function () {
      var _this2$props = _this2.props,
          title = _this2$props.title,
          subTitle = _this2$props.subTitle,
          href = _this2$props.href,
          linkComponent = _this2$props.linkComponent;


      var itemTitle = title ? _react2.default.createElement(
        'h3',
        {
          key: 'itemTitle',
          className: _this2.prefixClass('title')
        },
        title
      ) : null;

      var titleChildren = [itemTitle, _this2.renderAddon('after'), href || linkComponent ? _react2.default.createElement(_Icon2.default, {
        className: _this2.prefixClass('icon'),
        name: 'right',
        key: 'itemChevron'
      }) : null];

      return subTitle ? _react2.default.createElement(
        'div',
        {
          className: _this2.prefixClass('title-row'),
          key: 'itemTitleRow'
        },
        titleChildren
      ) : titleChildren;
    }, _this2.renderMain = function () {
      var _this2$props2 = _this2.props,
          media = _this2$props2.media,
          subTitle = _this2$props2.subTitle,
          desc = _this2$props2.desc,
          children = _this2$props2.children;

      var titleRow = _this2.renderTitleRow();
      var notJustTitle = media || subTitle || desc || children;

      // remove wrapper if without media/subTitle/children
      return notJustTitle ? _react2.default.createElement(
        'div',
        {
          key: 'itemMain',
          className: _this2.prefixClass('main')
        },
        titleRow,
        _this2.renderAddon('subTitle'),
        _this2.renderAddon('desc'),
        children
      ) : titleRow;
    }, _this2.wrapLink = function (children) {
      var _this2$props3 = _this2.props,
          linkComponent = _this2$props3.linkComponent,
          linkProps = _this2$props3.linkProps,
          href = _this2$props3.href,
          target = _this2$props3.target;


      return linkComponent ? _react2.default.createElement(linkComponent, linkProps, children) : _react2.default.createElement(
        'a',
        {
          href: href,
          target: target
        },
        children
      );
    }, _this2.renderAddon = function (type) {
      return _this2.props[type] ? _react2.default.createElement(
        'div',
        {
          key: 'item-' + type,
          className: _this2.prefixClass(type.toLowerCase())
        },
        _this2.props[type]
      ) : null;
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(ListItem, [{
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;
      this.prefixClass = classNS.prefixClass;

      var _props2 = this.props,
          className = _props2.className,
          role = _props2.role,
          subTitle = _props2.subTitle,
          href = _props2.href,
          media = _props2.media,
          children = _props2.children,
          linkComponent = _props2.linkComponent,
          linked = _props2.linked,
          nested = _props2.nested,
          props = _objectWithoutProperties(_props2, ['className', 'role', 'subTitle', 'href', 'media', 'children', 'linkComponent', 'linked', 'nested']);

      delete props.classPrefix;
      delete props.title;
      delete props.after;
      delete props.linkProps;
      delete props.desc;

      var itemChildren = [this.renderAddon('media'), this.renderMain()];

      classSet[this.prefixClass(nested)] = nested;
      classSet[this.prefixClass('header')] = role === 'header';
      classSet[this.prefixClass('linked')] = href || linkComponent || linked;
      subTitle && (classSet[this.prefixClass('content')] = true);

      return _react2.default.createElement(
        'li',
        _extends({}, props, {
          className: (0, _classnames2.default)(classSet, className)
        }),
        role === 'header' ? children : href || linkComponent ? this.wrapLink(itemChildren) : itemChildren
      );
    }
  }]);

  return ListItem;
}(_react2.default.Component);

ListItem.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  role: _propTypes2.default.oneOf(['header', 'item']),
  title: _propTypes2.default.node,
  subTitle: _propTypes2.default.node,
  href: _propTypes2.default.string,
  linked: _propTypes2.default.bool, // linked flag for custom href like route Link
  linkComponent: _propTypes2.default.any,
  linkProps: _propTypes2.default.object,
  media: _propTypes2.default.node,
  after: _propTypes2.default.node,
  desc: _propTypes2.default.node,
  nested: _propTypes2.default.oneOf(['input', 'radio', 'checkbox']) // nested field
};
ListItem.defaultProps = {
  classPrefix: 'item',
  role: 'item'
};


List.Item = ListItem;

exports.default = List;

/**
 * TODO:
 * - 可选择列表（嵌套 radio/checkbox）图文混排的列表，
 *   考虑的创建可选择列表时根据 nested 属性自动生产 input，而不用再去嵌套 Field，
 *   以便图文混排选择实现。
 * - UE：用户如何知道这个列表是可以选择的（增加相应的提示文字？）
 * - 易用性：链接如何以更好的方式传入类似 react-router Link 这样的组件？
 */

module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loader = function (_React$Component) {
  _inherits(Loader, _React$Component);

  function Loader() {
    _classCallCheck(this, Loader);

    return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).apply(this, arguments));
  }

  _createClass(Loader, [{
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;
      this.prefixClass = classNS.prefixClass;

      var _props = this.props,
          className = _props.className,
          Component = _props.component,
          props = _objectWithoutProperties(_props, ['className', 'component']);

      delete props.classPrefix;
      delete props.amStyle;
      delete props.rounded;

      return _react2.default.createElement(
        Component,
        _extends({}, props, {
          className: (0, _classnames2.default)(classSet, className)
        }),
        _react2.default.createElement('div', { className: this.prefixClass('bounce1') }),
        _react2.default.createElement('div', { className: this.prefixClass('bounce2') }),
        _react2.default.createElement('div', { className: this.prefixClass('bounce3') })
      );
    }
  }]);

  return Loader;
}(_react2.default.Component);

Loader.propTypes = {
  classPrefix: _propTypes2.default.string,
  component: _propTypes2.default.node,
  amStyle: _propTypes2.default.string,
  rounded: _propTypes2.default.bool
};
Loader.defaultProps = {
  classPrefix: 'loader',
  component: 'div',
  rounded: true
};
exports.default = Loader;
module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var View = function (_React$Component) {
  _inherits(View, _React$Component);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
  }

  _createClass(View, [{
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;

      var _props = this.props,
          component = _props.component,
          className = _props.className,
          props = _objectWithoutProperties(_props, ['component', 'className']);

      delete props.classPrefix;

      return _react2.default.createElement(component, _extends({}, props, {
        className: (0, _classnames2.default)(className, classSet)
      }));
    }
  }]);

  return View;
}(_react2.default.Component);

View.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  component: _propTypes2.default.node.isRequired
};
View.defaultProps = {
  classPrefix: 'view',
  component: 'div'
};
exports.default = View;
module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

var _Icon = __webpack_require__(4);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NavBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call.apply(_ref, [this].concat(args))), _this), _this.renderTitle = function () {
      var _this$props = _this.props,
          titleOnLeft = _this$props.titleOnLeft,
          title = _this$props.title;

      var titlePosition = _this.prefixClass(titleOnLeft ? 'left' : 'center');

      return title ? _react2.default.createElement(
        'h2',
        {
          className: (0, _classnames2.default)(_this.prefixClass('title'), titlePosition)
        },
        title
      ) : _this.props.children;
    }, _this.renderNav = function (position) {
      var nav = _this.props[position + 'Nav'];
      _this._navPosition = position;

      return nav && Array.isArray(nav) ? _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(_this.prefixClass('nav'), _this.prefixClass(position))
        },
        nav.map(_this.renderNavItem)
      ) : null;
    }, _this.renderNavItem = function (item, index) {
      var _iconClassName;

      var Component = item.component,
          title = item.title,
          customIcon = item.customIcon,
          icon = item.icon,
          isClone = item.isClone,
          className = item.className,
          otherProps = _objectWithoutProperties(item, ['component', 'title', 'customIcon', 'icon', 'isClone', 'className']);

      var children = [];

      var itemClassName = (0, _classnames2.default)(_this.prefixClass('nav-item'), className);
      var itemProps = _extends({
        key: 'navbarNavItem' + index,
        onClick: _this.props.onAction.bind(_this, item)
      }, otherProps, {
        className: itemClassName
      });

      Component = Component || 'a';

      title && children.push(_react2.default.createElement(
        'span',
        {
          className: _this.prefixClass('nav-title'),
          key: 'title'
        },
        title
      ));

      var navIconKey = 'icon';
      var iconClassName = (_iconClassName = {}, _defineProperty(_iconClassName, _this.prefixClass('icon'), true), _defineProperty(_iconClassName, _this.prefixClass('icon-sibling-of-title'), !!title), _iconClassName);
      var navIcon = customIcon ? _react2.default.createElement('img', {
        src: customIcon,
        className: (0, _classnames2.default)(iconClassName),
        alt: title || null,
        key: navIconKey
      }) : icon ? _react2.default.createElement(_Icon2.default, {
        className: (0, _classnames2.default)(iconClassName),
        name: icon,
        key: navIconKey
      }) : null;

      // adjust title and icon order for Android UC
      // @see ../scss/helper/_mixins.scss `navbar-item-android-uc-fallback` mixin
      // if (navIcon) {
      //   const action = this._navPosition === 'left' ? 'unshift' : 'push';
      //   Array.prototype[action].call(children, navIcon);
      // }
      // just for Enterplorer
      navIcon && children.push(navIcon);

      var renderChildren = function renderChildren() {
        // #40
        // if `Component` is a clone type like OffCanvasTrigger,
        // this should return a element with the className.
        // TBC: should other props be transferred to the span element?
        return isClone ? _react2.default.createElement(
          'span',
          {
            className: itemClassName
          },
          children
        ) : children;
      };

      return _react2.default.createElement(
        Component,
        itemProps,
        renderChildren()
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NavBar, [{
    key: 'render',
    value: function render() {
      this.classNS = (0, _className2.default)(this.props);
      this.prefixClass = this.classNS.prefixClass;

      var classSet = this.classNS.classNames;

      var _props = this.props,
          className = _props.className,
          props = _objectWithoutProperties(_props, ['className']);

      delete props.title;
      delete props.classPrefix;
      delete props.leftNav;
      delete props.rightNav;
      delete props.amStyle;
      delete props.onAction;
      delete props.titleOnLeft;

      return _react2.default.createElement(
        'header',
        _extends({}, props, {
          className: (0, _classnames2.default)(classSet, className)
        }),
        this.renderTitle(),
        this.renderNav('left'),
        this.renderNav('right')
      );
    }
  }]);

  return NavBar;
}(_react2.default.Component);

NavBar.propTypes = {
  classPrefix: _propTypes2.default.string,
  amStyle: _propTypes2.default.oneOf(['primary', 'secondary', 'success', 'warning', 'alert', 'dark']),
  title: _propTypes2.default.node,
  leftNav: _propTypes2.default.array,
  rightNav: _propTypes2.default.array,
  titleOnLeft: _propTypes2.default.bool,
  onAction: _propTypes2.default.func
};
NavBar.defaultProps = {
  classPrefix: 'navbar',
  onAction: function onAction() {}
};
exports.default = NavBar;
module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * modified version of:
 * https://github.com/react-bootstrap/react-bootstrap/blob/master/src/utils/createChainedFunction.js
 */

/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} one
 * @param {function} two
 * @returns {function|null}
 */

function createChainedFunction(one, two) {
  var hasOne = typeof one === 'function';
  var hasTwo = typeof two === 'function';

  if (!hasOne && !hasTwo) {
    return null;
  }

  if (!hasOne) {
    return two;
  }

  if (!hasTwo) {
    return one;
  }

  return function chainedFunction() {
    one.apply(this, arguments);
    two.apply(this, arguments);
  };
}

exports.default = createChainedFunction;
module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createChainedFunction = __webpack_require__(29);

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _isTouchSupported = __webpack_require__(58);

var _isTouchSupported2 = _interopRequireDefault(_isTouchSupported);

__webpack_require__(59);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * React port of Zepto touch.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @see https://github.com/joakimbeng/react-swiper
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @see https://github.com/dogfessional/react-swipeable
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @see https://github.com/damusnet/react-swipe-views
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @see http://www.javascriptkit.com/javatutors/touchevents3.shtml
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @see https://github.com/JedWatson/react-tappable
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @see https://github.com/madrobby/zepto/blob/master/src/touch.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Touchable = function (_React$Component) {
  _inherits(Touchable, _React$Component);

  function Touchable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Touchable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Touchable.__proto__ || Object.getPrototypeOf(Touchable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      startTouch: null,
      endTouch: null,
      touch: {},
      deltaX: 0,
      deltaY: 0
    }, _this.handleTouchStart = function (e) {
      // console.log('handle touchstart');
      _this.processEvent(e);

      if (!e.touches) {
        return;
      }

      var touch = _this.state.touch;
      var startTouch = e.touches[0];

      if (e.touches.length === 1 && touch.x2) {
        // Clear out touch movement data if we have it sticking around
        // This can occur if touchcancel doesn't fire due to preventDefault, etc.
        touch.x2 = undefined;
        touch.y2 = undefined;
      }

      var now = Date.now();
      var delta = now - (touch.last || now);

      _this._touchTimeout && clearTimeout(_this._touchTimeout);

      touch.x1 = startTouch.pageX;
      touch.y1 = startTouch.pageY;

      // if touchstart interval less than 250, handle as doubleTap
      if (delta > 0 && delta <= _this.props.tapDelay) {
        touch.isDoubleTap = true;
      }

      // record last touch start time
      touch.last = now;

      // handle as `press` after 750ms
      _this._pressTimeout = setTimeout(_this._handlePress, _this.props.pressDelay);

      _this.setState({
        startTouch: startTouch,
        touch: touch
      });
    }, _this.handleTouchMove = function (e) {
      // console.log('touch move');
      _this.processEvent(e);

      var endTouch = e.touches[0];
      var _this$state = _this.state,
          touch = _this$state.touch,
          deltaX = _this$state.deltaX,
          deltaY = _this$state.deltaY;


      _this._cancelPress();

      touch.x2 = endTouch.pageX;
      touch.y2 = endTouch.pageY;

      // finger moving distance
      deltaX += Math.abs(touch.x1 - touch.x2);
      deltaY += Math.abs(touch.y1 - touch.y2);

      _this.setState({
        deltaX: deltaX,
        deltaY: deltaY,
        touch: touch,
        endTouch: endTouch
      });
    }, _this.handleTouchEnd = function (e) {
      // console.log('touch end..');
      _this.processEvent(e);

      _this._cancelPress();

      var _this$props = _this.props,
          tapDelay = _this$props.tapDelay,
          moveThreshold = _this$props.moveThreshold;
      var _this$state2 = _this.state,
          touch = _this$state2.touch,
          startTouch = _this$state2.startTouch,
          endTouch = _this$state2.endTouch,
          deltaX = _this$state2.deltaX,
          deltaY = _this$state2.deltaY;

      var event = {
        touch: touch,
        startTouch: startTouch,
        endTouch: endTouch,
        preventDefault: function preventDefault() {}
      };

      // handle as swipe event
      if (touch.x2 && Math.abs(touch.x1 - touch.x2) > moveThreshold || touch.y2 && Math.abs(touch.y1 - touch.y2) > moveThreshold) {

        event.type = 'swipe';

        _this._swipeTimeout = setTimeout(function () {
          _this._handleEvent(event);

          event.type += _this._getSwipeDirection();
          _this._handleEvent(event);
          _this._resetTouch();
        }, 0);
      }
      // normal tap
      else if ('last' in touch) {
          // don't fire tap when delta position changed by more than 30 pixels,
          // for instance when moving to a point and back to origin
          if (deltaX < moveThreshold && deltaY < moveThreshold) {
            // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
            // ('tap' fires before 'scroll')
            _this._tapTimeout = setTimeout(function () {
              // trigger universal 'tap' with the option to cancelTouch()
              // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
              event.type = 'tap';
              // event.cancelTouch = cancelAll;
              _this._handleEvent(event);

              // trigger double tap immediately
              if (touch.isDoubleTap) {
                event.type = 'doubleTap';
                _this._handleEvent(event);
                _this._resetTouch();
              }
              // trigger single tap after 250ms of inactivity
              else {
                  _this._touchTimeout = setTimeout(function () {
                    _this._touchTimeout = null;
                    event.type = 'singleTap';
                    _this._handleEvent(event);
                    _this._resetTouch();
                  }, tapDelay);
                }
            }, 0);
          } else {
            _this._resetTouch();
          }
        }
    }, _this.handleTouchCancel = function () {
      _this._cancelAll();
    }, _this.processEvent = function (e) {
      _this.props.preventDefault && e.preventDefault();
      _this.props.stopPropagation && e.stopPropagation();
    }, _this._handlePress = function () {
      _this._pressTimeout = null;
      if (_this.state.touch.last) {
        _this.props.onPress && _this.props.onPress();
        _this._resetTouch();
      }
    }, _this._cancelPress = function () {
      if (_this._pressTimeout) {
        clearTimeout(_this._pressTimeout);
      }

      _this._pressTimeout = null;
    }, _this._cancelAll = function () {
      if (_this._touchTimeout) {
        clearTimeout(_this._touchTimeout);
      }

      if (_this._tapTimeout) {
        clearTimeout(_this._tapTimeout);
      }

      if (_this._swipeTimeout) {
        clearTimeout(_this._swipeTimeout);
      }

      if (_this._pressTimeout) {
        clearTimeout(_this._pressTimeout);
      }

      _this._touchTimeout = _this._tapTimeout = _this._swipeTimeout = _this._pressTimeout = null;
      _this._resetTouch();
    }, _this._getSwipeDirection = function (e) {
      var _this$state$touch = _this.state.touch,
          x1 = _this$state$touch.x1,
          x2 = _this$state$touch.x2,
          y1 = _this$state$touch.y1,
          y2 = _this$state$touch.y2;

      // 水平方向：水平距离大于等于垂直距离
      // 垂直方向：

      return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
    }, _this._resetTouch = function () {
      _this.setState(_this.state);
    }, _this._getEventMethodName = function (type) {
      return 'on' + type.charAt(0).toUpperCase() + type.slice(1);
    }, _this._handleEvent = function (event) {
      var method = _this._getEventMethodName(event.type);
      _this.props[method] && _this.props[method](event);
    }, _this.getTouchHandlers = function () {
      return {
        onTouchStart: _this.handleTouchStart,
        onTouchEnd: _this.handleTouchEnd,
        onTouchCancel: _this.handleTouchCancel,
        onTouchMove: _this.handleTouchMove
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Touchable, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._cancelAll();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          Component = _props.component,
          onTap = _props.onTap,
          props = _objectWithoutProperties(_props, ['component', 'onTap']);

      if (_isTouchSupported2.default) {
        _extends(props, this.getTouchHandlers());
      } else {
        // handle `tap` as `click` on non-touch devices
        props.onClick = (0, _createChainedFunction2.default)(props.onClick, onTap);
      }

      delete props.moveThreshold;
      delete props.tapDelay;
      delete props.pressDelay;
      delete props.preventDefault;
      delete props.stopPropagation;
      delete props.onSwipe;
      delete props.onSwipeLeft;
      delete props.onSwipeUp;
      delete props.onSwipeRight;
      delete props.onSwipeDown;
      delete props.onTap;
      delete props.onSingleTap;
      delete props.onDoubleTap;
      delete props.onPress;

      return _react2.default.createElement(
        Component,
        props,
        this.props.children
      );
    }
  }]);

  return Touchable;
}(_react2.default.Component);

Touchable.propTypes = {
  component: _propTypes2.default.any,
  moveThreshold: _propTypes2.default.number,
  tapDelay: _propTypes2.default.number,
  pressDelay: _propTypes2.default.number,
  preventDefault: _propTypes2.default.bool,
  stopPropagation: _propTypes2.default.bool,

  onSwipe: _propTypes2.default.func,
  onSwipeLeft: _propTypes2.default.func,
  onSwipeUp: _propTypes2.default.func,
  onSwipeRight: _propTypes2.default.func,
  onSwipeDown: _propTypes2.default.func,
  onTap: _propTypes2.default.func,
  onSingleTap: _propTypes2.default.func,
  onDoubleTap: _propTypes2.default.func,
  onPress: _propTypes2.default.func
};
Touchable.defaultProps = {
  component: 'span',
  moveThreshold: 30,
  tapDelay: 250,
  pressDelay: 750,
  preventDefault: true
};
exports.default = Touchable;
// export {TouchableMixin as Mixin};

// TODO: Mixin 里似乎没必要使用 state 记录事件相关信息
// TODO: 添加 touch active className

module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = function (_React$Component) {
  _inherits(Title, _React$Component);

  function Title() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Title);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Title.__proto__ || Object.getPrototypeOf(Title)).call.apply(_ref, [this].concat(args))), _this), _this.renderIcon = function (icon) {
      if (typeof icon === 'string') {
        return _react2.default.createElement(
          'span',
          { className: _this.prefixClass('left-icon') },
          _react2.default.createElement('img', { src: icon })
        );
      } else if (_react2.default.isValidElement(icon)) {
        return _react2.default.createElement(
          'span',
          { className: (0, _classnames2.default)(_this.prefixClass('left-icon'), _this.prefixClass('left-icon-custom')) },
          icon
        );
      } else {
        return _react2.default.createElement('span', { className: _this.prefixClass('left-icon') });
      }
    }, _this.renderText = function (children) {
      return _react2.default.createElement(
        'h3',
        { className: (0, _classnames2.default)(_this.prefixClass('left-text')) },
        children
      );
    }, _this.renderRight = function (more) {
      if (Array.isArray(more)) {
        return _react2.default.createElement(
          'nav',
          { className: (0, _classnames2.default)(_this.prefixClass('right')) },
          more.map(function (item, index) {
            return _react2.default.createElement(
              'span',
              { key: index, className: _this.prefixClass('right-item') },
              item
            );
          })
        );
      } else if (_react2.default.isValidElement(more)) {
        return _react2.default.createElement(
          'nav',
          { className: (0, _classnames2.default)(_this.prefixClass('right')) },
          _react2.default.createElement(
            'span',
            { className: _this.prefixClass('right-item') },
            more
          )
        );
      } else {
        return null;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Title, [{
    key: 'render',
    value: function render() {
      this.classNS = (0, _className2.default)(this.props);
      this.prefixClass = this.classNS.prefixClass;

      var classSet = this.classNS.getClassSet();

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          icon = _props.icon,
          more = _props.more,
          props = _objectWithoutProperties(_props, ['children', 'className', 'icon', 'more']);

      delete props.classPrefix;
      delete props.amSize;
      delete props.amStyle;

      return _react2.default.createElement(
        'header',
        _extends({}, props, {
          className: (0, _classnames2.default)(classSet, className)
        }),
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(this.prefixClass('left')) },
          this.renderIcon(icon),
          this.renderText(children)
        ),
        this.renderRight(more)
      );
    }
  }]);

  return Title;
}(_react2.default.Component);

Title.propTypes = {
  classPrefix: _propTypes2.default.string,
  amStyle: _propTypes2.default.oneOf(['primary', 'secondary', 'success', 'warning', 'alert', 'dark']),
  text: _propTypes2.default.node,
  icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  more: _propTypes2.default.node
};
Title.defaultProps = {
  classPrefix: 'title'
};
exports.default = Title;
module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.browser = browser;
exports.getOffset = getOffset;
exports.loopAllChildren = loopAllChildren;
exports.isInclude = isInclude;
exports.filterParentPosition = filterParentPosition;
exports.handleCheckState = handleCheckState;
exports.getCheck = getCheck;
exports.getStrictlyValue = getStrictlyValue;
exports.arraysEqual = arraysEqual;
exports.getFilterChecked = getFilterChecked;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function browser(navigator) {
  var tem = void 0;
  var ua = navigator.userAgent;
  var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return 'IE ' + (tem[1] || '');
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem) return tem.slice(1).join(' ').replace('OPR', 'Opera');
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  tem = ua.match(/version\/(\d+)/i);
  if (tem) {
    M.splice(1, 1, tem[1]);
  }
  return M.join(' ');
}

// export function getOffset(el) {
//   const obj = el.getBoundingClientRect();
//   return {
//     left: obj.left + document.body.scrollLeft,
//     top: obj.top + document.body.scrollTop,
//     width: obj.width,
//     height: obj.height
//   };
// }

// // iscroll offset
// offset = function (el) {
//   var left = -el.offsetLeft,
//     top = -el.offsetTop;

//   // jshint -W084
//   while (el = el.offsetParent) {
//     left -= el.offsetLeft;
//     top -= el.offsetTop;
//   }
//   // jshint +W084

//   return {
//     left: left,
//     top: top
//   };
// }

/* eslint-disable */
/* eslint no-loop-func: 0*/

function getOffset(ele) {
  var doc = void 0,
      win = void 0,
      docElem = void 0,
      rect = void 0;

  if (!ele.getClientRects().length) {
    return { top: 0, left: 0 };
  }

  rect = ele.getBoundingClientRect();

  if (rect.width || rect.height) {
    doc = ele.ownerDocument;
    win = doc.defaultView;
    docElem = doc.documentElement;

    return {
      top: rect.top + win.pageYOffset - docElem.clientTop,
      left: rect.left + win.pageXOffset - docElem.clientLeft
    };
  }

  return rect;
}
/* eslint-enable */

function getChildrenlength(children) {
  var len = 1;
  if (Array.isArray(children)) {
    len = children.length;
  }
  return len;
}

function getSiblingPosition(index, len, siblingPosition) {
  if (len === 1) {
    siblingPosition.first = true;
    siblingPosition.last = true;
  } else {
    siblingPosition.first = index === 0;
    siblingPosition.last = index === len - 1;
  }
  return siblingPosition;
}

function loopAllChildren(childs, callback, parent) {
  var loop = function loop(children, level, _parent) {
    var len = getChildrenlength(children);
    _react2.default.Children.forEach(children, function (item, index) {
      var pos = level + '-' + index;
      if (item.props.children && item.type && item.type.isTreeNode) {
        loop(item.props.children, pos, { node: item, pos: pos });
      }
      callback(item, index, pos, item.key || pos, getSiblingPosition(index, len, {}), _parent);
    });
  };
  loop(childs, 0, parent);
}

function isInclude(smallArray, bigArray) {
  return smallArray.every(function (ii, i) {
    return ii === bigArray[i];
  });
}
// console.log(isInclude(['0', '1'], ['0', '10', '1']));


// arr.length === 628, use time: ~20ms
function filterParentPosition(arr) {
  var levelObj = {};
  arr.forEach(function (item) {
    var posLen = item.split('-').length;
    if (!levelObj[posLen]) {
      levelObj[posLen] = [];
    }
    levelObj[posLen].push(item);
  });
  var levelArr = Object.keys(levelObj).sort(function (a, b) {
    return Number(a) - Number(b);
  });

  var _loop = function _loop(i) {
    if (levelArr[i + 1]) {
      levelObj[levelArr[i]].forEach(function (ii) {
        var _loop2 = function _loop2(j) {
          levelObj[levelArr[j]].forEach(function (_i, index) {
            if (isInclude(ii.split('-'), _i.split('-'))) {
              levelObj[levelArr[j]][index] = null;
            }
          });
          levelObj[levelArr[j]] = levelObj[levelArr[j]].filter(function (p) {
            return p;
          });
        };

        for (var j = i + 1; j < levelArr.length; j++) {
          _loop2(j);
        }
      });
    }
  };

  for (var i = 0; i < levelArr.length; i++) {
    _loop(i);
  }
  var nArr = [];
  levelArr.forEach(function (i) {
    nArr = nArr.concat(levelObj[i]);
  });
  return nArr;
}
// console.log(filterParentPosition(
//   ['0-2', '0-3-3', '0-10', '0-10-0', '0-0-1', '0-0', '0-1-1', '0-1']
// ));


function stripTail(str) {
  var arr = str.match(/(.+)(-[^-]+)$/);
  var st = '';
  if (arr && arr.length === 3) {
    st = arr[1];
  }
  return st;
}
function splitPosition(pos) {
  return pos.split('-');
}

function handleCheckState(obj, checkedPositionArr, checkIt) {
  // console.log(stripTail('0-101-000'));
  var objKeys = Object.keys(obj);
  // let s = Date.now();
  objKeys.forEach(function (i, index) {
    var iArr = splitPosition(i);
    var saved = false;
    checkedPositionArr.forEach(function (_pos) {
      // 设置子节点，全选或全不选
      var _posArr = splitPosition(_pos);
      if (iArr.length > _posArr.length && isInclude(_posArr, iArr)) {
        obj[i].halfChecked = false;
        obj[i].checked = checkIt;
        objKeys[index] = null;
      }
      if (iArr[0] === _posArr[0] && iArr[1] === _posArr[1]) {
        // 如果
        saved = true;
      }
    });
    if (!saved) {
      objKeys[index] = null;
    }
  });
  // TODO: 循环 2470000 次耗时约 1400 ms。 性能瓶颈！
  // console.log(Date.now()-s, checkedPositionArr.length * objKeys.length);
  objKeys = objKeys.filter(function (i) {
    return i;
  }); // filter non null;

  var _loop3 = function _loop3(_pIndex) {
    // 循环设置父节点的 选中 或 半选状态
    var loop = function loop(__pos) {
      var _posLen = splitPosition(__pos).length;
      if (_posLen <= 2) {
        // e.g. '0-0', '0-1'
        return;
      }
      var sibling = 0;
      var siblingChecked = 0;
      var parentPosition = stripTail(__pos);
      objKeys.forEach(function (i /* , index*/) {
        var iArr = splitPosition(i);
        if (iArr.length === _posLen && isInclude(splitPosition(parentPosition), iArr)) {
          sibling++;
          if (obj[i].checked) {
            siblingChecked++;
            var _i = checkedPositionArr.indexOf(i);
            if (_i > -1) {
              checkedPositionArr.splice(_i, 1);
              if (_i <= _pIndex) {
                _pIndex--;
              }
            }
          } else if (obj[i].halfChecked) {
            siblingChecked += 0.5;
          }
          // objKeys[index] = null;
        }
      });
      // objKeys = objKeys.filter(i => i); // filter non null;
      var parent = obj[parentPosition];
      // sibling 不会等于0
      // 全不选 - 全选 - 半选
      if (siblingChecked === 0) {
        parent.checked = false;
        parent.halfChecked = false;
      } else if (siblingChecked === sibling) {
        parent.checked = true;
        parent.halfChecked = false;
      } else {
        parent.halfChecked = true;
        parent.checked = false;
      }
      loop(parentPosition);
    };
    loop(checkedPositionArr[_pIndex], _pIndex);
    pIndex = _pIndex;
  };

  for (var pIndex = 0; pIndex < checkedPositionArr.length; pIndex++) {
    _loop3(pIndex);
  }
  // console.log(Date.now()-s, objKeys.length, checkIt);
}

function getCheck(treeNodesStates) {
  var halfCheckedKeys = [];
  var checkedKeys = [];
  var checkedNodes = [];
  var checkedNodesPositions = [];
  Object.keys(treeNodesStates).forEach(function (item) {
    var itemObj = treeNodesStates[item];
    if (itemObj.checked) {
      checkedKeys.push(itemObj.key);
      checkedNodes.push(itemObj.node);
      checkedNodesPositions.push({ node: itemObj.node, pos: item });
    } else if (itemObj.halfChecked) {
      halfCheckedKeys.push(itemObj.key);
    }
  });
  return {
    halfCheckedKeys: halfCheckedKeys, checkedKeys: checkedKeys, checkedNodes: checkedNodes, checkedNodesPositions: checkedNodesPositions, treeNodesStates: treeNodesStates
  };
}

function getStrictlyValue(checkedKeys, halfChecked) {
  if (halfChecked) {
    return { checked: checkedKeys, halfChecked: halfChecked };
  }
  return checkedKeys;
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a === null || typeof a === 'undefined' || b === null || typeof b === 'undefined') {
    return false;
  }
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

/**
 * 过滤相关联的父子数据
 * @param {array} checkedKeys
 */
function getFilterChecked(checkedKeys) {
  var newArr = [];
  var arrs = checkedKeys.slice();
  if (!arrs.length) {
    return [];
  }

  function filter(arrs) {
    var last = arrs.pop();
    var blank = [];
    newArr.push(last);

    arrs.forEach(function (arr, i) {
      if (last === arr.slice(0, last.length)) {
        blank.push(i);
      }
    });

    blank.forEach(function (b, i) {
      arrs.splice(b - i, 1);
    });

    if (arrs.length > 0) {
      filter(arrs);
    }
  }
  filter(arrs);
  return newArr;
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fallback = exports.ButtonAction = exports.Pagination = exports.ProcessLogs = exports.View = exports.Tree = exports.Touchable = exports.TodoItemTypeTwo = exports.TodoItemTypeOne = exports.Title = exports.Tabs = exports.Table = exports.TabBar = exports.Switch = exports.Slider = exports.SelectableButton = exports.Select = exports.PopoverTrigger = exports.Popover = exports.Pair = exports.OffCanvas = exports.Notification = exports.NavBar = exports.Modal = exports.Loader = exports.List = exports.Icon = exports.DefaultTextarea = exports.DefaultInput = exports.Field = exports.Divide = exports.Choose = exports.CollapseCard = exports.Card = exports.ButtonGroup = exports.ButtonContainer = exports.ButtonBubble = exports.Button = exports.Badge = exports.Accordion = exports.Group = exports.Col = exports.Grid = exports.Container = exports.VERSION = undefined;

var _Container2 = __webpack_require__(19);

var _Container3 = _interopRequireDefault(_Container2);

var _Grid2 = __webpack_require__(13);

var _Grid3 = _interopRequireDefault(_Grid2);

var _Col2 = __webpack_require__(14);

var _Col3 = _interopRequireDefault(_Col2);

var _Group2 = __webpack_require__(39);

var _Group3 = _interopRequireDefault(_Group2);

var _Accordion2 = __webpack_require__(40);

var _Accordion3 = _interopRequireDefault(_Accordion2);

var _Badge2 = __webpack_require__(20);

var _Badge3 = _interopRequireDefault(_Badge2);

var _Button2 = __webpack_require__(6);

var _Button3 = _interopRequireDefault(_Button2);

var _ButtonBubble2 = __webpack_require__(42);

var _ButtonBubble3 = _interopRequireDefault(_ButtonBubble2);

var _ButtonContainer2 = __webpack_require__(21);

var _ButtonContainer3 = _interopRequireDefault(_ButtonContainer2);

var _ButtonGroup2 = __webpack_require__(16);

var _ButtonGroup3 = _interopRequireDefault(_ButtonGroup2);

var _Card2 = __webpack_require__(7);

var _Card3 = _interopRequireDefault(_Card2);

var _CollapseCard2 = __webpack_require__(43);

var _CollapseCard3 = _interopRequireDefault(_CollapseCard2);

var _Choose2 = __webpack_require__(44);

var _Choose3 = _interopRequireDefault(_Choose2);

var _Divide2 = __webpack_require__(45);

var _Divide3 = _interopRequireDefault(_Divide2);

var _Field2 = __webpack_require__(46);

var _Field3 = _interopRequireDefault(_Field2);

var _DefaultInput2 = __webpack_require__(23);

var _DefaultInput3 = _interopRequireDefault(_DefaultInput2);

var _DefaultTextarea2 = __webpack_require__(24);

var _DefaultTextarea3 = _interopRequireDefault(_DefaultTextarea2);

var _Icon2 = __webpack_require__(4);

var _Icon3 = _interopRequireDefault(_Icon2);

var _List2 = __webpack_require__(25);

var _List3 = _interopRequireDefault(_List2);

var _Loader2 = __webpack_require__(26);

var _Loader3 = _interopRequireDefault(_Loader2);

var _Modal2 = __webpack_require__(18);

var _Modal3 = _interopRequireDefault(_Modal2);

var _NavBar2 = __webpack_require__(28);

var _NavBar3 = _interopRequireDefault(_NavBar2);

var _Notification2 = __webpack_require__(49);

var _Notification3 = _interopRequireDefault(_Notification2);

var _OffCanvas2 = __webpack_require__(50);

var _OffCanvas3 = _interopRequireDefault(_OffCanvas2);

var _Pair2 = __webpack_require__(52);

var _Pair3 = _interopRequireDefault(_Pair2);

var _Popover2 = __webpack_require__(53);

var _Popover3 = _interopRequireDefault(_Popover2);

var _PopoverTrigger2 = __webpack_require__(54);

var _PopoverTrigger3 = _interopRequireDefault(_PopoverTrigger2);

var _Select2 = __webpack_require__(56);

var _Select3 = _interopRequireDefault(_Select2);

var _SelectableButton2 = __webpack_require__(22);

var _SelectableButton3 = _interopRequireDefault(_SelectableButton2);

var _Slider2 = __webpack_require__(57);

var _Slider3 = _interopRequireDefault(_Slider2);

var _Switch2 = __webpack_require__(17);

var _Switch3 = _interopRequireDefault(_Switch2);

var _TabBar2 = __webpack_require__(60);

var _TabBar3 = _interopRequireDefault(_TabBar2);

var _Table2 = __webpack_require__(61);

var _Table3 = _interopRequireDefault(_Table2);

var _Tabs2 = __webpack_require__(62);

var _Tabs3 = _interopRequireDefault(_Tabs2);

var _Title2 = __webpack_require__(32);

var _Title3 = _interopRequireDefault(_Title2);

var _TodoItemTypeOne2 = __webpack_require__(64);

var _TodoItemTypeOne3 = _interopRequireDefault(_TodoItemTypeOne2);

var _TodoItemTypeTwo2 = __webpack_require__(65);

var _TodoItemTypeTwo3 = _interopRequireDefault(_TodoItemTypeTwo2);

var _Touchable2 = __webpack_require__(30);

var _Touchable3 = _interopRequireDefault(_Touchable2);

var _Tree2 = __webpack_require__(66);

var _Tree3 = _interopRequireDefault(_Tree2);

var _View2 = __webpack_require__(27);

var _View3 = _interopRequireDefault(_View2);

var _ProcessLogs2 = __webpack_require__(69);

var _ProcessLogs3 = _interopRequireDefault(_ProcessLogs2);

var _Pagination2 = __webpack_require__(70);

var _Pagination3 = _interopRequireDefault(_Pagination2);

var _ButtonAction2 = __webpack_require__(71);

var _ButtonAction3 = _interopRequireDefault(_ButtonAction2);

var _fallback2 = __webpack_require__(72);

var _fallback3 = _interopRequireDefault(_fallback2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @see http://jamesknelson.com/re-exporting-es6-modules/
// @see http://exploringjs.com/es6/ch_modules.html#sec_all-exporting-styles

var VERSION = exports.VERSION = '2.0.1-beta.1';

// Layout
exports.Container = _Container3.default;
exports.Grid = _Grid3.default;
exports.Col = _Col3.default;
exports.Group = _Group3.default;

// Components

exports.Accordion = _Accordion3.default;
exports.Badge = _Badge3.default;
exports.Button = _Button3.default;
exports.ButtonBubble = _ButtonBubble3.default;
exports.ButtonContainer = _ButtonContainer3.default;
exports.ButtonGroup = _ButtonGroup3.default;
exports.Card = _Card3.default;
exports.CollapseCard = _CollapseCard3.default;
exports.Choose = _Choose3.default;
exports.Divide = _Divide3.default;
// export FaIcon from './FaIcon';

exports.Field = _Field3.default;
exports.DefaultInput = _DefaultInput3.default;
exports.DefaultTextarea = _DefaultTextarea3.default;
exports.Icon = _Icon3.default;
exports.List = _List3.default;
exports.Loader = _Loader3.default;
exports.Modal = _Modal3.default;
exports.NavBar = _NavBar3.default;
exports.Notification = _Notification3.default;
exports.OffCanvas = _OffCanvas3.default;
exports.Pair = _Pair3.default;
exports.Popover = _Popover3.default;
exports.PopoverTrigger = _PopoverTrigger3.default;
exports.Select = _Select3.default;
exports.SelectableButton = _SelectableButton3.default;
exports.Slider = _Slider3.default;
exports.Switch = _Switch3.default;
exports.TabBar = _TabBar3.default;
exports.Table = _Table3.default;
exports.Tabs = _Tabs3.default;
exports.Title = _Title3.default;
exports.TodoItemTypeOne = _TodoItemTypeOne3.default;
exports.TodoItemTypeTwo = _TodoItemTypeTwo3.default;
exports.Touchable = _Touchable3.default;
exports.Tree = _Tree3.default;
exports.View = _View3.default;
exports.ProcessLogs = _ProcessLogs3.default;
exports.Pagination = _Pagination3.default;
exports.ButtonAction = _ButtonAction3.default;
// export InputBox from './InputBox';
// export Info from './Info';
// export InputGroup from './InputGroup';
// export CheckBoxGroup from './CheckBoxGroup';
// export CheckBox from './CheckBox';
// export RadioGroup from './RadioGroup';
// export Radio from './Radio';


// Compatibility fallback

exports.fallback = _fallback3.default;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(11);

var ReactPropTypesSecret = __webpack_require__(12);
var checkPropTypes = __webpack_require__(36);

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(12);
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(12);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// for classname
var NAMESPACE = exports.NAMESPACE = 'amt'; // 'am'
var CLASSNAMES = exports.CLASSNAMES = {
  disabled: 'amt-disabled',
  active: 'amt-active'
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Group = function (_React$Component) {
  _inherits(Group, _React$Component);

  function Group() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Group);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Group.__proto__ || Object.getPrototypeOf(Group)).call.apply(_ref, [this].concat(args))), _this), _this.renderAddon = function (role) {
      role = role || 'header';
      return _this.props[role] ? _react2.default.createElement(role, {
        className: _this.prefixClass(role)
      }, _this.props[role]) : null;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Group, [{
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;
      this.prefixClass = classNS.prefixClass;

      var _props = this.props,
          Component = _props.component,
          className = _props.className,
          bodyClass = _props.bodyClass,
          noPadded = _props.noPadded,
          props = _objectWithoutProperties(_props, ['component', 'className', 'bodyClass', 'noPadded']);

      delete props.classPrefix;
      delete props.header;
      delete props.footer;

      classSet[this.prefixClass('no-padded')] = noPadded;

      var bodyClasses = _defineProperty({}, this.prefixClass('body'), true);

      return _react2.default.createElement(
        Component,
        _extends({}, props, {
          className: (0, _classnames2.default)(className, classSet)
        }),
        this.renderAddon('header'),
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(bodyClasses, bodyClass) },
          this.props.children
        ),
        this.renderAddon('footer')
      );
    }
  }]);

  return Group;
}(_react2.default.Component);

Group.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  component: _propTypes2.default.node.isRequired,
  header: _propTypes2.default.node,
  footer: _propTypes2.default.node,
  noPadded: _propTypes2.default.bool
};
Group.defaultProps = {
  classPrefix: 'group',
  component: 'div'
};
exports.default = Group;
module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _TransitionEvents = __webpack_require__(8);

var _TransitionEvents2 = _interopRequireDefault(_TransitionEvents);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

var _Icon = __webpack_require__(4);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordion = function (_React$Component) {
  _inherits(Accordion, _React$Component);

  function Accordion() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Accordion);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
      activeKey: _this2.props.defaultActiveKey || null
    }, _this2.handleSelect = function (e, key) {
      e.preventDefault();

      if (_this2.props.onAction) {
        _this2._isChanging = true;
        _this2.props.onAction(key);
        _this2._isChanging = false;
      }

      if (_this2.state.activeKey === key) {
        key = null;
      }

      _this2.setState({
        activeKey: key
      });
    }, _this2.renderItems = function () {
      var activeKey = _this2.props.activeKey != null ? _this2.props.activeKey : _this2.state.activeKey;

      return _react2.default.Children.map(_this2.props.children, function (child, index) {
        var eventKey = child.props.eventKey;


        var props = {
          key: index,
          onAction: _this2.handleSelect
        };

        if (eventKey === undefined) {
          props.eventKey = eventKey = index;
        }
        props.expanded = eventKey === activeKey;

        return _react2.default.cloneElement(child, props);
      });
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Accordion, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      // Defer any updates to this component during the `onAction` handler.
      return !this._isChanging;
    }
  }, {
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;
      this.prefixClass = classNS.prefixClass;

      var _props = this.props,
          className = _props.className,
          inset = _props.inset,
          props = _objectWithoutProperties(_props, ['className', 'inset']);

      delete props.classPrefix;
      delete props.activeKey;
      delete props.defaultActiveKey;
      delete props.onAction;

      classSet[this.prefixClass("inset")] = inset;

      return _react2.default.createElement(
        'section',
        _extends({}, props, { className: (0, _classnames2.default)(classSet, className) }),
        this.renderItems()
      );
    }
  }]);

  return Accordion;
}(_react2.default.Component);

Accordion.propTypes = {
  classPrefix: _propTypes2.default.string,
  activeKey: _propTypes2.default.any,
  defaultActiveKey: _propTypes2.default.any,
  inset: _propTypes2.default.bool,
  onAction: _propTypes2.default.func
};
Accordion.defaultProps = {
  classPrefix: "accordion"
};

var AccordionItem = function (_React$Component2) {
  _inherits(AccordionItem, _React$Component2);

  function AccordionItem(props) {
    _classCallCheck(this, AccordionItem);

    var _this3 = _possibleConstructorReturn(this, (AccordionItem.__proto__ || Object.getPrototypeOf(AccordionItem)).call(this, props));

    _this3._afterWillUpdate = function () {};

    _this3._checkStartAnimation = function () {
      if (!_this3.state.collapsing) {
        return;
      }

      var node = _this3.getCollapsibleDOMNode();
      var dimension = _this3.dimension();
      var value = _this3.getCollapsibleDimensionValue();

      // setting the dimension here starts the transition animation
      var result = void 0;

      if (_this3.isExpanded()) {
        result = value + "px";
      } else {
        result = "0px";
      }
      node.style[dimension] = result;
    };

    _this3._checkToggleCollapsing = function (prevProps, prevState) {
      var wasExpanded = prevProps.expanded != null ? prevProps.expanded : prevState.expanded;
      var isExpanded = _this3.isExpanded();

      if (wasExpanded !== isExpanded) {
        if (wasExpanded) {
          _this3._handleCollapse();
        } else {
          _this3._handleExpand();
        }
      }
    };

    _this3._handleExpand = function () {
      var node = _this3.getCollapsibleDOMNode();
      var dimension = _this3.dimension();

      var complete = function () {
        this._removeEndEventListener(node, complete);
        // remove dimension value - this ensures the collapsible item can grow
        // in dimension after initial display (such as an image loading)
        node.style[dimension] = "";
        this.setState({
          collapsing: false
        });
      }.bind(_this3);

      _this3._addEndEventListener(node, complete);

      _this3.setState({
        collapsing: true
      });
    };

    _this3._handleCollapse = function () {
      var node = _this3.getCollapsibleDOMNode();
      var _this = _this3;
      var complete = function complete() {
        _this._removeEndEventListener(node, complete);
        _this.setState({
          collapsing: false
        });
      };

      _this3._addEndEventListener(node, complete);

      _this3.setState({
        collapsing: true
      });
    };

    _this3._addEndEventListener = function (node, complete) {
      _TransitionEvents2.default.on(node, complete);
    };

    _this3._removeEndEventListener = function (node, complete) {
      _TransitionEvents2.default.off(node, complete);
    };

    _this3.dimension = function () {
      return typeof _this3.getCollapsibleDimension === "function" ? _this3.getCollapsibleDimension() : "height";
    };

    _this3.isExpanded = function () {
      return _this3.props.expanded != null ? _this3.props.expanded : _this3.state.expanded;
    };

    _this3.getCollapsibleClassSet = function (className) {
      var classSet = {};

      if (typeof className === "string") {
        className.split(" ").forEach(function (subClass) {
          if (subClass) {
            classSet[subClass] = true;
          }
        });
      }

      classSet[_this3.setClassNS("collapsing")] = _this3.state.collapsing;
      classSet[_this3.setClassNS("collapse")] = !_this3.state.collapsing;
      classSet[_this3.setClassNS("in")] = _this3.isExpanded() && !_this3.state.collapsing;

      return classSet;
    };

    _this3.handleClick = function (e) {
      // @see https://facebook.github.io/react/docs/events.html#event-pooling
      // e.persist();
      // e.selected = true;
      _this3.selected = true;

      if (_this3.props.onAction) {
        _this3.props.onAction(e, _this3.props.eventKey);
      } else {
        e.preventDefault();
      }

      if (_this3.selected) {
        _this3.handleToggle();
      }
    };

    _this3.handleToggle = function () {
      _this3.setState({ expanded: !_this3.state.expanded });
    };

    _this3.getCollapsibleDimensionValue = function () {
      return _this3.panel.scrollHeight;
    };

    _this3.getCollapsibleDOMNode = function () {
      // if (!this.isMounted() || !this.panel) {
      if (!_this3.panel) {
        return null;
      }

      return _this3.panel;
    };

    var defaultExpanded = _this3.props.defaultExpanded != null ? _this3.props.defaultExpanded : _this3.props.expanded != null ? _this3.props.expanded : false;

    _this3.state = {
      expanded: defaultExpanded,
      collapsing: false
    };
    return _this3;
  }

  _createClass(AccordionItem, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      var willExpanded = nextProps.expanded != null ? nextProps.expanded : nextState.expanded;

      if (willExpanded === this.isExpanded()) {
        return;
      }

      // if the expanded state is being toggled, ensure node has a dimension value
      // this is needed for the animation to work and needs to be set before
      // the collapsing class is applied (after collapsing is applied the in class
      // is removed and the node's dimension will be wrong)

      var node = this.getCollapsibleDOMNode();
      var dimension = this.dimension();
      var value = "0";

      if (!willExpanded) {
        // get height
        value = this.getCollapsibleDimensionValue();
      }

      node.style[dimension] = value + "px";

      this._afterWillUpdate();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // check if expanded is being toggled; if so, set collapsing
      this._checkToggleCollapsing(prevProps, prevState);

      // check if collapsing was turned on; if so, start animation
      this._checkStartAnimation();
    }

    // helps enable test stubs


    // helps enable test stubs


    // helps enable test stubs

  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      this.setClassNS = _className.setClassNS;

      return _react2.default.createElement(
        'dl',
        {
          className: (0, _classnames2.default)(this.setClassNS("accordion-item"), this.isExpanded() ? this.setClassNS("active") : null)
        },
        _react2.default.createElement(
          'dt',
          {
            onClick: this.handleClick,
            className: this.setClassNS("accordion-title")
          },
          this.props.title,
          _react2.default.createElement(_Icon2.default, { className: this.setClassNS("accordion-icon"), name: 'down' })
        ),
        _react2.default.createElement(
          'dd',
          {
            className: (0, _classnames2.default)(this.setClassNS("accordion-body"), this.getCollapsibleClassSet()),
            ref: function ref(_ref2) {
              _this4.panel = _ref2;
            }
          },
          _react2.default.createElement(
            'div',
            {
              className: this.setClassNS("accordion-content")
            },
            this.props.children
          )
        )
      );
    }
  }]);

  return AccordionItem;
}(_react2.default.Component);

AccordionItem.propTypes = {
  title: _propTypes2.default.node,
  eventKey: _propTypes2.default.any
};


Accordion.Item = AccordionItem;

exports.default = Accordion;
module.exports = exports['default'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @licence https://github.com/JedWatson/exenv
 */

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var ExecutionEnvironment = {
  canUseDOM: canUseDOM,
  canUseWorkers: typeof Worker !== 'undefined',
  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
  canUseViewport: canUseDOM && !!window.screen
};

exports.default = ExecutionEnvironment;
module.exports = exports['default'];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonBubble = function (_React$Component) {
  _inherits(ButtonBubble, _React$Component);

  function ButtonBubble() {
    _classCallCheck(this, ButtonBubble);

    return _possibleConstructorReturn(this, (ButtonBubble.__proto__ || Object.getPrototypeOf(ButtonBubble)).apply(this, arguments));
  }

  _createClass(ButtonBubble, [{
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;

      var _props = this.props,
          className = _props.className,
          props = _objectWithoutProperties(_props, ['className']);

      delete props.classPrefix;

      return _react2.default.createElement(
        'div',
        _extends({}, props, {
          className: (0, _classnames2.default)(className, classSet)
        }),
        _react2.default.createElement(
          'div',
          null,
          this.props.children
        ),
        _react2.default.createElement('div', { className: (0, _classnames2.default)(classSet) + '-triangle' })
      );
    }
  }]);

  return ButtonBubble;
}(_react2.default.Component);

ButtonBubble.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired
};
ButtonBubble.defaultProps = {
  classPrefix: 'btn-bubble'
};
exports.default = ButtonBubble;
module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Icon = __webpack_require__(4);

var _Icon2 = _interopRequireDefault(_Icon);

var _Card = __webpack_require__(7);

var _Card2 = _interopRequireDefault(_Card);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollapseCard = function (_React$Component) {
  _inherits(CollapseCard, _React$Component);

  function CollapseCard(props) {
    _classCallCheck(this, CollapseCard);

    var _this = _possibleConstructorReturn(this, (CollapseCard.__proto__ || Object.getPrototypeOf(CollapseCard)).call(this, props));

    _this.handleOpen = function () {
      _this.setState({
        collapsed: false
      });
    };

    _this.handleClose = function () {
      _this.setState({
        collapsed: true
      });
    };

    _this.renderFooter = function () {
      var footer_more = _react2.default.createElement(
        'div',
        {
          className: _this.prefixClass('footer-more'),
          onClick: _this.handleOpen
        },
        _react2.default.createElement(_Icon2.default, { name: 'down' }),
        '\xA0',
        _this.props.collapsedText
      );

      var footer_less = _react2.default.createElement(
        'div',
        {
          className: _this.prefixClass('footer-more'),
          onClick: _this.handleClose
        },
        _react2.default.createElement(_Icon2.default, { name: 'up' }),
        '\xA0',
        _this.props.uncollapsedText
      );

      return _this.state.collapsed ? footer_more : footer_less;
    };

    _this.state = {
      collapsed: _this.props.defaultCollapsed
    };
    return _this;
  }

  _createClass(CollapseCard, [{
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;
      this.prefixClass = classNS.prefixClass;

      var _props = this.props,
          subHeader = _props.subHeader,
          classPrefix = _props.classPrefix,
          children = _props.children,
          collapseHeight = _props.collapseHeight,
          defaultCollapsed = _props.defaultCollapsed,
          footer = _props.footer,
          external = _props.external,
          noPadding = _props.noPadding,
          props = _objectWithoutProperties(_props, ['subHeader', 'classPrefix', 'children', 'collapseHeight', 'defaultCollapsed', 'footer', 'external', 'noPadding']);

      var isPadding = void 0;
      if (noPadding || subHeader) {
        isPadding = true;
      } else {
        isPadding = this.state.collapsed ? false : true;
      }

      delete props.collapsedText;
      delete props.uncollapsedText;

      return _react2.default.createElement(
        _Card2.default,
        _extends({}, props, {
          noPadding: !isPadding,
          footer: this.renderFooter()
        }),
        _react2.default.createElement(
          'div',
          null,
          subHeader
        ),
        !this.state.collapsed ? children : null
      );
    }
  }]);

  return CollapseCard;
}(_react2.default.Component);

// TODO: use height=0 or null to hide children?


CollapseCard.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string,
  header: _propTypes2.default.node,
  noMargin: _propTypes2.default.bool,
  noLine: _propTypes2.default.bool,
  collapseHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  defaultCollapsed: _propTypes2.default.bool
};
CollapseCard.defaultProps = {
  classPrefix: 'card',
  noMargin: false,
  defaultCollapsed: true,
  collapsedText: '显示更多',
  uncollapsedText: '收起全部'
};
exports.default = CollapseCard;
module.exports = exports['default'];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _SelectableButton = __webpack_require__(22);

var _SelectableButton2 = _interopRequireDefault(_SelectableButton);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className2 = __webpack_require__(3);

var _className3 = _interopRequireDefault(_className2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Choose = function (_React$Component) {
  _inherits(Choose, _React$Component);

  function Choose() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Choose);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Choose.__proto__ || Object.getPrototypeOf(Choose)).call.apply(_ref, [this].concat(args))), _this), _this.record = function (index, value) {
      if (!Array.isArray(_this.itemSelectedRecord)) {
        _this.itemSelectedRecord = [];
      }
      _this.itemSelectedRecord[index] = value;
    }, _this.recordOne = function (index, value) {
      _this.setState({
        itemSelectedRecord: {
          index: index,
          value: value
        }
      });
    }, _this.getFilteredChildren = function (children) {
      var filteredChildren = [];
      _react2.default.Children.forEach(children, function (child) {
        if (child.type.displayName === 'ChooseItem') {
          filteredChildren.push(child);
        }
      });
      return filteredChildren;
    }, _this.handleItemValueChange = function (index, value, filteredChildren) {
      var multiple = _this.props.multiple;

      if (multiple) {
        _this.record(index, value);
        if (_this.props.onValueChange) {
          var currentValue = [];
          _react2.default.Children.forEach(filteredChildren, function (child, index) {
            if (_this.itemSelectedRecord[index]) {
              currentValue.push(child.props.value);
            }
          });
          _this.props.onValueChange(currentValue);
        }
      } else {
        _this.recordOne(index, value);
        _this.props.onValueChange(value);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Choose, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          children = _props.children,
          multiple = _props.multiple,
          defaultValue = _props.defaultValue;

      if (!multiple) {
        var itemSelectedRecord = {};
        var filteredChildren = this.getFilteredChildren(children);
        _react2.default.Children.forEach(filteredChildren, function (child, index) {
          if (child.props.defaultSelected || defaultValue === child.props.value) {
            itemSelectedRecord.index = index;
            itemSelectedRecord.value = child.props.value;
          }
        });
        this.setState({
          itemSelectedRecord: itemSelectedRecord
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var classNS = (0, _className3.default)(this.props);
      var classSet = classNS.classSet;
      this.prefixClass = classNS.prefixClass;

      var _props2 = this.props,
          classPrefix = _props2.classPrefix,
          className = _props2.className,
          children = _props2.children,
          amStyle = _props2.amStyle,
          amSize = _props2.amSize,
          multiple = _props2.multiple,
          defaultValue = _props2.defaultValue,
          others = _objectWithoutProperties(_props2, ['classPrefix', 'className', 'children', 'amStyle', 'amSize', 'multiple', 'defaultValue']);

      var filteredChildren = this.getFilteredChildren(children);

      var newChildren = _react2.default.Children.map(filteredChildren, function (child, index) {
        if (multiple) {
          var defaultSelected = void 0;
          if (!Array.isArray(defaultValue)) {
            defaultValue = [defaultValue];
          }
          if (typeof child.props.defaultSelected === 'boolean') {
            defaultSelected = child.props.defaultSelected;
          } else if (defaultValue.includes(child.props.value)) {
            defaultSelected = true;
          }
          _this2.record(index, defaultSelected);
          return _react2.default.cloneElement(child, _extends({}, child.props, {
            amStyle: amStyle,
            amSize: amSize,
            defaultSelected: defaultSelected,
            onValueChange: function onValueChange(value) {
              return _this2.handleItemValueChange(index, value, filteredChildren);
            }
          }));
        } else {
          var _className = child.props.className;

          return _react2.default.createElement(
            'li',
            { className: (0, _classnames2.default)(_this2.prefixClass('item'), _className) },
            _react2.default.createElement(
              _Button2.default,
              {
                amStyle: _this2.state && _this2.state.itemSelectedRecord && _this2.state.itemSelectedRecord.index === index ? amStyle : '',
                amSize: amSize,
                disabled: child.props.disabled,
                'data-value': child.props.value,
                onClick: function onClick() {
                  _this2.handleItemValueChange(index, child.props.value);
                }
              },
              child.props.children
            )
          );
        }
      });

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(classSet, className) },
        _react2.default.createElement(
          'ul',
          { className: this.prefixClass('list') },
          newChildren
        )
      );
    }
  }]);

  return Choose;
}(_react2.default.Component);

Choose.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  amStyle: _propTypes2.default.string,
  amSize: _propTypes2.default.string,
  multiple: _propTypes2.default.bool,
  onValueChange: _propTypes2.default.func
};
Choose.defaultProps = {
  classPrefix: 'choose',
  multiple: true,
  amStyle: 'warning',
  amSize: 'sm'
};

var ChooseItem = function (_React$Component2) {
  _inherits(ChooseItem, _React$Component2);

  function ChooseItem() {
    _classCallCheck(this, ChooseItem);

    return _possibleConstructorReturn(this, (ChooseItem.__proto__ || Object.getPrototypeOf(ChooseItem)).apply(this, arguments));
  }

  _createClass(ChooseItem, [{
    key: 'render',
    value: function render() {
      var classNS = (0, _className3.default)(this.props);

      var _props3 = this.props,
          classPrefix = _props3.classPrefix,
          className = _props3.className,
          children = _props3.children,
          others = _objectWithoutProperties(_props3, ['classPrefix', 'className', 'children']);

      return _react2.default.createElement(
        'li',
        { className: (0, _classnames2.default)(classNS.prefixClass('item'), className) },
        _react2.default.createElement(
          _SelectableButton2.default,
          others,
          children
        )
      );
    }
  }]);

  return ChooseItem;
}(_react2.default.Component);

ChooseItem.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  multiple: _propTypes2.default.bool,
  amStyle: _propTypes2.default.string,
  amSize: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  selected: _propTypes2.default.bool,
  defaultSelected: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  onValueChange: _propTypes2.default.func
};
ChooseItem.defaultProps = {
  classPrefix: 'choose'
};
ChooseItem.displayName = 'ChooseItem';


Choose.Item = ChooseItem;

exports.default = Choose;
module.exports = exports['default'];

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Divide = function (_React$Component) {
  _inherits(Divide, _React$Component);

  function Divide() {
    _classCallCheck(this, Divide);

    return _possibleConstructorReturn(this, (Divide.__proto__ || Object.getPrototypeOf(Divide)).apply(this, arguments));
  }

  _createClass(Divide, [{
    key: 'render',
    value: function render() {
      var _cx;

      var _props = this.props,
          className = _props.className,
          classPrefix = _props.classPrefix,
          dashed = _props.dashed,
          dotted = _props.dotted,
          light = _props.light,
          large = _props.large,
          props = _objectWithoutProperties(_props, ['className', 'classPrefix', 'dashed', 'dotted', 'light', 'large']);

      var nsPrefix = (0, _className.setClassNS)(classPrefix);

      var classes = (0, _classnames2.default)(nsPrefix, (_cx = {}, _defineProperty(_cx, nsPrefix + '-dashed', dashed), _defineProperty(_cx, nsPrefix + '-dotted', dotted), _defineProperty(_cx, nsPrefix + '-light', light), _defineProperty(_cx, nsPrefix + '-large', large), _cx), className);

      return _react2.default.createElement('div', _extends({}, props, { className: classes }));
    }
  }]);

  return Divide;
}(_react2.default.Component);

Divide.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  dashed: _propTypes2.default.bool,
  dotted: _propTypes2.default.bool,
  light: _propTypes2.default.bool,
  large: _propTypes2.default.bool
};
Divide.defaultProps = {
  classPrefix: 'divide'
};
exports.default = Divide;
module.exports = exports['default'];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _Icon = __webpack_require__(4);

var _Icon2 = _interopRequireDefault(_Icon);

var _Switch = __webpack_require__(17);

var _Switch2 = _interopRequireDefault(_Switch);

var _DefaultInput = __webpack_require__(23);

var _DefaultInput2 = _interopRequireDefault(_DefaultInput);

var _DefaultTextarea = __webpack_require__(24);

var _DefaultTextarea2 = _interopRequireDefault(_DefaultTextarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Field = function (_React$Component) {
  _inherits(Field, _React$Component);

  function Field() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Field);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Field.__proto__ || Object.getPrototypeOf(Field)).call.apply(_ref, [this].concat(args))), _this), _this.getFieldDOMNode = function () {
      return _this.refs.field;
    }, _this.getValue = function () {
      if (_this.props.type === 'select' && _this.props.multiple) {
        return _this.getSelectedOptions();
      } else {
        return _this.getFieldDOMNode().value;
      }
    }, _this.getChecked = function () {
      return _this.getFieldDOMNode().checked;
    }, _this.getSelectedOptions = function () {
      var values = [];
      // see http://www.w3schools.com/jsref/coll_select_options.asp
      var options = _this.getFieldDOMNode().options;

      Array.from(options).forEach(function (option) {
        if (option.selected) {
          var value = option.getAttribute('value') || option.innerHtml;

          values.push(value);
        }
      });

      return values;
    }, _this.isCheckboxOrRadio = function () {
      return _this.props.type === 'radio' || _this.props.type === 'checkbox';
    }, _this.isFile = function () {
      return _this.props.type === 'file';
    }, _this.convertValueToChecked = function () {
      var checkedProps = {};

      if (_this.isCheckboxOrRadio()) {
        var propsMap = {
          checked: 'value',
          defaultChecked: 'defaultValue'
        };

        Object.keys(propsMap).forEach(function (checked) {
          var value = propsMap[checked];

          if (!_this.props[checked] && _this.props[value]) {
            checkedProps[checked] = value;
          }
        });
      }

      return checkedProps;
    }, _this.renderField = function () {
      var field = null;
      var fieldClassName = _this.isCheckboxOrRadio() || _this.isFile() ? '' : _this.classNS.classNames;
      var classes = (0, _classnames2.default)(_this.props.className, fieldClassName);
      var commonProps = {
        ref: 'field',
        key: 'formField',
        className: classes
      };
      var assignedProps = _extends({}, _this.props, commonProps);

      delete assignedProps.classPrefix;
      delete assignedProps.containerClassName;
      delete assignedProps.label;
      delete assignedProps.right;
      delete assignedProps.btnBefore;
      delete assignedProps.btnAfter;
      delete assignedProps.labelBefore;
      delete assignedProps.labelAfter;
      delete assignedProps.single;
      delete assignedProps.labelWidth;
      delete assignedProps.tip;
      delete assignedProps.underline;

      switch (_this.props.type) {
        case 'select':
          field = _react2.default.createElement(
            'select',
            assignedProps,
            _this.props.children
          );
          break;
        case 'textarea':
          field = _react2.default.createElement(_DefaultTextarea2.default, assignedProps);
          break;
        case 'submit':
        case 'reset':
          var _this$props = _this.props,
              classPrefix = _this$props.classPrefix,
              underline = _this$props.underline,
              others = _objectWithoutProperties(_this$props, ['classPrefix', 'underline']);

          field = _react2.default.createElement(_Button2.default, _extends({}, commonProps, {
            className: null
          }, others, {
            component: 'input'
          }));
          break;
        case 'file':
          var className = assignedProps.className,
              otherss = _objectWithoutProperties(assignedProps, ['className']);

          field = _react2.default.createElement(
            'label',
            { className: _this.prefixClass('file') },
            _react2.default.createElement(
              'span',
              { className: _this.prefixClass('file-title') },
              '\u4E0A\u4F20'
            ),
            _react2.default.createElement('input', _extends({}, otherss, _this.convertValueToChecked(), {
              className: _this.prefixClass('file-input')
            }))
          );
          break;
        case 'switch':
          field = _react2.default.createElement(_Switch2.default, assignedProps);
          break;
        case 'custom':
          field = _this.props.children;
          break;
        default:
          field = _react2.default.createElement(_DefaultInput2.default, _extends({}, assignedProps, _this.convertValueToChecked()));
      }

      return field;
    }, _this.renderContainer = function (children) {
      var _this$props2 = _this.props,
          id = _this$props2.id,
          label = _this$props2.label,
          labelWidth = _this$props2.labelWidth,
          labelStyle = _this$props2.labelStyle,
          labelClassName = _this$props2.labelClassName,
          containerClassName = _this$props2.containerClassName,
          single = _this$props2.single,
          tip = _this$props2.tip,
          underline = _this$props2.underline,
          disabled = _this$props2.disabled;


      var containerClass = (0, _classnames2.default)(_defineProperty({}, _this.prefixClass('container'), !single), _defineProperty({}, _this.prefixClass('single'), single), _defineProperty({}, _this.prefixClass('disabled'), disabled), _defineProperty({}, _this.prefixClass('underline-' + underline), underline === 'part'), containerClassName);

      var labelClass = (0, _classnames2.default)(_this.prefixClass('label'), labelClassName);

      var labelStyles = _extends({}, {
        width: labelWidth
      }, labelStyle);

      var wrapClass = (0, _classnames2.default)(_this.prefixClass('wrap'), _defineProperty({}, _this.prefixClass('wrap-custom'), _this.props.type === 'custom'));

      return label ? _react2.default.createElement(
        'label',
        {
          className: containerClass,
          key: 'label'
        },
        _react2.default.createElement(
          'div',
          {
            className: labelClass,
            style: labelStyles
          },
          _react2.default.createElement(
            'div',
            null,
            label
          ),
          tip ? _react2.default.createElement(
            'span',
            { className: _this.prefixClass('tip') },
            tip
          ) : null
        ),
        _react2.default.createElement(
          'div',
          { className: wrapClass },
          children
        ),
        _this.isCheckboxOrRadio() ? _react2.default.createElement(_Icon2.default, {
          className: _this.prefixClass('icon'),
          name: 'elect'
        }) : null
      ) : children;
    }, _this.renderFieldGroup = function (children) {
      var groupPrefix = _this.classNS.prefixClass('group');
      var labelClassName = groupPrefix + '-label';
      var _this$props3 = _this.props,
          labelBefore = _this$props3.labelBefore,
          labelAfter = _this$props3.labelAfter,
          btnBefore = _this$props3.btnBefore,
          btnAfter = _this$props3.btnAfter,
          containerClassName = _this$props3.containerClassName;

      var renderFiledLabel = function renderFiledLabel(type) {
        return _this.props[type] ? _react2.default.createElement(
          'span',
          {
            className: labelClassName,
            key: type
          },
          _this.props[type]
        ) : null;
      };

      return labelBefore || labelAfter || btnBefore || btnAfter ? _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(groupPrefix, containerClassName),
          key: 'fieldGroup'
        },
        renderFiledLabel('labelBefore'),
        btnBefore,
        children,
        renderFiledLabel('labelAfter'),
        btnAfter
      ) : children;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Field, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Reference: https://stackoverflow.com/questions/23757345/android-does-not-correctly-scroll-on-input-focus-if-not-body-element
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
      if (/Android/.test(navigator.appVersion)) {
        window.addEventListener('resize', function () {
          if (/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
            window.setTimeout(function () {
              document.activeElement.scrollIntoViewIfNeeded();
            }, 0);
          }
        });
      }
    }

    // convert `value`/`defaultValue` to `checked`/`defaultChecked` when `type` is `radio`/checkbox``

  }, {
    key: 'render',
    value: function render() {
      this.classNS = (0, _className2.default)(this.props);
      this.prefixClass = this.classNS.prefixClass;

      var field = this.renderField();

      if (this.props.label) {
        return this.renderContainer(field);
      }

      return this.renderFieldGroup(field);
    }
  }]);

  return Field;
}(_react2.default.Component);

Field.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string,
  right: _propTypes2.default.bool,
  label: _propTypes2.default.node,
  btnBefore: _propTypes2.default.node,
  btnAfter: _propTypes2.default.node,
  labelBefore: _propTypes2.default.node,
  labelAfter: _propTypes2.default.node,
  containerClassName: _propTypes2.default.string,
  single: _propTypes2.default.bool,
  tip: _propTypes2.default.string,
  labelWidth: _propTypes2.default.string,
  underline: _propTypes2.default.string,
  labelStyle: _propTypes2.default.string,
  labelClassName: _propTypes2.default.string,
  disabled: _propTypes2.default.bool
};
Field.defaultProps = {
  classPrefix: 'field',
  type: 'text',
  underline: 'full'
};
exports.default = Field;
;
module.exports = exports['default'];

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _CSSCore = __webpack_require__(15);

var _CSSCore2 = _interopRequireDefault(_CSSCore);

var _bodyElement = __webpack_require__(9);

var _bodyElement2 = _interopRequireDefault(_bodyElement);

var _Modal = __webpack_require__(48);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bodyClassName = 'has-modal-open';

var ModalPortal = function (_React$Component) {
  _inherits(ModalPortal, _React$Component);

  function ModalPortal() {
    _classCallCheck(this, ModalPortal);

    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this));

    _this.node = document.createElement('div');
    _this.node.className = '__modal-portal';
    return _this;
  }

  _createClass(ModalPortal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _bodyElement2.default.appendChild(this.node);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _bodyElement2.default.removeChild(this.node);
      _CSSCore2.default.removeClass(_bodyElement2.default, bodyClassName);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isOpen = _props.isOpen,
          props = _objectWithoutProperties(_props, ['isOpen']);

      _CSSCore2.default[(isOpen ? 'add' : 'remove') + 'Class'](_bodyElement2.default, bodyClassName);

      return (0, _reactDom.createPortal)(_react2.default.createElement(_Modal2.default, this.props), this.node);
    }
  }]);

  return ModalPortal;
}(_react2.default.Component);

ModalPortal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired
};
ModalPortal.defaultProps = {
  isOpen: false
};
exports.default = ModalPortal;
module.exports = exports['default'];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _TransitionEvents = __webpack_require__(8);

var _TransitionEvents2 = _interopRequireDefault(_TransitionEvents);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _Icon = __webpack_require__(4);

var _Icon2 = _interopRequireDefault(_Icon);

var _Loader = __webpack_require__(26);

var _Loader2 = _interopRequireDefault(_Loader);

var _View = __webpack_require__(27);

var _View2 = _interopRequireDefault(_View);

var _Container = __webpack_require__(19);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @see https://github.com/yuanyan/boron
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// MUST be equal to $modal-duration in _modal.scss
var TRANSITION_TIMEOUT = 300;

function noop() {}

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      closed: true,
      isClosing: false
    }, _this.isClosed = function () {
      return _this.state.closed;
    }, _this.isPopup = function () {
      return _this.props.role === 'popup';
    }, _this.isActions = function () {
      return _this.props.role === 'actions';
    }, _this.isPage = function () {
      return _this.props.role === 'page';
    }, _this.getFieldData = function () {
      var data = [];
      var inputs = _reactDom2.default.findDOMNode(_this).querySelectorAll('input[type=text]');

      if (inputs) {
        for (var i = 0; i < inputs.length; i++) {
          data.push(inputs[i].value);
        }
      }

      return data.length === 0 ? null : data.length === 1 ? data[0] : data;
    }, _this.handleAction = function (data, e) {
      var _this$props = _this.props,
          role = _this$props.role,
          onAction = _this$props.onAction;

      var willClose = true;

      if (role === 'prompt' && data) {
        data = _this.getFieldData();

        willClose = onAction.call(_this, data, e);
      } else {
        onAction.call(_this, data, e);
      }

      willClose && _this.requestClose(e);
    }, _this.handleBackdropClick = function (e) {
      if (e.target !== e.currentTarget || !_this.props.closeViaBackdrop) {
        return;
      }

      _this.requestClose(e);
    }, _this.open = function () {
      if (_this.isClosed()) {
        _this.setState({
          isClosing: false,
          closed: false
        });

        _this.props.onOpen();
      }
    }, _this.close = function () {
      if (_this.isClosed() || _this.state.isClosing) {
        return;
      }

      _this.setState({
        isClosing: true
      });
    }, _this.requestClose = function (e) {
      _this.props.onDismiss(e);
    }, _this.handleClosed = function () {
      _this.setState({
        closed: true,
        isClosing: false
      });
      _this.props.onClosed();
    }, _this.removeUnknownProp = function (props) {
      delete props.isOpen;
      delete props.onDismiss;
      delete props.onOpen;
      delete props.onClosed;
      delete props.onAction;
      delete props.classPrefix;
      delete props.confirmText;
      delete props.cancelText;
      delete props.closeBtn;
      delete props.closeViaBackdrop;
      delete props.page;

      return props;
    }, _this.renderActions = function (classSet) {
      classSet[_this.props.classPrefix] = false;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(_this.props.className, classSet),
          key: 'modalActions',
          ref: function ref(modal) {
            _this.modal = modal;
          }
        },
        _this.props.children,
        _react2.default.createElement(
          'div',
          { className: _this.prefixClass('actions-group') },
          _react2.default.createElement(
            _Button2.default,
            {
              onClick: _this.requestClose,
              block: true,
              className: _this.props.btnClassName,
              amStyle: _this.props.btnStyle || 'secondary'
            },
            _this.props.cancelText
          )
        )
      );
    }, _this.renderPopup = function (classSet) {
      classSet[_this.props.classPrefix] = false;

      var _this$props2 = _this.props,
          className = _this$props2.className,
          title = _this$props2.title,
          children = _this$props2.children,
          props = _objectWithoutProperties(_this$props2, ['className', 'title', 'children']);

      return _react2.default.createElement(
        'div',
        _extends({}, _this.removeUnknownProp(props), {
          className: (0, _classnames2.default)(className, classSet, _this.setClassNS('popup')),
          key: 'modalPopup',
          ref: function ref(modal) {
            _this.modal = modal;
          }
        }),
        _react2.default.createElement(
          'div',
          { className: _this.setClassNS('popup-inner') },
          _react2.default.createElement(
            'div',
            { className: _this.setClassNS('popup-header') },
            title ? _react2.default.createElement(
              'h4',
              { className: _this.setClassNS('popup-title') },
              title
            ) : null,
            _react2.default.createElement(_Icon2.default, {
              name: 'cancel',
              className: _this.setClassNS('popup-icon'),
              onClick: _this.requestClose
            })
          ),
          _react2.default.createElement(
            'div',
            { className: _this.setClassNS('popup-body') },
            children
          )
        )
      );
    }, _this.renderHeader = function () {
      var _this$props3 = _this.props,
          title = _this$props3.title,
          closeBtn = _this$props3.closeBtn,
          role = _this$props3.role;

      var closeIcon = closeBtn && !role ? _react2.default.createElement(_Icon2.default, {
        name: 'cancel',
        className: _this.prefixClass('icon'),
        onClick: _this.requestClose
      }) : null;

      return title || closeIcon ? _react2.default.createElement(
        'div',
        {
          className: _this.prefixClass('header'),
          key: 'modalHeader'
        },
        title ? _react2.default.createElement(
          'h4',
          {
            className: _this.prefixClass('title')
          },
          title
        ) : null,
        closeIcon
      ) : null;
    }, _this.renderFooter = function () {
      var buttons = void 0;
      var btnClass = _this.prefixClass('btn');
      var _this$props4 = _this.props,
          role = _this$props4.role,
          confirmText = _this$props4.confirmText,
          cancelText = _this$props4.cancelText;


      switch (role) {
        case 'alert':
          buttons = _react2.default.createElement(
            'span',
            {
              key: 'modalBtn',
              onClick: _this.handleAction.bind(_this, null),
              className: btnClass
            },
            confirmText
          );
          break;
        case 'confirm':
        case 'prompt':
          var cancel = role === 'prompt' ? null : false;
          buttons = [cancelText, confirmText].map(function (text, i) {
            return _react2.default.createElement(
              'span',
              {
                key: 'modalBtn' + i,
                onClick: _this.handleAction.bind(_this, i === 0 ? cancel : true),
                className: btnClass
              },
              text
            );
          });
          break;
        default:
          buttons = null;
      }

      return buttons ? _react2.default.createElement(
        'div',
        { className: _this.prefixClass('footer') },
        buttons
      ) : null;
    }, _this.renderPage = function (classSet) {
      var _this$props5 = _this.props,
          header = _this$props5.header,
          footer = _this$props5.footer,
          children = _this$props5.children,
          className = _this$props5.className,
          props = _objectWithoutProperties(_this$props5, ['header', 'footer', 'children', 'className']);

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(modal) {
            _this.modal = modal;
          },
          className: (0, _classnames2.default)(className, classSet)
        },
        header,
        _react2.default.createElement(
          'div',
          { className: _this.prefixClass('page') + '-main' },
          children
        ),
        footer
      );
    }, _this.renderTransition = function (children) {
      return _react2.default.createElement(
        'span',
        null,
        children
      );
    }, _this.renderBackdrop = function (children) {
      var onClick = _this.handleBackdropClick || null;
      var preventDefault = function preventDefault(e) {
        // prevent window scroll when touch backdrop
        e.preventDefault();
      };

      var classSet = {};

      classSet[_this.prefixClass('backdrop')] = true;
      classSet[_this.setClassNS('active')] = true;
      classSet[_this.prefixClass('backdrop-out')] = _this.state.isClosing;

      return _react2.default.createElement(
        'span',
        null,
        children,
        _react2.default.createElement('div', {
          className: (0, _classnames2.default)(classSet),
          style: { height: window.innerHeight },
          ref: function ref(backdrop) {
            _this.backdrop = backdrop;
          },
          onClick: onClick,
          onTouchMove: preventDefault
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.open();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var isOpen = this.props.isOpen;

      if (!isOpen && nextProps.isOpen) {
        this.open();
      } else if (isOpen && !nextProps.isOpen) {
        this.close();
      }
    }

    // Get input data for prompt modal


    // data === null: prompt -> canceled
    // data === true: confirm -> confirmed
    // data === false: confirm -> canceled


    // Only for instance self calling


    // for user actions


    // Render alert/confirm/prompt buttons


    // Using transition appear to fix animation issue on iOS Safari
    // @see https://github.com/amazeui/amazeui-touch/issues/11

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          closed = _state.closed,
          isClosing = _state.isClosing;


      if (closed) {
        return null;
      }

      // listen out animation end envent
      if (isClosing) {
        var node = this.modal;

        if (node) {
          var closedHandler = function closedHandler(e) {
            if (e && e.target !== node) {
              return;
            }

            _TransitionEvents2.default.off(node, closedHandler);
            _this2.handleClosed();
          };

          _TransitionEvents2.default.on(node, closedHandler);
        }
      }

      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;
      this.prefixClass = classNS.prefixClass;
      this.setClassNS = _className.setClassNS;

      var _props = this.props,
          role = _props.role,
          className = _props.className,
          title = _props.title,
          children = _props.children,
          modalWidth = _props.modalWidth,
          modalHeight = _props.modalHeight,
          props = _objectWithoutProperties(_props, ['role', 'className', 'title', 'children', 'modalWidth', 'modalHeight']);

      var modal = void 0;

      classSet[this.prefixClass('out')] = isClosing;
      role && (classSet[this.prefixClass(role)] = true);

      if (this.isActions()) {
        modal = this.renderTransition(this.renderActions(classSet));
      } else if (this.isPopup()) {
        modal = this.renderTransition(this.renderPopup(classSet));
      } else if (this.isPage()) {
        modal = this.renderPage(classSet);
      } else {
        var style = {
          width: modalWidth,
          height: modalHeight
        };

        modal = _react2.default.createElement(
          'div',
          _extends({}, this.removeUnknownProp(props), {
            style: style,
            ref: function ref(modalContainer) {
              _this2.modalContainer = modalContainer;
            },
            className: (0, _classnames2.default)(classSet, className)
          }),
          _react2.default.createElement(
            'div',
            {
              className: this.prefixClass('inner'),
              ref: function ref(modal) {
                _this2.modal = modal;
              }
            },
            _react2.default.createElement(
              'div',
              {
                className: this.prefixClass('dialog')
              },
              this.renderHeader(),
              _react2.default.createElement(
                'div',
                {
                  className: this.prefixClass('body'),
                  ref: function ref(modalBody) {
                    _this2.modalBody = modalBody;
                  }
                },
                role === 'loading' ? children ? children : _react2.default.createElement(_Loader2.default, null) : children
              ),
              this.renderFooter()
            )
          )
        );
      }

      return this.renderBackdrop(modal);
    }
  }]);

  return Modal;
}(_react2.default.Component);

Modal.propTypes = {
  classPrefix: _propTypes2.default.string,
  role: _propTypes2.default.oneOf(['alert', 'confirm', 'prompt', 'loading', 'actions', 'popup', 'page']),
  title: _propTypes2.default.node,
  confirmText: _propTypes2.default.string,
  cancelText: _propTypes2.default.string,
  closeBtn: _propTypes2.default.bool,
  closeViaBackdrop: _propTypes2.default.bool,
  onAction: _propTypes2.default.func,
  onOpen: _propTypes2.default.func,
  onClosed: _propTypes2.default.func,
  onDismiss: _propTypes2.default.func,
  header: _propTypes2.default.node,
  footer: _propTypes2.default.node
};
Modal.defaultProps = {
  classPrefix: 'modal',
  confirmText: '确定',
  cancelText: '取消',
  closeBtn: true,
  closeViaBackdrop: true,
  onAction: noop,
  onOpen: noop,
  onClosed: noop,
  onDismiss: noop
};
exports.default = Modal;
module.exports = exports['default'];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

var _bodyElement = __webpack_require__(9);

var _bodyElement2 = _interopRequireDefault(_bodyElement);

var _Icon = __webpack_require__(4);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// @see https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html
// To improve reliability, CSSTransitionGroup will no longer listen to
// transition events. Instead, you should specify transition durations
// manually using props such as `transitionEnterTimeout={500}`.
// NOTE: It should less than CSS animation duration, if not, the animation
// be not smooth. It maybe a bug of React.
var TRANSITION_TIMEOUT = 250;

var Notification = function (_React$Component) {
  _inherits(Notification, _React$Component);

  function Notification() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Notification);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Notification.__proto__ || Object.getPrototypeOf(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.renderCloseBtn = function () {
      return _this.props.closeBtn ? _react2.default.createElement(_Icon2.default, {
        className: _this.prefixClass('icon'),
        name: 'cancel',
        onClick: _this.props.onDismiss
      }) : null;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Notification, [{
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;
      this.prefixClass = classNS.prefixClass;

      var _props = this.props,
          title = _props.title,
          className = _props.className,
          animated = _props.animated,
          visible = _props.visible,
          props = _objectWithoutProperties(_props, ['title', 'className', 'animated', 'visible']);

      delete props.classPrefix;
      delete props.amStyle;
      delete props.static;
      delete props.closeBtn;
      delete props.onDismiss;

      classSet[this.prefixClass('animated')] = animated;

      var notificationBar = visible ? _react2.default.createElement(
        'div',
        _extends({}, props, {
          className: (0, _classnames2.default)(classSet, className),
          key: 'notification'
        }),
        _react2.default.createElement(
          'div',
          { className: this.prefixClass('content') },
          title ? _react2.default.createElement(
            'h3',
            { className: this.prefixClass('title') },
            title
          ) : null,
          this.props.children
        ),
        this.renderCloseBtn()
      ) : null;

      return animated ? _react2.default.createElement(
        'div',
        null,
        notificationBar
      ) : notificationBar;
    }
  }]);

  return Notification;
}(_react2.default.Component);

Notification.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string,
  amStyle: _propTypes2.default.string,
  closeBtn: _propTypes2.default.bool,
  animated: _propTypes2.default.bool,
  visible: _propTypes2.default.bool,
  onDismiss: _propTypes2.default.func
};
Notification.defaultProps = {
  classPrefix: 'notification',
  closeBtn: true,
  onDismiss: function onDismiss() {}
};

var NotificationPortal = function (_React$Component2) {
  _inherits(NotificationPortal, _React$Component2);

  function NotificationPortal(props) {
    _classCallCheck(this, NotificationPortal);

    var _this2 = _possibleConstructorReturn(this, (NotificationPortal.__proto__ || Object.getPrototypeOf(NotificationPortal)).call(this, props));

    _this2.renderNotification = function () {
      return (0, _reactDom.createPortal)(_react2.default.createElement(Notification, _this2.props), _this2.node);
    };

    if (!_this2.isStatic) {
      _this2.node = document.createElement('div');
      _this2.node.className = '__notification-portal';
    }
    return _this2;
  }

  _createClass(NotificationPortal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.isStatic) {
        _bodyElement2.default.appendChild(this.node);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (!this.isStatic) {
        _bodyElement2.default.removeChild(this.node);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.isStatic ? _react2.default.createElement(Notification, this.props) : this.renderNotification();
    }
  }, {
    key: 'isStatic',
    get: function get() {
      return this.props.static;
    }
  }]);

  return NotificationPortal;
}(_react2.default.Component);

NotificationPortal.propTypes = {
  visible: _propTypes2.default.bool.isRequired
};
NotificationPortal.efaultProps = {
  visible: false
};
exports.default = NotificationPortal;
module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(5);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

var _CSSCore = __webpack_require__(15);

var _CSSCore2 = _interopRequireDefault(_CSSCore);

var _bodyElement = __webpack_require__(9);

var _bodyElement2 = _interopRequireDefault(_bodyElement);

var _OffCanvasWrap = __webpack_require__(51);

var _OffCanvasWrap2 = _interopRequireDefault(_OffCanvasWrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OffCanvas = function (_React$Component) {
  _inherits(OffCanvas, _React$Component);

  function OffCanvas(props) {
    _classCallCheck(this, OffCanvas);

    var _this = _possibleConstructorReturn(this, (OffCanvas.__proto__ || Object.getPrototypeOf(OffCanvas)).call(this, props));

    _this.getContainerDOMNode = function () {
      return (0, _reactDom.findDOMNode)(_this.props.container) || _bodyElement2.default;
    };

    _this.open = function () {
      if (_this.props.isOpen) {
        return;
      }

      _this.setState({
        isClosing: false
      }, function () {
        this.props.onOpen();
      });

      if (_this.isPush()) {
        _CSSCore2.default.addClass(_this.getContainerDOMNode(), _this.getWithClassName());
      }
    };

    _this.close = function () {
      if (!_this.props.isOpen || _this.state.isClosing) {
        return;
      }

      _this.setState({
        isClosing: true
      });

      if (_this.isPush()) {
        var container = _this.getContainerDOMNode();
        _CSSCore2.default.removeClass(container, _this.getWithClassName());
        _CSSCore2.default.addClass(container, _this.getClosingClassName());
      }
    };

    _this.onDismiss = function () {
      _this.props.onDismiss && _this.props.onDismiss(_this.props.isOpen);
    };

    _this.handleClosed = function () {
      _this.setState({
        isClosing: false
      });

      _this.props.onClosed();

      if (_this.isPush()) {
        _CSSCore2.default.removeClass(_this.getContainerDOMNode(), _this.getClosingClassName());
      }
    };

    _this.isPush = function () {
      return _this.props.animation === "push";
    };

    _this.getPageContainer = function () {
      var pageContainer = _this.props.pageContainer;


      return typeof pageContainer === "string" ? _bodyElement2.default.querySelector(pageContainer) : (0, _reactDom.findDOMNode)(pageContainer);
    };

    _this.setPageContainer = function () {
      var pageContainer = _this.getPageContainer();

      if (pageContainer && _this.isPush()) {
        _CSSCore2.default.addClass(pageContainer, _this.setClassNS("offcanvas-push-target"));
      }
    };

    _this.getWithClassName = function () {
      return "with-offcanvas-" + _this.props.placement;
    };

    _this.getClosingClassName = function () {
      return "with-offcanvas-closing";
    };

    _this.handleClosing = function () {
      var isClosing = _this.state.isClosing;


      if (isClosing) {
        _this.handleClosed();
      }
    };

    _this.state = {
      isClosing: false
    };

    _this.node = document.createElement("div");
    _this.node.className = "__overlay-portal";
    return _this;
  }

  // componentWillMount() {
  //   this.props.isOpen ? this.open() : this.close()
  // }

  _createClass(OffCanvas, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setPageContainer();

      this.getContainerDOMNode().appendChild(this.node);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var isOpen = this.props.isOpen;

      if (!isOpen && nextProps.isOpen) {
        this.open();
      } else if (isOpen && !nextProps.isOpen) {
        this.close();
      }
    }

    // Remove Overlay related DOM node

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.node) {
        this.getContainerDOMNode().removeChild(this.node);
        this.node = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.setClassNS = _className.setClassNS;

      if (!this.props.isOpen && !this.state.isClosing) {
        return null;
      }

      var isClosing = this.state.isClosing;

      var _props = this.props,
          children = _props.children,
          style = _props.style,
          className = _props.className,
          props = _objectWithoutProperties(_props, ["children", "style", "className"]);

      return (0, _reactDom.createPortal)(_react2.default.createElement(
        _OffCanvasWrap2.default,
        {
          isClosing: isClosing,
          placement: this.props.placement,
          animation: this.props.animation,
          onDismiss: this.onDismiss,
          onAnimationEnd: function onAnimationEnd() {
            _this2.handleClosing();
          },
          style: style,
          className: className
        },
        children
      ), this.node);
    }
  }]);

  return OffCanvas;
}(_react2.default.Component);

OffCanvas.propTypes = {
  isOpen: _propTypes2.default.bool,
  container: _propTypes2.default.node,
  defaultOffCanvasActive: _propTypes2.default.bool,
  placement: _propTypes2.default.oneOf(["left", "right"]),
  animation: _propTypes2.default.oneOf(["slide", "push"]),
  pageContainer: _propTypes2.default.node,
  onOpen: _propTypes2.default.func,
  onClosed: _propTypes2.default.func
};
OffCanvas.defaultProps = {
  isOpen: false,
  placement: "left",
  animation: "slide",
  onOpen: function onOpen() {},
  onClosed: function onClosed() {}
};
exports.default = OffCanvas;
module.exports = exports["default"];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @see https://github.com/negomi/react-burger-menu
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var OffCanvasWrap = function (_React$Component) {
  _inherits(OffCanvasWrap, _React$Component);

  function OffCanvasWrap() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OffCanvasWrap);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OffCanvasWrap.__proto__ || Object.getPrototypeOf(OffCanvasWrap)).call.apply(_ref, [this].concat(args))), _this), _this.renderBackdrop = function (children) {
      var _classSet;

      var onClick = _this.handleBackdropClick || null;
      var classSet = (_classSet = {}, _defineProperty(_classSet, _this.setClassNS('modal-backdrop'), true), _defineProperty(_classSet, _this.setClassNS('modal-backdrop-out'), _this.props.isClosing), _classSet);

      return _react2.default.createElement(
        'span',
        null,
        children,
        _react2.default.createElement('div', {
          onClick: onClick,
          ref: 'backdrop',
          className: (0, _classnames2.default)(classSet)
        })
      );
    }, _this.handleBackdropClick = function (e) {
      if (e && e.target === _this.refs.backdrop) {
        var onDismiss = _this.props.onDismiss;


        onDismiss && onDismiss();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OffCanvasWrap, [{
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;
      this.prefixClass = classNS.prefixClass;
      this.setClassNS = _className.setClassNS;

      var _props = this.props,
          placement = _props.placement,
          animation = _props.animation,
          className = _props.className,
          children = _props.children,
          isClosing = _props.isClosing,
          props = _objectWithoutProperties(_props, ['placement', 'animation', 'className', 'children', 'isClosing']);

      delete props.classPrefix;
      delete props.onDismiss;

      classSet[this.prefixClass('out')] = isClosing;
      classSet[this.prefixClass(placement)] = !!placement;
      classSet[this.prefixClass(animation)] = !!animation;

      var offCanvas = _react2.default.createElement(
        'div',
        _extends({}, props, {
          className: (0, _classnames2.default)(classSet, className),
          ref: 'overlay'
        }),
        children
      );

      return this.renderBackdrop(offCanvas);
    }
  }]);

  return OffCanvasWrap;
}(_react2.default.Component);

OffCanvasWrap.propTypes = {
  classPrefix: _propTypes2.default.string,
  placement: _propTypes2.default.oneOf(['left', 'right']),
  onDismiss: _propTypes2.default.func
};
OffCanvasWrap.defaultProps = {
  classPrefix: 'offcanvas',
  placement: 'left'
};
exports.default = OffCanvasWrap;
module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pair = function (_React$Component) {
  _inherits(Pair, _React$Component);

  function Pair() {
    _classCallCheck(this, Pair);

    return _possibleConstructorReturn(this, (Pair.__proto__ || Object.getPrototypeOf(Pair)).apply(this, arguments));
  }

  _createClass(Pair, [{
    key: 'render',
    value: function render() {

      var style = {
        dl: {
          fontSize: 14,
          marginTop: 0,
          marginBottom: 0,
          lineHeight: 2
        },
        dt: {
          display: 'inline-block',
          marginRight: '.8em',
          marginBottom: 0,
          color: '#666666',
          fontWeight: 'normal'
        },
        dd: {
          display: 'inline-block',
          marginBottom: 0,
          color: '#414e79'
        }
      };

      var _props = this.props,
          name = _props.name,
          value = _props.value;


      return _react2.default.createElement(
        'dl',
        { style: style.dl },
        _react2.default.createElement(
          'dt',
          { style: style.dt },
          name
        ),
        _react2.default.createElement(
          'dd',
          { style: style.dd },
          value
        )
      );
    }
  }]);

  return Pair;
}(_react2.default.Component);

Pair.propTypes = {
  name: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string.isRequired
};
exports.default = Pair;
module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popover = function (_React$Component) {
  _inherits(Popover, _React$Component);

  function Popover() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popover);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popover.__proto__ || Object.getPrototypeOf(Popover)).call.apply(_ref, [this].concat(args))), _this), _this.renderBackdrop = function (children) {
      var _classSet;

      var onClick = _this.handleBackdropClick || null;
      var classSet = (_classSet = {}, _defineProperty(_classSet, _this.setClassNS('modal-backdrop'), true), _defineProperty(_classSet, _this.setClassNS('modal-backdrop-out'), _this.props.isClosing), _classSet);

      return _react2.default.createElement(
        'span',
        null,
        children,
        _react2.default.createElement('div', {
          onClick: onClick,
          ref: 'backdrop',
          className: (0, _classnames2.default)(classSet)
        })
      );
    }, _this.handleBackdropClick = function (e) {
      if (e && e.target === _this.refs.backdrop) {
        var onDismiss = _this.props.onDismiss;


        onDismiss && onDismiss();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Popover, [{
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;
      this.prefixClass = classNS.prefixClass;
      this.setClassNS = _className.setClassNS;

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          positionLeft = _props.positionLeft,
          positionTop = _props.positionTop,
          angleLeft = _props.angleLeft,
          angleTop = _props.angleTop,
          anglePosition = _props.anglePosition,
          isClosing = _props.isClosing,
          placement = _props.placement,
          props = _objectWithoutProperties(_props, ['className', 'children', 'positionLeft', 'positionTop', 'angleLeft', 'angleTop', 'anglePosition', 'isClosing', 'placement']);

      var style = {
        left: positionLeft,
        top: positionTop
      };
      var angleStyle = {
        left: angleLeft,
        top: angleTop
      };

      delete props.classPrefix;
      delete props.onDismiss;

      classSet[this.prefixClass('out')] = isClosing;
      classSet[this.prefixClass(placement)] = placement;

      var popover = _react2.default.createElement(
        'div',
        _extends({}, props, {
          style: style,
          ref: 'overlay',
          className: (0, _classnames2.default)(classSet, className)
        }),
        _react2.default.createElement(
          'div',
          { className: this.prefixClass('inner') },
          children
        ),
        _react2.default.createElement('div', {
          style: angleStyle,
          className: (0, _classnames2.default)(this.prefixClass('angle'), anglePosition ? this.prefixClass('angle-' + anglePosition) : null)
        })
      );

      return this.renderBackdrop(popover);
    }
  }]);

  return Popover;
}(_react2.default.Component);

Popover.propTypes = {
  classPrefix: _propTypes2.default.string,
  placement: _propTypes2.default.oneOf(['top', 'bottom', 'horizontal']),
  positionLeft: _propTypes2.default.number,
  positionTop: _propTypes2.default.number,
  angleLeft: _propTypes2.default.number,
  angleTop: _propTypes2.default.number,
  anglePosition: _propTypes2.default.string,
  onDismiss: _propTypes2.default.func
};
Popover.defaultProps = {
  classPrefix: 'popover'
};
exports.default = Popover;
module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(5);

var _TransitionEvents = __webpack_require__(8);

var _TransitionEvents2 = _interopRequireDefault(_TransitionEvents);

var _domUtils = __webpack_require__(55);

var _domUtils2 = _interopRequireDefault(_domUtils);

var _createChainedFunction = __webpack_require__(29);

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _bodyElement = __webpack_require__(9);

var _bodyElement2 = _interopRequireDefault(_bodyElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PopoverTrigger = function (_React$Component) {
  _inherits(PopoverTrigger, _React$Component);

  function PopoverTrigger(props) {
    _classCallCheck(this, PopoverTrigger);

    var _this = _possibleConstructorReturn(this, (PopoverTrigger.__proto__ || Object.getPrototypeOf(PopoverTrigger)).call(this, props));

    _this.createPortal = function () {
      _this.node = document.createElement("div");
      _this.node.className = "__overlay-portal";
    };

    _this.getOverlayDOMNode = function () {
      if (_this.overlayInstanceDom) {
        // Use ref to get real DOM NODE
        return (0, _reactDom.findDOMNode)(_this.overlayInstanceDom.refs && _this.overlayInstanceDom.refs.overlay || _this.overlayInstanceDom);
      }

      return null;
    };

    _this.getContainerDOMNode = function () {
      return (0, _reactDom.findDOMNode)(_this.props.container) || _bodyElement2.default;
    };

    _this.open = function () {
      if (_this.state.popoverActive) {
        return;
      }

      _this.setState({
        popoverActive: true,
        isClosing: false
      }, function () {
        this.updatePopoverPosition();
        this.props.onOpen();
      });
    };

    _this.close = function () {
      if (!_this.state.popoverActive) {
        return;
      }

      _this.setState({
        isClosing: true
      });
    };

    _this.handleClosed = function () {
      _this.setState({
        popoverActive: false,
        isClosing: false
      });

      _this.props.onClosed();
    };

    _this.toggle = function () {
      _this.state.popoverActive ? _this.close() : _this.open();
    };

    _this.updatePopoverPosition = function () {

      var position = _this.calcPopoverPosition() || {};

      _this.setState({
        popoverLeft: position.left,
        popoverTop: position.top,
        angleLeft: position.angleLeft,
        angleTop: position.angleTop,
        anglePosition: position.anglePosition,
        placement: position.placement
      });
    };

    _this.calcPopoverPosition = function () {
      var targetOffset = _this.getTriggerOffset();
      var popoverNode = _this.getOverlayDOMNode();

      if (!popoverNode) {
        return;
      }

      var popoverHeight = popoverNode.offsetHeight;
      var popoverWidth = popoverNode.offsetWidth;
      var targetHeight = targetOffset.height,
          targetWidth = targetOffset.width;

      var windowHeight = window.innerHeight;
      var windowWidth = window.innerWidth;
      var anglePosition = void 0,
          angleLeft = void 0,
          angleTop = void 0;
      var popoverAngleSize = 8;
      var popoverTop = 0;
      var popoverLeft = 0;
      var diff = 0;
      var popoverPosition = "top";
      var popoverTotalHeight = popoverHeight + popoverAngleSize;

      // Popover Horizontal position
      // Popover 高度小于 trigger 顶部偏移
      if (popoverTotalHeight < targetOffset.top) {
        // On top: trigger 顶部偏移 - Popover 高度
        popoverTop = targetOffset.top - popoverHeight - popoverAngleSize;
      } else if (popoverTotalHeight < windowHeight - targetOffset.top - targetHeight) {
        // On bottom: Popover 高度小于 trigger 下方空白位置
        popoverPosition = "bottom";
        popoverTop = targetOffset.top + targetHeight + popoverAngleSize;
      } else {
        // On middle: Popover 位于 trigger 的水平位置
        popoverPosition = "horizontal";
        popoverTop = targetHeight / 2 + targetOffset.top - popoverHeight / 2;
        diff = popoverTop;

        if (popoverTop <= 0) {
          popoverTop = 5;
        } else if (popoverTop + popoverHeight >= windowHeight) {
          popoverTop = windowHeight - popoverHeight - 5;
        }

        diff = diff - popoverTop;
      }

      // Popover Horizontal Position
      if (popoverPosition === "top" || popoverPosition === "bottom") {
        popoverLeft = targetWidth / 2 + targetOffset.left - popoverWidth / 2;
        diff = popoverLeft;

        if (popoverLeft < 5) {
          popoverLeft = 5;
        }

        if (popoverLeft + popoverWidth > windowWidth) {
          popoverLeft = windowWidth - popoverWidth - 5;
        }

        diff = diff - popoverLeft;
        angleLeft = popoverWidth / 2 - popoverAngleSize + diff;
        angleLeft = Math.max(Math.min(angleLeft, popoverWidth - popoverAngleSize * 2 - 6), 6);
        anglePosition = popoverPosition === "top" ? "bottom" : "top";
      } else if (popoverPosition === "horizontal") {
        popoverLeft = targetOffset.left - popoverWidth - popoverAngleSize;
        anglePosition = "right";

        if (popoverLeft < 5 || popoverLeft + popoverWidth > windowWidth) {
          if (popoverLeft < 5) {
            popoverLeft = targetOffset.left + targetWidth + popoverAngleSize;
          }

          if (popoverLeft + popoverWidth > windowWidth) {
            popoverLeft = windowWidth - popoverWidth - 5;
          }

          anglePosition = "left";
        }
        angleTop = popoverHeight / 2 - popoverAngleSize + diff;
        angleTop = Math.max(Math.min(angleTop, popoverHeight - popoverAngleSize * 2 - 6), 6);
      }

      return {
        top: popoverTop,
        left: popoverLeft,
        placement: popoverPosition,
        angleLeft: angleLeft,
        angleTop: angleTop,
        anglePosition: anglePosition
      };
    };

    _this.getTriggerOffset = function () {
      var node = (0, _reactDom.findDOMNode)(_this.triggerInstance);
      var container = _this.getContainerDOMNode();
      var offset = container.tagName === "BODY" ? _domUtils2.default.offset(node) : _domUtils2.default.position(node, container);

      return _extends({}, offset, {
        height: node.offsetHeight,
        width: node.offsetWidth
      });
    };

    _this.handleAnimationEnd = function () {
      var isClosing = _this.state.isClosing;


      if (isClosing) {
        _this.handleClosed();
      }
    };

    _this.state = {
      popoverActive: _this.props.defaultActive == null ? false : _this.props.defaultActive,
      isClosing: false,
      popoverLeft: null,
      popoverTop: null,
      placement: null
    };

    _this.createPortal();
    return _this;
  }

  _createClass(PopoverTrigger, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.getContainerDOMNode().appendChild(this.node);

      if (this.props.defaultActive) {
        // Making sure DOM is appended.
        setTimeout(function () {
          _this2.updatePopoverPosition();
        }, 0);
      }
    }

    // Remove Overlay related DOM node

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.node) {
        this.getContainerDOMNode().removeChild(this.node);
        this.node = null;
      }
    }

    // Create Overlay wrapper

  }, {
    key: "renderOverlay",
    value: function renderOverlay() {
      var _this3 = this;

      if (!this.state.popoverActive) {
        return null;
      }

      var popover = this.props.popover;
      var _state = this.state,
          isClosing = _state.isClosing,
          positionLeft = _state.popoverLeft,
          positionTop = _state.popoverTop,
          anglePosition = _state.anglePosition,
          angleLeft = _state.angleLeft,
          angleTop = _state.angleTop,
          placement = _state.placement;


      return (0, _reactDom.createPortal)((0, _react.cloneElement)(popover, {
        ref: function ref(_ref) {
          _this3.overlayInstanceDom = _ref;
        },
        positionLeft: positionLeft,
        positionTop: positionTop,
        angleLeft: angleLeft,
        angleTop: angleTop,
        anglePosition: anglePosition,
        placement: placement,
        isClosing: isClosing,
        onDismiss: this.close,
        onAnimationEnd: this.handleAnimationEnd
      }), this.node);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var child = _react2.default.Children.only(this.props.children);
      var props = {
        onClick: (0, _createChainedFunction2.default)(child.props.onClick, this.props.onClick)
      };

      props.onClick = (0, _createChainedFunction2.default)(this.toggle, props.onClick);

      return _react2.default.createElement(
        "div",
        null,
        (0, _react.cloneElement)(child, _extends({}, props, {
          ref: function ref(_ref2) {
            _this4.triggerInstance = _ref2;
          }
        })),
        this.renderOverlay()
      );
    }
  }]);

  return PopoverTrigger;
}(_react2.default.Component);

PopoverTrigger.propTypes = {
  container: _propTypes2.default.node,
  defaultActive: _propTypes2.default.bool,
  popover: _propTypes2.default.node.isRequired,
  onOpen: _propTypes2.default.func,
  onClosed: _propTypes2.default.func
};
PopoverTrigger.defaultProps = {
  onOpen: function onOpen() {},
  onClosed: function onClosed() {}
};
exports.default = PopoverTrigger;
module.exports = exports["default"];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get ownerDocument
 * @param {ReactComponent|HTMLElement} componentOrElement
 * @returns {HTMLDocument}
 */
function ownerDocument(componentOrElement) {
  var element = _reactDom2.default.findDOMNode(componentOrElement);

  return element && element.ownerDocument || document;
}

/**
 * Get ownerWindow
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 * @see https://github.com/jquery/jquery/blob/6df669f0fb87cd9975a18bf6bbe3c3548afa4fee/src/event.js#L294-L297
 */
function ownerWindow(element) {
  var doc = ownerDocument(element);

  return doc.defaultView || doc.parentWindow || window;
}

exports.default = {
  ownerDocument: ownerDocument,

  ownerWindow: ownerWindow,

  scrollTop: function scrollTop(element, value) {
    if (!element) {
      return;
    }

    var hasScrollTop = 'scrollTop' in element;

    if (value === undefined) {
      return hasScrollTop ? element.scrollTop : element.pageYOffset;
    }

    hasScrollTop ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
  },
  offset: function offset(element) {
    if (element) {
      var rect = element.getBoundingClientRect();
      var body = document.body;
      var clientTop = element.clientTop || body.clientTop || 0;
      var clientLeft = element.clientLeft || body.clientLeft || 0;
      var scrollTop = window.pageYOffset || element.scrollTop;
      var scrollLeft = window.pageXOffset || element.scrollLeft;

      return {
        top: rect.top + scrollTop - clientTop,
        left: rect.left + scrollLeft - clientLeft
      };
    }

    return null;
  },
  position: function position(element) {
    return {
      left: element.offsetLeft,
      top: element.offsetTop
    };
  }
};
module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _List = __webpack_require__(25);

var _List2 = _interopRequireDefault(_List);

var _Modal = __webpack_require__(18);

var _Modal2 = _interopRequireDefault(_Modal);

var _NavBar = __webpack_require__(28);

var _NavBar2 = _interopRequireDefault(_NavBar);

var _Switch = __webpack_require__(17);

var _Switch2 = _interopRequireDefault(_Switch);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isModalOpen: false
    }, _this.record = function (index, value, callback) {
      var itemSelectedRecord = _extends([], _this.state.itemSelectedRecord);
      itemSelectedRecord[index] = value;
      _this.setState({
        itemSelectedRecord: itemSelectedRecord
      }, function () {
        callback && callback();
      });
    }, _this.recordOne = function (index, value, callback) {
      _this.setState({
        itemSelectedRecordOne: {
          index: index,
          value: value
        }
      }, function () {
        callback && callback();
      });
    }, _this.getFilteredChildren = function (children) {
      var filteredChildren = [];
      _react2.default.Children.forEach(children, function (child) {
        if (child.type.displayName === 'SelectItem') {
          filteredChildren.push(child);
        }
      });
      return filteredChildren;
    }, _this.handleItemValueChange = function (index, value, children) {
      var multiple = _this.props.multiple;

      if (multiple) {
        _this.record(index, !value, function () {
          if (_this.props.onValueChange) {
            var valueList = [];
            var childrenList = [];
            _react2.default.Children.forEach(_this.filteredChildren, function (child, index) {
              if (_this.state.itemSelectedRecord[index]) {
                valueList.push(child.props.value);
                childrenList.push(child.props.children);
              }
            });
            _this.props.onValueChange(valueList);
            _this.changeShowCase(childrenList, multiple);
          }
        });
      } else {
        _this.recordOne(index, value, function () {
          _this.props.onValueChange && _this.props.onValueChange(value);
          _this.changeShowCase(children, multiple);
        });
      }
    }, _this.changeShowCase = function (children, multiple) {
      var li = _reactDom2.default.findDOMNode(_this.showCase);
      if (li && li.tagName === 'LI') {
        var a = li.children[0];
        if (a && a.tagName === 'A') {
          var div = a.children[0];
          if (div && div.tagName === 'DIV') {
            div.innerText = (multiple ? children.join(', ') : children) || "请选择";
          }
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Select, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          children = _props.children,
          multiple = _props.multiple,
          defaultValue = _props.defaultValue;


      this.filteredChildren = this.getFilteredChildren(children);

      if (multiple) {
        var itemSelectedRecord = [];
        var childrenList = [];
        _react2.default.Children.forEach(this.filteredChildren, function (child, index) {
          var defaultSelected = false;
          if (!Array.isArray(defaultValue)) {
            defaultValue = [defaultValue];
          }
          if (typeof child.props.defaultSelected === 'boolean') {
            defaultSelected = child.props.defaultSelected;
          } else if (defaultValue.includes(child.props.value)) {
            defaultSelected = true;
          }
          itemSelectedRecord[index] = defaultSelected;
          if (defaultSelected) {
            childrenList.push(child.props.children);
          }
        });
        this.initShowCaseArgs = [childrenList, multiple];
        this.setState({
          itemSelectedRecord: itemSelectedRecord
        });
      } else {
        var itemSelectedRecordOne = {};
        var _children = void 0;
        var allDisabled = false;
        _react2.default.Children.forEach(this.filteredChildren, function (child, index) {
          if (child.props.defaultSelected || defaultValue === child.props.value) {
            itemSelectedRecordOne.index = index;
            itemSelectedRecordOne.value = child.props.value;
            _children = child.props.children;
            allDisabled = Boolean(child.props.disabled);
          }
        });
        this.initShowCaseArgs = [_children, multiple];
        this.setState({
          allDisabled: allDisabled,
          itemSelectedRecordOne: itemSelectedRecordOne
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.changeShowCase.apply(this, _toConsumableArray(this.initShowCaseArgs));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var classNS = (0, _className2.default)(this.props);
      this.prefixClass = classNS.prefixClass;
      this.setClassNS = _className.setClassNS;

      var _props2 = this.props,
          classPrefix = _props2.classPrefix,
          children = _props2.children,
          className = _props2.className,
          multiple = _props2.multiple,
          defaultValue = _props2.defaultValue,
          onValueChange = _props2.onValueChange,
          others = _objectWithoutProperties(_props2, ['classPrefix', 'children', 'className', 'multiple', 'defaultValue', 'onValueChange']);

      var navbarProps = {
        title: multiple ? '已选择 ' + this.state.itemSelectedRecord.reduce(function (pre, cur) {
          return pre + cur;
        }) + ' 项' : '请选择',
        leftNav: [{
          title: '',
          onClick: function onClick() {
            return _this2.setState({ isModalOpen: false });
          },
          icon: 'left'
        }]
      };

      var newChildren = _react2.default.Children.map(this.filteredChildren, function (child, index) {
        if (multiple) {
          return _react2.default.cloneElement(child, _extends({}, child.props, {
            shape: 'checkbox',
            checked: _this2.state.itemSelectedRecord[index],
            onClick: function onClick(e, checked) {
              return _this2.handleItemValueChange(index, checked);
            }
          }));
        } else {
          return _react2.default.cloneElement(child, _extends({}, child.props, {
            shape: 'radio',
            disabled: _this2.state.allDisabled || child.props.disabled,
            checked: _this2.state && _this2.state.itemSelectedRecordOne && _this2.state.itemSelectedRecordOne.index === index,
            onClick: function onClick(e) {
              return _this2.handleItemValueChange(index, child.props.value, child.props.children);
            }
          }));
        }
      });

      return _react2.default.createElement(
        'div',
        _extends({
          className: (0, _classnames2.default)(className, this.setClassNS())
        }, others),
        _react2.default.createElement(
          _List2.default,
          null,
          _react2.default.createElement(_List2.default.Item, {
            ref: function ref(elem) {
              return _this2.showCase = elem;
            },
            href: 'javascript:void(0);',
            after: '\u8BF7\u9009\u62E9',
            onClick: function onClick() {
              return _this2.setState({ isModalOpen: true });
            }
          })
        ),
        _react2.default.createElement(
          _Modal2.default,
          {
            ref: function ref(modal) {
              _this2.modal = modal;
            },
            role: 'page',
            header: _react2.default.createElement(_NavBar2.default, _extends({}, navbarProps, { amStyle: 'primary' })),
            isOpen: this.state.isModalOpen
          },
          _react2.default.createElement(
            'div',
            { className: this.prefixClass('list') },
            _react2.default.createElement(
              _List2.default,
              null,
              newChildren
            )
          )
        )
      );
    }
  }]);

  return Select;
}(_react2.default.Component);

Select.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  multiple: _propTypes2.default.bool,
  onValueChange: _propTypes2.default.func
};
Select.defaultProps = {
  classPrefix: 'select',
  multiple: true
};

var SelectItem = function (_React$Component2) {
  _inherits(SelectItem, _React$Component2);

  function SelectItem(props) {
    _classCallCheck(this, SelectItem);

    var _this3 = _possibleConstructorReturn(this, (SelectItem.__proto__ || Object.getPrototypeOf(SelectItem)).call(this, props));

    var _this3$props = _this3.props,
        selected = _this3$props.selected,
        defaultSelected = _this3$props.defaultSelected;


    _this3.state = {
      selected: typeof selected === 'boolean' ? selected : defaultSelected
    };
    return _this3;
  }

  _createClass(SelectItem, [{
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      this.prefixClass = classNS.prefixClass;
      this.setClassNS = _className.setClassNS;

      var _props3 = this.props,
          classPrefix = _props3.classPrefix,
          children = _props3.children,
          shape = _props3.shape,
          checked = _props3.checked,
          disabled = _props3.disabled,
          _onClick = _props3.onClick,
          others = _objectWithoutProperties(_props3, ['classPrefix', 'children', 'shape', 'checked', 'disabled', 'onClick']);

      var after = _react2.default.createElement(_Switch2.default, {
        className: this.prefixClass('switch'),
        shape: shape,
        checked: checked,
        disabled: disabled
      });

      return _react2.default.createElement(_List2.default.Item, {
        className: (0, _classnames2.default)(this.setClassNS(), disabled && this.prefixClass('disabled')),
        title: children,
        after: after,
        onClick: function onClick(e) {
          return !disabled && _onClick(e, checked);
        }
      });
    }
  }]);

  return SelectItem;
}(_react2.default.Component);

SelectItem.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  shape: _propTypes2.default.string,
  checked: _propTypes2.default.bool,
  defaultChecked: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool
};
SelectItem.defaultProps = {
  classPrefix: 'select-item'
};
SelectItem.displayName = 'SelectItem';


Select.Item = SelectItem;

exports.default = Select;
module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

var _TransitionEvents = __webpack_require__(8);

var _TransitionEvents2 = _interopRequireDefault(_TransitionEvents);

var _Icon = __webpack_require__(4);

var _Icon2 = _interopRequireDefault(_Icon);

var _Touchable = __webpack_require__(30);

var _Touchable2 = _interopRequireDefault(_Touchable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @see https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Carousel.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Slider = function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      activeIndex: _this.props.defaultActiveIndex == null ? 0 : _this.props.defaultActiveIndex,
      previousActiveIndex: null,
      direction: null
    };
    return _this;
  }

  _createClass(Slider, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var activeIndex = this.getActiveIndex();

      if (nextProps.activeIndex != null && nextProps.activeIndex !== activeIndex) {
        clearTimeout(this.timeout);
        this.setState({
          previousActiveIndex: activeIndex,
          direction: nextProps.direction != null ? nextProps.direction : this.getDirection(activeIndex, nextProps.activeIndex)
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.autoPlay && this.waitForNext();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;
      this.prefixClass = classNS.prefixClass;
      this.setClassNS = _className.setClassNS;

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['className', 'children']);

      delete props.classPrefix;
      delete props.onAction;
      delete props.pager;
      delete props.controls;
      delete props.slide;
      delete props.interval;
      delete props.pauseOnHover;
      delete props.prevIcon;
      delete props.nextIcon;

      // TODO: 优化 swipe，左右方向阻止默认事件，垂直方向不阻止
      return _react2.default.createElement(
        _Touchable2.default,
        _extends({}, props, {
          component: 'div',
          className: (0, _classnames2.default)(classSet, className),
          onMouseOver: this.handleMouseOver,
          onMouseOut: this.handleMouseOut,
          onSwipeLeft: this.handleSwipeLeft,
          onSwipeRight: this.handleSwipeRight,
          preventDefault: false,
          stopPropagation: true
        }),
        _react2.default.createElement(
          'ul',
          { className: this.prefixClass('slides') },
          _react2.default.Children.map(children, this.renderItem)
        ),
        this.renderControls(),
        this.renderPager()
      );
    }
  }]);

  return Slider;
}(_react2.default.Component);

Slider.propTypes = {
  classPrefix: _propTypes2.default.string,

  controls: _propTypes2.default.bool, // prev/next icon
  pager: _propTypes2.default.bool, // indicators or thumbs

  slide: _propTypes2.default.bool, // what is this?
  interval: _propTypes2.default.number, // interval
  autoPlay: _propTypes2.default.bool,
  loop: _propTypes2.default.bool, // loop slide

  pauseOnHover: _propTypes2.default.bool,
  // touch: PropTypes.bool,

  onAction: _propTypes2.default.func,
  onSlideEnd: _propTypes2.default.func,
  activeIndex: _propTypes2.default.number,
  defaultActiveIndex: _propTypes2.default.number,
  direction: _propTypes2.default.oneOf(['prev', 'next']),
  prevIcon: _propTypes2.default.node,
  nextIcon: _propTypes2.default.node
};
Slider.defaultProps = {
  classPrefix: 'slider',
  controls: true,
  pager: true,
  slide: true,
  interval: 5000,
  autoPlay: true,
  loop: true,
  pauseOnHover: true,
  prevIcon: _react2.default.createElement(_Icon2.default, { name: 'left' }),
  nextIcon: _react2.default.createElement(_Icon2.default, { name: 'right' })
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.getDirection = function (prevIndex, index) {
    if (prevIndex === index) {
      return null;
    }

    return prevIndex > index ? 'prev' : 'next';
  };

  this.next = function (e) {
    e && e.preventDefault();

    var index = _this3.getActiveIndex() + 1;
    var count = _react2.default.Children.count(_this3.props.children);

    if (index > count - 1) {
      if (!_this3.props.loop) {
        return;
      }
      index = 0;
    }

    _this3.handleSelect(index, 'next');
  };

  this.prev = function (e) {
    e && e.preventDefault();

    var index = _this3.getActiveIndex() - 1;

    if (index < 0) {
      if (!_this3.props.loop) {
        return;
      }
      index = _react2.default.Children.count(_this3.props.children) - 1;
    }

    _this3.handleSelect(index, 'prev');
  };

  this.pause = function () {
    _this3.isPaused = true;
    clearTimeout(_this3.timeout);
  };

  this.play = function () {
    _this3.isPaused = false;
    _this3.waitForNext();
  };

  this.waitForNext = function () {
    if (!_this3.isPaused && _this3.props.slide && _this3.props.interval && _this3.props.activeIndex == null && _this3.props.autoPlay) {
      _this3.timeout = setTimeout(_this3.next, _this3.props.interval);
    }
  };

  this.handleMouseOver = function () {
    if (_this3.props.pauseOnHover && _this3.props.autoPlay) {
      _this3.pause();
    }
  };

  this.handleMouseOut = function () {
    if (_this3.isPaused && _this3.props.autoPlay) {
      _this3.play();
    }
  };

  this.handleSwipeLeft = function (e) {
    // console.log('swipe left');
    _this3.next();
  };

  this.handleSwipeRight = function () {
    // console.log('swipe right....');
    _this3.prev();
  };

  this.getActiveIndex = function () {
    return _this3.props.activeIndex != null ? _this3.props.activeIndex : _this3.state.activeIndex;
  };

  this.handleItemAnimateOutEnd = function () {
    _this3.setState({
      previousActiveIndex: null,
      direction: null
    }, function () {
      this.waitForNext();

      if (this.props.onSlideEnd) {
        this.props.onSlideEnd();
      }
    });
  };

  this.handleSelect = function (index, direction, e) {
    e && e.preventDefault();
    clearTimeout(_this3.timeout);

    var previousActiveIndex = _this3.getActiveIndex();

    direction = direction || _this3.getDirection(previousActiveIndex, index);

    if (_this3.props.onAction) {
      _this3.props.onAction(index, direction);
    }

    if (_this3.props.activeIndex == null && index !== previousActiveIndex) {
      if (_this3.state.previousActiveIndex != null) {
        // If currently animating don't activate the new index.
        // TODO: look into queuing this canceled call and
        // animating after the current animation has ended.
        return;
      }

      _this3.setState({
        activeIndex: index,
        previousActiveIndex: previousActiveIndex,
        direction: direction
      });
    }
  };

  this.renderControls = function () {
    return _this3.props.controls ? _react2.default.createElement(
      'div',
      { className: _this3.prefixClass('control') },
      _react2.default.createElement(
        _Touchable2.default,
        {
          className: _this3.prefixClass('control-prev'),
          onTap: _this3.prev,
          stopPropagation: true
        },
        _this3.props.prevIcon
      ),
      _react2.default.createElement(
        _Touchable2.default,
        {
          className: _this3.prefixClass('control-next'),
          onTap: _this3.next,
          stopPropagation: true
        },
        _this3.props.nextIcon
      )
    ) : null;
  };

  this.renderPager = function () {
    if (_this3.props.pager) {
      var isThumbnailNav = false;

      var children = _react2.default.Children.map(_this3.props.children, function (child, i) {
        var className = i === _this3.getActiveIndex() ? _this3.setClassNS('active') : null;
        var thumb = child.props.thumbnail;

        if (!isThumbnailNav) {
          isThumbnailNav = !!thumb;
        }

        return _react2.default.createElement(
          _Touchable2.default,
          {
            component: 'li',
            className: className,
            key: i,
            onTap: _this3.handleSelect.bind(_this3, i, null)
          },
          thumb ? _react2.default.createElement('img', { src: thumb }) : null
        );
      });
      var pagerClassName = _this3.prefixClass(isThumbnailNav ? 'thumbs' : 'indicators');

      return _react2.default.createElement(
        'ol',
        {
          className: (0, _classnames2.default)(_this3.prefixClass('pager'), pagerClassName)
        },
        children
      );
    }

    return null;
  };

  this.renderItem = function (child, index) {
    var activeIndex = _this3.getActiveIndex();
    var isActive = index === activeIndex;
    var isPreviousActive = _this3.state.previousActiveIndex != null && _this3.state.previousActiveIndex === index && _this3.props.slide;
    var props = {
      active: isActive,
      ref: child.ref,
      key: child.key ? child.key : index,
      index: index,
      animateOut: isPreviousActive,
      animateIn: isActive && _this3.state.previousActiveIndex != null && _this3.props.slide,
      direction: _this3.state.direction,
      onAnimateOutEnd: isPreviousActive ? _this3.handleItemAnimateOutEnd : null
    };

    return _react2.default.cloneElement(child, props);
  };
};

var SliderItem = function (_React$Component2) {
  _inherits(SliderItem, _React$Component2);

  function SliderItem() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, SliderItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = SliderItem.__proto__ || Object.getPrototypeOf(SliderItem)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
      direction: null
    }, _this2.handleAnimateOutEnd = function () {
      if (_this2.props.onAnimateOutEnd) {
        _this2.props.onAnimateOutEnd(_this2.props.index);
      }
    }, _this2.startAnimation = function () {
      _this2.setState({
        direction: _this2.props.direction === 'prev' ? 'right' : 'left'
      });
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(SliderItem, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.active !== nextProps.active) {
        this.setState({
          direction: null
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (!this.props.active && prevProps.active) {
        _TransitionEvents2.default.on(_reactDom2.default.findDOMNode(this), this.handleAnimateOutEnd);
      }

      if (this.props.active !== prevProps.active) {
        setTimeout(this.startAnimation, 20);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          active = _props2.active,
          animateIn = _props2.animateIn,
          animateOut = _props2.animateOut,
          direction = _props2.direction;


      var classSet = {
        active: active && !animateIn || animateOut,
        next: active && animateIn && direction === 'next',
        prev: active && animateIn && direction === 'prev'
      };

      if (this.state.direction && (animateIn || animateOut)) {
        classSet[this.state.direction] = true;
      }

      return _react2.default.createElement(
        'li',
        {
          className: (0, _classnames2.default)(className, classSet)
        },
        this.props.children
      );
    }
  }]);

  return SliderItem;
}(_react2.default.Component);

SliderItem.propTypes = {
  direction: _propTypes2.default.oneOf(['prev', 'next']),
  onAnimateOutEnd: _propTypes2.default.func,
  active: _propTypes2.default.bool,
  animateIn: _propTypes2.default.bool,
  animateOut: _propTypes2.default.bool,
  caption: _propTypes2.default.node,
  index: _propTypes2.default.number,
  thumbnail: _propTypes2.default.string
};
SliderItem.defaultProps = {
  animation: true
};


Slider.Item = SliderItem;

exports.default = Slider;
module.exports = exports['default'];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var supportTouch = !!('ontouchstart' in global || global.DocumentTouch && document instanceof DocumentTouch);

exports.default = supportTouch;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
// UC browser UI controller

var controller = global.navigator && global.navigator.control || {};

/**
 * ucUIControl
 * @param {string} feature - 'gesture' or 'longpressMenu'
 * @param {boolean} state
 * @returns {boolean}
 */
function ucUIControl(feature, state) {
  return controller[feature] && controller[feature](state);
}

// disable gesture
ucUIControl('gesture', false);

exports.default = ucUIControl;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = __webpack_require__(4);

var _Icon2 = _interopRequireDefault(_Icon);

var _Badge = __webpack_require__(20);

var _Badge2 = _interopRequireDefault(_Badge);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: 默认的选中处理
var TabBar = function (_React$Component) {
  _inherits(TabBar, _React$Component);

  function TabBar() {
    _classCallCheck(this, TabBar);

    return _possibleConstructorReturn(this, (TabBar.__proto__ || Object.getPrototypeOf(TabBar)).apply(this, arguments));
  }

  _createClass(TabBar, [{
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;

      var _props = this.props,
          Component = _props.component,
          className = _props.className,
          children = _props.children,
          onAction = _props.onAction,
          props = _objectWithoutProperties(_props, ['component', 'className', 'children', 'onAction']);

      delete props.classPrefix;
      delete props.amStyle;

      return _react2.default.createElement(
        Component,
        _extends({}, props, {
          className: (0, _classnames2.default)(classSet, className)
        }),
        _react2.default.Children.map(children, function (child, index) {
          var _child$props = child.props,
              eventKey = _child$props.eventKey,
              onClick = _child$props.onClick,
              props = _objectWithoutProperties(_child$props, ['eventKey', 'onClick']);

          var clickHandler = onClick || onAction;
          var key = eventKey || index;
          eventKey = eventKey || key;

          return _react2.default.createElement(TabBar.Item, _extends({}, props, {
            onClick: clickHandler.bind(null, eventKey),
            key: key,
            eventKey: eventKey
          }));
        })
      );
    }
  }]);

  return TabBar;
}(_react2.default.Component);

// TODO:
//   Icon 应该支持用户自定义：
//   React-native 采用 require('path/to/icon') 的形式，
//   这里可能需要再添加一个属性


TabBar.propTypes = {
  classPrefix: _propTypes2.default.string,
  component: _propTypes2.default.node,
  amStyle: _propTypes2.default.string,
  onAction: _propTypes2.default.func
};
TabBar.defaultProps = {
  classPrefix: 'tabbar',
  component: 'nav',
  onAction: function onAction() {}
};

var TabBarItem = function (_React$Component2) {
  _inherits(TabBarItem, _React$Component2);

  function TabBarItem() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, TabBarItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = TabBarItem.__proto__ || Object.getPrototypeOf(TabBarItem)).call.apply(_ref, [this].concat(args))), _this2), _this2.renderBadge = function () {
      var _this2$props = _this2.props,
          badge = _this2$props.badge,
          badgeStyle = _this2$props.badgeStyle;


      return badge ? _react2.default.createElement(_Badge2.default, {
        amStyle: badgeStyle || 'alert',
        rounded: true,
        text: badge
      }) : null;
    }, _this2.renderIcon = function () {
      var icon = _this2.props.icon;


      return icon ? _react2.default.createElement(
        _Icon2.default,
        { name: icon, key: 'tabbarIcon' },
        _this2.renderBadge()
      ) : null;
    }, _this2.renderTitle = function () {
      var labelClassName = _this2.prefixClass('label');
      var title = _this2.props.title;


      return title ? _react2.default.createElement(
        'span',
        {
          className: labelClassName,
          key: 'tabbarTitle'
        },
        title
      ) : null;
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(TabBarItem, [{
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.getClassSet(true);
      this.prefixClass = classNS.prefixClass;

      var _props2 = this.props,
          Component = _props2.component,
          className = _props2.className,
          props = _objectWithoutProperties(_props2, ['component', 'className']);

      delete props.classPrefix;
      delete props.badge;
      delete props.badgeStyle;
      delete props.eventKey;
      delete props.onAction;

      Component = this.props.href ? 'a' : Component;

      // TODO: how to display badge when icon not set?

      return _react2.default.createElement(
        Component,
        _extends({}, props, {
          className: (0, _classnames2.default)(classSet, className, this.prefixClass('item'))
        }),
        [this.renderIcon(), this.renderTitle()]
      );
    }
  }]);

  return TabBarItem;
}(_react2.default.Component);

TabBarItem.propTypes = {
  classPrefix: _propTypes2.default.string,
  component: _propTypes2.default.any,
  icon: _propTypes2.default.string, // icon name
  title: _propTypes2.default.string,
  href: _propTypes2.default.string,
  eventKey: _propTypes2.default.any,
  badge: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  badgeStyle: _propTypes2.default.string,
  selected: _propTypes2.default.bool, // alias of `active`
  selectedIcon: _propTypes2.default.node, // not supported now
  onAction: _propTypes2.default.func
};
TabBarItem.defaultProps = {
  classPrefix: 'tabbar',
  component: 'span',
  onAction: function onAction() {}
};


TabBar.Item = TabBarItem;

exports.default = TabBar;
module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

var _Icon = __webpack_require__(4);

var _Icon2 = _interopRequireDefault(_Icon);

var _Title = __webpack_require__(32);

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 按照 Table 语义设置数据源


var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Table);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Table.__proto__ || Object.getPrototypeOf(Table)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      bodyWidth: 0,
      showFullScreen: false,
      landscape: false
    }, _this.renderHeader = function (data) {
      return _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
          'tr',
          null,
          data.map(function (item, i) {
            return _react2.default.createElement(
              'th',
              { key: i },
              _react2.default.createElement(
                'span',
                null,
                item.title
              )
            );
          })
        )
      );
    }, _this.renderBody = function (source) {
      var length = source[0].data.length;

      var trs = [];

      var _loop = function _loop(i) {
        var tr = source.map(function (column, j) {
          return _react2.default.createElement(
            'td',
            { key: 'td-' + i + '-' + j },
            column.data[i]
          );
        });
        trs.push(tr);
      };

      for (var i = 0; i < length; i++) {
        _loop(i);
      }

      return _react2.default.createElement(
        'tbody',
        null,
        trs.map(function (tr, index) {
          return _react2.default.createElement(
            'tr',
            { key: index, style: { background: index % 2 == 0 ? '#fff' : '#f4f4f4' } },
            tr
          );
        })
      );
    }, _this.renderColGroup = function (source) {
      var styles = {
        width: '100px',
        minWidth: '100px'
      };
      return _react2.default.createElement(
        'colgroup',
        null,
        source.map(function (item, i) {
          return _react2.default.createElement('col', { width: item.columnWidth ? item.columnWidth : null, key: i });
        })
      );
    }, _this.handleToggleScreen = function () {
      _this.setState({
        fullScreen: !_this.state.fullScreen
      });
    }, _this.handleToggleLandscape = function () {
      _this.setState({
        landscape: !_this.state.landscape
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Table, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.tableBody && this.setState({
        bodyWidth: this.tableBody.clientWidth
      });
    }

    // renderFixedColumn = (source) => {
    //   return source.map((column, index) => {
    //     if (column.fixed) {
    //       const tr = column.data.map((item, key) => (
    //         <tr key={key}>
    //           <td>{ item }</td>
    //         </tr>
    //       ))
    //       tr.unshift(<th>{column.title}</th>)
    //       return tr
    //     }
    //   })
    // }

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;
      this.prefixClass = classNS.prefixClass;
      var _props = this.props,
          source = _props.source,
          textAlign = _props.textAlign,
          fixedHeader = _props.fixedHeader,
          title = _props.title,
          showFullScreen = _props.showFullScreen;

      var fullTableWidth = window.screen.availWidth;
      var fullTableHeight = window.screen.availHeight;

      var wrapCls = (0, _classnames2.default)(classSet, this.prefixClass('text-algin-' + textAlign));
      var headerCls = (0, _classnames2.default)(this.prefixClass('header'));
      var bodyCls = (0, _classnames2.default)(this.prefixClass('body'));
      var oprIconCls = (0, _classnames2.default)(this.prefixClass('opr-icon'));

      var bodyWrapStyle = this.state.bodyWidth && fixedHeader ? {
        width: this.state.bodyWidth + 'px',
        maxHeight: this.state.fullScreen ? fullTableHeight - 45 + 'px' : '300px'
      } : null;
      var fullScreenStyle = this.state.fullScreen ? {
        position: 'fixed',
        top: 0,
        left: 0,
        width: this.state.landscape ? window.screen.availHeight : fullTableWidth,
        height: this.state.landscape ? fullTableWidth : window.screen.availHeight,
        background: '#fff',
        transform: this.state.landscape ? 'rotate(-90deg) translate(' + (fullTableWidth - fullTableHeight) / 2 + 'px, ' + (fullTableWidth - fullTableHeight) / 2 + 'px)' : 'rotate(0deg)',
        zIndex: '99'
      } : null;

      /* const tableBodyStyle= this.state.fullScreen && this.state.landscape ? {
        transform: `rotate(-90deg) translate(${(fullTableWidth - fullTableHeight)/2}px, ${(fullTableWidth - fullTableHeight)/2}px)`,
        width: fullTableHeight,
        height: fullTableWidth,
      }: null; */

      var fullScreenIconName = this.state.fullScreen ? 'arrows-shrink-l' : 'arrows-alt-l';
      var landscapeIconName = this.state.fullScreen && this.state.landscape ? 'transfer' : 'revocation';

      return _react2.default.createElement(
        'div',
        { style: fullScreenStyle },
        title ? showFullScreen ? _react2.default.createElement(
          _Title2.default,
          { amStyle: 'primary', more: _react2.default.createElement(_Icon2.default, { name: fullScreenIconName, onClick: this.handleToggleScreen }) },
          title
        ) : _react2.default.createElement(
          _Title2.default,
          { amStyle: 'primary' },
          title
        ) : '',
        _react2.default.createElement(
          'div',
          { className: wrapCls },
          fixedHeader ? _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: headerCls },
              _react2.default.createElement(
                'table',
                null,
                this.renderColGroup(source),
                this.renderHeader(source)
              )
            ),
            _react2.default.createElement(
              'div',
              { className: bodyCls, style: bodyWrapStyle },
              _react2.default.createElement(
                'table',
                { ref: function ref(_ref2) {
                    _this2.tableBody = _ref2;
                  } },
                this.renderColGroup(source),
                this.renderBody(source)
              )
            )
          ) : _react2.default.createElement(
            'table',
            null,
            this.renderHeader(source),
            this.renderBody(source)
          )
        ),
        this.state.fullScreen ? _react2.default.createElement(
          'div',
          { className: oprIconCls, onClick: this.handleToggleLandscape },
          _react2.default.createElement(_Icon2.default, { name: landscapeIconName })
        ) : ''
      );
    }
  }]);

  return Table;
}(_react2.default.Component);

Table.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  source: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string.isRequired,
    columnWidth: _propTypes2.default.number,
    data: _propTypes2.default.array.isRequired
  }))
};
Table.defaultProps = {
  classPrefix: 'table',
  source: [], // TODO: need to validate data format
  textAlign: 'center',
  fixedHeader: false,
  border: true,
  colWidth: 150, // default column width
  tableHeight: 300, // when table height is big than this, scroll.
  title: '',
  fullScreen: false
};
exports.default = Table;
module.exports = exports['default'];

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _ButtonGroup = __webpack_require__(16);

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _Icon = __webpack_require__(4);

var _Icon2 = _interopRequireDefault(_Icon);

var _tool = __webpack_require__(63);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      activeKey: _this.getDefaultActiveKey(),
      previousActiveKey: null
    };
    return _this;
  }

  _createClass(Tabs, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var nextActiveKey = nextProps.activeKey;

      // update controlled Tabs' state
      if (nextActiveKey != null && nextActiveKey !== this.props.activeKey) {
        this.setState({
          activeKey: nextActiveKey,
          previousActiveKey: this.props.activeKey
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;
      this.prefixClass = classNS.prefixClass;

      var _props = this.props,
          className = _props.className,
          props = _objectWithoutProperties(_props, ['className']);

      delete props.classPrefix;
      delete props.activeKey;
      delete props.defaultActiveKey;
      delete props.inset;
      delete props.onAction;
      delete props.secondTab;
      delete props.counter;
      delete props.animation;
      delete props.render;

      return _react2.default.createElement(
        'div',
        _extends({}, props, {
          className: (0, _classnames2.default)(classSet, className)
        }),
        this.renderNav(),
        this.renderTabPanels()
      );
    }
  }]);

  return Tabs;
}(_react2.default.Component);

Tabs.propTypes = {
  classPrefix: _propTypes2.default.string,
  activeKey: _propTypes2.default.any,
  defaultActiveKey: _propTypes2.default.any,
  onAction: _propTypes2.default.func,
  inset: _propTypes2.default.bool,
  navStyle: _propTypes2.default.object,
  navClassName: _propTypes2.default.string,
  secondTab: _propTypes2.default.bool,
  counter: _propTypes2.default.number,
  animation: _propTypes2.default.bool
};
Tabs.defaultProps = {
  classPrefix: 'tabs',
  animation: true
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.getDefaultActiveKey = function (children) {
    var defaultActiveKey = _this3.props.defaultActiveKey;

    if (defaultActiveKey != null) {
      return defaultActiveKey;
    }

    _react2.default.Children.forEach(children, function (child) {
      if (defaultActiveKey == null) {
        defaultActiveKey = child.props.eventKey;
      }
    });

    return defaultActiveKey != null ? defaultActiveKey : 0;
  };

  this.getActiveKey = function () {
    return _this3.props.activeKey != null ? _this3.props.activeKey : _this3.state.activeKey;
  };

  this.handleClick = function (key, disabled, href, e) {
    e.preventDefault();
    var activeKey = _this3.state.activeKey;

    if (disabled) {
      return;
    }

    if (_this3.props.onAction) {
      _this3.props.onAction(key);
    }

    if (href) {
      window.location = (0, _tool.getAbsoluteUrl)(href);
      return;
    }

    // uncontrolled
    if (_this3.props.activeKey == null && activeKey !== key) {
      _this3.setState({
        activeKey: key,
        previousActiveKey: activeKey
      });
    }
  };

  this.renderNav = function () {
    var activeKey = _this3.getActiveKey();
    var navWrapStyle = _this3.props.navStyle;
    var navWrapClassName = _this3.props.navClassName;
    var secondTab = _this3.props.secondTab;
    var counter = _this3.props.counter;
    var basis = counter ? 1 / counter * 100 : null;
    var navPrefix = secondTab ? 'subnav' : 'nav';

    // Magic Number: 10 is margin of item defined in css.
    var marginPercent = counter && secondTab ? 10 / window.innerWidth * 100 : 0;

    // something is wrong with react
    var flexBasis = basis ? {
      flexBasis: basis - marginPercent + '%',
      WebkitFlexBasis: basis - marginPercent + '%'
      // msFlexBasis: `${basis}%`,
    } : {};

    var navClassNames = (0, _classnames2.default)(_this3.prefixClass('' + navPrefix), navWrapClassName);

    var navs = _react2.default.Children.map(_this3.props.children, function (child, index) {
      var _child$props = child.props,
          href = _child$props.href,
          eventKey = _child$props.eventKey,
          disabled = _child$props.disabled,
          classPrefix = _child$props.classPrefix,
          navStyle = _child$props.navStyle,
          navClassName = _child$props.navClassName;

      var key = index;

      eventKey = eventKey !== undefined ? eventKey : index;
      var active = eventKey === activeKey;
      var prefixClass = _this3.prefixClass(navPrefix + '-item');
      var itemWrapClass = _this3.prefixClass(navPrefix + '-item-wrap');
      var itemFixSkewClass = _this3.prefixClass(navPrefix + '-item-fix-skew');

      var itemCls = (0, _classnames2.default)(prefixClass, {
        active: active,
        disabled: disabled
      }, navClassName);

      var itemStyle = _extends(navStyle || {}, flexBasis);

      return !secondTab ? _react2.default.createElement(
        'span',
        {
          ref: 'tabNav' + key,
          key: key,
          onClick: _this3.handleClick.bind(_this3, key, disabled, href),
          className: itemCls,
          style: flexBasis
        },
        child.props.title
      ) : _react2.default.createElement(
        'span',
        {
          className: itemWrapClass,
          style: flexBasis
        },
        _react2.default.createElement(
          'span',
          {
            ref: 'tabNav' + key,
            key: key,
            onClick: _this3.handleClick.bind(_this3, key, disabled, href),
            className: itemCls,
            style: navStyle
          },
          _react2.default.createElement(
            'span',
            { className: itemFixSkewClass },
            child.props.title
          )
        )
      );
    });

    return _react2.default.createElement(
      'div',
      {
        className: navClassNames,
        style: navWrapStyle
      },
      navs,
      secondTab ? _react2.default.createElement('div', null) : null
    );
  };

  this.renderTabPanels = function () {
    var activeKey = _this3.getActiveKey();
    var animation = _this3.props.animation;

    var panels = _react2.default.Children.map(_this3.props.children, function (child, index) {
      var _child$props2 = child.props,
          eventKey = _child$props2.eventKey,
          children = _child$props2.children,
          props = _objectWithoutProperties(_child$props2, ['eventKey', 'children']);

      if (eventKey === undefined) {
        eventKey = index;
      }

      var isActive = eventKey === activeKey;

      var Item = _react2.default.createElement(
        Tabs.Item,
        _extends({
          active: isActive,
          eventKey: eventKey,
          key: 'tabPanel' + index,
          animation: animation
        }, props),
        children
      );

      if (_this3.props.render === 'current') {
        return isActive ? Item : null;
      } else {
        return Item;
      }
    });

    return _react2.default.createElement(
      'div',
      {
        className: _this3.prefixClass('body')
      },
      panels
    );
  };
};

var TabsItem = function (_React$Component2) {
  _inherits(TabsItem, _React$Component2);

  function TabsItem() {
    _classCallCheck(this, TabsItem);

    return _possibleConstructorReturn(this, (TabsItem.__proto__ || Object.getPrototypeOf(TabsItem)).apply(this, arguments));
  }

  _createClass(TabsItem, [{
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.getClassSet(true);
      this.prefixClass = classNS.prefixClass;

      var _props2 = this.props,
          className = _props2.className,
          children = _props2.children,
          noPadded = _props2.noPadded,
          active = _props2.active,
          animation = _props2.animation,
          props = _objectWithoutProperties(_props2, ['className', 'children', 'noPadded', 'active', 'animation']);

      var elementName = 'panel';

      delete props.classPrefix;
      delete props.eventKey;
      delete props.active;
      delete props.noPadded;
      delete props.navStyle;
      delete props.counter;
      delete props.animation;

      classSet[this.prefixClass(elementName)] = true;
      classSet[this.prefixClass(elementName + '-no-padded')] = noPadded;
      classSet[this.prefixClass(elementName + '-no-animation')] = !animation;

      return _react2.default.createElement(
        'div',
        _extends({}, props, {
          className: (0, _classnames2.default)(classSet, className)
        }),
        children
      );
    }
  }]);

  return TabsItem;
}(_react2.default.Component);

TabsItem.propTypes = {
  classPrefix: _propTypes2.default.string,
  title: _propTypes2.default.node,
  eventKey: _propTypes2.default.any,
  disabled: _propTypes2.default.bool,
  active: _propTypes2.default.bool,
  noPadded: _propTypes2.default.bool,
  navStyle: _propTypes2.default.object
};
TabsItem.defaultProps = {
  classPrefix: 'tab'
};


Tabs.Item = TabsItem;

exports.default = Tabs;
module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * some tool functions
 */

var getAbsoluteUrl = function () {
  var a = void 0;

  return function (url) {
    if (!a) a = document.createElement('a');
    a.href = url;
    return a.href;
  };
}();

exports.getAbsoluteUrl = getAbsoluteUrl;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = __webpack_require__(7);

var _Card2 = _interopRequireDefault(_Card);

var _Grid = __webpack_require__(13);

var _Grid2 = _interopRequireDefault(_Grid);

var _Col = __webpack_require__(14);

var _Col2 = _interopRequireDefault(_Col);

var _Icon = __webpack_require__(4);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoItemTypeOneTop = function (_React$Component) {
  _inherits(TodoItemTypeOneTop, _React$Component);

  function TodoItemTypeOneTop() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TodoItemTypeOneTop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TodoItemTypeOneTop.__proto__ || Object.getPrototypeOf(TodoItemTypeOneTop)).call.apply(_ref, [this].concat(args))), _this), _this.handleTitleClick = function (e) {
      _this.props.onTitleClick && _this.props.onTitleClick(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TodoItemTypeOneTop, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onCollapse = _props.onCollapse,
          title = _props.title,
          subtitle = _props.subtitle,
          onTitleClick = _props.onTitleClick,
          isCollapsed = _props.isCollapsed;


      var style = {
        wrap: {
          borderBottom: isCollapsed ? '' : '1px solid #d8d8d8',
          position: 'relative'
        },
        left: {
          marginRight: 12
        },
        right: {
          display: 'flex',
          position: 'absolute',
          top: 0,
          right: 0,
          width: 12,
          fontSize: 12,
          height: '100%',
          color: '#d8d8d8',
          justifyContent: 'center',
          alignItems: 'center'
        },
        title: {
          fontSize: 16,
          paddingTop: 16,
          marginBottom: 2
        },
        subtitle: {
          paddingBottom: 8
        },
        icon: {}
      };

      return _react2.default.createElement(
        'div',
        { style: style.wrap },
        _react2.default.createElement(
          'div',
          { style: style.left },
          _react2.default.createElement(
            'h1',
            { style: style.title, onClick: this.handleTitleClick },
            title
          ),
          _react2.default.createElement(
            'div',
            { style: style.subtitle },
            subtitle
          )
        ),
        _react2.default.createElement(
          'div',
          { style: style.right, onClick: onCollapse },
          _react2.default.createElement(_Icon2.default, { name: isCollapsed ? 'down' : 'up' })
        )
      );
    }
  }]);

  return TodoItemTypeOneTop;
}(_react2.default.Component);

var TodoItemTypeOneBottom = function (_React$Component2) {
  _inherits(TodoItemTypeOneBottom, _React$Component2);

  function TodoItemTypeOneBottom() {
    _classCallCheck(this, TodoItemTypeOneBottom);

    return _possibleConstructorReturn(this, (TodoItemTypeOneBottom.__proto__ || Object.getPrototypeOf(TodoItemTypeOneBottom)).apply(this, arguments));
  }

  _createClass(TodoItemTypeOneBottom, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          onEdit = _props2.onEdit,
          onDelete = _props2.onDelete,
          show = _props2.show;


      var style = {
        wrap: {
          display: show ? '' : 'none',
          margin: '0 -0.9375rem -0.9375rem',
          borderTop: '1px solid #d8d8d8'
        },
        col: {
          position: 'relative'
        },
        a: {
          display: 'block',
          width: 60,
          margin: '0 auto',
          color: '#000000',
          textAlign: 'center',
          padding: '6px 6px 8px'
        },
        text: {
          fontSize: 12,
          lineHeight: 1,
          color: '#999999'
        },
        s: {
          width: 1,
          height: '60%',
          position: 'absolute',
          top: '20%',
          right: 0,
          backgroundColor: '#d8d8d8'
        }
      };

      return _react2.default.createElement(
        'div',
        { style: style.wrap },
        _react2.default.createElement(
          _Grid2.default,
          null,
          _react2.default.createElement(
            _Col2.default,
            { style: style.col },
            _react2.default.createElement(
              'a',
              { style: style.a, href: 'javascript:void(0);', onClick: onEdit },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Icon2.default, { name: 'write' })
              ),
              _react2.default.createElement(
                'div',
                { style: style.text },
                '\u7F16\u8F91'
              )
            ),
            _react2.default.createElement('div', { style: style.s })
          ),
          _react2.default.createElement(
            _Col2.default,
            null,
            _react2.default.createElement(
              'a',
              { style: style.a, href: 'javascript:void(0);', onClick: onDelete },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Icon2.default, { name: 'dustbin-l' })
              ),
              _react2.default.createElement(
                'div',
                { style: style.text },
                '\u5220\u9664'
              )
            )
          )
        )
      );
    }
  }]);

  return TodoItemTypeOneBottom;
}(_react2.default.Component);

var TodoItemTypeOne = function (_React$Component3) {
  _inherits(TodoItemTypeOne, _React$Component3);

  _createClass(TodoItemTypeOne, null, [{
    key: 'defaultProps',
    value: function defaultProps() {
      defaultCollapsed: true;
    }
  }]);

  function TodoItemTypeOne(props) {
    _classCallCheck(this, TodoItemTypeOne);

    var _this3 = _possibleConstructorReturn(this, (TodoItemTypeOne.__proto__ || Object.getPrototypeOf(TodoItemTypeOne)).call(this, props));

    var defaultCollapsed = _this3.props.defaultCollapsed;

    _this3.state = {
      isCollapsed: defaultCollapsed
    };
    return _this3;
  }

  _createClass(TodoItemTypeOne, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props3 = this.props,
          children = _props3.children,
          title = _props3.title,
          onTitleClick = _props3.onTitleClick,
          subtitle = _props3.subtitle,
          defaultCollapsed = _props3.defaultCollapsed,
          withBottom = _props3.withBottom,
          onEdit = _props3.onEdit,
          onDelete = _props3.onDelete,
          layout = _props3.layout,
          noline = _props3.noline,
          others = _props3.others;


      var style = {
        body: {
          marginTop: '-0.9375rem',
          marginBottom: '-0.9375rem'
        },
        detail: {
          margin: '8px 0'
        }
      };

      return _react2.default.createElement(
        _Card2.default,
        _extends({ layout: true, noline: true }, others),
        _react2.default.createElement(
          'div',
          { style: style.body },
          _react2.default.createElement(TodoItemTypeOneTop, {
            isCollapsed: this.state.isCollapsed,
            title: title,
            subtitle: subtitle,
            onCollapse: function onCollapse() {
              _this4.setState({ isCollapsed: !_this4.state.isCollapsed });
            },
            onTitleClick: onTitleClick
          }),
          _react2.default.createElement(
            'div',
            { style: _extends(style.detail, this.state.isCollapsed && { display: 'none' }) },
            children
          ),
          withBottom && _react2.default.createElement(TodoItemTypeOneBottom, {
            show: !this.state.isCollapsed,
            onEdit: onEdit,
            onDelete: onDelete
          })
        )
      );
    }
  }]);

  return TodoItemTypeOne;
}(_react2.default.Component);

TodoItemTypeOne.propTypes = {
  title: _propTypes2.default.string.isRequired,
  onTitleClick: _propTypes2.default.func,
  subtitle: _propTypes2.default.node,
  defaultCollapsed: _propTypes2.default.bool,
  withBottom: _propTypes2.default.bool,
  onEdit: _propTypes2.default.func,
  onDelete: _propTypes2.default.func
};
exports.default = TodoItemTypeOne;
module.exports = exports['default'];

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = __webpack_require__(7);

var _Card2 = _interopRequireDefault(_Card);

var _Icon = __webpack_require__(4);

var _Icon2 = _interopRequireDefault(_Icon);

var _Grid = __webpack_require__(13);

var _Grid2 = _interopRequireDefault(_Grid);

var _Col = __webpack_require__(14);

var _Col2 = _interopRequireDefault(_Col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoItemTypeTwoCollapser = function (_React$Component) {
  _inherits(TodoItemTypeTwoCollapser, _React$Component);

  function TodoItemTypeTwoCollapser() {
    _classCallCheck(this, TodoItemTypeTwoCollapser);

    return _possibleConstructorReturn(this, (TodoItemTypeTwoCollapser.__proto__ || Object.getPrototypeOf(TodoItemTypeTwoCollapser)).apply(this, arguments));
  }

  _createClass(TodoItemTypeTwoCollapser, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onCollapse = _props.onCollapse,
          isCollapsed = _props.isCollapsed;


      var style = {
        wrap: {
          position: 'absolute',
          bottom: 15,
          right: 15,
          width: 12,
          height: 12,
          fontSize: 12,
          color: '#d8d8d8'
        }
      };

      return _react2.default.createElement(
        'div',
        { style: style.wrap, onClick: onCollapse },
        _react2.default.createElement(_Icon2.default, { name: isCollapsed ? 'down-nav' : 'up-nav' })
      );
    }
  }]);

  return TodoItemTypeTwoCollapser;
}(_react2.default.Component);

var TodoItemTypeTwoTop = function (_React$Component2) {
  _inherits(TodoItemTypeTwoTop, _React$Component2);

  function TodoItemTypeTwoTop() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, TodoItemTypeTwoTop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = TodoItemTypeTwoTop.__proto__ || Object.getPrototypeOf(TodoItemTypeTwoTop)).call.apply(_ref, [this].concat(args))), _this2), _this2.handleTitleClick = function (e) {
      _this2.props.onTitleClick && _this2.props.onTitleClick(e);
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(TodoItemTypeTwoTop, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          isCollapsed = _props2.isCollapsed,
          title = _props2.title,
          subtitle = _props2.subtitle,
          after = _props2.after,
          onTitleClick = _props2.onTitleClick;


      var style = {
        wrap: {
          position: 'relative'
        },
        left: {
          marginRight: 60
        },
        after: {
          position: 'absolute',
          top: 16,
          right: 0,
          width: 60,
          fontSize: 12,
          textAlign: 'right'
        },
        title: {
          fontSize: 16,
          paddingTop: 16,
          marginBottom: 2
        },
        subtitle: {
          paddingBottom: isCollapsed ? 8 : ''
        }
      };

      return _react2.default.createElement(
        'div',
        { style: style.wrap },
        _react2.default.createElement(
          'div',
          { style: style.left },
          _react2.default.createElement(
            'h1',
            { style: style.title, onClick: this.handleTitleClick },
            title
          ),
          _react2.default.createElement(
            'div',
            { style: style.subtitle },
            subtitle
          )
        ),
        _react2.default.createElement(
          'div',
          { style: style.after },
          after
        )
      );
    }
  }]);

  return TodoItemTypeTwoTop;
}(_react2.default.Component);

var IconButton = function (_React$Component3) {
  _inherits(IconButton, _React$Component3);

  function IconButton() {
    _classCallCheck(this, IconButton);

    return _possibleConstructorReturn(this, (IconButton.__proto__ || Object.getPrototypeOf(IconButton)).apply(this, arguments));
  }

  _createClass(IconButton, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          children = _props3.children,
          icon = _props3.icon,
          style = _props3.style,
          direction = _props3.direction,
          border = _props3.border,
          props = _objectWithoutProperties(_props3, ['children', 'icon', 'style', 'direction', 'border']);

      var styles = _extends({
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: direction == 'row' ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        color: '#999999',
        borderRight: border ? '1px solid #d8d8d8' : 0
      }, style);

      return _react2.default.createElement(
        'div',
        _extends({ style: styles }, props),
        icon ? _react2.default.createElement(_Icon2.default, { name: icon, style: { fontSize: '16px', color: '#666' } }) : null,
        _react2.default.createElement(
          'span',
          null,
          children
        )
      );
    }
  }]);

  return IconButton;
}(_react2.default.Component);

IconButton.defaultProps = {
  direction: 'col'
};

var IconButtonGroup = function (_React$Component4) {
  _inherits(IconButtonGroup, _React$Component4);

  function IconButtonGroup() {
    _classCallCheck(this, IconButtonGroup);

    return _possibleConstructorReturn(this, (IconButtonGroup.__proto__ || Object.getPrototypeOf(IconButtonGroup)).apply(this, arguments));
  }

  _createClass(IconButtonGroup, [{
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          children = _props4.children,
          style = _props4.style;

      var length = children.length;
      var styles = {
        margin: '1.5rem -0.9375rem -0.9375rem',
        borderTop: '1px solid #d8d8d8'
      };

      return _react2.default.createElement(
        _Grid2.default,
        { avg: length, style: styles },
        children.map(function (child, i) {
          return _react2.default.createElement(
            _Col2.default,
            { key: i },
            _react2.default.cloneElement(child, { border: !i == length - 1 })
          );
        })
      );
    }
  }]);

  return IconButtonGroup;
}(_react2.default.Component);

var TodoItemTypeTwo = function (_React$Component5) {
  _inherits(TodoItemTypeTwo, _React$Component5);

  function TodoItemTypeTwo(props) {
    _classCallCheck(this, TodoItemTypeTwo);

    var _this5 = _possibleConstructorReturn(this, (TodoItemTypeTwo.__proto__ || Object.getPrototypeOf(TodoItemTypeTwo)).call(this, props));

    var defaultCollapsed = _this5.props.defaultCollapsed;

    _this5.state = {
      isCollapsed: defaultCollapsed
    };
    return _this5;
  }

  _createClass(TodoItemTypeTwo, [{
    key: 'render',
    value: function render() {
      var _this6 = this;

      var _props5 = this.props,
          children = _props5.children,
          title = _props5.title,
          subtitle = _props5.subtitle,
          after = _props5.after,
          defaultCollapsed = _props5.defaultCollapsed,
          layout = _props5.layout,
          noline = _props5.noline,
          onTitleClick = _props5.onTitleClick,
          actions = _props5.actions,
          others = _objectWithoutProperties(_props5, ['children', 'title', 'subtitle', 'after', 'defaultCollapsed', 'layout', 'noline', 'onTitleClick', 'actions']);

      var style = {
        body: {
          position: 'relative',
          marginTop: '-0.9375rem',
          marginBottom: '-0.9375rem'
        },
        detail: {
          marginBottom: this.state.isCollapsed ? 0 : '8px'
        }
      };

      return _react2.default.createElement(
        _Card2.default,
        _extends({ layout: true, noline: true, style: { position: 'relative' } }, others),
        _react2.default.createElement(
          'div',
          { style: style.body },
          _react2.default.createElement(TodoItemTypeTwoTop, {
            isCollapsed: this.state.isCollapsed,
            title: title,
            subtitle: subtitle,
            after: after,
            onTitleClick: onTitleClick
          }),
          _react2.default.createElement(
            'div',
            { style: _extends(style.detail) },
            !this.state.isCollapsed ? children : null
          ),
          _react2.default.createElement(TodoItemTypeTwoCollapser, {
            isCollapsed: this.state.isCollapsed,
            onCollapse: function onCollapse() {
              _this6.setState({ isCollapsed: !_this6.state.isCollapsed });
            }
          })
        ),
        actions.length > 0 && !this.state.isCollapsed ? _react2.default.createElement(
          IconButtonGroup,
          null,
          actions.map(function (action, i) {
            var icon = action.icon,
                label = action.label;

            return _react2.default.createElement(
              IconButton,
              _extends({ icon: icon }, action, { key: i }),
              label
            );
          })
        ) : null
      );
    }
  }]);

  return TodoItemTypeTwo;
}(_react2.default.Component);

TodoItemTypeTwo.propTypes = {
  title: _propTypes2.default.string.isRequired,
  subtitle: _propTypes2.default.node,
  after: _propTypes2.default.node,
  defaultCollapsed: _propTypes2.default.bool,
  actions: _propTypes2.default.array
};
TodoItemTypeTwo.defaultProps = {
  defaultCollapsed: true,
  actions: []
};
exports.default = TodoItemTypeTwo;
module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _objectAssign = __webpack_require__(11);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _util = __webpack_require__(33);

var _TreeNode2 = __webpack_require__(67);

var _TreeNode3 = _interopRequireDefault(_TreeNode2);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /*
                                                                                                                                                                                                                             * https://github.com/react-component/tree-select
                                                                                                                                                                                                                             * MIT
                                                                                                                                                                                                                             */

function noop() {}

function loopTreeData(data) {
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  return data.map(function (item, index) {
    var _extends2;

    var pos = level + '-' + index;

    var label = item.label,
        value = item.value,
        disabled = item.disabled,
        key = item.key,
        hasOwnProperty = item.hasOwnProperty,
        selectable = item.selectable,
        children = item.children,
        isLeaf = item.isLeaf,
        otherProps = _objectWithoutProperties(item, ['label', 'value', 'disabled', 'key', 'hasOwnProperty', 'selectable', 'children', 'isLeaf']);

    var props = _extends((_extends2 = {
      value: value,
      title: label
    }, _defineProperty(_extends2, 'value', value || String(key || label)), _defineProperty(_extends2, 'key', key || value || pos), _defineProperty(_extends2, 'disabled', disabled || false), _defineProperty(_extends2, 'selectable', selectable === false ? selectable : true), _extends2), otherProps);
    var ret = void 0;
    if (children && children.length) {
      ret = _react2.default.createElement(
        _TreeNode3.default,
        props,
        loopTreeData(children, pos)
      );
    } else {
      ret = _react2.default.createElement(_TreeNode3.default, _extends({}, props, { isLeaf: isLeaf }));
    }
    return ret;
  });
}

var Tree = function (_React$Component) {
  _inherits(Tree, _React$Component);

  function Tree(props) {
    _classCallCheck(this, Tree);

    var _this = _possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, props));

    _initialiseProps.call(_this);

    ['onKeyDown', 'onCheck'].forEach(function (m) {
      _this[m] = _this[m].bind(_this);
    });
    _this.checkedKeysChange = true;

    _this.state = {
      expandedKeys: _this.getDefaultExpandedKeys(props),
      checkedKeys: _this.getDefaultCheckedKeys(props),
      filterCheckedKeys: [],
      filteredCheckedValues: [],
      selectedKeys: _this.getDefaultSelectedKeys(props)
    };
    return _this;
  }

  _createClass(Tree, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var expandedKeys = this.getDefaultExpandedKeys(nextProps, true);
      var checkedKeys = this.getDefaultCheckedKeys(nextProps, true);
      var selectedKeys = this.getDefaultSelectedKeys(nextProps, true);
      var st = {};
      if (expandedKeys) {
        st.expandedKeys = expandedKeys;
      }
      if (checkedKeys) {
        if (nextProps.checkedKeys === this.props.checkedKeys) {
          this.checkedKeysChange = false;
        } else {
          this.checkedKeysChange = true;
        }
        st.checkedKeys = checkedKeys;
      }
      if (selectedKeys) {
        st.selectedKeys = selectedKeys;
      }
      this.setState(st);
    }
  }, {
    key: 'onExpand',
    value: function onExpand(treeNode) {
      var _this2 = this;

      var expanded = !treeNode.props.expanded;
      var controlled = 'expandedKeys' in this.props;
      var expandedKeys = [].concat(_toConsumableArray(this.state.expandedKeys));
      var index = expandedKeys.indexOf(treeNode.props.eventKey);
      if (expanded && index === -1) {
        expandedKeys.push(treeNode.props.eventKey);
      } else if (!expanded && index > -1) {
        expandedKeys.splice(index, 1);
      }
      if (!controlled) {
        this.setState({ expandedKeys: expandedKeys });
      }
      this.props.onExpand(expandedKeys, { node: treeNode, expanded: expanded });

      // after data loaded, need set new expandedKeys
      if (expanded && this.props.loadData) {
        return this.props.loadData(treeNode).then(function () {
          if (!controlled) {
            _this2.setState({ expandedKeys: expandedKeys });
          }
        });
      }
    }
  }, {
    key: 'onCheck',
    value: function onCheck(treeNode) {
      var _this3 = this;

      var checked = !treeNode.props.checked;
      if (treeNode.props.halfChecked) {
        checked = true;
      }
      var key = treeNode.props.eventKey;
      var checkedKeys = [].concat(_toConsumableArray(this.state.checkedKeys));
      var index = checkedKeys.indexOf(key);

      var newSt = {
        event: 'check',
        node: treeNode,
        checked: checked
      };

      if (this.props.checkStrictly) {
        if (checked && index === -1) {
          checkedKeys.push(key);
        }
        if (!checked && index > -1) {
          checkedKeys.splice(index, 1);
        }
        newSt.checkedNodes = [];
        (0, _util.loopAllChildren)(this.props.children, function (item, ind, pos, keyOrPos) {
          if (checkedKeys.indexOf(keyOrPos) !== -1) {
            newSt.checkedNodes.push(item);
          }
        });
        if (!('checkedKeys' in this.props)) {
          this.setState({
            checkedKeys: checkedKeys
          });
        }
        var halfChecked = this.props.checkedKeys ? this.props.checkedKeys.halfChecked : [];
        this.props.onCheck((0, _util.getStrictlyValue)(checkedKeys, halfChecked), newSt);
      } else {
        if (checked && index === -1) {
          this.treeNodesStates[treeNode.props.pos].checked = true;
          var checkedPositions = [];
          Object.keys(this.treeNodesStates).forEach(function (i) {
            if (_this3.treeNodesStates[i].checked) {
              checkedPositions.push(i);
            }
          });
          (0, _util.handleCheckState)(this.treeNodesStates, (0, _util.filterParentPosition)(checkedPositions), true);
        }
        if (!checked) {
          this.treeNodesStates[treeNode.props.pos].checked = false;
          this.treeNodesStates[treeNode.props.pos].halfChecked = false;
          (0, _util.handleCheckState)(this.treeNodesStates, [treeNode.props.pos], false);
        }

        var checkKeys = (0, _util.getCheck)(this.treeNodesStates);
        newSt.checkedNodes = checkKeys.checkedNodes;
        newSt.checkedNodesPositions = checkKeys.checkedNodesPositions;
        newSt.halfCheckedKeys = checkKeys.halfCheckedKeys;
        newSt.treeNodesStates = checkKeys.treeNodesStates;
        this.checkKeys = checkKeys;

        this._checkedKeys = checkedKeys = checkKeys.checkedKeys;
        // const filterCheckedKeys = getFilterChecked(checkedKeys);
        var filterCheckedKeys = checkedKeys;

        var filteredCheckedValues = checkedKeys.map(function (checked) {
          return {
            // value: checkKeys.treeNodesStates[checked].node.props.value,
            key: checked
          };
        });

        if (!('checkedKeys' in this.props)) {
          this.setState({
            checkedKeys: checkedKeys
            // filteredCheckedValues,
          });
        }

        this.props.onCheck(checkedKeys, newSt);
      }
    }
  }, {
    key: 'onSelect',
    value: function onSelect(treeNode) {
      var props = this.props;
      var selectedKeys = [].concat(_toConsumableArray(this.state.selectedKeys));
      var eventKey = treeNode.props.eventKey;
      var index = selectedKeys.indexOf(eventKey);
      var selected = void 0;
      if (index !== -1) {
        selected = false;
        selectedKeys.splice(index, 1);
      } else {
        selected = true;
        if (!props.multiple) {
          selectedKeys.length = 0;
        }
        selectedKeys.push(eventKey);
      }
      var selectedNodes = [];
      if (selectedKeys.length) {
        (0, _util.loopAllChildren)(this.props.children, function (item) {
          if (selectedKeys.indexOf(item.key) !== -1) {
            selectedNodes.push(item);
          }
        });
      }
      var newSt = {
        event: 'select',
        node: treeNode,
        selected: selected,
        selectedNodes: selectedNodes
      };
      if (!('selectedKeys' in this.props)) {
        this.setState({
          selectedKeys: selectedKeys
        });
      }
      props.onSelect(selectedKeys, newSt);
    }

    // all keyboard events callbacks run from here at first

  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      e.preventDefault();
    }
  }, {
    key: 'getFilterExpandedKeys',
    value: function getFilterExpandedKeys(props, expandKeyProp, expandAll) {
      var keys = props[expandKeyProp];
      if (!expandAll && !props.autoExpandParent) {
        return keys || [];
      }
      var expandedPositionArr = [];
      if (props.autoExpandParent) {
        (0, _util.loopAllChildren)(props.children, function (item, index, pos, newKey) {
          if (keys.indexOf(newKey) > -1) {
            expandedPositionArr.push(pos);
          }
        });
      }
      var filterExpandedKeys = [];
      (0, _util.loopAllChildren)(props.children, function (item, index, pos, newKey) {
        if (expandAll) {
          filterExpandedKeys.push(newKey);
        } else if (props.autoExpandParent) {
          expandedPositionArr.forEach(function (p) {
            if ((p.split('-').length > pos.split('-').length && (0, _util.isInclude)(pos.split('-'), p.split('-')) || pos === p) && filterExpandedKeys.indexOf(newKey) === -1) {
              filterExpandedKeys.push(newKey);
            }
          });
        }
      });
      return filterExpandedKeys.length ? filterExpandedKeys : keys;
    }
  }, {
    key: 'getDefaultExpandedKeys',
    value: function getDefaultExpandedKeys(props, willReceiveProps) {
      var expandedKeys = willReceiveProps ? undefined : this.getFilterExpandedKeys(props, 'defaultExpandedKeys', props.defaultExpandedKeys.length ? false : props.defaultExpandAll);
      if ('expandedKeys' in props) {
        expandedKeys = (props.autoExpandParent ? this.getFilterExpandedKeys(props, 'expandedKeys', false) : props.expandedKeys) || [];
      }
      return expandedKeys;
    }
  }, {
    key: 'getDefaultCheckedKeys',
    value: function getDefaultCheckedKeys(props, willReceiveProps) {
      var checkedKeys = willReceiveProps ? undefined : props.defaultCheckedKeys;
      if ('checkedKeys' in props) {
        checkedKeys = props.checkedKeys || [];
        if (props.checkStrictly) {
          if (props.checkedKeys.checked) {
            checkedKeys = props.checkedKeys.checked;
          } else if (!Array.isArray(props.checkedKeys)) {
            checkedKeys = [];
          }
        }
      }
      return checkedKeys;
    }
  }, {
    key: 'getDefaultSelectedKeys',
    value: function getDefaultSelectedKeys(props, willReceiveProps) {
      var getKeys = function getKeys(keys) {
        if (props.multiple) {
          return [].concat(_toConsumableArray(keys));
        }
        if (keys.length) {
          return [keys[0]];
        }
        return keys;
      };
      var selectedKeys = willReceiveProps ? undefined : getKeys(props.defaultSelectedKeys);
      if ('selectedKeys' in props) {
        selectedKeys = getKeys(props.selectedKeys);
      }
      return selectedKeys;
    }
  }, {
    key: 'getRawExpandedKeys',
    value: function getRawExpandedKeys() {
      if (!this._rawExpandedKeys && 'expandedKeys' in this.props) {
        this._rawExpandedKeys = [].concat(_toConsumableArray(this.state.expandedKeys));
      }
    }
  }, {
    key: 'getOpenTransitionName',
    value: function getOpenTransitionName() {
      var props = this.props;
      var transitionName = props.openTransitionName;
      var animationName = props.openAnimation;
      if (!transitionName && typeof animationName === 'string') {
        transitionName = props.prefixCls + '-open-' + animationName;
      }
      return transitionName;
    }
  }, {
    key: 'getExpandedKeys',
    value: function getExpandedKeys(treeNode, expand) {
      var key = treeNode.props.eventKey;
      var expandedKeys = this.state.expandedKeys;
      var expandedIndex = expandedKeys.indexOf(key);
      var exKeys = void 0;
      if (expandedIndex > -1 && !expand) {
        exKeys = [].concat(_toConsumableArray(expandedKeys));
        exKeys.splice(expandedIndex, 1);
        return exKeys;
      }
      if (expand && expandedKeys.indexOf(key) === -1) {
        return expandedKeys.concat([key]);
      }
    }
  }, {
    key: 'filterTreeNode',
    value: function filterTreeNode(treeNode) {
      var filterTreeNode = this.props.filterTreeNode;
      if (typeof filterTreeNode !== 'function' || treeNode.props.disabled) {
        return false;
      }
      return filterTreeNode.call(this, treeNode);
    }
  }, {
    key: 'renderTreeNode',
    value: function renderTreeNode(child, index) {
      var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var pos = level + '-' + index;
      var key = child.key || pos;
      var state = this.state;
      var props = this.props;

      // prefer to child's own selectable property if passed
      var selectable = props.selectable;
      if (child.props.hasOwnProperty('selectable')) {
        selectable = child.props.selectable;
      }

      var cloneProps = {
        ref: 'treeNode-' + key,
        root: this,
        eventKey: key,
        pos: pos,
        selectable: selectable,
        loadData: props.loadData,
        prefixCls: props.prefixCls,
        showLine: props.showLine,
        showIcon: props.showIcon,
        expanded: state.expandedKeys.indexOf(key) !== -1,
        selected: state.selectedKeys.indexOf(key) !== -1,
        openTransitionName: this.getOpenTransitionName(),
        openAnimation: props.openAnimation,
        filterTreeNode: this.filterTreeNode.bind(this)
      };
      if (props.checkable) {
        cloneProps.checkable = props.checkable;
        if (props.checkStrictly) {
          if (state.checkedKeys) {
            cloneProps.checked = state.checkedKeys.indexOf(key) !== -1 || false;
          }
          if (props.checkedKeys && props.checkedKeys.halfChecked) {
            cloneProps.halfChecked = props.checkedKeys.halfChecked.indexOf(key) !== -1 || false;
          } else {
            cloneProps.halfChecked = false;
          }
        } else {
          if (this.checkedKeys) {
            cloneProps.checked = this.checkedKeys.indexOf(key) !== -1 || false;
          }
          cloneProps.halfChecked = this.halfCheckedKeys.indexOf(key) !== -1;
        }
      }
      if (this.treeNodesStates && this.treeNodesStates[pos]) {
        (0, _objectAssign2.default)(cloneProps, this.treeNodesStates[pos].siblingPosition);
      }
      return _react2.default.cloneElement(child, cloneProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var props = this.props;
      var domProps = {
        className: (0, _classnames2.default)(props.className, props.prefixCls),
        role: 'tree-node'
      };
      if (props.focusable) {
        domProps.tabIndex = '0';
        domProps.onKeyDown = this.onKeyDown;
      }

      var children = void 0;
      if (this.renderTreeData(props)) {
        children = this.renderTreeData(props);
      } else {
        children = props.children;
      }

      var getTreeNodesStates = function getTreeNodesStates() {
        _this4.treeNodesStates = {};
        (0, _util.loopAllChildren)(children, function (item, index, pos, keyOrPos, siblingPosition) {
          _this4.treeNodesStates[pos] = {
            siblingPosition: siblingPosition
          };
        });
      };
      if (props.showLine && !props.checkable) {
        getTreeNodesStates();
      }
      if (props.checkable && (this.checkedKeysChange || props.loadData)) {
        if (props.checkStrictly) {
          getTreeNodesStates();
        } else if (props._treeNodesStates) {
          this.treeNodesStates = props._treeNodesStates.treeNodesStates;
          this.halfCheckedKeys = props._treeNodesStates.halfCheckedKeys;
          this.checkedKeys = props._treeNodesStates.checkedKeys;
        } else {
          var checkedKeys = this.state.checkedKeys;
          var checkKeys = void 0;
          if (!props.loadData && this.checkKeys && this._checkedKeys && (0, _util.arraysEqual)(this._checkedKeys, checkedKeys)) {
            // if checkedKeys the same as _checkedKeys from onCheck, use _checkedKeys.
            checkKeys = this.checkKeys;
          } else {
            var checkedPositions = [];
            this.treeNodesStates = {};
            (0, _util.loopAllChildren)(children, function (item, index, pos, keyOrPos, siblingPosition) {
              _this4.treeNodesStates[pos] = {
                node: item,
                key: keyOrPos,
                checked: false,
                halfChecked: false,
                siblingPosition: siblingPosition
              };
              if (checkedKeys.indexOf(keyOrPos) !== -1) {
                _this4.treeNodesStates[pos].checked = true;
                checkedPositions.push(pos);
              }
            });
            // if the parent node's key exists, it all children node will be checked
            (0, _util.handleCheckState)(this.treeNodesStates, (0, _util.filterParentPosition)(checkedPositions), true);
            checkKeys = (0, _util.getCheck)(this.treeNodesStates);
          }
          this.halfCheckedKeys = checkKeys.halfCheckedKeys;
          this.checkedKeys = checkKeys.checkedKeys;
        }
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          _extends({}, domProps, { unselectable: 'true', ref: 'tree' }),
          _react2.default.Children.map(children, this.renderTreeNode, this)
        )
      );
    }
  }]);

  return Tree;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.renderTreeData = function (props) {
    if (props.treeData) {
      var treeData = [].concat(_toConsumableArray(props.treeData));
      return loopTreeData(treeData);
    } else {
      return false;
    }
  };

  this.triggerOnCheck = function (key) {

    var cur = _this5.treeNodesStates[key];
    var checkThis = {
      props: {
        checked: cur.checked,
        halfChecked: cur.halfChecked,
        pos: cur.key
      }
    };
    _this5.onCheck(checkThis);
  };
};

Tree.propTypes = {
  prefixCls: _propTypes2.default.string,
  children: _propTypes2.default.any,
  showLine: _propTypes2.default.bool,
  showIcon: _propTypes2.default.bool,
  selectable: _propTypes2.default.bool,
  multiple: _propTypes2.default.bool,
  checkable: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.node]),
  _treeNodesStates: _propTypes2.default.object,
  checkStrictly: _propTypes2.default.bool,
  autoExpandParent: _propTypes2.default.bool,
  defaultExpandAll: _propTypes2.default.bool,
  defaultExpandedKeys: _propTypes2.default.arrayOf(_propTypes2.default.string),
  expandedKeys: _propTypes2.default.arrayOf(_propTypes2.default.string),
  defaultCheckedKeys: _propTypes2.default.arrayOf(_propTypes2.default.string),
  checkedKeys: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.object]),
  defaultSelectedKeys: _propTypes2.default.arrayOf(_propTypes2.default.string),
  selectedKeys: _propTypes2.default.arrayOf(_propTypes2.default.string),
  onExpand: _propTypes2.default.func,
  onCheck: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  loadData: _propTypes2.default.func,
  filterTreeNode: _propTypes2.default.func,
  openTransitionName: _propTypes2.default.string,
  openAnimation: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
};

Tree.defaultProps = {
  prefixCls: (0, _className2.default)({ classPrefix: 'tree' }).className,
  showLine: false,
  showIcon: true,
  selectable: true,
  multiple: true,
  checkable: true,
  checkStrictly: false,
  autoExpandParent: true,
  defaultExpandAll: false,
  defaultExpandedKeys: [],
  defaultCheckedKeys: [],
  defaultSelectedKeys: [],
  onExpand: noop,
  onCheck: noop,
  onSelect: noop
};

Tree.TreeNode = _TreeNode3.default;

exports.default = Tree;
module.exports = exports['default'];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _objectAssign = __webpack_require__(11);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _util = __webpack_require__(33);

var _toArray = __webpack_require__(68);

var _toArray2 = _interopRequireDefault(_toArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var browserUa = typeof window !== 'undefined' ? (0, _util.browser)(window.navigator) : '';
var ieOrEdge = /.*(IE|Edge).+/.test(browserUa);
// const uaArray = browserUa.split(' ');
// const gtIE8 = uaArray.length !== 2 || uaArray[0].indexOf('IE') === -1 || Number(uaArray[1]) > 8;

var defaultTitle = '---';

var TreeNode = function (_React$Component) {
  _inherits(TreeNode, _React$Component);

  function TreeNode(props) {
    _classCallCheck(this, TreeNode);

    var _this = _possibleConstructorReturn(this, (TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).call(this, props));

    ['onExpand', 'onCheck', 'onSelect'].forEach(function (m) {
      _this[m] = _this[m].bind(_this);
    });
    _this.state = {
      dataLoading: false
    };
    return _this;
  }

  _createClass(TreeNode, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.root._treeNodeInstances) {
        this.props.root._treeNodeInstances = [];
      }
      this.props.root._treeNodeInstances.push(this);
    }

    // shouldComponentUpdate(nextProps) {
    //   if (!nextProps.expanded) {
    //     return false;
    //   }
    //   return true;
    // }

  }, {
    key: 'onCheck',
    value: function onCheck() {
      this.props.root.onCheck(this);
    }
  }, {
    key: 'onSelect',
    value: function onSelect() {
      this.props.root.onSelect(this);
    }
  }, {
    key: 'onExpand',
    value: function onExpand() {
      var _this2 = this;

      var callbackPromise = this.props.root.onExpand(this);
      if (callbackPromise && (typeof callbackPromise === 'undefined' ? 'undefined' : _typeof(callbackPromise)) === 'object') {
        var setLoading = function setLoading(dataLoading) {
          _this2.setState({ dataLoading: dataLoading });
        };
        setLoading(true);
        callbackPromise.then(function () {
          setLoading(false);
        }, function () {
          setLoading(false);
        });
      }
    }

    // keyboard event support

  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      e.preventDefault();
    }
  }, {
    key: 'renderSwitcher',
    value: function renderSwitcher(props, expandedState) {
      var prefixCls = props.prefixCls;
      var switcherCls = _defineProperty({}, prefixCls + '-switcher', true);
      if (!props.showLine) {
        switcherCls[prefixCls + '-noline_' + expandedState] = true;
      } else if (props.pos === '0-0') {
        switcherCls[prefixCls + '-roots_' + expandedState] = true;
      } else {
        switcherCls[prefixCls + '-center_' + expandedState] = !props.last;
        switcherCls[prefixCls + '-bottom_' + expandedState] = props.last;
      }
      if (props.disabled) {
        switcherCls[prefixCls + '-switcher-disabled'] = true;
        return _react2.default.createElement('span', { className: (0, _classnames2.default)(switcherCls) });
      }
      return _react2.default.createElement('span', { className: (0, _classnames2.default)(switcherCls), onClick: this.onExpand });
    }
  }, {
    key: 'renderCheckbox',
    value: function renderCheckbox(props) {
      var prefixCls = props.prefixCls;
      var checkboxCls = _defineProperty({}, prefixCls + '-checkbox', true);
      if (props.checked) {
        checkboxCls[prefixCls + '-checkbox-checked'] = true;
      } else if (props.halfChecked) {
        checkboxCls[prefixCls + '-checkbox-indeterminate'] = true;
      }
      var customEle = null;
      if (typeof props.checkable !== 'boolean') {
        customEle = props.checkable;
      }
      if (props.disabled || props.disableCheckbox) {
        checkboxCls[prefixCls + '-checkbox-disabled'] = true;
        return _react2.default.createElement(
          'span',
          { ref: 'checkbox', className: (0, _classnames2.default)(checkboxCls) },
          customEle
        );
      }
      return _react2.default.createElement(
        'span',
        { ref: 'checkbox',
          className: (0, _classnames2.default)(checkboxCls),
          onClick: this.onCheck
        },
        customEle
      );
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren(props) {
      var renderFirst = this.renderFirst;
      this.renderFirst = 1;
      var transitionAppear = true;
      if (!renderFirst && props.expanded) {
        transitionAppear = false;
      }
      var children = props.children ? (0, _toArray2.default)(props.children) : props.children;
      var newChildren = children;
      if (children && (Array.isArray(children) && children.every(function (item) {
        return item.type && item.type.isTreeNode;
      }) || children.type && children.type.isTreeNode)) {
        var _cls;

        var cls = (_cls = {}, _defineProperty(_cls, props.prefixCls + '-child-tree', true), _defineProperty(_cls, props.prefixCls + '-child-tree-open', props.expanded), _cls);
        if (props.showLine) {
          cls[props.prefixCls + '-line'] = !props.last;
        }
        var animProps = {};
        if (props.openTransitionName) {
          animProps.transitionName = props.openTransitionName;
        } else if (_typeof(props.openAnimation) === 'object') {
          animProps.animation = (0, _objectAssign2.default)({}, props.openAnimation);
          if (!transitionAppear) {
            delete animProps.animation.appear;
          }
        }
        newChildren = _react2.default.createElement(
          'div',
          null,
          !props.expanded ? null : _react2.default.createElement(
            'ul',
            { className: (0, _classnames2.default)(cls), 'data-expanded': props.expanded },
            _react2.default.Children.map(children, function (item, index) {
              return props.root.renderTreeNode(item, index, props.pos);
            }, props.root)
          )
        );
      }
      return newChildren;
    }
  }, {
    key: 'render',
    value: function render() {
      var _iconEleCls,
          _this3 = this;

      var props = this.props;
      var prefixCls = props.prefixCls;
      var expandedState = props.expanded ? 'open' : 'close';
      var iconState = expandedState;

      var canRenderSwitcher = true;
      var content = props.title;
      var newChildren = this.renderChildren(props);
      if (!newChildren || newChildren === props.children) {
        // content = newChildren;
        newChildren = null;
        if (!props.loadData || props.isLeaf) {
          canRenderSwitcher = false;
          iconState = 'docu';
        }
      }
      // For performance, does't render children into dom when `!props.expanded` (move to Animate)
      // if (!props.expanded) {
      //   newChildren = null;
      // }

      var iconEleCls = (_iconEleCls = {}, _defineProperty(_iconEleCls, prefixCls + '-iconEle', true), _defineProperty(_iconEleCls, prefixCls + '-icon_loading', this.state.dataLoading), _defineProperty(_iconEleCls, prefixCls + '-icon__' + iconState, true), _iconEleCls);

      var selectHandle = function selectHandle() {
        var icon = props.showIcon || props.loadData && _this3.state.dataLoading ? _react2.default.createElement('span', { className: (0, _classnames2.default)(iconEleCls) }) : null;
        var title = _react2.default.createElement(
          'span',
          { className: prefixCls + '-title' },
          content
        );
        var wrap = prefixCls + '-node-content-wrapper';
        var domProps = {
          className: wrap + ' ' + wrap + '-' + (iconState === expandedState ? iconState : 'normal')
        };
        if (!props.disabled) {
          if (props.selected) {
            domProps.className += ' ' + prefixCls + '-node-selected';
          }
          domProps.onClick = function (e) {
            e.preventDefault();

            if (props.selectable) {
              _this3.onSelect();
            }
            // not fire check event
            // if (props.checkable) {
            //   this.onCheck();
            // }
          };
        }
        return _react2.default.createElement(
          'a',
          _extends({ ref: 'selectHandle', title: typeof content === 'string' ? content : '' }, domProps),
          icon,
          title
        );
      };

      var liProps = {};

      var disabledCls = '';

      var filterCls = props.filterTreeNode(this) ? 'filter-node' : '';

      var noopSwitcher = function noopSwitcher() {
        var _cls2;

        var cls = (_cls2 = {}, _defineProperty(_cls2, prefixCls + '-switcher', true), _defineProperty(_cls2, prefixCls + '-switcher-noop', true), _cls2);
        if (props.showLine) {
          cls[prefixCls + '-center_docu'] = !props.last;
          cls[prefixCls + '-bottom_docu'] = props.last;
        } else {
          cls[prefixCls + '-noline_docu'] = true;
        }
        return _react2.default.createElement('span', { className: (0, _classnames2.default)(cls) });
      };

      return _react2.default.createElement(
        'li',
        _extends({}, liProps, { ref: 'li',
          className: (0, _classnames2.default)(props.className, disabledCls, filterCls)
        }),
        _react2.default.createElement(
          'div',
          { className: prefixCls + '-item' },
          canRenderSwitcher ? this.renderSwitcher(props, expandedState) : noopSwitcher(),
          selectHandle(),
          props.checkable ? this.renderCheckbox(props) : null
        ),
        newChildren
      );
    }
  }]);

  return TreeNode;
}(_react2.default.Component);

TreeNode.isTreeNode = 1;

TreeNode.propTypes = {
  prefixCls: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  disableCheckbox: _propTypes2.default.bool,
  expanded: _propTypes2.default.bool,
  isLeaf: _propTypes2.default.bool,
  root: _propTypes2.default.object,
  onSelect: _propTypes2.default.func
};

TreeNode.defaultProps = {
  title: defaultTitle
};

exports.default = TreeNode;
module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = toArray;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function toArray(children) {
  var ret = [];
  _react2['default'].Children.forEach(children, function (c) {
    ret.push(c);
  });
  return ret;
}
module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

var _Card = __webpack_require__(7);

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProcessLogs = function (_React$Component) {
  _inherits(ProcessLogs, _React$Component);

  function ProcessLogs(props) {
    _classCallCheck(this, ProcessLogs);

    var _this = _possibleConstructorReturn(this, (ProcessLogs.__proto__ || Object.getPrototypeOf(ProcessLogs)).call(this, props));

    _this.renderLogsItem = function (data) {
      return data.map(function (item, index) {
        return _react2.default.createElement(
          _Card2.default,
          {
            header: _react2.default.createElement(
              _Card2.default.Child,
              { role: 'header', className: _this.prefixClass('content-title') },
              _react2.default.createElement(
                'div',
                null,
                item.title,
                ' ',
                _react2.default.createElement(
                  'span',
                  null,
                  '|'
                ),
                ' ',
                item.time
              ),
              _react2.default.createElement(
                'div',
                null,
                item.after
              )
            ),
            key: index,
            noLine: true
          },
          item.content
        );
      });
    };

    return _this;
  }

  _createClass(ProcessLogs, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var classNS = (0, _className2.default)(this.props);
      this.prefixClass = classNS.prefixClass;

      var source = this.props.source;

      var logsWrapCls = (0, _classnames2.default)(this.prefixClass('logs-wrap'));
      return _react2.default.createElement(
        'div',
        null,
        source.map(function (item, index) {
          return _react2.default.createElement(
            'div',
            { className: logsWrapCls, key: index },
            _react2.default.createElement(
              'span',
              null,
              item.date
            ),
            _this2.renderLogsItem(item.process)
          );
        })
      );
    }
  }]);

  return ProcessLogs;
}(_react2.default.Component);

ProcessLogs.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  source: _propTypes2.default.array
};
ProcessLogs.defaultProps = {
  classPrefix: 'process-logs'
};
exports.default = ProcessLogs;
module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _className2 = _interopRequireDefault(_className);

var _Icon = __webpack_require__(4);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Pagination);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call.apply(_ref, [this].concat(args))), _this), _this.onItemClick = function (event, item) {
      var onChange = _this.props.onChange;

      if (item < 1) {
        event.preventDefault();
        event.stopPropagation();
        return;
      } else {
        onChange && onChange(item);
      }
    }, _this.onPrevious = function (event) {
      event.preventDefault();
      _this.props.onPrevious && _this.props.onPrevious();
    }, _this.onNext = function (event) {
      event.preventDefault();
      _this.props.onNext && _this.props.onNext();
    }, _this.renderItem = function () {
      var _this$props = _this.props,
          total = _this$props.total,
          current = _this$props.current;


      var items = [];
      for (var i = 0; i < 5; i++) {
        items[i] = current - 2 + i;
      }
      var distance = total - current;

      if (distance === 0) {
        items[3] = 0;
        items[4] = 0;
      } else if (distance === 1) {
        items[4] = 0;
      }

      return _react2.default.createElement(
        'ul',
        null,
        items.map(function (item, index) {
          return _react2.default.createElement(Item, {
            key: index,
            onClick: function onClick(event) {
              return _this.onItemClick(event, item);
            },
            active: item === current ? true : false,
            children: item > 0 ? item : ' '
          });
        })
      );
    }, _this.renderTotal = function () {
      var _this$props2 = _this.props,
          total = _this$props2.total,
          showTotal = _this$props2.showTotal;


      if (typeof showTotal === 'function') {
        return showTotal(total);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Pagination, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (nextProps.current < 1 || nextProps.current > nextProps.total) {
        return false;
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var classNS = (0, _className2.default)(this.props);
      var classSet = classNS.classSet;
      this.prefixClass = classNS.prefixClass;
      var _props = this.props,
          className = _props.className,
          total = _props.total,
          showTotal = _props.showTotal,
          showHead = _props.showHead,
          showEnd = _props.showEnd;

      var navCls = (0, _classnames2.default)(this.prefixClass("nav"));
      var totalCls = (0, _classnames2.default)(this.prefixClass("total"));

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(classSet, className) },
          _react2.default.createElement(
            'div',
            { className: navCls },
            showHead ? _react2.default.createElement(
              'a',
              null,
              _react2.default.createElement(_Icon2.default, { name: 'extrem-left' })
            ) : null,
            _react2.default.createElement(
              'a',
              { onClick: this.onPrevious },
              _react2.default.createElement(_Icon2.default, { name: 'left' })
            )
          ),
          this.renderItem(),
          _react2.default.createElement(
            'div',
            { className: navCls },
            _react2.default.createElement(
              'a',
              { onClick: this.onNext },
              _react2.default.createElement(_Icon2.default, { name: 'right' })
            ),
            showEnd ? _react2.default.createElement(
              'a',
              null,
              _react2.default.createElement(_Icon2.default, { name: 'extrem-right' })
            ) : null
          )
        ),
        showTotal ? _react2.default.createElement(
          'p',
          { className: totalCls },
          this.renderTotal()
        ) : null
      );
    }
  }]);

  return Pagination;
}(_react2.default.Component);

Pagination.propTypes = {
  total: _propTypes2.default.number,
  active: _propTypes2.default.number,
  showHead: _propTypes2.default.bool,
  showEnd: _propTypes2.default.bool,
  onPrevious: _propTypes2.default.func,
  onNext: _propTypes2.default.func,
  onChange: _propTypes2.default.func
};
Pagination.defaultProps = {
  classPrefix: 'pagination',
  total: 5,
  current: 1,
  amStyle: 'primary',
  showHead: false,
  showEnd: false
};
exports.default = Pagination;

var Item = function (_React$Component2) {
  _inherits(Item, _React$Component2);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          active = _props2.active,
          otherProps = _objectWithoutProperties(_props2, ['children', 'active']);

      var cls = (0, _className.setClassNS)('pagination-item');
      var activeCls = active ? (0, _className.setClassNS)('active') : null;

      return _react2.default.createElement(
        'li',
        _extends({ className: (0, _classnames2.default)(cls, activeCls) }, otherProps),
        _react2.default.createElement(
          'a',
          null,
          children
        )
      );
    }
  }]);

  return Item;
}(_react2.default.Component);

Item.propTypes = {
  active: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _className = __webpack_require__(3);

var _ButtonContainer = __webpack_require__(21);

var _ButtonContainer2 = _interopRequireDefault(_ButtonContainer);

var _ButtonGroup = __webpack_require__(16);

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _Icon = __webpack_require__(4);

var _Icon2 = _interopRequireDefault(_Icon);

var _Modal = __webpack_require__(18);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonAction = function (_React$Component) {
  _inherits(ButtonAction, _React$Component);

  function ButtonAction(props) {
    _classCallCheck(this, ButtonAction);

    var _this = _possibleConstructorReturn(this, (ButtonAction.__proto__ || Object.getPrototypeOf(ButtonAction)).call(this, props));

    _this.openModal = function () {
      _this.setState({
        isModalOpen: true
      });
    };

    _this.closeModal = function () {
      _this.setState({
        isModalOpen: false
      });
    };

    _this.state = {
      showAction: false,
      isModalOpen: false
    };
    return _this;
  }

  _createClass(ButtonAction, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          classPrefix = _props.classPrefix,
          props = _objectWithoutProperties(_props, ['children', 'className', 'classPrefix']);

      var more = false;
      if (children) {
        more = true;
      }

      var nsPrefix = (0, _className.setClassNS)(classPrefix);
      var btnPrefix = (0, _className.setClassNS)('btn-more');
      var wrapCls = (0, _classnames2.default)(nsPrefix, className);

      return _react2.default.createElement(
        'div',
        { className: wrapCls },
        _react2.default.createElement(
          _ButtonContainer2.default,
          { more: more },
          _react2.default.createElement(
            _ButtonGroup2.default,
            { amStyle: 'primary', gapped: true, justify: true },
            this.props.actions.map(function (item, i) {
              var title = item.title,
                  others = _objectWithoutProperties(item, ['title']);

              return _react2.default.createElement(
                _Button2.default,
                _extends({}, others, { key: i }),
                title
              );
            })
          ),
          more ? _react2.default.createElement(
            _Button2.default,
            { className: btnPrefix, onClick: this.openModal },
            _react2.default.createElement(_Icon2.default, { name: 'more-l' })
          ) : null
        ),
        _react2.default.createElement(
          _Modal2.default,
          {
            ref: function ref(_ref) {
              return _this2.modal = _ref;
            },
            isOpen: this.state.isModalOpen,
            onDismiss: this.closeModal,
            btnClassName: nsPrefix + '-action-btn',
            role: 'actions'
          },
          this.props.children
        )
      );
    }
  }]);

  return ButtonAction;
}(_react2.default.Component);

ButtonAction.propTypes = {
  classPrefix: _propTypes2.default.string.isRequired,
  actions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string.required
  }))
};
ButtonAction.defaultProps = {
  classPrefix: 'btn-action'
};
exports.default = ButtonAction;
module.exports = exports['default'];

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var fallback = {
  detectionRegex: {
    uc: /ucbrowser/i,
    zuoku: /zuoku build/i,
    coolpad: /coolpad/i
  },

  addHook: function addHook() {
    // Android browsers legacy flexbox fallback
    try {
      var ua = navigator.userAgent.toLowerCase();
      var fbNeeded = false;

      // TODO: - add version detecting when UC supports flexbox
      if (/android/i.test(ua)) {
        Object.keys(fallback.detectionRegex).forEach(function (key) {
          !fbNeeded && (fbNeeded = fallback.detectionRegex[key].test(ua));
        });

        fbNeeded && (document.documentElement.className += ' fb-legacy-flexbox');
      }
    } catch (e) {}
  }
};

fallback.addHook();

exports.default = fallback;
module.exports = exports['default'];

/***/ })
/******/ ]);
});