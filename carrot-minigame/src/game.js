'use strict';
import Field from './field.js';
import * as sound from './sound.js';

//builder pattern
export default class GameBuilder {
  gameDuration(duration) {
    this.gameDuration = duration;
    return this;
  }

  carrotCound(num) {
    this.carrotCound = num;
    return this;
  }

  bugCount(num) {
    this.bugCount = num;
    return this;
  }

  build() {
    return new Game(this.gameDuration, this.carrotCound, this.bugCount);
  }
}

class Game {
  constructor(gameDuration, carrotCound, bugCound) {
    this.gameDuration = gameDuration;
    this.carrotCound = carrotCound;
    this.bugCound = bugCound;

    this.gameBtn = document.querySelector('.game__button');
    this.gameTimer = document.querySelector('.game__timer');
    this.gameScore = document.querySelector('.game__score');

    this.gameBtn.addEventListener('click', () => {
      if (this.started) {
        this.stop();
      } else {
        this.start();
      }
    });

    this.gameField = new Field(carrotCound, bugCound);
    this.gameField.setClickListener(this.onItemClick);

    this.started = false;
    this.score = 0;
    this.timer = undefined;
  }

  onItemClick = (item) => {
    if (!this.started) {
      return;
    }
    if (item === 'carrot') {
      this.score++;
      this.updateScoreBoard();
      if (this.score === this.carrotCound) {
        this.finish(true);
      }
    } else if (item === 'bug') {
      this.finish(false);
    }
  };

  setGameListener(onGameStop) {
    this.onGameStop = onGameStop;
  }

  start() {
    this.started = true;
    this.initGame();
    this.showStopButton();
    this.showTimerAndScore();
    this.startGameTimer();
    sound.playBg();
  }

  stop() {
    this.started = false;
    this.stopGameTimer();
    this.hideGameButton();
    sound.playAlert();
    sound.stopBg();
    this.onGameStop && this.onGameStop('cancel');
    //this.gameFinishBanner.showPopupWidthText('REPLAY 😎');
  }

  finish(win) {
    this.started = false;
    this.score = 0;
    this.hideGameButton();
    if (win) {
      sound.playWin();
    } else {
      sound.playBug();
    }
    this.stopGameTimer();
    sound.stopBg();
    this.onGameStop && this.onGameStop(win ? 'win' : 'lose');
    //this.gameFinishBanner.showPopupWidthText(win ? 'YON WON 🎉' : 'YOU LOST 🤢');
  }

  showStopButton() {
    const icon = this.gameBtn.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
    this.gameBtn.style.visibility = 'visible';
  }

  hideGameButton() {
    this.gameBtn.style.visibility = 'hidden';
  }

  showTimerAndScore() {
    this.gameTimer.style.visibility = 'visible';
    this.gameScore.style.visibility = 'visible';
  }

  startGameTimer() {
    let remainingTimeSec = this.gameDuration;
    this.updateTimerText(remainingTimeSec);
    this.timer = setInterval(() => {
      if (remainingTimeSec <= 0) {
        this.finish(this.carrotCound === this.score);
        clearInterval(this.timer);
        return;
      }
      this.updateTimerText(--remainingTimeSec);
    }, 1000);
  }

  stopGameTimer() {
    clearInterval(this.timer);
  }

  updateTimerText(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    this.gameTimer.innerText = `${minutes}:${seconds}`;
  }

  initGame() {
    this.score = 0;
    this.gameScore.innerHTML = this.carrotCound;
    this.gameField.init();
  }

  updateScoreBoard() {
    this.gameScore.innerText = this.carrotCound - this.score;
  }
}
