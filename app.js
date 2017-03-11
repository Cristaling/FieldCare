function(){
	var app = angular.module('FarmCare', [])
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
}();