"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _auth = _interopRequireDefault(require("./route/auth"));

require("./model/db");

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use((0, _cors["default"])());
app.use('/', _auth["default"]);
app.use('/', function (req, res) {
  res.status(200).json({
    message: 'You reached to psychology books finder'
  });
});
var _default = app;
exports["default"] = _default;