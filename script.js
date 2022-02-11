const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};


const appData = {
  rollback: 5,
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: '',
  service1: '',
  servicePrice1: 0,
  service2: '',
  servicePrice2: 0,
  fullPrice: 0,
  allServicePrices: 0,
  servicePercentPrice: 0,

  start: function () {
    appData.asking();

    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.title = appData.getTitle();
    appData.servicePercentPrice = appData.getServicePercentPrices();

    appData.logger();
  },

  asking: function () {
    appData.title = prompt("Как называется наш проект", "Калькулятор верстки");
    appData.screens = prompt("Какие типы экранов нужно разработать", "Простые, Сложные, Интерактивные");

    do {
      appData.screenPrice = prompt("Сколько будет стоить данная работа", 20000);
    } while (!isNumber(appData.screenPrice));

    appData.adaptive = confirm("Нужен ли адаптив на сайте");
  },

  getAllServicePrices: function () {
    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.service1 = prompt("Какой дополнительный вид услуг нужен", "Cms");
        appData.servicePrice1 = prompt("Сколько это будет стоить", 5000);
        while (!isNumber(appData.servicePrice1)) {
          alert("Введите пожалуйста число!");
          appData.servicePrice1 = prompt("Сколько это будет стоить");
        }
      } else if (i === 1) {
        appData.service2 = prompt("Какой дополнительный вид услуг нужен", "Метрика");
        appData.servicePrice2 = prompt("Сколько это будет стоить", 4000);
        while (!isNumber(appData.servicePrice2)) {
          alert("Введите пожалуйста число!");
          appData.servicePrice2 = prompt("Сколько это будет стоить");
        }
      }
    }

    return Number(appData.servicePrice1) + Number(appData.servicePrice2);
  },

  getFullPrice: function () {
    appData.fullPrice = Number(appData.screenPrice) + appData.allServicePrices;
    return appData.fullPrice;
  },

  getTitle: function () {
    appData.title = appData.title.trim();
    appData.title = appData.title[0].toUpperCase() + appData.title.substring(1).toLowerCase();
    return appData.title;
  },

  getServicePercentPrices: function () {
    return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
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