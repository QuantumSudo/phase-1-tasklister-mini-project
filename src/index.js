document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
  
    taskForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission
  
      const taskInput = document.getElementById("new-task-description");
      const taskDescription = taskInput.value.trim();
  
      if (taskDescription) {
        // Create a new list item
        const taskItem = document.createElement("li");
        taskItem.textContent = taskDescription;
  
        // Create a delete button for the task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
          taskList.removeChild(taskItem);
        });
  
        // Append the button to the list item and the item to the list
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
  
        // Clear the input field
        taskInput.value = "";
      } else {
        alert("Please enter a task description.");
      }
    });
  });
  
