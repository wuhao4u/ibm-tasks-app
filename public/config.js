/**
 * Created by wuhao on 2017-02-10.
 */
(function () {
    angular
        .module("TaskApp")
        .config(configuration);

    function configuration($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/task/templates/task-list.view.client.html",
                controller: "TaskListController",
                controllerAs: "model"
            })
            .when("/task", {
                templateUrl: "views/task/templates/task-list.view.client.html",
                controller: "TaskListController",
                controllerAs: "model"
            })
            .when("/task/new", {
                templateUrl: "views/task/templates/task-new.view.client.html",
                controller: "NewTaskController",
                controllerAs: "model"
            })
            .when("/task/:tid", {
                templateUrl: "views/task/templates/task-edit.view.client.html",
                controller: "TaskEditController",
                controllerAs: "model"
            })
            .otherwise({
                templateUrl: "views/task/templates/task-list.view.client.html",
                controller: "TaskListController",
                controllerAs: "model"
            });
    }
})();