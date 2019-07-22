module.exports = function (app) {
    // require("./task/task.schema.server");
    var mongoose = require("mongoose");
    var taskModel = require("./task/task.model.server.js")();

    var connectionString = 'mongodb://127.0.0.1:27017/task';

    if (process.env.MONGODB_URI) {
        connectionString = process.env.MONGODB_URI;
    } else if (process.env.MLAB_USERNAME) {
        connectionString = process.env.MLAB_USERNAME + ":" +
            process.env.MLAB_PASSWORD + "@" +
            process.env.MLAB_HOST + ':' +
            process.env.MLAB_PORT + '/' +
            process.env.MLAB_APP_NAME;
    }

    // mongoose.createConnection(connectionString);
    mongoose.connect(connectionString);

    // var tasks = db.collection("task");
    // TODO: change to insert sample tasks
    function insertSampleTasks() {
        var tasks = [
            {name: "talk to the lawyer", description: "", dueDate: Date.now(), complated: false},
            {
                name: "submit job applicaiton",
                description: "",
                dueDate: new Date(),
                completed: false
            }];
    }

    // insertSampleTasks();

    var model = {
        "TaskModel": taskModel
    };
    return model;
};