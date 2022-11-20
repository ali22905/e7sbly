"use strict";
var _a, _b;
let user_name_inpt = document.getElementById('user_name_inp');
let pass_inpt = document.getElementById('pass_inp');
let all_uns = (_a = user_name_inpt.getAttribute('data-names')) === null || _a === void 0 ? void 0 : _a.split(',');
let all_pass = (_b = user_name_inpt.getAttribute('data-passes')) === null || _b === void 0 ? void 0 : _b.split(',');
let sub_btn = document.getElementById('user_submit');
let valid_un_p = document.getElementById('valid_un');
let signin_form = document.getElementById('signin_form');
let valid_user_name = false;
user_name_inpt.onblur = () => {
    for (let i = 0; i < all_uns.length; i++) {
        if (user_name_inpt.value == all_uns[i]) {
            valid_user_name = true;
            valid_un_p.classList.add('d-none');
            break;
        }
        else {
            valid_user_name = false;
            valid_un_p.classList.remove('d-none');
        }
    }
};
sub_btn.addEventListener('click', (e) => {
    user_name_inpt.blur;
    if (valid_user_name == true) {
        let i = all_uns.indexOf(user_name_inpt.value);
        if (pass_inpt.value == all_pass[i]) {
            document.getElementById('valid_pass').classList.add('d-none');
            window.localStorage.setItem('user_name', user_name_inpt.value);
            window.localStorage.setItem('password', pass_inpt.value);
            signin_form.setAttribute('action', `/home/${user_name_inpt.value}`);
            e;
        }
        else {
            document.getElementById('valid_pass').classList.remove('d-none');
            e.preventDefault();
        }
    }
    else {
        e.preventDefault();
    }
});
