wineobsApp.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/datos',{
			templateUrl: '/view/reserve-form-data.html',
			// controller: 'reserveFormDataController'
		})

		.when('/resultados',{
			templateUrl: '/view/results.html',
			// controller: 'resultsController'
		})

		.when('/contacto',{
			templateUrl: '/view/contact.html',
			// controller: 'reserveFormDataController'
		})

		.when('/datosPersonales',{
			templateUrl: '/view/personal-form-data.html'
		})

		.otherwise('/datos',{
			templateUrl: '/view/reserve-form-data.html',
		})

		$locationProvider.html5Mode(true);
})