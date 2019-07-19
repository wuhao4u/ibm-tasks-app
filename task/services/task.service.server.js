module.exports = function (app, model) {
    app.post("/api/task", createTask);
    app.get("/api/task/completed", findCompletedTasks);
    app.get("/api/task/dueTodayTomorrow", findDueTodayTomorrow);
    app.get("/api/task/overdue", findOverdueTasks);
    app.get("/api/task/:taskId", findTaskById);
    app.get("/api/task", findAllTasks);
    app.put("/api/task/:taskId", updateTask);
    app.delete("/api/task/:taskId", deleteTask);

    function createTask(req, res) {
        var newTask = req.body;
        model.TaskModel
            .createTask(newTask)
            .then(
                function (response) {
                    res.send(response);
                }
            )
            .catch(
                function (err) {
                    res.status(500).send(err);
                });
    }


    function findTaskById(req, res) {
        var taskId = req.params.taskId;
        console.log("findTaskById, taskId: ", +taskId);

        model.TaskModel
            .findTaskById(taskId)
            .then(
                function (response) {
                    res.send(response);
                })
            .catch(function (err) {
                res.status(500).send(err);
            });
    }

    function findAllTasks(req, res) {
        model.TaskModel
            .findAllTasks()
            .then(
                function (response) {
                    res.send(response);
                })
            .catch(function (err) {
                res.status(500).send(err);
            });
    }

    function findDueTodayTomorrow(req, res) {
        model.TaskModel
            .findDueTodayTomorrow()
            .then(
                function (response) {
                    res.send(response);
                })
            .catch(function (err) {
                res.status(500).send(err);
            });
    }

    function findCompletedTasks(req, res) {
        model.TaskModel
            .findCompleted()
            .then(
                function (response) {
                    res.send(response);
                })
            .catch(function (err) {
                res.status(500).send(err);
            });
    }

    function findOverdueTasks(req, res) {
        model.TaskModel
            .findOverdue()
            .then(
                function (response) {
                    res.send(response);
                })
            .catch(function (err) {
                res.status(500).send(err);
            });
    }


    function updateTask(req, res) {
        var taskId = req.params.taskId;
        var newTask = req.body;

        model.TaskModel
            .updateTask(taskId, newTask)
            .then(
                function (status) {
                    res.sendStatus(200);
                }
            )
            .catch(function (err) {
                res.status(500).send(err);
            });
    }

    function deleteTask(req, res) {
        var taskId = req.params.taskId;

        model.TaskModel
            .deleteTask(taskId)
            .then(
                function (status) {
                    res.sendStatus(200);
                }
            )
            .catch(
                function (err) {
                    res.status(500).send(err);
                }
            );
    }
};