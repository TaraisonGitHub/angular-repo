angular
	// The two parameters in the function module are 1) the name of the app, and 2) the array of dependencies
	.module('createANote',[
		'ui.router',
		'createANote.dashboard',
		'createANote.home'
	])
	.config(createANoteConfig);
	function createANoteConfig($urlRouterProvider) {
		//this is the route the application will go to if the specified route doesn't exist
		//we made it just a forward slash, because it will redirect it via Angular
		$urlRouterProvider.otherwise('/');

	}
