           const task = new TaskManager();

           let addButton = document.getElementById('addbtn');
           let deleteButton = document.getElementById('deletebtn');

           function showTask() {
               newAddButton = addButton.value;
       TaskManager.addTask(name, description, assignedTo, dueDate, status);
           }

         addButton.addEventListener("click", showTask);