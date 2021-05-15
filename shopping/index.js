window.onload = () => {};
const addBtn = document.querySelector('footer button');
const input = document.querySelector('footer input');
const ul = document.querySelector('section ul');
addBtn.addEventListener('click', () => {
  if (!input.value) {
    input.focus();
    return;
  }
  onAdd(input.value);
});
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    if (!input.value) {
      input.focus();
      return;
    }
    onAdd(input.value);
  }
});
ul.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.list[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});

let id = 0;
function onAdd(item) {
  // const span = document.createElement('span');
  // const i = document.createElement('i');
  // i.className = 'fas fa-trash-alt';
  // i.addEventListener('click', () => {
  //   ul.removeChild(li);
  // });
  // span.innerText = item;
  // li.appendChild(span);
  // li.appendChild(i);
  const li = document.createElement('li');
  li.className = 'list';
  li.dataset.id = id;
  li.innerHTML = `
  <span>${item}</span>
  <i class="fas fa-trash-alt remove-btn" data-id="${id}"></i>
  `;

  ul.appendChild(li);
  li.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
  id++;
}
