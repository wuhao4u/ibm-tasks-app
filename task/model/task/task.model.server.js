module.exports = function (app) {
    var mongoose = require("mongoose");
    mongoose.Promise = require('q').Promise;

    var TaskSchema = require("./task.schema.server")();
    var TaskModel = mongoose.model("TaskModel", TaskSchema);

    var api = {
        "createTask": createTask,
        "findTaskById": findTaskById,
        "findAllTasks": findAllTasks,
        "findDueTomorrow": findDueTomorrow,
        "findDueToday": findDueToday,
        "findOverdue": findOverdue,
        "findCompleted": findCompleted,
        "updateTask": updateTask,
        "deleteTask": deleteTask
    };

    return api;

    // Creates a new task instance
    function createTask(task) {
        return TaskModel.create(task);
    }

    // Retrieves a task instance whose _id is equal to parameter userId
    function findTaskById(taskId) {
        return TaskModel.findById(taskId);
    }

    function findAllTasks() {
        return TaskModel.find();
    }

    function findDueTomorrow() {
        var allTasks = TaskModel.find();
        var today = new Date();

    }

    function findDueToday() {
        // TODO
    }

    function findOverdue() {
        // TODO
    }


    function findCompleted() {
        var allTasks = TaskModel.find();
        var x = 0;
        return TaskModel.find({completed: true});
    }

    // Updates task instance whose _id is equal to parameter userId
    function updateTask(taskId, task) {
        return TaskModel.update({
            _id: taskId
        }, {
            name: task.name,
            description: task.description,
            dueDate: task.dueDate,
            completed: task.completed
        });
    }

    // Removes task instance whose _id is equal to parameter userId
    function deleteTask(taskId) {
        return TaskModel.remove({_id: taskId});
    }
};