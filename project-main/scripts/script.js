'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
    let blackBack = document.getElementById('blackBack');
    const openBtn = document.getElementById('header__login');
    const regForm = document.getElementById('regForm');
    const colseBtn = document.getElementById('closeBtn');
    openBtn.addEventListener('click', function () {
        regForm.classList.remove('hidden');
        blackBack.style.display = 'block';
    });
    colseBtn.addEventListener('click', function () {
        regForm.classList.add('hidden');
        blackBack.style.display = 'none';
    });
    window.addEventListener('click', function (event) {
        if (event.target === regForm) {
            blackBack.style.display = 'none';
            regForm.classList.add('hidden');
        }
    });
});
    document.addEventListener('DOMContentLoaded', function () {
        const image = document.getElementById('imageZoom');
        image.addEventListener('click', function () {
            if (this.style.width === '' || this.style.width === '150px') {
                this.style.width = '450px';
            } else {
                this.style.width = '150px';
            }
        });
    });

document.addEventListener('DOMContentLoaded', function()
{
    const cardsCon = document.querySelector(".trainers");
    if (cardsCon) 
    {
        const cardList = cardsCon.querySelector(".trainers__list");

        // Пример URL для получения данных с сервера
        const apiUrl = "data.json";

        // Функция для создания карточки
        const createCard = (image,name,job,description) => {
            // Шаблонные строки и подстановки
            const card = `
                <li class="trainers__item">
                       <img class="trainers__image" src="${image}" alt="" width="100">
                        <h3 class="trainers__name">${name}</h3>
                        <p class="trainers__job">${job}</p>
                        <p class="trainers__desc">${description}</p>
                        <button class="trainers__link">Записаться на консультацию</button>
                   </li>
            `;
            return card;
        };
             // Загрузка данных с сервера
             fetch(apiUrl)
             .then((response) => response.json())
             .then((data) => 
            {
                console.log(data); // Данные
                console.log(typeof data); // Тип полученных данных

                data.forEach((item) => 
                {
                     const cardElement = createCard(
                         item.image,
                         item.name,
                         item.description,
                         item.job,
                     );
                     cardList.insertAdjacentHTML("beforeend", cardElement);
                 });
                 //клик по кнопкам
                 let blackBack = document.getElementById('blackBack');
        let openButtonsTrainers = document.querySelectorAll('.trainers__link');
        const trainers__link = document.getElementById('trainers__linkForm');
        const colseBtn1 = document.getElementById('closeBtn1');
        openButtonsTrainers.forEach(function (openBtn) {
            openBtn.addEventListener('click', function () {
                trainers__link.classList.remove('hidden');
                blackBack.style.display = 'block';
            });
        });
        colseBtn1.addEventListener('click', function () {
            trainers__link.classList.add('hidden');
            blackBack.style.display = 'none';
        });
        window.addEventListener('click', function (event) {
            if (event.target === trainers__link) {
                blackBack.style.display = 'none';
                trainers__link.classList.add('hidden');
            }
        });
             })
            .catch((error) => {
                console.error("Ошибка при загрузке данных:", error);
            });
        }
});


    const intensiveImg = document.querySelector(".header__login");
    intensiveImg.addEventListener('click', () => {
        console.log('всплывает окно регистрации');
    });

    /*const trainersContainer = document.querySelector(".trainers"); 
        if (trainersContainer) {
            const dataTitleTrainers = [
                "Овчинников Игорь Сергеевич",
                "Уксусова Надежда Александровна",
                "Мазунин Виктор Дмитриевич",
            ];
            const titleTrainers =
                trainersContainer.querySelectorAll(".trainers__name");
                titleTrainers.forEach((item, index) => {
                item.textContent = dataTitleTrainers[index];
            });
     }
    
    
    */

    // const cardsPrice = document.querySelector('.trainers');

    // if (cardsPrice) {
    //         const priceList = cardsPrice.querySelector('.trainers__list');

    //         const cardsPriceData = {
    //             price1: {
    //                 name: 'Овчинников Игорь',
    //                 job: 'Главный Тренер',
    //                 description: 'Подготовлю к соервнованиям с нуля за месяц.',
    //                 image: 'images/logo.png'
    //             },
    //             price2: {
    //                 name: 'Уксусова Надежда',
    //                 job: 'Тренер',
    //                 description: 'Обладаю большим опытом. Призер и победитель множенства соревнований.',
    //                 image: 'images/logo.png'
    //             },
    //             price3: {
    //                 name: 'Мазунин Виктор',
    //                 job: 'Тренер',
    //                 description: 'Помогу разобраться с основами бильярда в короткий срок!',
    //                 image: 'images/logo.png'
    //             }
    //         }
    //         const createCard = (name, job, description,image) => {
    //             const card = `
    //             <li class="trainers__item">
    //                     <img class="trainers__image" src="${image}" alt="" width="100">
    //                     <h3 class="trainers__name">${name}</h3>
    //                     <p class="trainers__job">${job}</p>
    //                     <p class="trainers__desc">${description}</p>
    //                     <button class="trainers__link">Записаться на консультацию</button>
    //                 </li>
    //         `;
    //             return card;
    //         }
    //         for (const cardKey in cardsPriceData) { 
    //             const card = cardsPriceData[cardKey];
    //             const cardElement = createCard(card.name, card.job, card.description, card.image);
    //             priceList.insertAdjacentHTML('beforeend', cardElement);
    //         }
    //}
    //3.6

    const preloader = document.querySelector(".preloader");
    const content = document.querySelector(".content");
    if (preloader && content) 
    {
        setTimeout(() => 
        {
            // Скрываем прелоадер
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";

            // Показываем контент
            content.style.display = "block";

            // Удаляем элемент из DOM
            preloader.remove();
        }, 3000); // Задержка 3 секунды
    }

            

document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelector(".swiper");
    //проверяем существует ли элемент
    if (sliders) {
        const swiper = new Swiper(sliders, {
            // Пагинация
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },

            // Навигационные стрелки
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
});

document.addEventListener('DOMContentLoaded', function()
{
    let addNewClientButton = document.getElementById('addNewClientButton');
    addNewClientButton.addEventListener('click',function()
    {
         let firstname = document.getElementById('firstname').value;
         if (!/^[а-яА-ЯёЁ]{5,}$/.test(firstname))
         {
             alert('ERROR');
         }
    });
});