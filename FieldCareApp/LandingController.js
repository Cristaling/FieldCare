(function(){
	'use strict'
	var app = angular.module('FarmCare');
	app.controller('LandingController', ['$location', '$cookies', function($location, $cookies)
	{
		var vm = this;
		vm.fields = [];

		var cookie = $cookies.getAll();
		if('FieldsToCare' in cookie){
			vm.fields = $cookies.getObject('FieldsToCare');
		}

		vm.getToAddPage = getToAddPage;
		vm.removeField = removeField;
		
		function getToAddPage(){
			$location.path('/addfield');
		}

		function removeField(field){
			vm.fields = vm.fields.filter(function(el) {
				return el !== field;
			});
		}
	}]);
})();