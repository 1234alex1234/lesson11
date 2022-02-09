// //Переменные
let rollback = 5;

let title;
let screens;
let screenPrice;
let adaptive;

let service1;
let servicePrice1;
let service2;
let servicePrice2;

let fullPrice;
let ask;
let allServicePrices;
let servicePercentPrice;


const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется наш проект", "Калькулятор верстки");
  screens = prompt("Какие типы экранов нужно разработать", "Простые, Сложные, Интерактивные");

  do {
    screenPrice = prompt("Сколько будет стоить данная работа", 20000);
  } while (!isNumber(screenPrice));

  adaptive = confirm("Нужен ли адаптив на сайте");
};

const getAllServicePrices = function () {
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный вид услуг нужен", "Cms");
      servicePrice1 = prompt("Сколько это будет стоить", 5000);
      while (!isNumber(servicePrice1)) {
        alert("Введите пожалуйста число!");
        servicePrice1 = prompt("Сколько это будет стоить");
      }
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный вид услуг нужен", "Метрика");
      servicePrice2 = prompt("Сколько это будет стоить", 4000);
      while (!isNumber(servicePrice2)) {
        alert("Введите пожалуйста число!");
        servicePrice2 = prompt("Сколько это будет стоить");
      }
    }
  }

  return Number(servicePrice1) + Number(servicePrice2);
};


function getFullPrice() {
  fullPrice = Number(screenPrice) + allServicePrices;
  return fullPrice;
}

const getTitle = function () {
  title = title.trim();
  title = title[0].toUpperCase() + title.substring(1).toLowerCase();
  return title;
};

const getServicePercentPrices = function () {
  return fullPrice - fullPrice * (rollback / 100);
};

function showTypeOf(variable) {
  console.log(typeof variable);
}

function getRollbackMassage() {
  if (fullPrice >= 30000) {
    return "Даем скидку 10%";
  } else if (fullPrice < 30000 && fullPrice >= 15000) {
    return "Даем скидку 5%";
  } else if (fullPrice >= 0 && fullPrice < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так!";
  }
}


ask = asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();



console.log("Стоимость доп услуг", allServicePrices);
console.log(getRollbackMassage());
console.log("Стоимость с учетом скидки", servicePercentPrice);