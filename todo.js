document.addEventListener("DOMContentLoaded", () => {
    // Get DOM elements
    const form = document.forms.frm;
    const searchInput = form.ser;
    const addButton = document.getElementById('btn1');
    const todoList = document.getElementById('list1');

    // Load todos from localStorage
    let todos = JSON.parse(localStorage.getItem('todos')) || [
        { id: 1, text: 'KOD YOZISH' },
        { id: 2, text: 'TAKRORLASH' },
        { id: 3, text: 'OʻQISH' }
    ];

    // Save todos to localStorage
    const saveTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    // Render todo list
    const renderTodos = (todosToRender = todos) => {
        todoList.innerHTML = todosToRender
            .map(todo => `
                <li data-id="${todo.id}">
                    ${todo.text}
                    <div>
                        <button class="update-btn">Update</button>
                        <button class="delete-btn">Delete</button>
                    </div>
                </li>
            `)
            .join('');
    };

    // Add new todo
    const addTodo = () => {
        const text = prompt('Yangi vazifa kiriting:');
        if (text && text.trim()) {
            const newTodo = {
                id: Date.now(),
                text: text.trim()
            };
            todos.push(newTodo);
            saveTodos();
            renderTodos();
        }
    };

    // Update todo
    const updateTodo = (id) => {
        const todo = todos.find(t => t.id === id);
        if (todo) {
            const newText = prompt('Vazifani tahrirlang:', todo.text);
            if (newText && newText.trim()) {
                todo.text = newText.trim();
                saveTodos();
                renderTodos();
            }
        }
    };

    // Delete todo
    const deleteTodo = (id) => {
        if (confirm('Rostdan ham oʻchirmoqchimisiz?')) {
            todos = todos.filter(todo => todo.id !== id);
            saveTodos();
            renderTodos();
        }
    };

    // Search todos
    const searchTodos = (query) => {
        const filteredTodos = todos.filter(todo =>
            todo.text.toLowerCase().includes(query.toLowerCase())
        );
        renderTodos(filteredTodos);
    };

    // Event Listeners
    addButton.addEventListener('click', addTodo);

    todoList.addEventListener('click', (e) => {
        const li = e.target.closest('li');
        if (!li) return;
        
        const id = Number(li.dataset.id);
        
        if (e.target.classList.contains('update-btn')) {
            updateTodo(id);
        } else if (e.target.classList.contains('delete-btn')) {
            deleteTodo(id);
        }
    });

    searchInput.addEventListener('input', (e) => {
        searchTodos(e.target.value);
    });

    // Initial render
    renderTodos();
});