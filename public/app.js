var myapp = angular.module("navbar", []);

myapp.controller("navControllers", function($scope, $http) {

		$scope.getNotices = function() {
			$http.get("/api/notices").then(function(response) {
				$scope.notices = response.data;
			});
		}

		$scope.subscribe = function(email) {
			var subObj=JSON.stringify({
				"email":email
			});
		$http.post("/api/subscribers", subObj).then(function(response){
			$scope.status="Done !";
		},function(response){
			$scope.status="Fail !";
		});
		}
	});
