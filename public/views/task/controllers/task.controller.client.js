/**
 * Created by wuhao on 2017-02-11.
 */
(function () {
    angular
        .module("TaskApp")
        .controller("TaskListController", TaskListController)
        .controller("NewTaskController", NewTaskController)
        .controller("TaskEditController", TaskEditController);


    function TaskListController($routeParams, TaskService) {
        var vm = this;

        // /task
        function init() {
            var promise = TaskService.findAllTasks();
            promise.success(function (tasks) {
                vm.tasks = tasks;
            });
        }

        init();
    }

    function NewTaskController($routeParams, $location, TaskService) {
        var vm = this;

        // /task/new

        // event handler
        vm.createTask = createTask;
        function init() {
            // event handlers
            var promise = TaskService.findAllTasks();
            promise.success(function (tasks) {
                vm.tasks = tasks;
            });
        }

        init();

        function createTask(task) {
            if (!task) {
                vm.error = "Missing Reqired Fields (Name, Due Date)";
                return;
            }
            else if (!task.name | !task.dueDate) {
                vm.error = "Missing Reqired Fields (Name, Due Date)";
                console.log("task.name: " + task.name);
                console.log("task.dueDate: " + task.dueDate);
                return;
            }

            if (!task.completed) {
                task.completed = false;
            }
            else {
                console.log(task.completed);
            }

            console.log("task.name: " + task.name);
            console.log("task.desc: " + task.description);
            console.log("task.dueDate: " + task.dueDate);
            console.log("task.completed: " + task.completed);

            var promise = TaskService.createTask(task);
            promise.success(function (newTask) {
                $location.url("/task");
            });

            promise.error(function (res, statusCode) {
                vm.error = "Cannot create given task.";
            });
        }
    }

    function TaskEditController($routeParams, $location, TaskService) {
        var vm = this;
        // /task/:tid

        vm.taskId = $routeParams["tid"];
        console.log("Edit Task Controller, tid: ", vm.taskId)

        // event handler
        vm.deleteTask = deleteTask;
        vm.updateTask = updateTask;

        function init() {
            var tasksPromise = TaskService.findAllTasks();
            tasksPromise.success(function (tasks) {
                vm.tasks = tasks;
            });

            var taskPromise = TaskService.findTaskById(vm.taskId);
            taskPromise.success(function (task) {
                vm.task = task;
                vm.task.dueDate = new Date(vm.task.dueDate);
            });
        }

        init();

        function deleteTask() {
            var deletePromise = TaskService.deleteTask(vm.taskId);
            deletePromise.success(function () {
                $location.url("/task");
            });

            deletePromise.error(function (errorBody, errorCode) {
                vm.error = errorCode + " Failed Deleting the task. " + errorBody;
            });
        }

        function updateTask() {
            console.log("updating task:");

            console.log("task.name: " + vm.task.name);
            console.log("task.desc: " + vm.task.description);
            console.log("task.dueDate: " + vm.task.dueDate);
            console.log("task.completed: " + vm.task.completed);

            var updatePromise = TaskService.updateTask(vm.taskId, vm.task);
            updatePromise.success(function () {
                $location.url("/task");
            });

            updatePromise.error(function (errorBody, errorCode) {
                vm.error = errorCode + " Failed Updating the task. " + errorBody;
            });
        }
    }
})();