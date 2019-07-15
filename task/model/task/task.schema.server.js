module.exports = function (app) {
    var mongoose = require('mongoose');

    var TaskSchema = mongoose.Schema({
        name: {type: String, required: true},
        description: String,
        dueDate: {type: Date, default: Date.now},
        completed: Boolean
    }, {collection: "task"});

    return TaskSchema;
};