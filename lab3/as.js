document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return; // Prevent empty tasks

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <input type="checkbox" class="mark-done">
            <span class="delete-btn">❌</span>
        `;

        taskList.appendChild(listItem);
        taskInput.value = ""; // Clear input field

        // Mark task as done
        listItem.querySelector(".mark-done").addEventListener("change", function () {
            listItem.classList.toggle("done");
        });

        // Delete task
        listItem.querySelector(".delete-btn").addEventListener("click", function () {
            listItem.remove();
        });
    }

    // Add task event listener
    addTaskButton.addEventListener("click", addTask);

    // Allow pressing "Enter" to add task
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
