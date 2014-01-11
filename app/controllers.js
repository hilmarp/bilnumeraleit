app.controller('BilnumerController', function ($scope, $http) {

	var bilnumer = "";

	$scope.leita = function () {
		bilnumer = $scope.bilnumer;

		$http.get('http://apis.is/car?number=' + bilnumer).success(function (data) {
			console.log(data.results[0]);
			$scope.bill = data.results[0];
		});
	};

	$scope.erBillTil = function () {
		if ($scope.bill === undefined) {
			return false;
		} else {
			return true;
		}
	};

	$scope.erBilnumer = function () {
		if (bilnumer === "") {
			return true;
		} else {
			return false;
		}
	};
});