'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ToggleButton = require('./ToggleButton.js');

var _ToggleButton2 = _interopRequireDefault(_ToggleButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mistery = function Mistery(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'span',
      null,
      'here is a span'
    ),
    ' ',
    console.log(props),
    ' '
  );
};

var Picture = function Picture(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      'paragraph'
    )
  );
};

var value = 'value';

var MyContainer = function (_React$Component) {
  _inherits(MyContainer, _React$Component);

  function MyContainer(props) {
    _classCallCheck(this, MyContainer);

    var _this = _possibleConstructorReturn(this, (MyContainer.__proto__ || Object.getPrototypeOf(MyContainer)).call(this, props));

    _this.state = { current: false };

    console.log('MyContainer childrena', props);
    return _this;
  }

  _createClass(MyContainer, [{
    key: 'onChildChanged',
    value: function onChildChanged(newState) {

      console.log(newState);
      this.setState({ current: newState });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        console.log(_react2.default.Children.count()),
        _react2.default.createElement(
          'div',
          null,
          'Are you checked ? ',
          this.state.current ? 'ON' : 'OFF'
        ),
        _react2.default.createElement(Mistery, { key3: true, src: false }),
        _react2.default.createElement(Picture, { key1: value, src1: false }),
        _react2.default.createElement(_ToggleButton2.default, {
          initialSet: this.state.set,
          callbackParent: function callbackParent(newState) {
            return _this2.onChildChanged(newState);
          } }),
        _react2.default.createElement(_ToggleButton2.default, {
          initialSet: true,
          callbackParent: function callbackParent(newState) {
            return _this2.onChildChanged(newState);
          } })
      );
    }
  }]);

  return MyContainer;
}(_react2.default.Component);

/*
    React.createClass has been deprecated from version 16 onwards 

var MyChild = React.createClass({
  render: function() {
    return <div>this is child</div>
  }
});*/

_reactDom2.default.render(_react2.default.createElement(MyContainer, null), document.getElementById('app'));
/* */