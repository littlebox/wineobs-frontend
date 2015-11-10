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

		.when('/pasos',{
			templateUrl: '/view/steps.html',
			// controller: 'stepsController'
		})

		.when('/payment_success',{
			templateUrl: '/view/payment_success.html',
		})

		.when('/payment_failure',{
			templateUrl: '/view/payment_failure.html',
		})

		.when('/payment_pending',{
			templateUrl: '/view/payment_pending.html',
		})

		.when('/cancelar',{
			templateUrl: '/view/cancelar.html',
		})

		.otherwise('/datos',{
			templateUrl: '/view/reserve-form-data.html',
		})

		$locationProvider.html5Mode(true);
})
