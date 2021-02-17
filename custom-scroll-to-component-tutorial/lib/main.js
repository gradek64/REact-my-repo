"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _data = require("./data.json");

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this));

    _this.imageRefs = [];
    return _this;
  }

  _createClass(Main, [{
    key: "scrollTo",
    value: function scrollTo(id) {
      console.log(id);
      console.log(this.imageRefs[id]);
      this.imageRefs[id].scrollIntoView({ behavior: 'smooth' });
    }
  }, {
    key: "reference",
    value: function reference(id) {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { className: "app" },
        _data2.default.map(function (e, i) {
          return _react2.default.createElement(
            "button",
            { key: i, onClick: function onClick() {
                _this2.scrollTo(i);
              } },
            e.id
          );
        }),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "div",
            { className: "scroller" },
            _data2.default.map(function (_ref, i) {
              var name = _ref.name,
                  url = _ref.url;

              return _react2.default.createElement(
                "div",
                { name: name, key: name, ref: function ref(_ref2) {
                    return _this2.imageRefs[i] = _ref2;
                  } },
                _react2.default.createElement(
                  "div",
                  { className: "item" },
                  _react2.default.createElement("img", { src: url }),
                  name
                )
              );
            })
          )
        )
      );
    }
  }]);

  return Main;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(Main, null), document.getElementById('app'));