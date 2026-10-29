
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let totalTasks = 0;

function updateCount() {
    totalTasks = taskList.children.length;
    taskCount.textContent = `Total tasks: ${totalTasks}`;
}

function addTask() {
    const taskText = taskInput.value.trim();

   if (taskText === "") {
    showAlert("Please enter a task!");
    return;
}

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed", checkbox.checked);
    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateCount();
    });

    li.append(checkbox, span, deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();

    updateCount();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

updateCount();

const customAlert = document.getElementById("customAlert");
const alertMessage = document.getElementById("alertMessage");
const alertOkBtn = document.getElementById("alertOkBtn");

function showAlert(message) {
    alertMessage.textContent = message;
    customAlert.classList.add("show");
}

function closeAlert() {
    customAlert.classList.remove("show");
}

alertOkBtn.addEventListener("click", closeAlert);

customAlert.addEventListener("click", function (event) {
    if (event.target === customAlert) {
        closeAlert();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeAlert();
    }
});
