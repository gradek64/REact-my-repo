'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*3 Likes Button*/

var LikesButton = function (_React$Component) {
  _inherits(LikesButton, _React$Component);

  function LikesButton(props) {
    _classCallCheck(this, LikesButton);

    var _this = _possibleConstructorReturn(this, (LikesButton.__proto__ || Object.getPrototypeOf(LikesButton)).call(this, props));

    var pocket = 'pocket' + _this.props.id;
    if (localStorage.getItem('Likes_in_LS')) {
      _this.savedLikes = JSON.parse(localStorage.getItem('Likes_in_LS'));
    }

    //update 
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

      return function (e) {
        _this2.setState({ likes: _this2.state.likes = _this2.state.likes + 1 });
        var localStorageObject = _this2.getLikesObject();
        localStorageObject['pocket' + id] = _this2.state.likes;
        localStorage.setItem('Likes_in_LS', JSON.stringify(localStorageObject));

        //callback to parent
        _this2.props.callbackParentLikesButton(_this2.state.likes);
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'button',
        { onClick: this.clickMe(this.props.id) },
        'likes ',
        this.state.likes
      );
    }
  }]);

  return LikesButton;
}(_react2.default.Component);

LikesButton.propTypes = {
  id: _propTypes2.default.number.isRequired,
  callbackParentLikesButton: _propTypes2.default.func
};

/*2 Panel*/

var Panel = function (_React$Component2) {
  _inherits(Panel, _React$Component2);

  function Panel() {
    _classCallCheck(this, Panel);

    return _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).apply(this, arguments));
  }

  _createClass(Panel, [{
    key: 'onChildChangedPanel',
    value: function onChildChangedPanel(newState) {
      //console.log(newState);
      this.props.callbackParentPanel(newState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        { className: 'panel-group' },
        _react2.default.createElement(
          'h2',
          null,
          ' panel layer 2'
        ),
        _react2.default.createElement(LikesButton, { id: this.props.id, callbackParentLikesButton: function callbackParentLikesButton(newState) {
            return _this4.onChildChangedPanel(newState);
          } })
      );
    }
  }]);

  return Panel;
}(_react2.default.Component);

Panel.propTypes = {
  id: _propTypes2.default.number.isRequired,
  callbackParentPanel: _propTypes2.default.func
};

//WARNING: React only does a shallow merge of the default props and the actual props, 
//i.e. nested default props are overridden instead of merged. This is by design.
Panel.defaultProps = {
  title: "title",
  author: "anon",
  tags: "tags",
  date_taken: "default",
  media: { m: "" }
};

var allLikesLS = function allLikesLS() {
  return JSON.parse(localStorage.getItem('Likes_in_LS')) ? JSON.parse(localStorage.getItem('Likes_in_LS')) : { 'pocket': 0 };
};

var allLikesCalculatedOut = Object.keys(allLikesLS()).reduce(function (sum, key) {
  return sum + allLikesLS()[key];
}, 0);

/* 1 Wrapper Pannel*/

var WrapperPanel = function (_React$Component3) {
  _inherits(WrapperPanel, _React$Component3);

  function WrapperPanel(props) {
    _classCallCheck(this, WrapperPanel);

    var _this5 = _possibleConstructorReturn(this, (WrapperPanel.__proto__ || Object.getPrototypeOf(WrapperPanel)).call(this, props));

    _this5.state = { current: false };
    _this5.allLikesCalculated = 0;
    return _this5;
  }

  _createClass(WrapperPanel, [{
    key: 'onChildChanged',
    value: function onChildChanged(newState) {
      this.allLikesCalculated++;
      console.log('WrapperPanel', newState);
      this.setState({ current: newState });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'all likes:',
          allLikesCalculatedOut + this.allLikesCalculated
        ),
        [2, 3, 4].map(function (item, i) {
          return _react2.default.createElement(Panel, { key: i, id: i, callbackParentPanel: function callbackParentPanel(newState) {
              return _this6.onChildChanged(newState);
            } });
        })
      );
    }
  }]);

  return WrapperPanel;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(WrapperPanel, null), document.getElementById('app'));