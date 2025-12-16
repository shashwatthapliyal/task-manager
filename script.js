const display = document.querySelector("div");
const addBtn = document.getElementById("addTask");
const removeBtn = document.getElementById("removeTask");

function createBtn() {
    const newBtn = document.createElement("button");
    return newBtn;
}
function createNewTask() {
    const newTask = document.createElement("p");
    return newTask;
}
function deleteTask() {
    const lastTask = display.lastElementChild;
    if (!lastTask) return;

    lastTask.remove();
}
function createTaskAndDeleteBtnContainer() {
    const container = document.createElement("div");
    return container;
}

function getNewTask() {
    const task = prompt("Enter new task");
    if (!task) return;

    const deleteBtn = createBtn();
    const newTask = createNewTask();
    const container = createTaskAndDeleteBtnContainer();

    deleteBtn.textContent = "delete";
    newTask.textContent = task;

    container.append(newTask, deleteBtn);
    display.appendChild(container);
}

addBtn.addEventListener("click", getNewTask);
removeBtn.addEventListener("click",deleteTask);