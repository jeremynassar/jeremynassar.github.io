           const task = new TaskManager;

             //console.log(task.tasks);
        //    console.log(task.addTask("project", "Finish project", "Jeremy", "11/12/21"))
          const newTaskForm = document.querySelector('#newTaskForm');


        //let submitButton = document.getElementById('subbtn');
        //            let deleteButton = document.getElementById('deletebtn');
        
          //  function showTask() {
           //newAddButton = addButton.value;
        //        task.addTask(name, description, assignedTo, dueDate, status);
        //            }
        
        //          addButton.addEventListener("click", showTask); 



        newTaskForm.addEventListener('submit', (event) => {
             event.preventDefault();

               const newTaskNameInput = document.querySelector('#newTaskNameInput');
               const newTaskDescription = document.querySelector('#newTaskDescription');
               const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
               const newTaskDueDate = document.querySelector('#newTaskDueDate');


               const name = newTaskNameInput.value;
               const description = newTaskDescription.value;
               const assignedTo = newTaskAssignedTo.value;
               const dueDate = newTaskDueDate.value;

               console.log(name + ' ' + description + ' ' + assignedTo + ' ' + dueDate);

             task.addTask(name, description, assignedTo, dueDate);
             
             task.render();
            

               newTaskNameInput.value = '';
               newTaskDescription.value = '';
               newTaskAssignedTo.value = '';
               newTaskDueDate.value = '';    })
            
               console.log(task.tasks)
               

        //        taskManager.render();

        //        newTaskNameInput.value = '';
        //        newTaskDescription.value = '';
        //        newTaskAssignedTo.value = '';
        //        newTaskDueDate.value = '';

        //    });