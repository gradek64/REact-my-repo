'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _GeneralButton = require('./GeneralButton.js');

var _GeneralButton2 = _interopRequireDefault(_GeneralButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleToggleOutside = function handleToggleOutside(param) {
  /* this.setState({ set: this.state.set = !this.state.set});
   console.log('this.state.set',this.state.set);
   this.props.callbackParent(this.state.set);*/ // we notify our parent via Class props;

  console.log(param);
};
var MyContainer = function MyContainer() {
  var first = 'first',
      second = 'second';

  return _react2.default.createElement(
    'div',
    { className: 'MyContainer' },
    [1, 2].map(function (e) {
      return _react2.default.createElement(_GeneralButton2.default, { key: e, callParent: function callParent(param) {
          return handleToggleOutside(param);
        }, label: first + e });
    })
  );
};

_reactDom2.default.render(_react2.default.createElement(MyContainer, null), document.getElementById('app'));
/* */