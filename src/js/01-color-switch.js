import '../sass/index.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtnRef: document.querySelector('button[data-action="start"]'),
  stopBtnRef: document.querySelector('button[data-action="stop"]'),
};

class ColorRandomiser {
  constructor(array) {
    this.colors = array;
    this.startBtnIsActive = true;
    this.intervalId = null;
  }

  startChangingBgColor(evt) {
    evt.target.disabled = this.startBtnIsActive;
    this.intervalId = setInterval(this.getRandomColor.bind(this), 1000);
  }

  stopChangingBgColor(evt) {
    clearInterval(this.intervalId);
    evt.target.previousElementSibling.disabled = !this.startBtnIsActive;
  }

  randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getRandomColor() {
    const length = this.colors.length - 1;
    document.body.style.backgroundColor =
      this.colors[this.randomIntegerFromInterval(0, length)];
  }
}

const backgroundColor = new ColorRandomiser(colors);

refs.startBtnRef.addEventListener(
  'click',
  backgroundColor.startChangingBgColor.bind(backgroundColor)
);

refs.stopBtnRef.addEventListener(
  'click',
  backgroundColor.stopChangingBgColor.bind(backgroundColor)
);
