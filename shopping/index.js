window.onload = () => {
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

  function onAdd(item) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const i = document.createElement('i');
    li.className = 'list';
    i.className = 'fas fa-trash-alt';
    i.addEventListener('click', () => {
      ul.removeChild(li);
    });
    span.innerText = item;
    li.appendChild(span);
    li.appendChild(i);

    ul.appendChild(li);
    li.scrollIntoView({ block: 'center' });
    input.value = '';
    input.focus();
  }
};
