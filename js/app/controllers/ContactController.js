function ContactController($scope, $timeout) {
	$scope.name = 'Bill Gates';
	$timeout(function() {
		$scope.name = "Gordon";
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);