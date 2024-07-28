document.addEventListener('DOMContentLoaded', () => {
    const addTodoButton = document.getElementById('add-todo');
    const newTodoInput = document.getElementById('new-todo');
    const todoList = document.getElementById('todo-list');

    addTodoButton.addEventListener('click', () => {
        const todoText = newTodoInput.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText);
            newTodoInput.value = '';
        }
    });

    function addTodoItem(text) {
        const li = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                li.classList.add('completed');
                moveToBottom(li);
            } else {
                li.classList.remove('completed');
            }
        });

        const span = document.createElement('span');
        span.className = 'todo-text';
        span.textContent = text;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            li.classList.add('removed');
            setTimeout(() => {
                li.remove();
            }, 500);
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }

    function moveToBottom(element) {
        todoList.appendChild(element);
    }
});
