function ContactController($scope, $timeout) {
	$scope.name = 'Unmi Gong';
  $timeout(function(){
    $scope.name = "Eunmi Kong"
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);