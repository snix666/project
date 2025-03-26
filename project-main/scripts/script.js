'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')

    const openBtn = document.getElementById('header__login') ;
    const regForm = document.getElementById('regForm') ;
    const colseBtn = document.getElementById('closeBtn') ;
    openBtn.addEventListener('click', function()
    {
        regForm.classList.remove('hidden') ;
    }) ;
    colseBtn.addEventListener('click', function()
    {
        regForm.classList.add('hidden')
    });
    window.addEventListener('click', function(event)
    {
        if (event.target === regForm) {
         regForm.classList.add('hidden') ;
     }
    });
});
document.addEventListener('DOMContentLoaded', function() { 
    const image = document.getElementById('imageZoom') ;
    image.addEventListener('click', function(){ 
        if (this.style.width === '' || this.style.width === '150px'){
            this.style.width = '450px'; 
        }  else {
            this.style.width = '150px' ;
        }
    }) ;    
    });



const intensiveImg = document.querySelector(".header__login");
intensiveImg.addEventListener('click', () => {
    console.log('всплывает окно регистрации');
});
