const links = {
  form: document.querySelector("form"),
  input: document.querySelector("input[name='todoInput']"),
  checkbox: document.querySelector("input[name='confirm']"),

  addBtn: document.querySelector("button[type='submit']"),
  list: document.querySelector("ol"),
};

links.addBtn.disabled = true;

function addButton() {
  links.addBtn.disabled = !links.input.value.trim() || links.checkbox.checked;
}

links.checkbox.addEventListener("change", addButton);

links.form.addEventListener("sumbit", (event) => {
  event.preventDefault();
  if (links.input.trim()) {
    const todo = document.createElement("li");
    todo.textContent = links.input.value;
    todo.addEventListener("click", () => {
      todo.classList.toggle("crossed");
    });
    links.list.appendChild(todo);
    links.input.value = "";
    links.addBtn.disabled = true;
    links.checkbox.checked = false;
  }
});

links.checkbox.addEventListener("click", () => {
  links.input.value = "";
  links.addBtn.disabled = true;
});

links.input.addEventListener("input", addButton);
