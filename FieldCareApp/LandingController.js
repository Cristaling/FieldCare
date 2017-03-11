(function(){
	'use strict'
	var app = angular.module('FarmCare');
	app.controller('LandingController', ['$location', function($location)
	{
		var vm = this
		
		vm.getToAddPage = getToAddPage;
		
		function getToAddPage(){
			$location.path('/addfield');
		}
	}]);
})();