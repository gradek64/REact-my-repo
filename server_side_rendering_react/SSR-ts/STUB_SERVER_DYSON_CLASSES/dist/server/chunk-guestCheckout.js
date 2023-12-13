exports.ids = ["guestCheckout"];
exports.modules = {

/***/ "./src/shared/containers/GuestCheckoutContainer/GuestCheckoutContainer.jsx":
/*!*********************************************************************************!*\
  !*** ./src/shared/containers/GuestCheckoutContainer/GuestCheckoutContainer.jsx ***!
  \*********************************************************************************/
/*! exports provided: GuestCheckoutContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestCheckoutContainer", function() { return GuestCheckoutContainer; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_2__);




//this is syntax from loadable for dynamic load component
var MapComponent = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() | mapComponent */ "mapComponent").then(__webpack_require__.bind(null, /*! ./MapComponentMock */ "./src/shared/containers/GuestCheckoutContainer/MapComponentMock.jsx"));
  },
  modules: ["./MapComponentMock"],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ./MapComponentMock */ "./src/shared/containers/GuestCheckoutContainer/MapComponentMock.jsx")];
  },
  loading: function loading() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Loading...");
  }
});
var GuestCheckoutContainer = function GuestCheckoutContainer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
    _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    mapLoaded = _useState2[0],
    loadMap = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, " ", "This is preload webpack chunk loaded", " "), mapLoaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MapComponent, null), !mapLoaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      return loadMap(true);
    }
  }, "load map on click"));
};
/* harmony default export */ __webpack_exports__["default"] = (GuestCheckoutContainer);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbnRhaW5lcnMvR3Vlc3RDaGVja291dENvbnRhaW5lci9HdWVzdENoZWNrb3V0Q29udGFpbmVyLmpzeCJdLCJuYW1lcyI6WyJNYXBDb21wb25lbnQiLCJMb2FkYWJsZSIsImxvYWRlciIsIm1vZHVsZXMiLCJ3ZWJwYWNrIiwicmVxdWlyZSIsImxvYWRpbmciLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJHdWVzdENoZWNrb3V0Q29udGFpbmVyIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJtYXBMb2FkZWQiLCJsb2FkTWFwIiwiRnJhZ21lbnQiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNGOztBQUV0QztBQUNBLElBQU1BLFlBQVksR0FBR0MscURBQVEsQ0FBQztFQUM1QkMsTUFBTSxFQUFFLFNBQUFBLE9BQUE7SUFBQSxPQUNOLDBNQUFrRTtFQUFBO0VBQUFDLE9BQUEsR0FBckIsb0JBQW9CO0VBQUFDLE9BQUEsV0FBQUEsUUFBQTtJQUFBLFFBQUFDLG1CQUFBLENBQXBCLCtGQUFvQjtFQUFBO0VBQ25FQyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtJQUFBLG9CQUFNQyw0Q0FBQSxDQUFBQyxhQUFBLGFBQUksWUFBYyxDQUFDO0VBQUE7QUFDcEMsQ0FBQyxDQUFDO0FBRUssSUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUFzQkEsQ0FBQSxFQUFTO0VBQzFDLElBQUFDLFNBQUEsR0FBNkJDLHNEQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsMkVBQUEsQ0FBQUgsU0FBQTtJQUFyQ0ksU0FBUyxHQUFBRixVQUFBO0lBQUVHLE9BQU8sR0FBQUgsVUFBQTtFQUV6QixvQkFDRUwsNENBQUEsQ0FBQUMsYUFBQSxDQUFBRCw0Q0FBQSxDQUFBUyxRQUFBLHFCQUNFVCw0Q0FBQSxDQUFBQyxhQUFBLGFBQUksR0FBQyxFQUFDLHNDQUFzQyxFQUFDLEdBQUssQ0FBQyxFQUNsRE0sU0FBUyxpQkFBSVAsNENBQUEsQ0FBQUMsYUFBQSxDQUFDUixZQUFZLE1BQUUsQ0FBQyxFQUM3QixDQUFDYyxTQUFTLGlCQUNUUCw0Q0FBQSxDQUFBQyxhQUFBO0lBQVFTLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTUYsT0FBTyxDQUFDLElBQUksQ0FBQztJQUFBO0VBQUMsR0FBQyxtQkFBeUIsQ0FFakUsQ0FBQztBQUVQLENBQUM7QUFFY04scUZBQXNCLEUiLCJmaWxlIjoic2VydmVyL2NodW5rLWd1ZXN0Q2hlY2tvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2FkYWJsZSBmcm9tIFwicmVhY3QtbG9hZGFibGVcIjtcblxuLy90aGlzIGlzIHN5bnRheCBmcm9tIGxvYWRhYmxlIGZvciBkeW5hbWljIGxvYWQgY29tcG9uZW50XG5jb25zdCBNYXBDb21wb25lbnQgPSBMb2FkYWJsZSh7XG4gIGxvYWRlcjogKCkgPT5cbiAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtYXBDb21wb25lbnRcIiovIFwiLi9NYXBDb21wb25lbnRNb2NrXCIpLFxuICBsb2FkaW5nOiAoKSA9PiA8aDM+TG9hZGluZy4uLjwvaDM+LFxufSk7XG5cbmV4cG9ydCBjb25zdCBHdWVzdENoZWNrb3V0Q29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBbbWFwTG9hZGVkLCBsb2FkTWFwXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDQ+IHtcIlRoaXMgaXMgcHJlbG9hZCB3ZWJwYWNrIGNodW5rIGxvYWRlZFwifSA8L2g0PlxuICAgICAge21hcExvYWRlZCAmJiA8TWFwQ29tcG9uZW50IC8+fVxuICAgICAgeyFtYXBMb2FkZWQgJiYgKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGxvYWRNYXAodHJ1ZSl9PmxvYWQgbWFwIG9uIGNsaWNrPC9idXR0b24+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3Vlc3RDaGVja291dENvbnRhaW5lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=