window.onload = () => {
  const html = document.querySelector('html');
  const playBtn = document.querySelector('.play');
  const stopbTN = document.querySelector('.stop');
  const timerCount = document.querySelector('.timer-count');
  const field = document.querySelector('.field');
  const browserWidth = document.documentElement.clientWidth - 80;
  const browserHeight = document.documentElement.clientHeight - 80;
  console.log(`browserWidth : ${browserWidth}`);
  console.log(`browserHeight : ${browserHeight}`);
  console.log(Math.floor(Math.random() * (browserHeight - 500 + 1) + 500));
  let count = 10;
  let isPlayState = true;

  playBtn.addEventListener('click', () => {
    playBtn.classList.add('hidden');
    stopbTN.classList.remove('hidden');
    timerCount.innerHTML = count;
    countDown();
    setImagePosition();
  });

  stopbTN.addEventListener('click', () => {
    stopbTN.classList.add('hidden');
    playBtn.classList.remove('hidden');
    isPlayState = false;
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
      const parrat = document.createElement('img');
      const x = randomWidthPosition();
      const y = randomHeightPosition();
      console.log(`x : ${x}`);
      console.log(`y : ${y}`);
      parrat.setAttribute('src', './img/carrot.png');
      parrat.style.position = 'absolute';
      parrat.style.top = `${y}px`;
      parrat.style.left = `${x}px`;
      field.appendChild(parrat);
    }
  }

  function randomWidthPosition() {
    return Math.floor(Math.random() * (browserWidth - 0 + 1) + 0);
  }
  function randomHeightPosition() {
    return Math.floor(Math.random() * (browserHeight - 500 + 1) + 500);
  }
};
