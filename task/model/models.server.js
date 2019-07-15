module.exports = function (app) {
    // require("./task/task.schema.server");
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

    var mongoose = require("mongoose");
    mongoose.createConnection(connectionString);

    // var tasks = db.collection("task");
    // TODO: change to insert sample tasks
    function insertSampleTasks() {
        var tasks = [
            {name: "talk to the lawyer", description: "", dueDate: Date.now(), complated: false},
            {
                name: "submit job applicaiton",
                description: "",
                dueDate: new Date(2019, 7, 15, 09, 10, 10, 10),
                complated: false
            },
            {name: "vet", description: "take Boo to the vet", dueDate: "October 13, 2014 11:13:00", complated: false},
        ];
    }


    var model = {
        "TaskModel": taskModel,
    };
    return model;
};