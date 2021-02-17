'use strict';

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LikeCounter = require('./LikeCounter');

var _LikeCounter2 = _interopRequireDefault(_LikeCounter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_LikeCounter2.default, null), document.getElementById('app'));