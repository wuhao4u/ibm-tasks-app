module.exports = function (app) {
    var mongoose = require("mongoose");
    var moment = require('moment');
    moment().format();

    mongoose.Promise = require('q').Promise;

    var TaskSchema = require("./task.schema.server")();
    var TaskModel = mongoose.model("TaskModel", TaskSchema);

    var api = {
        "createTask": createTask,
        "findTaskById": findTaskById,
        "findAllTasks": findAllTasks,
        "findDueToday": findDueToday,
        "findDueTomorrow": findDueTomorrow,
        "findDueTodayNTomorrow": findDueTodayNTomorrow,
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

    function findDueToday() {
        var today0 = moment();
        var today1 = moment();
        today0.set('hour', 0);
        today0.set('minute', 0);
        today0.set('second', 0);
        today0.set('millisecond', 0);

        today1.set('hour', 23);
        today1.set('minute', 59);
        today1.set('second', 59);
        today1.set('millisecond', 59);

        return TaskModel.find({dueDate: {$gte: today0, $lte: today1}})
    }

    function findDueTomorrow() {
        var tmr0 = moment();
        var tmr1 = moment();
        tmr0.add(1, 'days');
        tmr1.add(1, 'days');

        tmr0.set('hour', 0);
        tmr0.set('minute', 0);
        tmr0.set('second', 0);
        tmr0.set('millisecond', 0);

        tmr1.set('hour', 23);
        tmr1.set('minute', 59);
        tmr1.set('second', 59);
        tmr1.set('millisecond', 59);

        return TaskModel.find({dueDate: {$gte: tmr0, $lte: tmr1}})
    }

    function findDueTodayNTomorrow() {
        var today0 = moment();
        var tmr1 = moment();
        tmr1.add(1, 'days');

        today0.set('hour', 0);
        today0.set('minute', 0);
        today0.set('second', 0);
        today0.set('millisecond', 0);

        tmr1.set('hour', 23);
        tmr1.set('minute', 59);
        tmr1.set('second', 59);
        tmr1.set('millisecond', 59);

        return TaskModel.find({dueDate: {$gte: today0, $lte: tmr1}})
    }

    function findOverdue() {
        var today0 = moment();
        today0.set('hour', 0);
        today0.set('minute', 0);
        today0.set('second', 0);
        today0.set('millisecond', 0);

        return TaskModel.find({dueDate: {$lt: today0}});
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