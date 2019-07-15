/**
 * Created by wuhao on 2017-02-11.
 */
(function () {
    angular
        .module("TaskApp")
        .controller("TaskListController", TaskListController)
        .controller("NewTaskController", NewTaskController)
        .controller("EditTaskController", EditTaskController);


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
            var promise = TaskService.createTask(task);
            promise.success(function (newTask) {
                $location.url("/task");
            });

            promise.error(function (res, statusCode) {
                vm.error = "Cannot create given task.";
            });
        }
    }

    function EditTaskController($routeParams, $location, TaskService) {
        var vm = this;
        // /task/:tid

        vm.taskId = $routeParams["tid"];

        // event handler
        vm.deleteTask = deleteTask;
        vm.updateTask = updateTask;

        function init() {
            var tasksPromise = TaskService.findAllTasks();
            sitesPromise.success(function (tasks) {
                vm.tasks = tasks;
            });

            var taskPromise = TaskService.findTaskById(vm.taskId);
            sitePromise.success(function (task) {
                vm.task = task;
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