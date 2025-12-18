const display = document.querySelector("div");
const addBtn = document.getElementById("addTask");
const removeBtn = document.getElementById("removeTask");
const state = document.getElementById("state");

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

// Promise Implementation
function getNewTask() {
    let pr = new Promise((resolve, reject) => {
        const task = prompt("Enter new task");
        if (!task) reject("Name cant be empty fooooooooool")
        resolve(task);
    })
    return pr;
}

function addTaskToContainer(task) {
    const deleteBtn = createBtn();
    deleteBtn.classList.add("remove-task");

    const newTask = createNewTask();
    const container = createTaskAndDeleteBtnContainer();

    deleteBtn.textContent = "delete";
    newTask.textContent = task;

    container.append(newTask, deleteBtn);
    display.appendChild(container);
}

addBtn.addEventListener("click", () => {
    state.textContent = "loading.....";

    let pr = getNewTask();
    pr.then(task => addTaskToContainer(task)
    .catch(console.log("Error"))
    )
});
removeBtn.addEventListener("click", deleteTask);