let todo = [];

function addTask() {
    const taskInput = document.getElementById("task").value;
    if (taskInput === "") {
        alert("Please enter a task.");
    } else {
        todo.push(taskInput);
        updateTaskList();
        document.getElementById("task").value = "";
    }
}

function deleteTaskByIndex() {
    const index = document.getElementById("deleteIndex").value;
    if (index === "" || isNaN(index) || index < 0 || index >= todo.length) {
        alert("Please enter a valid index.");
    } else {
        todo.splice(index, 1);
        updateTaskList();
        document.getElementById("deleteIndex").value = "";
    }
}

function deleteTaskByName() {
    const taskName = document.getElementById("deleteTask").value;
    const taskIndex = todo.indexOf(taskName);
    if (taskIndex === -1) {
        alert("Task not found.");
    } else {
        todo.splice(taskIndex, 1);
        updateTaskList();
        document.getElementById("deleteTask").value = "";
    }
}

function updateTaskList() {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";
    todo.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";
        listItem.innerHTML = `<span>${task}</span> <button class="btn btn-sm btn-danger" onclick="deleteTaskByIndex(${index})">Delete</button>`;
        todoList.appendChild(listItem);
    });
}
