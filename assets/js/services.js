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
			serverDate: '2016-01-01',
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

		var data = {
			json:'',
		}
		var client = {
			email: personalData.email,
			fullName: personalData.fullName,
			birthDate: [personalData.birthDate.getFullYear(),personalData.birthDate.getMonth()+1,personalData.birthDate.getDate()].join('-'),
			phone: personalData.phone,
			lodging: personalData.hotel,
			country: personalData.country,
		};
		var reserves = {
			tours: []
		};
		reservesToMake.forEach(function(reserve,k){
			if(k==0){
				reserves.language = reserve.languageId;
				reserves.date = reserve.date.serverDate;
				reserves.minors = reserve.minors;
				reserves.adults = reserve.adults;
			}
			reserves.tours[k] = {
				id: reserve.tour.id,
				time: reserve.hour
			}
		})
		console.log(reserves);
		console.log(client);

		//Prepare data to send CORS Ajax request (avoid the OPTIONS method request)
		var data = '_method=POST&data%5Bjson%5D=';
		data += encodeURIComponent(JSON.stringify({personalData: client, reserves: reserves}));

		$http.post($rootScope.apiUrl + '/reserves/api_add', data, {headers:{'Content-Type': 'application/x-www-form-urlencoded'}}).
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