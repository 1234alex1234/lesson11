const box = document.querySelector('#square');
const yellowCircle = document.querySelector('#circle');
const gmyk = document.querySelector('#e_btn');
const btn = document.querySelector('#btn');
const inputRange = document.querySelector('input[type="range"]');
const rangeSpan = document.querySelector('#range-span');


btn.addEventListener("click", function () {
  const inputValue = document.querySelector('input[type="text"]').value;
  box.style.background = inputValue;
  document.querySelector('input[type="text"]').value = '';
});

gmyk.style.display = 'none';

inputRange.addEventListener("input", function () {
  let widthCircle = yellowCircle.offsetWidth;
  let heightCircle = yellowCircle.offsetWidth;
  widthCircle = `${this.value}%`;
  heightCircle = `${this.value}%`;
  yellowCircle.style.width = widthCircle;
  yellowCircle.style.height = heightCircle;
});