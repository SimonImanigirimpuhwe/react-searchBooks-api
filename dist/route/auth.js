"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _authentication = _interopRequireDefault(require("../controllers/authentication"));

var _validation = require("../middleware/validation");

var authRouter = new _express.Router();
authRouter.post('/register', _validation.registerValidation, _authentication["default"].registerController).post('/login', _validation.loginValidation, _authentication["default"].loginController);
var _default = authRouter;
exports["default"] = _default;