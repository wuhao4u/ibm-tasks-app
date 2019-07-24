/**
 * Created by wuhao on 2019-07-21.
 */
(function () {
    angular
        .module('taskAppDirectives', [])
        .directive('rowIndicate', rowIndicateDir);

    function rowIndicateDir() {
        function linkFunction($scope, $element, $attrs) {
            var today0 = new Date();
            today0.setHours(0, 0, 0, 0);

            var dayAfterTmr0 = new Date();
            dayAfterTmr0.setHours(0, 0, 0, 0);
            dayAfterTmr0.setDate(today0.getDate() + 2);

            var dueDate = new Date($scope.task.dueDate);

            if (!$scope.task.completed) {
                if (dueDate < today0) {
                    $element.addClass("task-past-due");
                } else if (dueDate >= today0 && dueDate < dayAfterTmr0) {
                    $element.addClass("task-due-soon");
                }

            }
        }

        return {
            scope: {
                task: '='
            },
            templateUrl: "views/task/templates/task-row.html",
            link: linkFunction,
            controller: function ($scope) {
            }
        }
    }
})();
