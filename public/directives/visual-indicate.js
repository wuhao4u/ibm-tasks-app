/**
 * Created by wuhao on 2019-07-21.
 */
(function () {
    angular
        .module('taskAppDirectives', [])
        .directive('rowIndicate', rowIndicateDir);

    function rowIndicateDir() {
        function linkFunction(scope, element) {
            element.draggable();
        }
        return {
            link: linkFunction
        }
    }
})();
