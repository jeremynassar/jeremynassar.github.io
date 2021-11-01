const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => {
    `const html = <div class="row">
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

            tasksHtmlList.push(taskHtml);
        }
        const tasksHtml = tasksHtmlList.join('\n');
        const tasksList = document.querySelector('#tasksList');
        tasksList.innerHTML = tasksHtml;
    }
}

const randomTask = new TaskManager();
console.log(randomTask.tasks)
randomTask.addTask('Project', 'finsh project', 'jeremy', '10-29-21');