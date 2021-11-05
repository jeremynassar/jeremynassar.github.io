const createTaskHtml = (id,name, description, assignedTo, dueDate, status) => {
  const html = 
    ` <div class="col">
    <div class="card h-100">
      <div class="card-body">
      <h2 class="card-title" >Card#${id}</h2>
<table class="table table-borderless">
  <tbody>
    <tr>
      <td class="fw-bold">Project</td>
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
          <a href="#" class="btn btn-success ${status === 'TODO' ? 'visible' : 'invisible'}" role="button" >Mark As Done</a>
            <a href="#" class="btn btn-danger" role="button" >Delete</a>
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


