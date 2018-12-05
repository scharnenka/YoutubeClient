import './css/style.css';
import './css/fontawesome-free-5.5.0-web/css/all.css';

import {addInput} from './modules/addInput/addInput.js';
import {submitUserRequest} from './modules/submitUserRequest/submitUserRequest.js';

addInput();
let buttonSubmit = document.querySelector('[value="Search"]')
console.log(buttonSubmit);
// buttonSubmit.onсобытие = submitUserRequest;
// window.submitUserRequest=submitUserRequest;
buttonSubmit.addEventListener('click',submitUserRequest,false);

console.log($('form'));
