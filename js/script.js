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
book = document.querySelectorAll('.book');
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

liBook5 = book[5].querySelectorAll('li');
liBook5[2].before(liBook5[9]);
liBook5[9].after(liBook5[3]);
liBook5[3].after(liBook5[4]);
//Задание 5==================================

//Задание 6===================================
ulBook6 = book[2].querySelector('ul');
let li = document.createElement('li');
li.innerText = '“Глава 8: За пределами ES6”';
ulBook6.append(li);
//Задание 6==================================