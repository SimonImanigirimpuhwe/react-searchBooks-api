"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

_app["default"].use('/', function (req, res) {
  res.status(200).json({
    message: 'You reached to psychology books finder'
  });
});

var port = process.env.PORT || 3000;

_app["default"].listen(port, function () {
  return console.log("app running on port ".concat(port));
});