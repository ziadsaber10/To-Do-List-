function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    let taskList = document.getElementById('taskList');

    let li = document.createElement('li');
    li.className = 'list-group-item';

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="removeTask(this)">&times;</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
}

function removeTask(btn) {
    btn.parentElement.remove();
}