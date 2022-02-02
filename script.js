//Переменные
let rollback = 5;

let title = prompt("Как называется наш проект");
let screens = prompt("Какие типы экранов нужно разработать");
let screenPrice = +prompt("Сколько будет стоить данная работа");
let adaptive = !!prompt("Нужен ли адаптив на сайте");

let service1 = prompt("Какой дополнительный вид услуг нужен");
let servicePrice1 = +prompt("Сколько это будет стоить");
let service2 = prompt("Какой дополнительный вид услуг нужен");
let servicePrice2 = +prompt("Сколько это будет стоить");
let fullPrice;


const getAllServicePrices = function() {
  return servicePrice1 + servicePrice2;
};

function getFullPrice() {
  fullPrice = screenPrice + allServicePrices;
  return fullPrice;
}

const getTitle = function() {
  title = title.trim();
  title = title[0].toUpperCase() + title.substring(1).toLowerCase();
  return title;
};

const getServicePercentPrices = function() {
  return fullPrice - fullPrice * (rollback/100);
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


let allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
let servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screens.toLowerCase().split(", "));
console.log(getRollbackMassage());
console.log(servicePercentPrice);