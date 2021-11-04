const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
    ` <div  class="row">
    <div class="col">
      <h3 id= "newTaskNameInput">${name}</h3>
    </div>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Task name">
  </div>
    <br>
   <div class="row">
    <div class="col">
     <h3 id="newTaskDescription">${description}</h3>
    </div>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Description">
    </div>
     <br>
  <div class="row">
    <div class="col">
     <h3 id="newTaskAssignedTo">Assigned To: ${assignedTo}</h3>
    </div>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Placeholder">
    </div>
     <br>
    <div class="row">
    <div class="col">
     <h3>${status}</h3>
    </div>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Select">
    </div>
     <br>
     <div class="row">
      <div class="col">
      <h3 id="newTaskDueDate">Due Date: ${dueDate}</h3>
        <input type="date" name="begin" 
        placeholder="dd-mm-yyyy" value=""
        min="1997-01-01" max="2030-12-31">
        </div>
        </div>`};

class TaskManager {
    constructor(currentId = 1) {
        this.tasks = [];
        this.currentId = currentId;

    }

    addTask(name, description, assignedTo, dueDate) {
        const task = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: "TODO"
        };

        this.tasks.push(task);
    }

    render() {
        const taskHtmlList = [];

        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            const date = new Date(task.dueDate);

            const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
            const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);
            taskHtmlList.push(taskHtml);
        }
        const tasksHtml = taskHtmlList.join('\n');
        const tasksList = document.querySelector('#tasksList');
        tasksList.innerHTML = tasksHtml;
    }
}


