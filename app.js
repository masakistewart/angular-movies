var app = angular.module('movieApp', ['ngRoute'])
app.config(function($routeProvider) {
	$routeProvider
	.when('/showAll', {
		templateUrl: '/views/templates/showAll.html',
		controller: 'showCtrl'
	})
	.when('/showOne', {
		templateUrl: '/views/templates/showSingle.html',
		controller: 'showOneCtrl'
	})
	.otherwise({
		redirectTo: '/'
	})
})