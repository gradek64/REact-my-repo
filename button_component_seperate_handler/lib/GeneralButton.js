"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GeneralButton = function GeneralButton(props) {
  var callParent = props.callParent,
      label = props.label;

  return _react2.default.createElement(
    "button",
    { onClick: function onClick() {
        return callParent(label);
      } },
    label
  );
};

exports.default = GeneralButton;