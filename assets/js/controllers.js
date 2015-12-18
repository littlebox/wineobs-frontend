wineobsApp.controller('wineobsController', function ($scope,$rootScope,$timeout,reservation, $translate, $route){
	$rootScope.bodyClass = '';
	$rootScope.apiUrl = 'http://reservas.wineobs.com';
	// $rootScope.apiUrl = 'http://metrobox.local';

	$scope.$on('$locationChangeStart', function(event) {
		$('.menu-overlay').removeClass('open');
	});

	$scope.susReservasClick = function($event){
		$event.stopPropagation()
		if(reservation.getReservesToMake().length){
			jQuery('.menu .menu-overlay').removeClass('open');
			$timeout(function(){
				angular.element('.cart-open-button').trigger('click')
			},500);
		}
	}

	$scope.lg = window.lg;
	$rootScope.lg = window.lg;

	$scope.changeLanguage = function(lg){
		$scope.lg = lg;
		window.lg = lg;
		$rootScope.lg = lg;
		$translate.use(lg);
	}

	$rootScope.$on('$routeChangeStart',function(ev,next,current){
		if(!reservation.getReservesToMake().length) return true;
		if(next.redirectTo == '/datos'){
			ev.preventDefault();
			swal({
				title: 'Volver a empezar?',
				text: 'Si vuelve al inicio se borraran las reservas realizadas!',
				showCancelButton: true,
			}, function(isConfirm){
				if(isConfirm){
					reservation.getReservesToMake().forEach(function(k){
						reservation.removeReserve(k);
					})
					window.location.href = '/inicio'
				};
			});
		}
	})

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

	if(reservation.getReservesToMake().length){
		swal({
			text: 'Se borraron las reservas hechas anteriormente!',
			title: 'Info.',
			type: 'info',
		});
		reservation.getReservesToMake().forEach(function(r){
			reservation.removeReserve(r);
		});
	}

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
			swal({
				title:'Fecha incompleta!',
				text:'Por favor, ingrese una fecha.',
				type: 'warning',
			});
			return
		};
		if($scope.formData.date.formattedDate == '') return;

		a = $scope.formData.date.date;
		date = new Date(a[2],a[1] - 1,a[0]);

		if(date < Date.now()){
			swal({
				title:'Fecha ingresada invalida!',
				text:'Por favor corrija la fecha.',
				type: 'warning',
			})
			return;
		}

		if($scope.formData.language == ''){
			swal({
				title:'Idioma incorrecto!',
				text:'Por favor, corrija el idioma.',
				type: 'warning',
			});
			return;
		};
		if(parseInt($scope.formData.minors,10) < 0 ){
			swal({
				title:'Cantidad de menores incorrecta!',
				text:'Por favor, corrija la cantidad de menores.',
				type: 'warning',
			});
			return;
		};
		if(parseInt($scope.formData.adults,10) < 1 ){
			swal({
				title:'Cantidad de adultos incorrecta!',
				text:'Por favor, corrija la cantidad de adultos.',
				type: 'warning',
			});
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

wineobsApp
.filter('search', function(){
	return function(wineries,searchText){
		searchText = searchText.trim();
		if(searchText.length){
			wineries = wineries.filter(function(w){
				return (w.Winery.name.toLowerCase().match(searchText.toLowerCase()));
			})
		}
		return wineries;
	}
})
.controller('resultsController', function ($q,$scope,$rootScope,$http,reservation,$location,$filter,$modal,$animate){
	$rootScope.bodyClass = 'results';

	$scope.paginatedWineries = [];
	$scope.itemsPerPage = 6;
	$scope.search = '';
	$scope.highlight = [];

	formData = reservation.getFormData();
	language = formData.language;
	date = formData.date;
	$scope.reservesToMake = reservation.getReservesToMake();

	$http.defaults.useXDomain = true;
	$http.get($rootScope.apiUrl + '/wineries/get/language:'+language+'/date:'+date.serverDate+'/adults:'+formData.quota.adults+'/minors:'+formData.quota.minors).
		success(function(data, status, headers, config) {
			$scope.wineries = data;
			$scope.cards = data; //$scope.reservesToMake.concat(data);
			Wineobs.initResults();
			Wineobs.addWineryMarkers(data);
			// Wineobs.initPaginator();
			$scope.show = true;

			$scope.paginateWineries();

		}).
		error(function(data, status, headers, config) {
			swal({
				title:'Error',
				text:'Error',
				type: 'error',
			});
		});

	$scope.clickPin = function(id){
		Wineobs.markers[id].setIcon(new google.maps.MarkerImage(
			'/assets/img/marker-hover-wineobs.png',
			null,
			null,
			// new google.maps.Point(0,0),
			null,
			new google.maps.Size(36, 36)
		))
		window.setTimeout(function(){
			Wineobs.markers[id].setIcon(new google.maps.MarkerImage(
				'/assets/img/marker-wineobs.png',
				null,
				null,
				// new google.maps.Point(0,0),
				null,
				new google.maps.Size(36, 36)
			))
		}, 4000)
	}

	$scope.paginateWineries = function(){
		paginatedWineries = [];
		filteredWineries = $filter('search')($scope.wineries,$scope.search)
		for (var i = 0; i <= Math.floor(filteredWineries.length/$scope.itemsPerPage); i++) {
			paginatedWineries.push(filteredWineries.slice($scope.itemsPerPage*i,($scope.itemsPerPage*i)+$scope.itemsPerPage));
		};
		$scope.paginatedWineries = paginatedWineries;
		$scope.totalItems = filteredWineries.length;
		$scope.currentPage = 1;
		$scope.updateMarkers(1);
	}

	$scope.updateMarkers = function(page){
		Wineobs.markers.forEach(function(m){
			m.setVisible(false);
		})
		ids = []
		Wineobs.bounds = new google.maps.LatLngBounds
		window.reserveMarkers.forEach(function(m){
			Wineobs.bounds.extend(m.getPosition());
		})
		$scope.paginatedWineries[page-1].forEach(function(w,k){
			latLng = new google.maps.LatLng(w.Winery.latitude,w.Winery.longitude);
			Wineobs.bounds.extend(latLng);
			ids.push(w.Winery.id);
		})
		Wineobs.map.fitBounds(Wineobs.bounds);
		ids.forEach(function(i){
			Wineobs.markers[i].setVisible(true);
		})
	}

	$scope.highlightByName = function(id,active){
		$scope.highlight[id] = active;
	}

	$scope.logos = function(w){
		if(typeof w.Winery != "undefined"){
			if(w.Image.length){
				imgUrl = 'http://reservas.wineobs.com/img/wineries/'+w.Image[0].id+'.jpg';
				$('li.winery div[data-winery-id="'+w.Image[0].winery_id+'"] div.winery-image-background').css('background-image','url('+imgUrl+')')
			}
			if(w.Winery.has_logo){
				return $rootScope.apiUrl+'/img/wineries/logos/'+w.Winery.id+'.png';
			}else{
				return $rootScope.apiUrl+'/img/wineries/logos/default.svg';
			}
		}
	}

	$scope.infoClick = function(winery){
		reservation.showReservationModal(winery, 'info')
	}

	$scope.wineryClick = function(winery,$event){
		if($event.target.nodeName != "SPAN")
			// $scope.modalOpen(winery);
			reservation.showReservationModal(winery, 'tours');
	}

	$scope.removeReserve = function($index){
		reservation.removeReserve($index);
	}

	window.reserveMarkers = [];
	$scope.$on('updateReservesToMake', function(){
		window.reserveMarkers.forEach(function(m){
			m.setMap();
		})
		window.reserveMarkers = [];
		$scope.reservesToMake = reservation.getReservesToMake();

		$filter('orderBy')($scope.reservesToMake,'hour').forEach(function(r,k){
			// console.debug(r);
			p = new google.maps.LatLng(Number(r.winery.latitude),Number(r.winery.longitude));
			m = new google.maps.Marker({
				position: p,
				label: (k+1).toString(),//new google.maps.MarkerLabel({text: 'asdf'}),
				title: 'Reserva Numero: '+(k+1).toString(),
				map: Wineobs.map,
				icon: Wineobs.reserveMarkers,
			})
			window.reserveMarkers.push(m);
		})
		// $scope.cards = $scope.reservesToMake.concat($scope.wineries);
	})

	$scope.hideNext = function(){
		return ($scope.reservesToMake.length == 0);
	}

	$scope.nextStep = function(){
		if($scope.reservesToMake.length > 0){
			$location.path('/datosPersonales');
		}else{
			swal({
				title:'Ninguna reserva!',
				text:'Por favor, haga una reserva antes de continuar.',
				type: 'warning',
			});
		}
	}

	$scope.modalOpen = function(winery){
		var modalInstance = $modal.open({
			templateUrl: 'view/modalContent.html',
			controller: 'ModalInstanceController',
			resolve: {
				winery: function () {
					return winery;
				}
			}
		})
	}

	$('.gammaGallery .menu-close-button').on('click',function(){
		$('.gammaGallery').removeClass('show');
	})

	$scope.showGammaGalery = function(winery){
		// window.wineryGammaGalery = winery;
		// $('.gammaGallery iframe').attr('src','assets/GammaGallery/index.php')

		iframe = $('.gammaGallery iframe')[0];
		if(iframe.contentWindow.init(winery,location.hostname)){
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
		try {
			if(reservation.getReservesToMake().length > 0 ){
				if($('form.personal-form-data').hasClass('ng-invalid')){throw new Error('Algo invalido!')}

				var fecha = $scope.formPersonalData.birthDate;
				var fechaArr = fecha.split('/');
				if(fechaArr.length != 3){ throw new Error('Fecha invalida');}
				var date = new Date(fechaArr[2],fechaArr[1]-1,fechaArr[0]);
				if ( Object.prototype.toString.call(date) === "[object Date]" ) {
				  if ( isNaN( date.getTime() ) ) {
						throw new Error('Fecha invalida');
				  }
				  else {
						$scope.formPersonalData.birthDate = date;
				  }
				}
				else {
					throw new Error('Fecha invalida');
				}

				$scope.submitButton = $('.wineobs-button.submit').ladda();
				$scope.submitButton.ladda('start');
				reservation.setPersonalData($scope.formPersonalData);
				reservation.sendReservesToMake();
			}else{
				swal({
					title:'Ninguna reserva!',
					text:'Por favor, haga una reserva antes de continuar.',
					type: 'warning',
				});
			}
		} catch (e) {
			swal({
				title:'Datos no validos!',
				text:'Por favor, revise los datos antes de continuar.',
				type: 'warning',
			});
		} finally {

		}
	}

	$scope.removeReserve = function($index){
		reservation.removeReserve($index);
	}
});

wineobsApp.controller('contactController', function ($scope,$rootScope){
	$rootScope.bodyClass = 'contact';
	Wineobs.init();

	$scope.mail = {};

	$scope.submit = function submit(){
		if(!document.querySelector('form.contact').classList.contains('.ng-invalid'))
			$('[ng-model*="user"]').addClass('ng-touched')
			var url = $rootScope.apiUrl+'/send_email/'
			$.post(url, {mail: $scope.mail}, function(e){
				swal({
					text: 'En breve nos pondremos en contacto con Usted.',
					title: 'Gracias por su consulta!',
					type: 'success',
				},function(){
					window.location.href = '/';
				});
			})
	}
});

wineobsApp
	.config(function($tooltipProvider){
		$tooltipProvider.setTriggers({
			'new-reserve':'end-new-reserve',
		})
	})
	.controller('cartController', function ($scope,$rootScope, reservation){
		$scope.reservationQty = 0; //reservation.getReservesToMake().length;
		$scope.cartSlided = false;
		$scope.reservations = reservation.getReservesToMake();

		$scope.newReserveTooltip = '<span class="icon-wineobs-cross"></span><h1>Nueva Reserva!</h1><p>Para ver sus reservas haga click en la copa</p>'

		$scope.$on('updateReservesToMake', function(){
			$scope.reservationQty = reservation.getReservesToMake().length;
			if($scope.reservationQty < 3){
				window.setTimeout(function(){
					$('.new-reserve-tooltip').trigger('new-reserve');
					window.setTimeout(function(){
						$('.new-reserve-tooltip').trigger('end-new-reserve');
					},4000)
				},0)
			}
		});

	$scope.cartSlide = function(){
		$scope.cartSlided = true;
	}

	$scope.closeReserveTooltip = function(){
		window.setTimeout(function(){
			$('.new-reserve-tooltip').trigger('end-new-reserve');
		})
	}

	var menuCartClose = document.querySelector('.cart.menu-close-button');

	menuCartClose.addEventListener('click',function(ev){
		ev.stopPropagation();
	})

	$scope.removeReserve = function($index){
		reservation.removeReserve($index);
	}

	$scope.$on('updateReservesToMake', function(ev,data){
		s = 0;
		data.reservesToMake.forEach(function(v){
			s += v.tour.price * v.adults + v.tour.minors_price * v.minors;
		})
		$scope.subtotal = s;
	})
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
		$scope.activeTour = tourId;
		$scope.activeIndex = index;
		$scope.activeHour = $scope.w.Tour[index].Time[0].id;
		$scope.$applyAsync();
	}

	$scope.isTourActive = function(tourId){
		return ($scope.activeTour == tourId);
	}

	$scope.$on('showReservationModal', function(event, data) {
		$scope.setReservationModalActiveTab(data.modalReservationActiveTab);
		$scope.reservationModal.classList.add('show');
		$scope.w = reservation.getWinery();
		if(!$scope.w.Tour.length) return;
		$scope.activeTour = $scope.w.Tour[0].id
		$scope.activeHour = $scope.w.Tour[0].Time[0].id
		$scope.changeActiveTour($scope.activeTour,0);
	})

	$scope.setReservationHour = function(timeId){
		$scope.activeHour = timeId;
	}

	$scope.isActiveHour = function(timeId){
		return $scope.activeHour == timeId;
	}

	$scope.setReservationModalActiveTab = function(activeTab){
		$scope.infoActive = $scope.toursActive = $scope.commentsActive = false;
		$scope[activeTab+'Active'] = true;
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

	//modal scroller mobile
	angular.element('.tours-list-scroller').on('scroll',function(ev){
		var currentScroll = (ev.target.scrollLeft*$scope.w.Tour.length/ev.target.scrollWidth)+1;
		var index = Math.ceil(currentScroll);
		if(currentScroll % 1 > 0.5 && currentScroll % 1 != 0){
			$scope.changeActiveTour($scope.w.Tour[index - 1].id, index-1)
		}else{
			$scope.changeActiveTour($scope.w.Tour[index - 2].id, index-2)
		}
	})

})

wineobsApp.controller('paymentController', function ($scope,$rootScope){
	$rootScope.bodyClass = 'payment';
	Wineobs.init();
});

wineobsApp.controller('ModalInstanceController', function($scope, $modalInstance, winery){
	$scope.w = winery;
	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
})

wineobsApp.controller('commentsController', function($scope,$rootScope,$http){
	$scope.getParams = function getParams(url){
		var regex = /[?&]([^=#]+)=([^&#]*)/g,
		params = {},
		match;
		while(match = regex.exec(url)) {
			params[match[1]] = match[2];
		}
		return params;
	}

	$scope.wineriesComment = {};
	$scope.comment = {};

	$scope.token = $scope.getParams(window.location.search).token;
	var getUrl = $rootScope.apiUrl+'/reviews/get_wineries_to_review/token:'+$scope.token;
	var postUrl = $rootScope.apiUrl+'/reviews/add/';

	$http({
		method: 'GET',
		url: getUrl,
	}).then(function successCallback(response) {
		$scope.wineriesComment = response.data;
	}, function errorCallback(response) {
		swal({
			title: 'Error!',
			text: 'Código incorrecto o ya se hicieron comentarios para estas reservas.',
		},function(){
			window.location.href = '';
		})
	});

	$scope.sendComment = function(){
		jQuery.post(postUrl,{
			token: $scope.token,
			review: $scope.comment,
		}, function(resp){
			if(!resp.error){
				swal(resp.content);
			}
		})
	}
})
