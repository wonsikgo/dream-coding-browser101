window.addEventListener('mousemove', (event) => {
  const target = document.querySelector('.target');
  const p = document.querySelector('.target p');
  const vertical = document.querySelector('.vertical');
  const horizon = document.querySelector('.horizon');
  target.style.top = `${event.clientY}px`;
  target.style.left = `${event.clientX}px`;
  p.innerHTML = `${event.clientX}px, ${event.clientY}px`;
  vertical.style.left = `${event.clientX}px`;
  horizon.style.top = `${event.clientY}px`;
});
