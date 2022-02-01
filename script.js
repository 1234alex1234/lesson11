let rollback = 5;
let title = prompt("Как называется наш проект");
let screens = prompt("Какие типы экранов нужно разработать");
let screenPrice = +prompt("Сколько будет стоить данная работа");
let adaptive = !!prompt("Нужен ли адаптив на сайте");

let service1 = prompt("Какой дополнительный вид услуг нужен");
let servicePrice1 = +prompt("Сколько это будет стоить");
let service2 = prompt("Какой дополнительный вид услуг нужен");
let servicePrice2 = +prompt("Сколько это будет стоить");

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - fullPrice * (rollback/100);

if (fullPrice >= 30000) {
  console.log("Даем скидку 10%");
} else if (fullPrice < 30000 && fullPrice >= 15000) {
  console.log("Даем скидку 5%");
} else if (fullPrice >= 0 && fullPrice < 15000) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что-то пошло не так!");
}

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей 
и Стоимость разработки сайта ${fullPrice} рублей`);
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback/100));

console.log(fullPrice);
console.log(Math.ceil(servicePercentPrice));