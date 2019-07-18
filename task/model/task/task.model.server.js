module.exports = function (app) {
    var mongoose = require("mongoose");
    mongoose.Promise = require('q').Promise;

    var TaskSchema = require("./task.schema.server")();
    var TaskModel = mongoose.model("TaskModel", TaskSchema);

    var api = {
        "createTask": createTask,
        "findTaskById": findTaskById,
        "findAllTasks": findAllTasks,
        "updateTask": updateTask,
        "deleteTask": deleteTask
    };

    return api;

    // Creates a new task instance
    function createTask(task) {
        y = 0;
        return TaskModel.create(task);
    }

    // Retrieves a task instance whose _id is equal to parameter userId
    function findTaskById(taskId) {
        return TaskModel.findById(taskId);
    }

    function findAllTasks() {
        x = 0;
        var found = TaskModel.find();
        x = 1;
        return found;
    }

    // Updates task instance whose _id is equal to parameter userId
    function updateTask(taskId, task) {
        return TaskModel.update({
            _id: taskId
        }, {
            name: task.name,
            description: task.description,
            dueDate: task.dueDate,
            complated: task.completed,
        });
    }

    // Removes task instance whose _id is equal to parameter userId
    function deleteTask(taskId) {
        return TaskModel.remove({_id: taskId});
    }
};