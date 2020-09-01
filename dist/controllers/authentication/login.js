"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _user = _interopRequireDefault(require("../../model/user"));

var _authent = _interopRequireDefault(require("../../helper/authent"));

var loginController = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, email, password, user, validPass, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context.next = 3;
            return _user["default"].findOne({
              email: email
            });

          case 3:
            user = _context.sent;

            if (user) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              error: 'Invalid email or password'
            }));

          case 6:
            _context.prev = 6;
            _context.next = 9;
            return _bcryptjs["default"].compare(password, user.password);

          case 9:
            validPass = _context.sent;

            if (validPass) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              error: 'Invalid password'
            }));

          case 12:
            token = (0, _authent["default"])(user);
            return _context.abrupt("return", res.status(200).json({
              msg: 'logged in successfully',
              token: token
            }));

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](6);
            return _context.abrupt("return", res.status(500).json({
              error: _context.t0.message
            }));

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 16]]);
  }));

  return function loginController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = loginController;
exports["default"] = _default;