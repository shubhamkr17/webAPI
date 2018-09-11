


var app = angular.module("Demo",["ngRoute"])
            .config(function($routeProvider,$locationProvider)

        {
                $routeProvider
                .when('/home',{

                    templateUrl: "Templates/home.html",
                    controller:"homeController"
                })


                .when('/contact',{

                    templateUrl: "Templates/contact.html",
                    controller:"contactController"
                })


             $locationProvider.html5Mode(true);




        .controller('navController', function ($scope){})


        .controller("homeController",function($scope)
         {
        $scope.message="Home Page";
         })


         .controller("contactController",function($scope)
         {
        $scope.message="Contact Page";


    })
         });
