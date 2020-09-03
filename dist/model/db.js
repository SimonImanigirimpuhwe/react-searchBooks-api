"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.url = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("../../config/config"));

var options = {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true
};
var _config$db = _config["default"].db,
    port = _config$db.port,
    host = _config$db.host,
    name = _config$db.name;
var url = _config["default"].db.database_url || "mongodb://".concat(host, ":").concat(port, "/").concat(name, "?authSource=admin");
exports.url = url;

var _default = _mongoose["default"].connect(url, options).then(function () {
  return console.log('MongoDB connected...');
})["catch"](function (err) {
  throw new Error(err);
});

exports["default"] = _default;