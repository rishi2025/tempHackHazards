'use strict';
const donor = document.querySelector('.donor');
const giver = document.querySelector('.giver');
const hello = document.querySelector('.hello');

let parity = 1;

const changeDonorActive = function () {
    donor.classList.add('activeTask');
    giver.classList.remove('activeTask');
    hello.textContent = "DONOR";
}

const changeGiverActive = function () {
    donor.classList.remove('activeTask');
    giver.classList.add('activeTask');
    hello.textContent = "GIVER";
}

donor.addEventListener('click', changeDonorActive);
giver.addEventListener('click', changeGiverActive);