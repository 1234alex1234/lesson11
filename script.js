document.addEventListener("DOMContentLoaded", function () {


  function DomElement(selector, height, width, backgroundColor, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = backgroundColor;
    this.fontSize = fontSize;
  }

  DomElement.prototype.createEl = function () {
    if (this.selector[0] == '#') {
      let p = document.createElement('p');
      p.id = this.selector.substring(1);
      p.innerHTML = 'Привет, жестокий мир!';
      p.style.cssText = `
    background-color: ${this.bg};
    width: ${this.width};
    height: ${this.height};
    font-size: ${this.fontSize};
    position: absolute;
    `;
      document.body.append(p);
    } else if (this.selector[0] == '.') {
      let div = document.createElement('div');
      div.classList.add(this.selector.substring(1));
      div.innerHTML = 'Привет, жестокий мир!';
      div.style.cssText = `
    background-color: ${this.bg};
    width: ${this.width};
    height: ${this.height};
    font-size: ${this.fontSize};
    position: absolute;
    `;
      document.body.append(div);
    }
  };

  DomElement.prototype.moveBlock = function (e) {
    block = document.querySelector(this.selector);


    window.addEventListener("keydown", function (e) {


      if (e.keyCode == 39) {

        block.style.left = block.offsetLeft + 10 + 'px';
      } else if (e.keyCode == 40) {

        block.style.top = block.offsetTop + 10 + 'px';
      } else if (e.keyCode == 37) {

        block.style.left = block.offsetLeft - 10 + 'px';
      } else if (e.keyCode == 38) {
        block.style.top = block.offsetTop - 10 + 'px';

      }

    });
  };

  const dom = new DomElement('.block', '100px', '100px', 'green', '15px');

  dom.createEl();
  dom.moveBlock();

  console.log(dom);

});