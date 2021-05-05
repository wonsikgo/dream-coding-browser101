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
document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  vertical.style.left = `${x}px`;
  horozontal.style.top = `${y}px`;
  target.style.top = `${y}px`;
  target.style.left = `${x}px`;
  tag.innerHTML = `${x}px, ${y}px`;
  tag.style.top = `${y}px`;
  tag.style.left = `${x}px`;
});
