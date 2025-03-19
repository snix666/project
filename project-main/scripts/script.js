'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});

const intensiveImg = document.querySelector(".header__login");
intensiveImg.addEventListener('click', () => {
    console.log('всплывает окно регистрации');
});
