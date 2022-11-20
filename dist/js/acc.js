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
let all_data = document.getElementById("data");
const game_name = document.getElementById('game_name');
const game_price = document.getElementById('game_price');
const save_btn = document.getElementById('save_btn');
const reset_btn = document.getElementById('reset_btn');
const plus_btn = document.getElementById('plus_btn');
const delete_inp_btns = document.querySelectorAll('.delete-inp');
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
});
save_btn.addEventListener('click', (e) => {
    let names = document.querySelectorAll('.set-name');
    let prices = document.querySelectorAll('.set-price');
    let valid_name = true;
    let valid_price = true;
    names.forEach((name) => {
        if (name.value == '') {
            valid_name = false;
            document.getElementById('invalid_name').classList.remove('d-none');
        }
        else {
            valid_name = true;
            document.getElementById('invalid_name').classList.add('d-none');
        }
    });
    prices.forEach((price) => {
        if (price.value == '') {
            valid_price = false;
            document.getElementById('invalid_price').classList.remove('d-none');
        }
        else {
            valid_price = true;
            document.getElementById('invalid_price').classList.add('d-none');
        }
    });
    if (valid_name == true && valid_price == true) {
        e;
    }
    else {
        e.preventDefault();
    }
});
document.getElementById('user_name').value = localStorage.getItem('user_name');
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
fetch("/", { method: 'POST' })
    .then(data => {
    return data.json();
})
    .then(data => {
    console.log(data);
    window.location.href = '/login';
});
let user_name_link = document.getElementById('reset_btn').getAttribute('data-link');
document.getElementById('reset_btn').addEventListener('click', () => {
    reset_req(`/home/${user_name_link}`);
});
const reset_req = (API_link) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(API_link, { method: 'PUT' });
        const data = yield response.json();
        console.log(data);
        window.location.href = `/home/${user_name_link}`;
    }
    catch (err) {
        console.log(`myError from the delete request :  ${err}`);
    }
});
let add_game_btn = document.getElementById('add_game_btn');
add_game_btn.addEventListener('click', () => {
    let play_game_card = document.getElementById('play_game_card');
    let new_play_card = play_game_card.cloneNode(true);
    play_game_card.after(new_play_card);
    let delete_set_btns = document.querySelectorAll('.delete_set_game');
    console.log(delete_set_btns);
    delete_set_btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentNode.parentNode.parentNode.remove();
        });
    });
});
let start_time_inp = document.querySelectorAll('.start_clock');
function update_start_time(clock) {
    clock.value = new Date().toLocaleTimeString();
}
start_time_inp.forEach(input => {
    update_start_time(input);
    setInterval(function () {
        update_start_time(input);
    }, 60000);
});
let start_btns = document.querySelectorAll('.start_play_game');
let game_price_inp = document.getElementById('game_price_inp');
let timeRegex = /(\d{2}|\d{1}):\d{2}:\d{2}\s(PM|AM)/g;
let start_play_game = document.getElementById('start_play_game');
let prices = all_data.getAttribute('data-prices').split(",");
let games = all_data.getAttribute('data-games').split(",");
start_play_game.addEventListener('click', (e) => {
    let game_selectors = document.querySelectorAll('.playing_game');
    let game_price_inps = document.querySelectorAll('.game_price_inp');
    for (let i = 0; i < game_selectors.length; i++) {
        let game_i = games.indexOf(game_selectors[i].options[game_selectors[i].selectedIndex].text);
        let game_price = prices[game_i];
        game_price_inps[i].value = game_price;
    }
});
let delete_client_btns = document.querySelectorAll('.delete_play_game');
let user_id = all_data.getAttribute('data-id');
let chosen_games = all_data.getAttribute('data-chosen_game').split(',');
let chosen_game_prices = all_data.getAttribute('data-chosen_game_price').split(',');
let clients_names = all_data.getAttribute('data-client_name').split(',');
let start_times = all_data.getAttribute('data-start_time').split(',');
delete_client_btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let index = parseInt(btn.getAttribute('data-index'));
        chosen_games.splice(index, 1);
        chosen_game_prices.splice(index, 1);
        clients_names.splice(index, 1);
        start_times.splice(index, 1);
        let req_body = {
            chosen_game: chosen_games,
            chosen_game_price: chosen_game_prices,
            client_name: clients_names,
            start_time: start_times,
            index: index
        };
        delete_client(`/acc/${user_id}`, req_body);
    });
});
const delete_client = (PASS, req_body) => {
    fetch(PASS, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(req_body) })
        .then((result) => {
        return result.json();
    })
        .then(data => {
        window.location.href = `/home/${data.user_name}`;
    });
};
