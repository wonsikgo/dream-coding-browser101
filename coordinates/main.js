// window.addEventListener('mousemove', (event) => {
//     const target = document.querySelector('.target');
//     const p = document.querySelector('.target p');
//     const vertical = document.querySelector('.vertical');
//     const horizon = document.querySelector('.horizon');
//     target.style.top = `${event.clientY}px`;
//     target.style.left = `${event.clientX}px`;
//     p.innerHTML = `${event.clientX}px, ${event.clientY}px`;
//     vertical.style.left = `${event.clientX}px`;
//     horizon.style.top = `${event.clientY}px`;
// });

const vertical = document.querySelector('.vertical');
const horozontal = document.querySelector('.horozontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');
const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;

document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  vertical.style.transform = `translateX(${x}px)`;
  horozontal.style.transform = `translateY(${y}px)`;
  target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;
  tag.style.transform = `translate(${x}px, ${y}px)`;
  tag.innerHTML = `${x}px, ${y}px`;
});
