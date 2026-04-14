const taskForm = document.querySelector('.todo-form');
const taskInput = document.querySelector('#task-text');
const taskPriority = document.querySelector('#task-priority');
const taskList = document.querySelector('.task-list');

// Função para configurar o botão de deletar em qualquer item
function setupDeleteButton(button) {
    button.addEventListener('click', () => {
        button.closest('.task-item').remove();
    });
}

// Inicializar botões de excluir que já estão no HTML (como a tarefa de exemplo)
document.querySelectorAll('.btn-delete').forEach(setupDeleteButton);

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const text = taskInput.value.trim();
    const priority = taskPriority.value;

    if (text === '') {
        alert("Por favor, descreva a tarefa!");
        return;
    }

    addTask(text, priority);

    taskInput.value = '';
    taskInput.focus();
});

function addTask(text, priority) {
    const taskId = `task-${Date.now()}`;
    const li = document.createElement('li');
    
    li.classList.add('task-item', `priority-${priority}`);

    li.innerHTML = `
        <input type="checkbox" id="${taskId}">
        <label for="${taskId}">
            <span class="task-content">${text}</span>
            <span class="badge-priority">${priority.charAt(0).toUpperCase() + priority.slice(1)}</span>
        </label>
        <button type="button" class="btn-delete" aria-label="Excluir tarefa">&times;</button>
    `;

    // Configura o botão de excluir da nova tarefa
    const deleteBtn = li.querySelector('.btn-delete');
    setupDeleteButton(deleteBtn);

    taskList.appendChild(li);
}