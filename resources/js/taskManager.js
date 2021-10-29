class TaskManager {
    constructor() {
        this.tasks = []; 
        this.currentId = 0;
    }
    
   addTask (name,description,assignedTo,dueDate, status = "TO DO") {
        this.currentId++;
        this.tasks.push(this.currentId, name , description, assignedTo,dueDate,status);
    } 
}


const randomTask = new TaskManager ();
console.log(randomTask.tasks)
randomTask.addTask('Project','finsh project', 'jeremy', '10-29-21');

