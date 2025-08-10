document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");
  const taskInput = document.getElementById("task-input"); // ✅ store the element
  function getName() {
    return taskInput.value;
  }

  function addTask() {
    const taskInput = getName();
    const taskText = taskInput.trim();
    if (taskText === "") {
      alert("Enter the name of the task!");
      return;
    }

    const task = document.createElement("li");
    task.textContent = taskText;

    const remove = document.createElement("button");
    remove.className = "remove-btn";
    remove.textContent = "Remove";
    remove.onclick = function () {
      task.remove();
    };
    taskList.appendChild(task);
    task.appendChild(remove);

    document.getElementById("task-input").value = "";
  }

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  });
});
document.addEventListener("DOMContentLoaded", addTask);
