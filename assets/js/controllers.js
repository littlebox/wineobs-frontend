wineobsApp.controller('wineobsController', function ($scope,$rootScope){
	$rootScope.bodyClass = '';
	Wineobs.init()
});

wineobsApp.controller('reserveFormDataController', function ($scope,$rootScope,$location,reservation){
	$rootScope.bodyClass = 'reserve-form-data';
	$scope.date = {
		formattedDate: '',
		date: '',
	};
	$scope.language = 0;
	$scope.minors;
	$scope.adults;

	//height equalizer for form steps
	$scope.stepContentHeight = (function(){
		return "155px"
	})()

	$scope.setData = function(){
		$scope.date.date = $scope.date.formattedDate.split('.');
	}

	$scope.quota = {
		minors: $scope.minors,
		adults: $scope.adults,
		total: parseInt($scope.minors)+parseInt($scope.adults),
	}

	$scope.setFormData = function(){

		//DATA VALIDATION!!!

		reservation.setFormData($scope.date,$scope.language,{
			minors: $scope.minors,
			adults: $scope.adults,
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
	$scope.reservesToMake = [];

	$http.defaults.useXDomain = true;
	$http.get('http://reservas.wineobs.com/wineries/get/language:'+language+'/date:'+date).
	// $http.get('http://reservas.wineobs.com/wineries/get/language:1/date:2015-11-23').
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

	$scope.$on('updateReservesToMake', function(){
		$scope.reservesToMake = reservation.getReservesToMake();
		console.debug($scope.reservesToMake);
		$scope.cards = $scope.reservesToMake.concat($scope.wineries);
	})

});

wineobsApp.controller('personalFormDataController', function ($scope,$rootScope,reservation){
	$rootScope.bodyClass = 'personal-data';
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
			date: formData.date.formattedDate,
			languageId: formData.language,
			language: language.name,
		}
		reservation.pushReservesToMake(reserve);
		$scope.closeClick();
	}

})