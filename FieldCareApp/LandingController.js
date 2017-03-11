(function(){
	'use strict'
	var app = angular.module('FarmCare');
	app.controller('LandingController', ['$location', function($location)
	{
		var vm = this
		
		vm.getToOwnerPage = getToOwnerPage
		
		function getToOwnerPage(){
			$location.path('/ownerlist');
		}
	}]);
})();