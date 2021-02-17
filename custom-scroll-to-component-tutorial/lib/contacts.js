'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import ReactDOM from "react-dom";


var Contacts = function (_React$Component) {
  _inherits(Contacts, _React$Component);

  function Contacts(props) {
    _classCallCheck(this, Contacts);

    var _this = _possibleConstructorReturn(this, (Contacts.__proto__ || Object.getPrototypeOf(Contacts)).call(this, props));

    console.log('this', _this);

    //attach handle click to Contacts Class;
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Contacts, [{
    key: 'method',
    value: function method() {
      console.log('Contacts method', this);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(evt) {
      console.log(evt.type);
      console.log(evt.target);
      console.log(evt.pageX);
      console.log(evt.pageY);

      //evet object is pretty much the same
      //but for mouseX 


      //React decided to skip this keword for event handlers 
      //unless you bind it to whatever  you want like this class;
      console.log(this); // React Component instance
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { onClick: this.handleClick },
        'click me!'
      );
    }
  }]);

  return Contacts;
}(_react2.default.Component);

//instance of Contacts;


var contacts = new Contacts();
contacts.method();
console.log(contacts);

exports.default = Contacts;