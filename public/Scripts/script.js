//
//
//
// var app = angular.module("navbar",["ngRoute"])
//             .config(function($routeProvider,$locationProvider)
//
//         {
//                 $routeProvider.when('/',{
//
//                     templateUrl: "slider.html",
//                     controller:"homeController"
//                 })
//
//
//                 .when('/contact',{
//
//                     templateUrl: "Templates/contact.html",
//                     controller:"contactController"
//                 })
//
//
//              $locationProvider.html5Mode(true);
//
//
//
//
//         .controller('navController', function ($scope){})
//
//
//         .controller("homeController",function($scope)
//          {
//         $scope.message="Home Page";
//          })
//
//
//          .controller("contactController",function($scope)
//          {
//         $scope.message="Contact Page";
//
//
//     })
//          });

var app=angular.module("navbar",["ngRoute"]);
app.
config(['$routeProvider',function config($routeProvider)
     {
      $routeProvider.
        when('/', {
          templateUrl: 'slider.html'
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
