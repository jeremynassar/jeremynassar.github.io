const createTaskHtml = (id,name, description, assignedTo, dueDate, status) => {
  const html = 
    ` <div class="col" data-task-id=${id}>
    <div class="card h-100">
      <div class="card-body">
      <h2 class="card-title" >Card Number${id}</h2>
<table class="table table-borderless">
  <tbody>
    <tr>
      <td class="fw-bold">Task Name</td>
      <td id>${name}</td>
    </tr>
    <tr>
      <td class="fw-bold">Description</td>
      <td>${description}</td>
    </tr>
    <tr>
      <td class="fw-bold">Assigned To</td>
      <td >${assignedTo}</td>
    </tr>
    <tr>
      <td class="fw-bold">Due Date</td>
      <td>${dueDate}</td>
    </tr>
    <tr>
      <td class="fw-bold">Status</td>
      <td class="${status === 'TODO' ? 'badge-danger' : 'badge-success'}">${status}</td>
    </tr>
  </tbody>
</table>
<div class="d-grid gap-2 d-md-block">
          <a href="#" class="btn btn-success done-button ${status === 'TODO' ? 'badge-danger' : 'badge-success'} role="button" >Mark As Done</a>
            <a href="#" class="btn btn-danger delete-button" role="button" >Delete</a>
        </div>
      </div>
    </div>
  </div>`
  return html};

class TaskManager {
    constructor(currentId = 1) {
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask(name, description, assignedTo, dueDate, status= "TO DO") {
        const task = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status
        };

        this.tasks.push(task);
    }

    deleteTask(taskId){
      const newTasks= [];
      for (let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
        if (task.id !== taskId) {
          newTasks.push(task);
    }
  }
      this.tasks = newTasks;
  }
    
    getTaskById(taskId){
      let foundTask;
      for (let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
        if (task.id === taskId){
          foundTask = task;
        }
    }
    return foundTask;
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
    save() {
      const tasksJson = JSON.stringify(this.tasks);

      localStorage.setItem('tasks', tasksJson);

      const currentId = String(this.currentId);

      localStorage.setItem('currentId', currentId);
  }

  load() {
      if (localStorage.getItem('tasks')) {
          const tasksJson = localStorage.getItem('tasks');

          this.tasks = JSON.parse(tasksJson);
      }
      if (localStorage.getItem('currentId')) {
          const currentId = localStorage.getItem('currentId');

          this.currentId = Number(currentId);
      }
    this.render();
    }
 
  }


