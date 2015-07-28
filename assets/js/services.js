wineobsApp.service('reservation',function($rootScope){

	var reservesToMake = [];

	var pushReservesToMake = function(reserve){
		reservesToMake.push(reserve);
		$rootScope.$broadcast('updateReservesToMake',{
			reservesToMake,
		})
	}

	var getReservesToMake = function(){
		return reservesToMake;
	}

	var formData = {
		date: {
			formattedDate: '01.01.2016',
			date: ['2016','01','01'],
		},
		language: 1,
		quota: {
			minors: 3,
			adults: 5,
			total: 8,
		},
	}

	var setFormData = function(date,language,quota){
		formData.date = date.date[2]+'-'+date.date[1]+'-'+date.date[0];
		formData.language = language;
		formData.quota = quota;
	}

	var getFormData = function(){
		return formData;
	}

	var currentWinery;

	var setCurrentWinery = function(winery){
		currentWinery = winery;
	}

	var getCurrentWinery = function(winery){
		return currentWinery;
	}

	var showReservationModal = function(winery, modalReservationActiveTab){
		setCurrentWinery(winery);
		$rootScope.$broadcast('showReservationModal',{
			winery: getCurrentWinery(),
			modalReservationActiveTab: modalReservationActiveTab,
		});
	}

	return {
		getFormData: getFormData,
		setFormData: setFormData,
		setWinery: setCurrentWinery,
		getWinery: getCurrentWinery,
		showReservationModal: showReservationModal,
		pushReservesToMake: pushReservesToMake,
		getReservesToMake: getReservesToMake,
	}
})