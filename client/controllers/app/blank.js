angular.module('app').controller('app_blank', app_blank);
function app_blank($scope, app) {
    'use strict';
    app.init($scope);
    $scope.data.name="Jona";
    
    app.call("blank.test",null,function(data){
        $scope.data = data;
    });
    
    
}
