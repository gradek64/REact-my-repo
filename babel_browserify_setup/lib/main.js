'use strict';

var _calculate = require('./calculate.js');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("2 + 3 = ", (0, _calculate.sumTwo)(2, 3));

var title = 'My Minimal React Webpack Babel Setup is set';

_reactDom2.default.render(_react2.default.createElement(
  'div',
  null,
  title
), document.getElementById('app'));

/******** with jsx function**********/
var user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

var element = _react2.default.createElement(
  'h1',
  null,
  'Hello, ',
  formatName(user),
  '!'
);

_reactDom2.default.render(element, document.getElementById('app1'));