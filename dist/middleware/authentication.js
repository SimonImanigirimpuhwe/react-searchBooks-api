"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var authentication = function authentication(req, res, next) {
  var token = req.header('auth-token');
  if (!token) return res.status(400).json({
    error: 'Access Denied'
  });

  try {
    var secretKey = process.env.SECRETE_KEY;

    var decoded = _jsonwebtoken["default"].verify(token, secretKey);

    req.user = decoded;
    next();
  } catch (err) {
    return res.status(400).json({
      err: 'Invalid token'
    });
  }
};

var _default = authentication;
exports["default"] = _default;