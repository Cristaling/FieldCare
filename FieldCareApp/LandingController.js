(function(){
	'use strict'
	var app = angular.module('FarmCare');
	app.controller('LandingController', function($location)
	{
		vm = this
		
		vm.getToOwnerPage = getToOwnerPage
		
		function getToOwnerPage(){
			$location.path('');
		}
	});
})();