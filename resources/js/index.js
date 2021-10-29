const newTaskForm = document.querySelector('#newTaskForm');
newTaskForm.addEventListener('submit', (event) => {

            event.preventDefault();

            const newTaskNameInput = document.querySelector('#newTaskNameInput');




            const task = new TaskManager();

            let addButton = document.getElementById('addbtn');
            let deleteButton = document.getElementById('deletebtn');

            function showTask() {

            }