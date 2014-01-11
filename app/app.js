var app = angular.module('bilnumerApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
				controller: 'BilnumerController',
				templateUrl: 'app/partials/bilnumer.html'
			})
		.otherwise({
			redirectTo: '/'
		});
});