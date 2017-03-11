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
                .when("/addfield", {
                    templateUrl: "FieldCareApp/AddingPage.html",
                    controller: 'AddingController',
                    controllerAs: 'ctrl'
                })
		        .otherwise({ redirectTo: "/landing" });
	});
})();