//the controller is the "brains" of the route that holds all the logic

angular
	.module('createANote.dashboard')
	//the first parameter declares a name for the controller, the second paramter uses that name
	.controller('DashboardCtrl', DashboardCtrl);

	function DashboardCtrl($scope, $http) {
		var vm = this;

	}
	/*
		vm.itemOverdue = 'Tara';
		vm.itemOverdueTwo = 'Kody';
		vm.itemToday = 'eh';
		vm.itemToday2 = "meh";
		vm.itemLater = "buh";

		$scope.$watch(function () {
			return vm.itemOverdue;

		});

		$http({
			method: 'GET',
			url: '/http://randomuser.me/api'
		}).then(function(response) {
			console.log(response);
		})

		}
		*/