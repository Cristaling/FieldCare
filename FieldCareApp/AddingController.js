(function(){
	'use strict'
	var app = angular.module('FarmCare');
	app.controller('AddingController', ['$location', '$cookies', function($location, $cookies)
	{
		var vm = this
		vm.entry = {};
		vm.Adauga = Adauga;

		function Adauga(){
			var cookie = $cookies.getAll();
			if('FieldsToCare' in cookie){
				var entries = $cookies.getObject('FieldsToCare');
			}else{
				var entries = [];
			}
			console.log(entries);
			entries.push(vm.entry);
			$cookies.putObject('FieldsToCare', entries);
			$location.path('/landing');
		}
	}]);
})();