wineobsApp.service('reservation',function($rootScope, $http, $location){

	var reservesToMake = [];

	var pushReservesToMake = function(reserve){
		reservesToMake.push(reserve);
		$rootScope.$broadcast('updateReservesToMake', reservesToMake )
	}

	var getReservesToMake = function(){
		return reservesToMake;
	}

	var removeReserve = function(k){
		reservesToMake.splice(k,1);
		$rootScope.$broadcast('updateReservesToMake', reservesToMake);
	}

	var noDate = new Date(Date.now()+1000*60*60*24);
	var noDateArr = {
		day: noDate.getDate(),
		month: noDate.getMonth() + 1,
		year: noDate.getFullYear(),
	}

	var formData = {
		date: {
			formattedDate: noDateArr.day+'.'+noDate.month+'.'+noDate.year,
			date: [noDateArr.year,noDateArr.month,noDateArr.day],
			serverDate: noDateArr.year+'-'+noDateArr.month+'-'+noDateArr.day,
		},
		language: 1,
		quota: {
			minors: 0,
			adults: 2,
			total: 0,
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

		//Prepare data to send CORS Ajax request (avoid the OPTIONS method request)
		var data = '_method=POST&data%5Bjson%5D=';
		data += encodeURIComponent(JSON.stringify({personalData: client, reserves: reserves}));

		$http.post($rootScope.apiUrl + '/reserves/api_add', data, {headers:{'Content-Type': 'application/x-www-form-urlencoded'}}).
			success(function(data, status, headers, config) {
				if(data.content == ''){
					data.error.forEach(function(e){
						swal('Error',e.text,'error')
					})
				}else{
					swal({
						type: 'success',
						title:'Seleccione un método de pago para continuar con la compra',
						text:[
							'<div class="small-12 row payment_method">',
								'<div class="small-6 column">',
									'<a target="_self" href="'+data.mp_url+'"><img src="/assets/img/mercadopago-logo.svg" style="height:120px" heigth="120px"></a>',
									'<p> Moneda: Pesos argentinos (ARS)</p>',
								'</div>',
								'<div class="small-6 column">',
									'<a target="_self" href="'+data.pp_url+'"><img src="/assets/img/paypal-logo.jpg" style="height:120px" heigth="120px"></a>',
									'<p> Moneda: Dólar estadounidense (USD)</p>',
								'</div>',
							'</div>'].join(''),
						html: true,
						showConfirmButton: false,
					})
				}
			}).
			error(function(data, status, headers, config) {
				swal('Hubo un error al intentar reservar','Error','error');
			});
	}

	var getSubtotal = function(){
		debugger;
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
		getSubtotal: getSubtotal,
	}
})
