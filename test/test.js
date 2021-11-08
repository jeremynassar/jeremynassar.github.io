const TaskManager = require('../resources/js/taskManager.js').TaskManager;
const {assert} = require('chai');

describe('TaskManager', () => {
    describe('.addTask function', () => {
        it('adds a new task to the array', () => {
            const task = new TaskManager;
            task.addTask('Final Project', 'Finish task 9', 'Jeremy', '11/08/2021', 'TO DO');
            assert.ok(task.tasks.length == 1)
        })
    })
    describe('.deleteTask functions', () => {
        it('deletes a task from tasks array', () => {
            task = new TaskManager;
            task.addTask('Final Project', 'Finish task 9', 'Jeremy' , '11/08/2021', 'TO DO');
            task.deleteTask(1);
            assert.ok(task.tasks.length == 0);
        })
    })
    describe('.getTaskById function', () => {
        it('returns the current task from tasks array', () => {
            const task = new TaskManager()
            task.addTask('Final Project', 'Test Tasklist', 'Hazal', '11/08/2021', 'TO DO');
            const resultId = task.getTaskById(1);
            task.addTask('Final Project', 'Test Tasklist', 'Hazal', '11/08/2021', 'TO DO');
            const expectedId = task.getTaskById(2)
            assert.ok(resultId, expectedId)
        })
    })
})