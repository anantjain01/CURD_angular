var app = angular.module("myModule", [])
	.controller("myController", function ($scope) {

		$scope.newuser = {};
		$scope.clickedusers = [];

		$scope.users = [


		];

		$scope.saveuser = function () {
			$scope.users.push($scope.newuser);
			$scope.newuser = {};
		};

		$scope.selectuser = function (user) {
			$scope.selecteduser = user;
		};

		$scope.updateuser = function () {

		};

		$scope.deleteuser = function () {
			$scope.users.splice($scope.users.indexOf($scope.selectuser), 1);
		};
	});
