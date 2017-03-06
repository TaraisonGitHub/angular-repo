angular
	.module('createANote.dashboard')
	.config(dashboardConfig);

	function dashboardConfig ($stateProvider) {
		$stateProvider.state({
			name: 'dashboard',
			url: '/',
			templateUrl: 'create-a-note/features/dashboard/dashboard.html',
			controller: 'DashboardCtrl',
			controllerAs: 'DashboardVM'
		})
	}