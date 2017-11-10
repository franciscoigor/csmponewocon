angular.module('app').controller('app_blank', app_blank);
function app_blank($scope, app) {
    'use strict';
    app.init($scope);
    $scope.data.name="Jona";
    var noLoading;
    var textResult;
    app.call('blank.test');
    
    
}
