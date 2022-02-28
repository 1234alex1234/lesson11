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
    p.classList.add(this.selector.substring(1));
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


const dom = new DomElement('.block', '100px', '100px', 'green', '15px');

dom.createEl();


console.log(dom);