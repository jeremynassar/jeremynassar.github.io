           function main() {
           const taskManager = new TaskManager;

           taskManager.load();

             //console.log(task.tasks);
          const newTaskForm = document.querySelector('#newTaskForm');

           newTaskForm.addEventListener('submit', (event) => {
             event.preventDefault();

               const newTaskNameInput = document.querySelector('#newTaskNameInput');
               const newTaskDescription = document.querySelector('#newTaskDescription');
               const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
               const newTaskDueDate = document.querySelector('#newTaskDueDate');

               if (newTaskNameInput.length <= 4) {
                document.querySelector("#errorName").style.display = "block";
                document.querySelector("#success").style.display = "none";
            } else {
                document.querySelector("#errorName").style.display = "none";
            };
            if (newTaskDescription.length <= 6) {
                document.querySelector("#errorDescription").style.display = "block";
                document.querySelector("#success").style.display = "none";
            } else {
                document.querySelector("#errorDescription").style.display = "none";
            };
            if (newTaskAssignedTo.length <= 1) {
                document.querySelector("#errorAssignedTo").style.display = "block";
                document.querySelector("#success").style.display = "none";
            } else {
                document.querySelector("#errorAssignedTo").style.display = "none";
            };
            if ((newTaskDueDate.length > 4) && (description.length > 6) && (assignedTo.length > 1)) {
                document.querySelector(".alert-danger").style.display = "none";
                document.querySelector("#success").style.display = "block";
                newTask.addTask(name, description, assignedTo, dueDate);
                newTask.save();
                newTask.render();
                nameInput.value = '';
                descriptionInput.value = '';
                assignedToInput.value = '';
                dueDateInput.value = '';
            };


               const name = newTaskNameInput.value;
               const description = newTaskDescription.value;
               const assignedTo = newTaskAssignedTo.value;
               const dueDate = newTaskDueDate.value;

               console.log(name + ' ' + description + ' ' + assignedTo + ' ' + dueDate);

             taskManager.addTask(name, description, assignedTo, dueDate);

             taskManager.save();
             
             taskManager.render();
            

               newTaskNameInput.value = '';
               newTaskDescription.value = '';
               newTaskAssignedTo.value = '';
               newTaskDueDate.value = '';    })
            
               console.log(taskManager.tasks)
               

      const tasksList = document.querySelector('#tasksList');

      tasksList.addEventListener('click',(event)=>{
        
        if (event.target.classList.contains('done-button')) {

          const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;

          const taskId = Number(parentTask.dataset.taskId);
          const task = taskManager.getTaskById(taskId);
          
          task.status = 'DONE';

          taskManager.save();

          taskManager.render();

      }
      if (event.target.classList.contains('delete-button')) {
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;

        const taskId = Number(parentTask.dataset.taskId);

        taskManager.deleteTask(taskId);

        taskManager.save();
        taskManager.render();
    }

      })
    }