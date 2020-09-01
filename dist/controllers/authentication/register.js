"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../../model/user"));

var _bcryptPass = _interopRequireDefault(require("../../helper/bcryptPass"));

var registerController = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, email, password, name, emailExist, hash, user, newUser, _name, _email, _id, registeredAt;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, password = _req$body.password, name = _req$body.name;
            _context.next = 3;
            return _user["default"].findOne({
              email: email
            });

          case 3:
            emailExist = _context.sent;

            if (!emailExist) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              error: 'User registered before'
            }));

          case 6:
            _context.next = 8;
            return (0, _bcryptPass["default"])(password);

          case 8:
            hash = _context.sent;
            user = new _user["default"]({
              name: name,
              email: email,
              password: hash
            });
            _context.prev = 10;
            _context.next = 13;
            return user.save();

          case 13:
            newUser = _context.sent;
            _name = newUser.name, _email = newUser.email, _id = newUser._id, registeredAt = newUser.registeredAt;
            return _context.abrupt("return", res.status(201).json({
              msg: 'User registered successfully',
              body: {
                name: _name,
                email: _email,
                _id: _id,
                registeredAt: registeredAt
              }
            }));

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](10);
            return _context.abrupt("return", res.status(500).json({
              err: _context.t0.details[0].message
            }));

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[10, 18]]);
  }));

  return function registerController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = registerController;
exports["default"] = _default;