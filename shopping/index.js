window.onload = () => {
  const addBtn = document.querySelector('footer button');
  const input = document.querySelector('footer input');
  const ul = document.querySelector('section ul');
  addBtn.addEventListener('click', () => {
    if (!input.value) return;
    addItem(input.value);
  });

  function addItem(item) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const i = document.createElement('i');
    li.className = 'list';
    i.className = 'fas fa-trash-alt';
    i.addEventListener('click', (event) => {
      ul.removeChild(event.target.parentNode);
    });
    span.innerText = item;
    li.appendChild(span);
    li.appendChild(i);

    ul.appendChild(li);
    input.value = '';
  }
};
