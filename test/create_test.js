//inside create_test.js
const assert = require('assert');
const TaskSchema = require('../task/model/task/task.schema.server');
var TaskModel = mongoose.model("TaskModel", TaskSchema);

describe('Creating documents', () => {
    it('creates a task', (done) => {
        //assertion is not included in mocha so
        //require assert which was installed along with mocha
        const task = new TaskSchema({name: 't1'});
        task.save() //takes some time and returns a promise
            .then(() => {
                assert(!task.isNew); //if poke is saved to db it is not new
                done();
            });
    });
});