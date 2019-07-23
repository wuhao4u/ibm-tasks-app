//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Task = require('../task/model/task/task.model.server');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Tasks', () => {
    beforeEach((done) => { //Before each test we empty the database
        Task.deleteTask({}, (err) => {
            done();
        });
    });
    /*
      * Test the /GET route
      */
    describe('/GET task', () => {
        it('it should GET all the tasks', (done) => {
            chai.request(server)
                .get('/task')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });

});