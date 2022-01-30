const title = "Калькулятор";
const screens = "Простые, Сложные, Интерактивные";
let screenPrice = 45;
let rollback = 55;
let fullPrice = 1000000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log(`"Стоимость верстки экранов ${screenPrice} рублей" и
 "Стоимость разработки сайта ${fullPrice} рублей"`);
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback/100));

alert('Привет, Сергей!');

console.log('Как у Вас дела');

