var app = angular.module('movieApp');
app.controller('homeCtrl', function($scope, $location){
	$scope.search = {};
	$scope.search.thing = '';
	$scope.searcher = function() {
		$location.search({Search: $scope.search.thing});
	}
})

app.controller('showCtrl', function($scope, $location, $http){
	console.log($location.search());
	$http.get('http://www.omdbapi.com/?s=' + $location.search().s).then(function(data) {
		$scope.things = data.data.Search;
		console.log(data.data.Search);
	});
})

app.controller('showOneCtrl', function($scope, $location, $http) {
	$http.get('http://www.omdbapi.com/?t=' + $location.search().t).then(function(data) {
		$scope.movie = data.data;
		console.log(data.data);
	});
})