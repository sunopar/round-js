'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _round = require('./round');

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function () {
    function get() {
      return _interopRequireDefault(_round)['default'];
    }

    return get;
  }()
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }