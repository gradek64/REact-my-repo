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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbnRhaW5lcnMvR3Vlc3RDaGVja291dENvbnRhaW5lci9HdWVzdENoZWNrb3V0Q29udGFpbmVyLmpzeCJdLCJuYW1lcyI6WyJNYXBDb21wb25lbnQiLCJMb2FkYWJsZSIsImxvYWRlciIsImxvYWRpbmciLCJHdWVzdENoZWNrb3V0Q29udGFpbmVyIiwidXNlU3RhdGUiLCJtYXBMb2FkZWQiLCJsb2FkTWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNGOztBQUV0QztBQUNBLElBQU1BLFlBQVksR0FBR0MscURBQVEsQ0FBQztFQUM1QkMsTUFBTSxFQUFFO0lBQUEsT0FDTiwwTUFBa0U7RUFBQTtFQUFBLFVBQXJCLG9CQUFvQjtFQUFBO0lBQUEsNEJBQXBCLCtGQUFvQjtFQUFBO0VBQ25FQyxPQUFPLEVBQUU7SUFBQSxvQkFBTSx1RUFBSSxZQUFVLENBQUs7RUFBQTtBQUNwQyxDQUFDLENBQUM7QUFFSyxJQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXNCLEdBQVM7RUFDMUMsZ0JBQTZCQyxzREFBUSxDQUFDLEtBQUssQ0FBQztJQUFBO0lBQXJDQyxTQUFTO0lBQUVDLE9BQU87RUFFekIsb0JBQ0UscUlBQ0UsdUVBQUksR0FBQyxFQUFDLHNDQUFzQyxFQUFDLEdBQUMsQ0FBSyxFQUNsREQsU0FBUyxpQkFBSSwyREFBQyxZQUFZLE9BQUcsRUFDN0IsQ0FBQ0EsU0FBUyxpQkFDVDtJQUFRLE9BQU8sRUFBRTtNQUFBLE9BQU1DLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFBQTtFQUFDLEdBQUMsbUJBQWlCLENBQ3hELENBQ0E7QUFFUCxDQUFDO0FBRWNILHFGQUFzQixFIiwiZmlsZSI6InNlcnZlci9jaHVuay1ndWVzdENoZWNrb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9hZGFibGUgZnJvbSBcInJlYWN0LWxvYWRhYmxlXCI7XG5cbi8vdGhpcyBpcyBzeW50YXggZnJvbSBsb2FkYWJsZSBmb3IgZHluYW1pYyBsb2FkIGNvbXBvbmVudFxuY29uc3QgTWFwQ29tcG9uZW50ID0gTG9hZGFibGUoe1xuICBsb2FkZXI6ICgpID0+XG4gICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibWFwQ29tcG9uZW50XCIqLyBcIi4vTWFwQ29tcG9uZW50TW9ja1wiKSxcbiAgbG9hZGluZzogKCkgPT4gPGgzPkxvYWRpbmcuLi48L2gzPixcbn0pO1xuXG5leHBvcnQgY29uc3QgR3Vlc3RDaGVja291dENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgW21hcExvYWRlZCwgbG9hZE1hcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGg0PiB7XCJUaGlzIGlzIHByZWxvYWQgd2VicGFjayBjaHVuayBsb2FkZWRcIn0gPC9oND5cbiAgICAgIHttYXBMb2FkZWQgJiYgPE1hcENvbXBvbmVudCAvPn1cbiAgICAgIHshbWFwTG9hZGVkICYmIChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBsb2FkTWFwKHRydWUpfT5sb2FkIG1hcCBvbiBjbGljazwvYnV0dG9uPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEd1ZXN0Q2hlY2tvdXRDb250YWluZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9