'use strict';

const carrotSound = new Audio('./sound/carrot_pull.mp3');
const CARROT_SIZE = 80;

export default class Field {
  constructor(carrotCound, bugCound) {
    this.carrotCound = carrotCound;
    this.bugCound = bugCound;
    this.field = document.querySelector('.game__field');
    this.fieldRect = this.field.getBoundingClientRect();
    this.field.addEventListener('click', this.onClick);
  }

  init() {
    this.field.innerHTML = '';
    this._addItem('carrot', this.carrotCound, 'img/carrot.png');
    this._addItem('bug', this.bugCound, 'img/bug.png');
  }

  _addItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = this.fieldRect.width - CARROT_SIZE;
    const y2 = this.fieldRect.height - CARROT_SIZE;
    for (let i = 0; i < count; i++) {
      const item = document.createElement('img');
      item.setAttribute('class', className);
      item.setAttribute('src', imgPath);
      item.style.position = 'absolute';
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.top = `${y}px`;
      item.style.left = `${x}px`;
      this.field.appendChild(item);
    }
  }

  setClickListener(onItemClick) {
    console.log(onItemClick);
    this.onItemClick = onItemClick;
  }

  onClick(event) {
    const target = event.target;
    if (target.matches('.carrot')) {
      target.remove();
      playSound(carrotSound);
      this.onItemClick && this.onItemClick('carrot');
    } else if (target.matches('.bug')) {
      this.onItemClick && this.onItemClick('bug');
    }
  }
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
