//the controller is the "brains" of the route that holds all the logic

angular
	.module('createANote.dashboard')
	//the first parameter declares a name for the controller, the second paramter uses that name
	.controller('DashboardCtrl', DashboardCtrl);

	function DashboardCtrl() {
		var vm = this;

		vm.itemOverdue = 'Tara';
		vm.heroName = 'Kody';
	}