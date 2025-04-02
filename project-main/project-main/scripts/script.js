'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
    let blackBack = document.getElementById('blackBack');
    const openBtn = document.getElementById('header__login') ;
    const regForm = document.getElementById('regForm') ;
    const colseBtn = document.getElementById('closeBtn') ;
    openBtn.addEventListener('click', function()
    {
        regForm.classList.remove('hidden') ;
        blackBack.style.display = 'block';
    }) ;
    colseBtn.addEventListener('click', function()
    {
        regForm.classList.add('hidden') ;
        blackBack.style.display = 'none' ;
    });
    window.addEventListener('click', function(event)
    {
        if (event.target === regForm) {
            blackBack.style.display = 'none';
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
document.addEventListener('DOMContentLoaded', function() {
    let blackBack = document.getElementById('blackBack');
    let openButtonsTrainers = document.querySelectorAll('.trainers__link');
    const trainers__link = document.getElementById('trainers__linkForm') ;
    const colseBtn1 = document.getElementById('closeBtn1') ;
    openButtonsTrainers.forEach(function(openBtn)
    {
        openBtn.addEventListener('click', function()
        {
            trainers__link.classList.remove('hidden') ;
            blackBack.style.display = 'block';
        }) ;
    });
    colseBtn1.addEventListener('click', function()
    {
        trainers__link.classList.add('hidden');
        blackBack.style.display = 'none';
    });
    window.addEventListener('click', function(event)
    {
        if (event.target === trainers__link) {
            blackBack.style.display = 'none';
         trainers__link.classList.add('hidden') ;
     }
    });
});



const intensiveImg = document.querySelector(".header__login");
intensiveImg.addEventListener('click', () => {
    console.log('всплывает окно регистрации');
});
