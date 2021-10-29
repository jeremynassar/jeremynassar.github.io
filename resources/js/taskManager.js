let createTaskHtml = (name,description,assignedTo,status,dueDate) => {
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
    }
    
   addTask (name,description,assignedTo,dueDate, status = "TO DO") {
        this.currentId++;
        this.tasks.push(this.currentId, name , description, assignedTo,dueDate,status);
    } 
}


const randomTask = new TaskManager ();
console.log(randomTask.tasks)
randomTask.addTask('Project','finsh project', 'jeremy', '10-29-21');

