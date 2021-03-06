/**
 * Created by wuhao on 2017-02-10.
 */
(function () {
    angular
        .module("TaskApp")
        .factory("TaskService", TaskService);

    function TaskService($http) {
        var api = {
            "createTask": createTask,
            "findTaskById": findTaskById,
            "findTaskDueToday": findTaskDueToday,
            "findTaskDueTomorrow": findTaskDueTomorrow,
            "findDueTodayNTomorrow": findDueTodayNTomorrow,
            "findTaskOverdue": findTaskOverdue,
            "findTaskCompleted": findTaskCompleted,
            "findAllTasks": findAllTasks,
            "updateTask": updateTask,
            "deleteTask": deleteTask
        };
        return api;

        function createTask(newTask) {
            return $http.post("/api/task", newTask);
        }

        function findTaskById(taskId) {
            return $http.get("/api/task/" + taskId);
        }

        function findAllTasks() {
            return $http.get("/api/task");
        }

        function findTaskDueToday() {
            return $http.get("/api/task/dueToday");
        }

        function findTaskDueTomorrow() {
            return $http.get("/api/task/dueTomorrow");
        }

        function findTaskOverdue() {
            return $http.get("/api/task/overdue");
        }

        function findDueTodayNTomorrow() {
            return $http.get("/api/task/dueTodayNTomorrow");
        }

        function findTaskCompleted() {
            return $http.get("/api/task/completed");
        }

        function updateTask(taskId, newTask) {
            return $http.put("/api/task/" + taskId, newTask);
        }

        function deleteTask(taskId) {
            return $http.delete("/api/task/" + taskId);
        }
    }
})();