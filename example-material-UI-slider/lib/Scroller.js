'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Slider = require('@material-ui/lab/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: {
    width: 300
  }
};

var SimpleSlider = function (_React$Component) {
  _inherits(SimpleSlider, _React$Component);

  function SimpleSlider(props) {
    _classCallCheck(this, SimpleSlider);

    var _this = _possibleConstructorReturn(this, (SimpleSlider.__proto__ || Object.getPrototypeOf(SimpleSlider)).call(this, props));

    _this.state = {
      value: 50
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(SimpleSlider, [{
    key: 'handleChange',
    value: function handleChange(event, value) {
      console.log(value);
      this.setState({ value: value });
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = this.props.classes;
      var value = this.state.value;


      return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(
          _Typography2.default,
          { id: 'label' },
          'Slider label'
        ),
        _react2.default.createElement(_Slider2.default, { value: value, 'aria-labelledby': 'label', onChange: this.handleChange })
      );
    }
  }]);

  return SimpleSlider;
}(_react2.default.Component);

SimpleSlider.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(SimpleSlider);