"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _InputText = _interopRequireDefault(require("./InputText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  install: function install(Vue) {
    Vue.component("InputText", _InputText["default"]);
  }
};
exports["default"] = _default;