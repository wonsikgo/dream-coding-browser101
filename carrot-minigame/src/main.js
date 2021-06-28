'use strict';
import PopUp from './popup.js';
import Game from './game.js';

//const CARROT_SIZE = 80;
// const CARROT_COUNT = 5;
// const BUG_COUNT = 5;
// const GAME_DURATION_SEC = 5;

const gameFinishBanner = new PopUp();

const game = new Game(10, 10, 10);
game.setGameListener((reason) => {
  console.log(reason);
  let message;
  switch (reason) {
    case 'cancel':
      message = 'REPLAY 😎';
      break;
    case 'win':
      message = 'YON WON 🎉';
      break;
    case 'lose':
      message = 'YOU LOST 😢';
      break;
    default:
      console.log('error');
  }
  gameFinishBanner.showPopupWidthText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
// const field = document.querySelector('.game__field');
// const fieldRect = field.getBoundingClientRect();

// const gameBtn = document.querySelector('.game__button');
// const gameTimer = document.querySelector('.game__timer');
// const gameScore = document.querySelector('.game__score');

// const popUp = document.querySelector('.pop-up');
// const popUpText = document.querySelector('.pop-up__message');
// const popUpReflesh = document.querySelector('.pop-up__reflesh');

//const carrotSound = new Audio('./sound/carrot_pull.mp3');
// const bugSound = new Audio('./sound/bug_pull.mp3');
// const bgSound = new Audio('./sound/bg.mp3');
// const alertSound = new Audio('./sound/alert.wav');
// const winSound = new Audio('./sound/game_win.mp3');

// let started = false;
// let score = 0;
// let timer = undefined;

// const gameField = new Field(CARROT_COUNT, BUG_COUNT);
// gameField.setClickListener(onItemClick);

// function onItemClick(item) {
//   console.log('111');
//   if (!started) {
//     return;
//   }
//   console.log(item);
//   if (item === 'carrot') {
//     score++;
//     updateScoreBoard();
//     if (score === CARROT_COUNT) {
//       finishGame(true);
//     }
//   } else if (item === 'bug') {
//     finishGame(false);
//   }
// }

// gameBtn.addEventListener('click', () => {
//   if (started) {
//     stopGame();
//   } else {
//     startGame();
//   }
// });

//field.addEventListener('click', onFieldClick);

// popUpReflesh.addEventListener('click', () => {
//   startGame();
//   hidePopUp();
// });

// function startGame() {
//   started = true;
//   initGame();
//   showStopButton();
//   showTimerAndScore();
//   startGameTimer();
//   // playSound(bgSound);
//   sound.playBg();
// }

// function stopGame() {
//   started = false;
//   stopGameTimer();
//   hideGameButton();
//   gameFinishBanner.showPopupWidthText('REPLAY 😎');
//   //showPopupWidthText('REPLAY 😎');
//   //stopSound(bgSound);
//   //playSound(alertSound);
//   sound.stopBg();
//   sound.playAlert();
// }

// function finishGame(win) {
//   started = false;
//   score = 0;
//   hideGameButton();
//   if (win) {
//     //playSound(winSound);
//     sound.playWin();
//   } else {
//     //playSound(bugSound);
//     sound.playBug();
//   }
//   //stopSound(bgSound);
//   sound.stopBg();
//   stopGameTimer();
//   gameFinishBanner.showPopupWidthText(win ? 'YON WON 🎉' : 'YOU LOST 🤢');
// }

// function showStopButton() {
//   const icon = gameBtn.querySelector('.fas');
//   icon.classList.add('fa-stop');
//   icon.classList.remove('fa-play');
//   gameBtn.style.visibility = 'visible';
// }

// function hideGameButton() {
//   gameBtn.style.visibility = 'hidden';
// }

// function showTimerAndScore() {
//   gameTimer.style.visibility = 'visible';
//   gameScore.style.visibility = 'visible';
// }

// function startGameTimer() {
//   let remainingTimeSec = GAME_DURATION_SEC;
//   updateTimerText(remainingTimeSec);
//   console.log(`remainingTimeSec : ${remainingTimeSec}`);
//   timer = setInterval(() => {
//     console.log(`remainingTimeSec : ${remainingTimeSec}`);
//     if (remainingTimeSec <= 0) {
//       finishGame(CARROT_COUNT === score);
//       clearInterval(timer);
//       return;
//     }
//     updateTimerText(--remainingTimeSec);
//   }, 1000);
// }

// function stopGameTimer() {
//   clearInterval(timer);
// }

// function updateTimerText(time) {
//   const minutes = Math.floor(time / 60);
//   const seconds = time % 60;
//   gameTimer.innerText = `${minutes}:${seconds}`;
// }

// function showPopupWidthText(text) {
//   popUpText.innerText = text;
//   popUp.classList.remove('pop-up--hide');
// }

// function hidePopUp() {
//   popUp.classList.add('pop-up--hide');
// }

// function initGame() {
//   score = 0;
//   gameScore.innerHTML = CARROT_COUNT;
//   gameField.init();
//   //field.innerHTML = '';
//   //벌레와 당근을 생성한뒤 field에 추가
//   //addItem('carrot', CARROT_COUNT, 'img/carrot.png');
//   //addItem('bug', BUG_COUNT, 'img/bug.png');
// }

// function updateScoreBoard() {
//   gameScore.innerText = CARROT_COUNT - score;
// }

// function onFieldClick(event) {
//   if (!started) {
//     return;
//   }

//   const target = event.target;
//   if (target.matches('.carrot')) {
//     target.remove();
//     score++;
//     playSound(carrotSound);
//     updateScoreBoard();
//     if (score === CARROT_COUNT) {
//       finishGame(true);
//     }
//   } else if (target.matches('.bug')) {
//     finishGame(false);
//   }
// }

// function playSound(sound) {
//   sound.currentTime = 0;
//   sound.play();
// }

// function stopSound(sound) {
//   sound.pause();
// }

// function addItem(className, count, imgPath) {
//   const x1 = 0;
//   const y1 = 0;
//   const x2 = fieldRect.width - CARROT_SIZE;
//   const y2 = fieldRect.height - CARROT_SIZE;
//   for (let i = 0; i < count; i++) {
//     const item = document.createElement('img');
//     item.setAttribute('class', className);
//     item.setAttribute('src', imgPath);
//     item.style.position = 'absolute';
//     const x = randomNumber(x1, x2);
//     const y = randomNumber(y1, y2);
//     item.style.top = `${y}px`;
//     item.style.left = `${x}px`;
//     field.appendChild(item);
//   }
// }

// function randomNumber(min, max) {
//   return Math.random() * (max - min) + min;
// }
