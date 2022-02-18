// const title = document.getElementsByTagName('h1')[0];
// const handlerBtn1 = document.getElementsByClassName('handler_btn')[0];
// const handlerBtn2 = document.getElementsByClassName('handler_btn')[1];
// const screenBtn = document.querySelector('.screen-btn');
// const otherItemsPercent = document.querySelectorAll('.other-items.percent');
// const otherItemsNumber = document.querySelectorAll('.other-items.number');
// const range = document.querySelector('.rollback input[type=range]');
// const span = document.querySelector('.rollback span.range-value');
// const totalInput1 = document.getElementsByClassName('total-input')[0];
// const totalInput2 = document.getElementsByClassName('total-input')[1];
// const totalInput3 = document.getElementsByClassName('total-input')[2];
// const totalInput4 = document.getElementsByClassName('total-input')[3];
// const totalInput5 = document.getElementsByClassName('total-input')[4];
// let screens = document.querySelectorAll('.screen');


// const isNumber = function (num) {
//   return !isNaN(parseFloat(num)) && isFinite(num);
// };

// const isTrim = function (num) {
//   return (num.length === 0 || !num.trim());
// };


// const appData = {
//   rollback: 5,
//   title: '',
//   screens: [],
//   screenPrice: 0,
//   adaptive: true,
//   servicePrice1: 0,
//   services: {},
//   servicePrice2: 0,
//   fullPrice: 0,
//   allServicePrices: 0,
//   servicePercentPrice: 0,

//   start: function () {
//     appData.asking();

//     appData.getAllServicePrices();
//     appData.getFullPrice();
//     appData.getTitle();
//     appData.getServicePercentPrices();

//     appData.logger();
//   },

//   asking: function () {
//     appData.title = prompt("Как называется наш проект", "Калькулятор верстки");
//     while (isNumber(appData.title) || isTrim(appData.title)) {
//       alert("введите что то кроме цифр, пжл!И не оставляйте строку пустой!");
//       appData.title = prompt("Как называется наш проект", "Калькулятор верстки");
//     }


//     for (let i = 0; i < 3; i++) {
//       let name = prompt("Какие типы экранов нужно разработать");
//       while (isNumber(name) || isTrim(name)) {
//         alert("введите что то кроме цифр, пжл!И не оставляйте строку пустой!");
//         name = prompt("Какие типы экранов нужно разработать");
//       }

//       let price = 0;
//       price = prompt("Сколько это будет стоить");
//       while (!isNumber(price)) {
//         alert("Введите пожалуйста число!");
//         price = prompt("Сколько это будет стоить");
//       }

//       appData.screens.push({
//         id: 1,
//         name: name,
//         price: price
//       });
//     }

//     appData.screenPrice = appData.screens.reduce(function (sum, item) {
//       return sum + Number(item.price);
//     }, 0);


//     for (let i = 0; i < 2; i++) {
//       let name = prompt("Какой дополнительный вид услуг нужен");
//       while (isNumber(name) || isTrim(name)) {
//         alert("введите что то кроме цифр, пжл!И не оставляйте строку пустой!");
//         name = prompt("Какой дополнительный вид услуг нужен");
//       }

//       let price = 0;
//       price = prompt("Сколько это будет стоить");
//       while (!isNumber(price)) {
//         alert("Введите пожалуйста число!");
//         price = prompt("Сколько это будет стоить");
//       }

//       appData.services[i + ' ' + name] = +price;
//     }

//     appData.adaptive = confirm("Нужен ли адаптив на сайте");

//   },

//   getAllServicePrices: function () {

//     for (let keys in appData.services) {
//       appData.allServicePrices += appData.services[keys];
//     }
//   },

//   getFullPrice: function () {
//     appData.fullPrice = Number(appData.screenPrice) + appData.allServicePrices;
//     appData.fullPrice = appData.fullPrice;
//   },

//   getTitle: function () {
//     appData.title = appData.title.trim();
//     appData.title = appData.title[0].toUpperCase() + appData.title.substring(1).toLowerCase();
//     appData.title = appData.title;
//   },

//   getServicePercentPrices: function () {
//     appData.servicePercentPrice = appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
//   },

//   getRollbackMassage: function () {
//     if (appData.fullPrice >= 30000) {
//       return "Даем скидку 10%";
//     } else if (appData.fullPrice < 30000 && appData.fullPrice >= 15000) {
//       return "Даем скидку 5%";
//     } else if (appData.fullPrice >= 0 && appData.fullPrice < 15000) {
//       return "Скидка не предусмотрена";
//     } else {
//       return "Что-то пошло не так!";
//     }
//   },

//   logger: function () {
//     console.log("Стоимость доп услуг", appData.allServicePrices);
//     console.log(appData.getRollbackMassage());
//     console.log("Стоимость с учетом скидки", appData.servicePercentPrice);
//     console.log(appData.screens);

//     for (let key in appData) {
//       console.log(key + ":" + appData[key]);
//     }
//   }
// };

// // appData.start();

// console.log(title);

// console.log(handlerBtn1);
// console.log(handlerBtn2);

// console.log(screenBtn);

// console.log(otherItemsPercent);
// console.log(otherItemsNumber);

// console.log(range);
// console.log(span);
// console.log(screens);

// console.log(totalInput1);
// console.log(totalInput2);
// console.log(totalInput3);
// console.log(totalInput4);
// console.log(totalInput5);


//переменные!==============================
let books;
let book;
let body;
let a;
let newA;
let adv;
let liBook2;
let liBook5;
let ulBook6;

//Задание 1===================================
books = document.querySelector('.books');
console.log(books);
book = document.querySelectorAll('.book');
console.log(book);
books.append(book[2]);
books.prepend(book[1]);
book[3].before(book[4]);
//Задание 1===================================


//Задание 2==================================
body = document.querySelector('body');
let image = `url('image/open_book.jpg')`;
body.style.backgroundImage = image;
//Задание 2==================================


//Задание 3==================================
a = document.querySelectorAll('[target="_blank"]')[2].innerText;
newA = a.replace('попипы', 'тотипы');
document.querySelectorAll('[target="_blank"]')[2].innerText = newA;
//Задание 3==============================================


//Задание 4====================================
adv = document.querySelector('.adv').remove();
//Задание 4====================================

//Задание 5===================================
liBook2 = book[0].querySelectorAll('li');
liBook2[3].after(liBook2[6]);
liBook2[6].after(liBook2[8]);
liBook2[9].after(liBook2[2]);

liBook5 = book[5].querySelectorAll('li');
console.log(liBook5);
liBook5[2].before(liBook5[9]);
liBook5[9].after(liBook5[3]);
liBook5[3].after(liBook5[4]);
liBook5[7].after(liBook5[5]);
//Задание 5==================================

//Задание 6===================================
ulBook6 = book[2].querySelector('ul');
liBook6 = book[2].querySelectorAll('li');
let li = document.createElement('li');
li.innerText = '“Глава 8: За пределами ES6”';
ulBook6.append(li);
ulBook6.append(liBook6[9]);

//Задание 6==================================