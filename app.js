(function(){
	'use strict'
	var app = angular.module('FarmCare', ['ngRoute', 'ngAnimate', 'ngCookies', 'ngAria', 'ngMaterial', 'ngMessages'])
	app.config(function ($routeProvider) {
            $routeProvider
                .when("/landing", {
                    templateUrl: "FieldCareApp/LandingPage.html",
					controller: 'LandingController',
                    controllerAs: 'ctrl'
                })
                .when("/ownerlist", {
                    templateUrl: "FieldCareApp/OwnerListPage.html",
                    controller: 'MainController',
                    controllerAs: 'ctrl'
                })
		        .otherwise({ redirectTo: "/landing" });
	});
	app.controller('MainController', function()
	{
		vm = this
		vm.nume = "Solovjov Maksim"
		vm.limba = "Russian Female"
		
		vm.Speak = Speak
		
		function Speak(){
			responsiveVoice.speak(vm.nume, vm.limba);
		}
	});
})();