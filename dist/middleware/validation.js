"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginValidation = exports.registerValidation = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var registerValidation = function registerValidation(req, res, next) {
  var schema = _joi["default"].object().keys({
    name: _joi["default"].string().min(5).max(50).required(),
    email: _joi["default"].string().required().email(),
    password: _joi["default"].string().min(6).max(100).required()
  });

  var _schema$validate = schema.validate(req.body),
      error = _schema$validate.error;

  if (error) return res.status(400).json({
    error: error.details[0].message
  });
  next();
};

exports.registerValidation = registerValidation;

var loginValidation = function loginValidation(req, res, next) {
  var schema = _joi["default"].object().keys({
    email: _joi["default"].string().required().email(),
    password: _joi["default"].string().min(6).max(100).required()
  });

  var _schema$validate2 = schema.validate(req.body),
      error = _schema$validate2.error;

  if (error) return res.status(400).json({
    error: error.details[0].message
  });
  next();
};

exports.loginValidation = loginValidation;