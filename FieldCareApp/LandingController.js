(function(){
	'use strict'
	var app = angular.module('FarmCare');
	app.controller('LandingController', ['$location', function($location)
	{
		var vm = this
		
		vm.getToAddPage = getToAddPage;
		vm.getToFarmerPage = getToFarmerPage;
		
		function getToOwnerPage(){
			$location.path('/ownerlist');
		}

		function getToFarmerPage(){
			$location.path('/farmerlist');
		}
	}]);
})();