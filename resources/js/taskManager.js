let createTaskHtml = (name, description, assignedTo, status, dueDate) => {
    const html = ` <div class="row">
    <div class="col">
      <h3>${name}</h3>
    </div>
    </div>
    </form>
    <form>
    <div class="col">
      <input type="text" class="form-control" placeholder="Task name">
  </div>
  </form>
    <br>
   <div class="row">
    <div class="col">
     <h3>${description}</h3>
    </div>
    </div>
     <form>
    <div class="col">
      <input type="text" class="form-control" placeholder="Description">
    </div>
    </form>
     <br>
  <div class="row">
    <div class="col">
     <h3>${assignedTo}</h3>
    </div>
    </div>
     <form>
    <div class="col">
      <input type="text" class="form-control" placeholder="Placeholder">
    </div>
     <br>
    </form>
    <div class="row">
    <div class="col">
     <h3>${status}</h3>
    </div>
    </div>
    <form>
    <div class="col">
      <input type="text" class="form-control" placeholder="Select">
    </div>
    </form>
     <br>
     <div class="row">
      <div class="col">
      <h3>${dueDate}</h3>`
}

class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
        render(); {
            const taskHtmlList = [];

            for (let i = 0; i < this.tasks.length; i++) {

                const task = this.tasks[i];
                const date = new Date(task.dueDate);
                const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
                const taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status);
                tasksHtmlList.push(taskHtml);
            }
            const tasksHtml = tasksHtmlList.join('\n');
            const tasksList = document.querySelector('#tasksList');
            tasksList.innerHTML = tasksHtml;
        }

        addTask(name, description, assignedTo, dueDate, status = "TO DO"); {
            this.currentId++;
            this.tasks.push(this.currentId, name, description, assignedTo, dueDate, status);
        }
    }

}

const randomTask = new TaskManager();
console.log(randomTask.tasks)
randomTask.addTask('Project', 'finsh project', 'jeremy', '10-29-21');