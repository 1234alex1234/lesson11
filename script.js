const box = document.querySelector('#square');
const yellowCircle = document.querySelector('#circle');
const gmyk = document.querySelector('#e_btn');
const btn = document.querySelector('#btn');
const inputRange = document.querySelector('input[type="range"]');
const rangeSpan = document.querySelector('#range-span');


function changeColor() {
  const inputValue = document.querySelector('input[type="text"]').value;
  box.style.background = inputValue;
  document.querySelector('input[type="text"]').value = '';
};

function changeWidth() {
  let widthCircle = yellowCircle.offsetWidth;
  let heightCircle = yellowCircle.offsetWidth;
  widthCircle = `${this.value}%`;
  heightCircle = `${this.value}%`;
  yellowCircle.style.width = widthCircle;
  yellowCircle.style.height = heightCircle;
  rangeSpan.innerText = this.value;
};


rangeSpan.innerText = inputRange.value;
gmyk.style.display = 'none';

btn.addEventListener("click", changeColor);
inputRange.addEventListener("input", changeWidth);