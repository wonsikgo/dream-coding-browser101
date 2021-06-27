window.onload = () => {
  const playBtn = document.querySelector('.play');
  const stopBtn = document.querySelector('.stop');
  const reflashBtn = document.querySelector('.reflash');

  const timerCount = document.querySelector('.timer-count');
  const carrotCount = document.querySelector('.carrot-count');
  const field = document.querySelector('.field');
  const reflashPopup = document.querySelector('.reflash-popup');

  const wonComment = document.querySelector('.won-comment');
  const lostComment = document.querySelector('.lost-comment');
  const replyComment = document.querySelector('.reply-comment');

  const carrot = document.querySelector('.carrot');
  const bug = document.querySelector('.bug');

  const browserWidth = document.documentElement.clientWidth - 80;
  const browserHeight = document.documentElement.clientHeight - 80;
  // console.log(`browserWidth : ${browserWidth}`);
  // console.log(`browserHeight : ${browserHeight}`);
  console.log(Math.floor(Math.random() * (browserHeight - 500 + 1) + 500));
  let count = 10;
  let isPlayState = true;

  playBtn.addEventListener('click', () => {
    playBtn.classList.add('hidden');
    stopBtn.classList.remove('hidden');
    timerCount.innerHTML = count;
    countDown();
    setImagePosition();
  });

  stopBtn.addEventListener('click', () => {
    stopBtn.classList.add('visibility');
    reflashPopup.classList.remove('hidden');
    replyComment.classList.remove('hidden');
    isPlayState = false;
  });

  reflashBtn.addEventListener('click', () => {
    field.innerHTML = '';
    stopBtn.classList.remove('visibility');
    reflashPopup.classList.add('hidden');
    count = 10;
    timerCount.innerHTML = count;
    isPlayState = true;
    countDown();
    setImagePosition();
  });

  function countDown() {
    setTimeout(() => {
      if (count < 1 || !isPlayState) return;
      count = count - 1;
      timerCount.innerHTML = count;
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
    // console.log(`x : ${x}`);
    // console.log(`y : ${y}`);
    carrot.setAttribute('src', './img/carrot.png');
    carrot.setAttribute('class', 'carrot');
    carrot.style.position = 'absolute';
    carrot.style.top = `${y}px`;
    carrot.style.left = `${x}px`;
    carrot.addEventListener('click', (e) => {
      field.removeChild(e.target);
    });
    return carrot;
  }

  function createBug() {
    const bug = document.createElement('img');
    const x = randomWidthPosition();
    const y = randomHeightPosition();
    // console.log(`x : ${x}`);
    // console.log(`y : ${y}`);
    bug.setAttribute('src', './img/bug.png');
    bug.setAttribute('class', 'bug');
    bug.style.position = 'absolute';
    bug.style.top = `${y}px`;
    bug.style.left = `${x}px`;
    return bug;
  }

  function randomWidthPosition() {
    return Math.floor(Math.random() * (browserWidth - 0 + 1) + 0);
  }
  function randomHeightPosition() {
    return Math.floor(Math.random() * (browserHeight - 500 + 1) + 500);
  }
};
