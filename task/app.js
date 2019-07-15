// module on node side
module.exports = function (app) {
    var model = require("./model/models.server")();

    require("./services/task.service.server")(app, model);
};