module.exports = function (app) {
    var mongoose = require('mongoose');

    var TaskSchema = mongoose.Schema({
        name: {type: String, required: true},
        description: String,
        dueDate: {type: Date, default: Date.now() + 1000},
        completed: {type: Boolean, default: false}
    }, {collection: "task"});

    return TaskSchema;
};