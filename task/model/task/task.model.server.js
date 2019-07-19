module.exports = function (app) {
    var mongoose = require("mongoose");
    mongoose.Promise = require('q').Promise;

    var TaskSchema = require("./task.schema.server")();
    var TaskModel = mongoose.model("TaskModel", TaskSchema);

    var api = {
        "createTask": createTask,
        "findTaskById": findTaskById,
        "findAllTasks": findAllTasks,
        "findDueTodayTomorrow": findDueTodayTomorrow,
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

    function findDueTodayTomorrow() {
        var today = new Date();
        var dayAfterTmr = new Date();
        dayAfterTmr.setDate(today.getDate() + 2);

        return TaskModel.find({completed: false, dueDate: {$gte: today, $lt: dayAfterTmr}})
    }

    function findOverdue() {
        var todayDate = Date.now();

        return TaskModel.find({completed: false, dueDate: {$lt: todayDate}});
    }


    function findCompleted() {
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