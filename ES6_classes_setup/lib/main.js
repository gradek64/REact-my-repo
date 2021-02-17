'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _contacts = require('./contacts.js');

var _contacts2 = _interopRequireDefault(_contacts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
   function App() {
      _classCallCheck(this, App);
   }

   _createClass(App, [{
      key: 'method',
      value: function method() {
         console.log('class APP method', this);
      }
   }], [{
      key: 'getValue',
      value: function getValue() {
         return "Hello";
      }
   }]);

   return App;
}();

;

var AppChild = function (_App) {
   _inherits(AppChild, _App);

   function AppChild() {
      _classCallCheck(this, AppChild);

      return _possibleConstructorReturn(this, (AppChild.__proto__ || Object.getPrototypeOf(AppChild)).call(this));
   }

   return AppChild;
}(App);
//APP instance 


var appchild = new AppChild();
appchild.method();

var element = _react2.default.createElement(
   'h1',
   null,
   App.getValue(),
   _react2.default.createElement(_contacts2.default, null)
);

_reactDom2.default.render(element, document.getElementById('app'));