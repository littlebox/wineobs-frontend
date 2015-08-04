wineobsApp.service('reservation',function($rootScope, $http){

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

	var removeReserve = function(k){
		reservesToMake.splice(k,1);
		$rootScope.$broadcast('updateReservesToMake',{
			reservesToMake,
		});
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

	var personalData = {}

	var setFormData = function(date,language,quota){
		formData.date = date;
		formData.language = language;
		formData.quota = quota;
	}

	var getFormData = function(){
		return formData;
	}

	getPersonalData = function(){
		return personalData;
	}
	setPersonalData = function(data){
		personalData = data;
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

	var sendReservesToMake = function(){
		console.log(personalData);
		console.log(reservesToMake);
		$http.defaults.useXDomain = true;
		$http.post('http://admin.wineobs.local/reserves/api_add', JSON.stringify({personalData: personalData, reserves: reservesToMake}), {headers:{ 'Content-Type': 'text/plain'}}).
			success(function(data, status, headers, config) {

			}).
			error(function(data, status, headers, config) {

			});
	}

	return {
		getFormData: getFormData,
		setFormData: setFormData,
		getPersonalData: getPersonalData,
		setPersonalData: setPersonalData,
		setWinery: setCurrentWinery,
		getWinery: getCurrentWinery,
		showReservationModal: showReservationModal,
		pushReservesToMake: pushReservesToMake,
		getReservesToMake: getReservesToMake,
		removeReserve: removeReserve,
		sendReservesToMake: sendReservesToMake,
	}
})