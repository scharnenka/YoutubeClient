"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function addDiv() {
  let div = document.createElement('div');
  div.innerHTML = '<h1>Hellow World</h1>';
  document.body.appendChild(div);
}

console.log('Hi!');
var _default = addDiv;
exports.default = _default;