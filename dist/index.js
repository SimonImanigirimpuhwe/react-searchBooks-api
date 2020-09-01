"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = _interopRequireDefault(require("./app"));

var PORT = process.env.PORT || 3000;

var server = _app["default"].listen(PORT, function () {
  return console.log("app running on port ".concat(PORT));
});

var _default = server;
exports["default"] = _default;