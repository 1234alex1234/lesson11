const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};


const appData = {
  rollback: 5,
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  servicePrice1: 0,
  services: {},
  servicePrice2: 0,
  fullPrice: 0,
  allServicePrices: 0,
  servicePercentPrice: 0,

  start: function () {
    appData.asking();

    appData.getAllServicePrices();
    appData.getFullPrice();
    appData.getTitle();
    appData.getServicePercentPrices();

    appData.logger();
  },

  asking: function () {
    appData.title = prompt("Как называется наш проект", "Калькулятор верстки");
    while (isNumber(appData.title)) {
      alert("введите что то кроме цифр, пжл!");
      appData.title = prompt("Как называется наш проект", "Калькулятор верстки");
    }

    for (let i = 0; i < 3; i++) {
      let name = prompt("Какие типы экранов нужно разработать");
      while (isNumber(name)) {
        alert("введите что то кроме цифр, пжл!");
        name = prompt("Какие типы экранов нужно разработать");
      }

      let price = 0;
      price = prompt("Сколько это будет стоить");
      while (!isNumber(price)) {
        alert("Введите пожалуйста число!");
        price = prompt("Сколько это будет стоить");
      }

      appData.screens.push({
        id: 1,
        name: name,
        price: price
      });
    }

    appData.screenPrice = appData.screens.reduce(function (sum, item) {
      return sum + Number(item.price);
    }, 0);


    for (let i = 0; i < 2; i++) {
      let name = prompt("Какой дополнительный вид услуг нужен");
      while (isNumber(name)) {
        alert("введите что то кроме цифр, пжл!");
        name = prompt("Какой дополнительный вид услуг нужен");
      }

      let price = 0;
      price = prompt("Сколько это будет стоить");
      while (!isNumber(price)) {
        alert("Введите пожалуйста число!");
        price = prompt("Сколько это будет стоить");
      }

      appData.services[i + ' ' + name] = +price;
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте");

  },

  getAllServicePrices: function () {

    for (let keys in appData.services) {
      appData.allServicePrices += appData.services[keys];
    }
  },

  getFullPrice: function () {
    appData.fullPrice = Number(appData.screenPrice) + appData.allServicePrices;
    appData.fullPrice = appData.fullPrice;
  },

  getTitle: function () {
    appData.title = appData.title.trim();
    appData.title = appData.title[0].toUpperCase() + appData.title.substring(1).toLowerCase();
    appData.title = appData.title;
  },

  getServicePercentPrices: function () {
    appData.servicePercentPrice = appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  getRollbackMassage: function () {
    if (appData.fullPrice >= 30000) {
      return "Даем скидку 10%";
    } else if (appData.fullPrice < 30000 && appData.fullPrice >= 15000) {
      return "Даем скидку 5%";
    } else if (appData.fullPrice >= 0 && appData.fullPrice < 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что-то пошло не так!";
    }
  },

  logger: function () {
    console.log("Стоимость доп услуг", appData.allServicePrices);
    console.log(appData.getRollbackMassage());
    console.log("Стоимость с учетом скидки", appData.servicePercentPrice);

    for (let key in appData) {
      console.log(key + ":" + appData[key]);
    }
  }
};

appData.start();