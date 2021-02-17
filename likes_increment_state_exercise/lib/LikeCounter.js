'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LikesButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LikesButton = exports.LikesButton = function (_React$Component) {
  _inherits(LikesButton, _React$Component);

  function LikesButton(props) {
    _classCallCheck(this, LikesButton);

    var _this = _possibleConstructorReturn(this, (LikesButton.__proto__ || Object.getPrototypeOf(LikesButton)).call(this, props));

    var pocket = 'pocket' + _this.props.id;
    if (localStorage.getItem('Likes_in_LS')) {
      _this.savedLikes = JSON.parse(localStorage.getItem('Likes_in_LS'));
    }

    // update
    _this.state = {
      likes: _this.getLikesObject(_this.props.id)[pocket] ? _this.getLikesObject(_this.props.id)[pocket] : 0
    };
    return _this;
  }

  _createClass(LikesButton, [{
    key: 'getLikesObject',
    value: function getLikesObject() {
      var savedLikes = {};
      if (localStorage.getItem('Likes_in_LS')) {
        savedLikes = JSON.parse(localStorage.getItem('Likes_in_LS'));
      }
      return savedLikes;
    }
  }, {
    key: 'clickMe',
    value: function clickMe(id) {
      var _this2 = this;

      return function () {
        var localStorageObject = _this2.getLikesObject();
        localStorageObject['pocket' + id] = _this2.state.likes;
        localStorage.setItem('Likes_in_LS', JSON.stringify(localStorageObject));
        return _this2.setState({ likes: _this2.state.likes + 1 });
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'button',
        {
          type: 'button',
          'data-test': 'LikesButton-component',
          onClick: function onClick() {
            _this3.setState({ likes: _this3.state.likes + 1 });
          }
        },
        'likes ',
        this.state.likes
      );
    }
  }]);

  return LikesButton;
}(_react2.default.Component);

LikesButton.propTypes = {
  id: _propTypes2.default.number.isRequired
};

var Panel = function (_React$Component2) {
  _inherits(Panel, _React$Component2);

  function Panel() {
    _classCallCheck(this, Panel);

    return _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).apply(this, arguments));
  }

  _createClass(Panel, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'panel-group' },
        _react2.default.createElement(LikesButton, { id: this.props.id })
      );
    }
  }]);

  return Panel;
}(_react2.default.Component);

Panel.propTypes = {
  id: _propTypes2.default.number.isRequired
};

// WARNING: React only does a shallow merge of the default props and the actual props,
// i.e. nested default props are overridden instead of merged. This is by design.
Panel.defaultProps = {
  title: 'title',
  author: 'anon',
  tags: 'tags',
  date_taken: 'default',
  media: { m: '' }
};

var listItems = [2, 3, 4].map(function (item, i) {
  return _react2.default.createElement(Panel, { key: i, id: i });
});

var allLikesLS = function allLikesLS() {
  return JSON.parse(localStorage.getItem('Likes_in_LS')) ? JSON.parse(localStorage.getItem('Likes_in_LS')) : { pocket: 0 };
};

var allLikesCalculated = Object.keys(allLikesLS()).reduce(function (sum, key) {
  return sum + allLikesLS()[key];
}, 0);

var LikeCounter = function LikeCounter() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      'all likes:',
      allLikesCalculated
    ),
    _react2.default.createElement(
      'div',
      null,
      listItems
    )
  );
};

exports.default = LikeCounter;