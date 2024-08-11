document.getElementById('addTask').addEventListener('click', function() {
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';

    taskItem.innerHTML = `
        <label for="taskName">Task Name:</label>
        <input type="text" class="taskName" name="taskName" required>
        <label for="taskTime">Time:</label>
        <input type="time" class="taskTime" name="taskTime" required>
    `;

    taskList.appendChild(taskItem);
});

document.getElementById('schedulerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const tasks = [];
    const taskNames = document.querySelectorAll('.taskName');
    const taskTimes = document.querySelectorAll('.taskTime');

    taskNames.forEach((taskName, index) => {
        tasks.push({
            name: taskName.value,
            time: taskTimes[index].value
        });
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
    window.location.href = 'result.html';
});