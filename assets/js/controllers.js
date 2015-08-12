wineobsApp.controller('wineobsController', function ($scope,$rootScope){
	$rootScope.bodyClass = '';
	$rootScope.apiUrl = 'http://reservas.wineobs.com';
	// $rootScope.apiUrl = 'http://admin.wineobs.local';
	Wineobs.init()
});

wineobsApp.controller('reserveFormDataController', function ($scope,$rootScope,$location,reservation){
	$rootScope.bodyClass = 'reserve-form-data';
	$scope.date = {
		formattedDate: '',
		date: '',
	};
	$scope.language = 0;
	if(typeof $scope.formData == "undefined") $scope.formData = {
		adults: 2,
		minors: 0,
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
		if(typeof $scope.formData.date == 'undefined') return;
		if($scope.formData.date.formattedDate == '') return;
		if($scope.formData.language == '') return;
		if(parseInt($scope.formData.minors,10) < 0 ) return;
		if(parseInt($scope.formData.adults,10) < 1 ) return;

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

wineobsApp.controller('resultsController', function ($scope,$rootScope,$http,reservation){
	$rootScope.bodyClass = 'results';

	formData = reservation.getFormData();
	language = formData.language;
	date = formData.date;
	$scope.reservesToMake = reservation.getReservesToMake();



	$http.defaults.useXDomain = true;
	$http.get($rootScope.apiUrl + '/wineries/get/language:'+language+'/date:'+date.serverDate).
		success(function(data, status, headers, config) {
			console.log(data);
			$scope.wineries = data;
			$scope.cards = $scope.reservesToMake.concat(data);
			Wineobs.initResults();
			Wineobs.addWineryMarkers(data);
			Wineobs.initPaginator();
		}).
		error(function(data, status, headers, config) {
			console.log(data);
			console.log(status);
		});

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
		console.debug($scope.reservesToMake);
		$scope.cards = $scope.reservesToMake.concat($scope.wineries);
	})

});

wineobsApp.controller('personalFormDataController', function ($scope,$rootScope,reservation){
	$rootScope.bodyClass = 'personal-data';
	$scope.formPersonalData = {
		country: 'AR'
	}
	$scope.reservations = reservation.getReservesToMake();
	$scope.formData = reservation.getFormData();

	$scope.submit = function(){
		reservation.setPersonalData($scope.formPersonalData);
		reservation.sendReservesToMake();
	}

	$scope.removeReserve = function($index){
		reservation.removeReserve($index);
	}
});

wineobsApp.controller('contactController', function ($scope,$rootScope){
	$rootScope.bodyClass = 'contact';
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
			quota: formData.quota.total,
			date: formData.date,
			languageId: formData.language,
			language: language.name,
		}
		reservation.pushReservesToMake(reserve);
		$scope.closeClick();
	}

})