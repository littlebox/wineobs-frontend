wineobsApp.controller('wineobsController', function ($scope,$rootScope){
	$rootScope.bodyClass = '';
	$rootScope.apiUrl = 'http://reservas.wineobs.com';
	// $rootScope.apiUrl = 'http://metrobox.local';

	$scope.$on('$locationChangeStart', function(event) {
		$('.menu-overlay').removeClass('open');
	});

	Wineobs.init();
});

wineobsApp.controller('stepsController', function ($scope,$rootScope){
	$rootScope.bodyClass = 'steps';
	Wineobs.init();
});

wineobsApp.controller('reserveFormDataController', function ($scope,$rootScope,$location,reservation){
	$rootScope.bodyClass = 'reserve-form-data';
	$scope.date = {
		formattedDate: '',
		date: '',
	};

	// if( typeof $scope.formData.language == "undefined") $scope.formData.language = 1;
	if(typeof $scope.formData == "undefined") $scope.formData = {
		adults: 2,
		minors: 0,
		language: 1,
	};

	//height equalizer for form steps
	$scope.stepContentHeight = (function(){
		return "155px"
	})()

	$scope.setData = function(){
		$scope.formData.date.date = $scope.formData.date.formattedDate.split('.');
	}

	$scope.quota = {
		minors: $scope.formData.minors,
		adults: $scope.formData.adults,
		total: parseInt($scope.minors)+parseInt($scope.adults),
	}

	$scope.setFormData = function(){

		//DATA VALIDATION!!!
		if(typeof $scope.formData.date == 'undefined') {
			swal('Fecha incompleta','Por favor, ingrese una fecha');
			return
		};
		if($scope.formData.date.formattedDate == '') return;

		a = $scope.formData.date.date;
		date = new Date(a[2],a[1] - 1,a[0]);

		if(date < Date.now()){
			swal('Fecha ingresada invalida', 'Por favor corrija la fecha')
			return;
		}

		if($scope.formData.language == ''){
			swal('Idioma incorrecto','Por favor, corrija el idioma');
			return;
		};
		if(parseInt($scope.formData.minors,10) < 0 ){
			swal('Cantidad de menores incorrecta','Por favor, corrija la cantidad de menores');
			return;
		};
		if(parseInt($scope.formData.adults,10) < 1 ){
			swal('Cantidad de adultos incorrecta','Por favor, corrija la cantidad de adultos');
			return;
		};

		$scope.formData.date['serverDate'] = $scope.formData.date.date.reverse().join('-')

		reservation.setFormData($scope.formData.date,$scope.formData.language,{
			minors: $scope.formData.minors,
			adults: $scope.formData.adults,
			total: parseInt($scope.minors)+parseInt($scope.adults),
		});
		$location.path('/resultados');
	}

	/* -- 8=====D -- */
	Wineobs.initReserveFormData();
});

wineobsApp.controller('resultsController', function ($q,$scope,$rootScope,$http,reservation,$location){
	$rootScope.bodyClass = 'results';

	formData = reservation.getFormData();
	language = formData.language;
	date = formData.date;
	$scope.reservesToMake = reservation.getReservesToMake();

	$http.defaults.useXDomain = true;
	$http.get($rootScope.apiUrl + '/wineries/get/language:'+language+'/date:'+date.serverDate).
		success(function(data, status, headers, config) {
			$scope.wineries = data;
			$scope.cards = $scope.reservesToMake.concat(data);
			// data.forEach(function(v){loadLogos(v.Winery.id)})
			Wineobs.initResults();
			Wineobs.addWineryMarkers(data);
			Wineobs.initPaginator();
			$scope.show = true;
		}).
		error(function(data, status, headers, config) {
			swal('Error','Error');
		});

	$scope.logos = function(w){
		if(typeof w.Winery != "undefined"){
			if(w.Image.length){
				console.log(w.Image[0]);
				imgUrl = 'http://reservas.wineobs.com/img/wineries/'+w.Image[0].id+'.jpg';
				$('div[data-winery-index="'+w.Image[0].winery_id+'"] div.winery-card-front').css('background-image','url('+imgUrl+')')
			}
			if(w.Winery.has_logo){
				return $rootScope.apiUrl+'/img/wineries/logos/'+w.Winery.id+'.png';
			}else{
				return $rootScope.apiUrl+'/img/wineries/logos/default.png';
			}
		}else if(typeof w.winery != "undefined"){
			if(w.winery.has_logo){
				return $rootScope.apiUrl+'/img/wineries/logos/'+w.winery.id+'.png';
			}else{
				return $rootScope.apiUrl+'/img/wineries/logos/default.png';
			}
		}
	}

	$scope.infoClick = function(winery){
		reservation.showReservationModal(winery, 'info')
	}

	$scope.buttonClick = function(winery){
		reservation.showReservationModal(winery, 'tours')
	}

	$scope.removeReserve = function($index){
		reservation.removeReserve($index);
	}

	$scope.$on('updateReservesToMake', function(){
		$scope.reservesToMake = reservation.getReservesToMake();
		$scope.cards = $scope.reservesToMake.concat($scope.wineries);
	})

	$scope.hideNext = function(){
		return ($scope.reservesToMake.length == 0);
	}

	$scope.nextStep = function(){
		if($scope.reservesToMake.length > 0){
			$location.path('/datosPersonales');
		}else{
			swal('Ninguna reserva','Por favor, haga una reserva antes de continuar');
		}
	}

	$('.gammaGallery .menu-close-button').on('click',function(){
		$('.gammaGallery').removeClass('show');
	})

	$scope.showGammaGalery = function(winery){
		// window.wineryGammaGalery = winery;
		// $('.gammaGallery iframe').attr('src','assets/GammaGallery/index.php')

		iframe = $('.gammaGallery iframe')[0];
		if(iframe.contentWindow.init(winery)){
			$('.gammaGallery').addClass('show');
		}

	}

});

wineobsApp.controller('personalFormDataController', function ($scope,$rootScope,reservation){
	$rootScope.bodyClass = 'personal-data';
	$scope.formPersonalData = {
		country: 'AR'
	}
	$scope.reservations = reservation.getReservesToMake();
	$scope.formData = reservation.getFormData();

	$scope.submit = function(){
		if(reservation.getReservesToMake().length > 0 ){
			if(!$('form.personal-form-data').hasClass('ng-invalid')){
				$scope.submitButton = $('.wineobs-button.submit').ladda();
				$scope.submitButton.ladda('start');
				reservation.setPersonalData($scope.formPersonalData);
				reservation.sendReservesToMake();
			}else{
				swal('Datos no validos','Por favor, revise los datos antes de continuar');
			}
		}else{
			swal('Ninguna reserva','Por favor, haga una reserva antes de continuar');
		}
	}

	$scope.removeReserve = function($index){
		reservation.removeReserve($index);
	}
});

wineobsApp.controller('contactController', function ($scope,$rootScope){
	$rootScope.bodyClass = 'contact';
	Wineobs.init();
});

wineobsApp.controller('reservationModalController', function ($scope,$rootScope, reservation){
	$scope.reservationModal = document.querySelector('footer .modals .modal-info-winery');
	$scope.w = null;
	$scope.activeTour = '';
	$scope.activeHour = '';
	$scope.formData = reservation.getFormData();

	$scope.closeClick = function(){
		$scope.reservationModal.classList.remove('show');
	}

	$scope.activeTour = null;

	$scope.changeActiveTour = function(tourId,index){
		$scope.activeTour = tourId
		$scope.activeHour = $scope.w.Tour[index].Time[0].id
	}

	$scope.isTourActive = function(tourId){
		return ($scope.activeTour == tourId);
	}

	$scope.$on('showReservationModal', function(event, data) {
		$scope.setReservationModalActiveTab(data.modalReservationActiveTab);
		$scope.reservationModal.classList.add('show');
		$scope.w = reservation.getWinery();
		$scope.activeTour = $scope.w.Tour[0].id
		$scope.activeHour = $scope.w.Tour[0].Time[0].id
	})

	$scope.setReservationHour = function(timeId){
		$scope.activeHour = timeId;
	}

	$scope.isActiveHour = function(timeId){
		return $scope.activeHour == timeId;
	}

	$scope.setReservationModalActiveTab = function(activeTab){
		if(activeTab == "tours"){
			$scope.infoActive = false;
			$scope.toursActive = true;
		}else{
			$scope.infoActive = true;
			$scope.toursActive = false;
		}
	}

	$scope.makeReserve = function(){
		var formData = reservation.getFormData();
		var tour = $scope.w.Tour.filter(function(t){return t.id == $scope.activeTour})[0];
		var time = tour.Time.filter(function(t){return t.id == $scope.activeHour})[0];
		var language = tour.Language.filter(function(t){return t.id == formData.language})[0];
		reserve = {
			reservation: true,
			winery: $scope.w.Winery,
			tour: tour,
			tourId: $scope.activeTour,
			hourId: $scope.activeHour,
			hour: time.hour,
			minors: formData.quota.minors,
			adults: formData.quota.adults,
			quota: parseInt(formData.quota.minors) + parseInt(formData.quota.adults),
			date: formData.date,
			languageId: formData.language,
			language: language.name,
		}
		reservation.pushReservesToMake(reserve);
		$scope.closeClick();
	}

})

wineobsApp.controller('paymentController', function ($scope,$rootScope){
	$rootScope.bodyClass = 'payment';
	Wineobs.init();
});