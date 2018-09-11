var app = angular.module('pcon', []);
app.controller('headerController', function($scope,$http) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    // $scope.notices=[];
    // $scope.getNotices = function () {
    //
    //   $http({method:'GET', url : 'localhost/api/notices'})
    //   .success(function(data,status){
    //     $scope.notices=data;
    //   })
    //   .error(function (data,status) {
    //     console.log("Error",status,data);
    //   });
    //
    // };
});
