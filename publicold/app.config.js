
var app=angular.module('pcon');
app.
config(['$routeProvider',function config($routeProvider)
     {
      $routeProvider.
        when('/', {
          templateUrl: 'home/home.template.html'
          //controller : 'homeController'
        }).
        when('/about', {
          templateUrl: 'about/about.template.html'
          //controller : 'aboutController'
        }).
        when('/team', {
          templateUrl: 'team/team.template.html'
          //controller : 'teamController'
        }).
        otherwise({
          redirectTo: '/'
        });
    }
  ]);

  // app.controller("homeController", function ($scope) {
  //     //$scope.msg = ;
  // });
  // app.controller("aboutController", function ($scope) {
  //     //$scope.msg = ;
  // });
  // app.controller("teamController", function ($scope) {
  //     //$scope.msg = ;
  // });
