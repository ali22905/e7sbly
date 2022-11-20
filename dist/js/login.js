"use strict";
var _a;
let user_name = document.getElementById("user_name_inp");
let password = document.getElementById("pass_inp");
document.getElementById('user_submit').addEventListener('click', (e) => {
    window.localStorage.setItem('user_name', user_name.value);
    window.localStorage.setItem('password', password.value);
    e;
});
let user_name_inp = document.getElementById('user_name_inp');
let user_names = (_a = user_name_inp.getAttribute('data-names')) === null || _a === void 0 ? void 0 : _a.split(',');
let pass_inp = document.getElementById('pass_inp');
let user_submit = document.getElementById('user_submit');
let valid_un = false;
let valid_pass = false;
pass_inp.onblur = () => {
    var _a, _b;
    if (pass_inp.value == '') {
        (_a = document.getElementById('valid_pass')) === null || _a === void 0 ? void 0 : _a.classList.remove('d-none');
        valid_pass = false;
    }
    else {
        (_b = document.getElementById('valid_pass')) === null || _b === void 0 ? void 0 : _b.classList.add('d-none');
        valid_pass = true;
    }
};
user_name_inp.onblur = () => {
    var _a, _b;
    for (let i = 0; i < user_names.length; i++) {
        if (user_names[i] == user_name_inp.value) {
            valid_un = false;
            break;
        }
        else {
            valid_un = true;
        }
    }
    if (!valid_un) {
        (_a = document.getElementById('valid_un')) === null || _a === void 0 ? void 0 : _a.classList.remove('d-none');
    }
    else {
        (_b = document.getElementById('valid_un')) === null || _b === void 0 ? void 0 : _b.classList.add('d-none');
    }
};
user_submit.addEventListener('click', (e) => {
    if (!valid_un || !valid_pass) {
        e.preventDefault();
    }
    else {
        e;
    }
});
