function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.sort((a, b) => a.time.localeCompare(b.time));

    const taskResult = document.getElementById('taskResult');
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${task.time} - ${task.name}</span>
            <label>
                <input type="checkbox" class="taskCheckbox"> Task Completed
            </label>
        `;
        taskResult.appendChild(taskItem);
    });

    return tasks;
}+

function showPopup(message) {
    const popup = document.getElementById('popup');
    popup.querySelector('p').textContent = message;
    popup.classList.add('show');
    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
}

window.onload = function() {
    const tasks = loadTasks();
    showPopup('Have a great day!');

    setTimeout(() => {
        const popup = document.getElementById('popup');
        popup.classList.remove('show');
    }, 3000);

    let completedTasks = 0;
    const checkboxes = document.querySelectorAll('.taskCheckbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                showPopup('Well done!');
                completedTasks++;
                if (completedTasks === tasks.length) {
                    showPopup('You did it!');
                }
            }
        });
    });
};