"use strict";

var _some = _interopRequireDefault(require("./some.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _some.default)();
let title = document.createElement('h1');
title.textContent = 'Test live';
document.body.appendChild(title);