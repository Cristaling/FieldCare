(function(){
	'use strict'
	var app = angular.module('FarmCare', ['ngRoute', 'ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages'])
	app.config(function ($routeProvider) {
            $routeProvider
                .when("/landing", {
                    templateUrl: "FieldCareApp/LandingPage.html"
                })
                .when("/main", {
                    templateUrl: "FieldCareApp/MainPage.html",
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