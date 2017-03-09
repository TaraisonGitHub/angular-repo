angular
	.module('createANote.home')
	.config(homeConfig);

	function homeConfig ($stateProvider) {
		$stateProvider.state({
			name: 'home',
			url: '/home',
			templateUrl: 'create-a-note/features/home/home.html',
			controller: 'HomeCtrl',
			controllerAs: 'HomeVM'
		})
	}