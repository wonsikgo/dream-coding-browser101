'use strict';

const playBtn = document.querySelector('.play');
const stopBtn = document.querySelector('.stop');
const refleshBtn = document.querySelector('.reflesh');

const timerCount = document.querySelector('.timer-count');
const carrotCount = document.querySelector('.carrot-count');
const field = document.querySelector('.field');
const refleshPopup = document.querySelector('.reflesh-popup');

const popupComment = document.querySelector('.comment');

const browserWidth = document.documentElement.clientWidth - 80;
const browserHeight = document.documentElement.clientHeight - 80;

const carrotSound = new Audio('./sound/carrot_pull.mp3');
const bugSound = new Audio('./sound/bug_pull.mp3');
const bgSound = new Audio('./sound/bg.mp3');
const alertSound = new Audio('./sound/alert.wav');
const winSound = new Audio('./sound/game_win.mp3');

let COUNT = 10;
let SCORE = 0;
let isPlayState = true;

playBtn.addEventListener('click', () => {
  startGame();
});

stopBtn.addEventListener('click', () => {
  stopGame();
});

refleshBtn.addEventListener('click', () => {
  refleshGame();
});

function startGame() {
  playBtn.classList.add('hidden');
  stopBtn.classList.remove('hidden');
  timerCount.innerHTML = COUNT;
  carrotCount.innerHTML = SCORE;
  countDown();
  setImagePosition();
  bgSound.play();
}

function stopGame() {
  stopBtn.classList.add('visibility');
  refleshPopup.classList.remove('hidden');
  popupComment.innerText = 'Replay 😎';
  isPlayState = false;
  alertSound.play();
}

function refleshGame(params) {
  field.innerHTML = '';
  stopBtn.classList.remove('visibility');
  refleshPopup.classList.add('hidden');
  COUNT = 10;
  SCORE = 0;
  timerCount.innerHTML = COUNT;
  carrotCount.innerHTML = SCORE;
  isPlayState = true;
  countDown();
  setImagePosition();
  bgSound.play();
}

function countDown() {
  setTimeout(() => {
    if (COUNT === 0 && SCORE < 10) {
      onBug();
      return;
    }
    if (COUNT < 1 || !isPlayState) return;
    COUNT = COUNT - 1;
    timerCount.innerHTML = COUNT;
    countDown();
  }, 1000);
}

function setImagePosition() {
  for (let i = 0; i < 10; i++) {
    const carrot = createCarrot();
    const bug = createBug();
    field.appendChild(carrot);
    field.appendChild(bug);
  }
}

function createCarrot() {
  const carrot = document.createElement('img');
  const x = randomWidthPosition();
  const y = randomHeightPosition();
  carrot.setAttribute('src', './img/carrot.png');
  carrot.setAttribute('class', 'carrot');
  carrot.style.position = 'absolute';
  carrot.style.top = `${y}px`;
  carrot.style.left = `${x}px`;
  carrot.addEventListener('click', (e) => {
    field.removeChild(e.target);
    onCarrot();
  });
  return carrot;
}

function createBug() {
  const bug = document.createElement('img');
  const x = randomWidthPosition();
  const y = randomHeightPosition();
  bug.setAttribute('src', './img/bug.png');
  bug.setAttribute('class', 'bug');
  bug.style.position = 'absolute';
  bug.style.top = `${y}px`;
  bug.style.left = `${x}px`;
  bug.addEventListener('click', () => {
    onBug();
  });
  return bug;
}

function randomWidthPosition() {
  return Math.floor(Math.random() * (browserWidth - 0 + 1) + 0);
}
function randomHeightPosition() {
  return Math.floor(Math.random() * (browserHeight - 500 + 1) + 500);
}

function onCarrot() {
  SCORE = SCORE + 1;
  carrotCount.innerHTML = SCORE;
  carrotSound.play();
  if (SCORE === 10 && COUNT >= 0) {
    winSound.play();
    isPlayState = false;
    refleshPopup.classList.remove('hidden');
    stopBtn.classList.add('visibility');
    popupComment.innerHTML = 'YOU WON 🎉';
  }
}

function onBug() {
  bugSound.play();
  isPlayState = false;
  stopBtn.classList.add('visibility');
  refleshPopup.classList.remove('hidden');
  popupComment.innerHTML = 'YOU LOST 😜';
}
