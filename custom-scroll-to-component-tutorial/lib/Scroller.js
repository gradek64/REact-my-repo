"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollElement = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _scrollIntoView = require("scroll-into-view");

var _scrollIntoView2 = _interopRequireDefault(_scrollIntoView);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollView = function (_Component) {
  _inherits(ScrollView, _Component);

  function ScrollView() {
    _classCallCheck(this, ScrollView);

    var _this = _possibleConstructorReturn(this, (ScrollView.__proto__ || Object.getPrototypeOf(ScrollView)).call(this));

    _this.elements = {};
    return _this;
  }

  _createClass(ScrollView, [{
    key: "register",
    value: function register(name, ref) {
      this.elements[name] = ref;
    }
  }, {
    key: "unregister",
    value: function unregister(name) {
      delete this.elements[name];
    }

    /*getChildContext() {
      return {
        scroll: {
          register: this.register,
          unregister: this.unregister
        }
      }
    }*/

  }, {
    key: "scrollTo",
    value: function scrollTo(name) {
      var node = (0, _reactDom.findDOMNode)(this.elements[name]);
      (0, _scrollIntoView2.default)(node, {
        time: 500,
        align: {
          top: 0
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ScrollView;
}(_react.Component);

ScrollView.propTypes = {
  scroll: _propTypes2.default.object
};

var ScrollElement = function (_Component2) {
  _inherits(ScrollElement, _Component2);

  function ScrollElement() {
    _classCallCheck(this, ScrollElement);

    return _possibleConstructorReturn(this, (ScrollElement.__proto__ || Object.getPrototypeOf(ScrollElement)).apply(this, arguments));
  }

  _createClass(ScrollElement, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // this.context.scroll.register(this.props.name, this._element);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // this.context.scroll.unregister(this.props.name);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.cloneElement(this.props.children, {
        ref: function ref(_ref) {
          return _this3._element = _ref;
        }
      });
    }
  }]);

  return ScrollElement;
}(_react.Component);

ScrollElement.propTypes = {
  scroll: _propTypes2.default.object
};

exports.ScrollElement = ScrollElement;
exports.default = ScrollView;