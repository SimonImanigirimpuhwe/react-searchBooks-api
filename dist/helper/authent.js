"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var generateToken = function generateToken(data) {
  var email = data.email,
      _id = data._id;
  var secretKey = process.env.SECRET_KEY;

  try {
    var token = _jsonwebtoken["default"].sign({
      email: email,
      _id: _id
    }, secretKey, {
      algorithm: 'HS256',
      expiresIn: '5d'
    });

    return token;
  } catch (err) {
    throw new Error('Unable to generate token');
  }
};

var _default = generateToken;
exports["default"] = _default;