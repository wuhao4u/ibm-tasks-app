var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/test');
mongoose.connect('mongodb://127.0.0.1:27017/test');

mongoose.connection
    .once('open', () => console.log('Connected!'))
    .on('error', (error) => {
        console.warn('Error : ', error);
    });//Called hooks which runs before something.
beforeEach((done) => {
    // mongoose.connection.collections.test.drop(() => {
        //this function runs after the drop is completed
        // done(); //go ahead everything is done now.
    // });
    done(); //go ahead everything is done now.
});




