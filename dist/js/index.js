"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const game_name = document.getElementById('game_name');
const game_price = document.getElementById('game_price');
const save_btn = document.getElementById('save_btn');
const reset_btn = document.getElementById('reset_btn');
const plus_btn = document.getElementById('plus_btn');
const delete_inp_btns = document.querySelectorAll('.delete-inp');
const popup = document.getElementById('popup');
const not_now_btn = document.getElementById('not_now_btn');
plus_btn.addEventListener('click', () => {
    let code = 0;
    let row = document.createElement('div');
    row.classList.add('row');
    let inp1 = document.createElement('input');
    inp1.setAttribute('type', 'text');
    inp1.setAttribute('placeholder', 'game name');
    inp1.setAttribute('data-n-code', `${code}`);
    inp1.setAttribute('name', `game`);
    inp1.classList.add('set-name');
    let span = document.createElement('span');
    let mince = document.createTextNode('--');
    span.append(mince);
    span.classList.add('delete-inp');
    let inp2 = document.createElement('input');
    inp2.setAttribute('type', 'number');
    inp2.setAttribute('placeholder', 'price/hour');
    inp2.setAttribute('data-p-code', `${code}`);
    inp2.setAttribute('name', `price`);
    inp2.classList.add('set-price');
    row.appendChild(inp1);
    row.appendChild(span);
    row.appendChild(inp2);
    code++;
    document.querySelector('section.games-settings .set-games').appendChild(row);
    span.addEventListener('click', () => {
        span.parentNode.remove();
    });
    popup === null || popup === void 0 ? void 0 : popup.classList.remove('d-none');
});
save_btn.addEventListener('click', (e) => {
    e.preventDefault();
    popup === null || popup === void 0 ? void 0 : popup.classList.remove('d-none');
});
document.getElementById('user_name').value = localStorage.getItem('user_name');
reset_btn.addEventListener('click', () => {
    popup === null || popup === void 0 ? void 0 : popup.classList.remove('d-none');
});
const add_to_cart = (API_link) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(API_link, { method: 'POST' });
        const data = yield response.json();
        console.log(data);
        window.location.href = '/home';
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
});
not_now_btn.addEventListener('click', () => {
    popup === null || popup === void 0 ? void 0 : popup.classList.add('d-none');
});
fetch("/", { method: 'POST' })
    .then(data => {
    return data.json();
})
    .then(data => {
    console.log(data);
    window.location.href = '/login';
});
