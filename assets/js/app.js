var wineobsApp = angular.module('wineobsApp', ['ngRoute', 'mm.foundation','pascalprecht.translate', 'ngCookies']);
wineobsApp.config(function ($translateProvider) {
	$translateProvider.translations('es', {
	  INICIO: 'Inicio',
	  TITULO_DATOS: 'Recorrer. Conocer. Disfrutar.',
	  TITULO_FOOTER_TRANSPORTE: '*El servicio de transporte no está incluido',
	  PRECIO_TOTAL:'Precio Total',
	  MENU_ITEM1: 'Inicio',
	  MENU_ITEM2: 'Mis Reservas',
	  MENU_ITEM3: 'Contacto',
	  TITULO_PASO1: 'ELIJA UNA FECHA',
	  TITULO_PASO2: 'ELIJA EL IDIOMA',
	  TITULO_PASO3: 'INDIQUE LA CANTIDAD DE PERSONAS',
	  TITULO_PASO4: 'SELECCIONE LAS BODEGAS',
	  TITULO_PASO5: 'CONFIRME SU RESERVA',
	  TITULO_IMAGENES:'IMÁGENES',
	  INFOBOX_DISTANCIA:'Por favor, tenga en cuenta la distancia entre bodegas y el medio de transporte utilizado.',
	  INFOBOX_RECOMENDACION:'Se recomienda no realizar más de 4 reservas por día.',
	  INFOBOX_PAGOS:'A continuación será redireccionado a (medio de pago) para finalizar su compra. Muchas gracias!.',
	  TITULO_BODEGA:'HISTORIA',
	  BOTON_CONTINUAR:'CONTINUAR',
	  CONTENIDO_PASO1: 'dd.mm.aa',
	  CONTENIDO_PASO2a: 'español',
	  CONTENIDO_PASO2b: 'inglés',
	  CONTENIDO_PASO3a: 'adultos',
	  CONTENIDO_PASO3b: 'menores',
	  INFOBOX_MENORES:'Los menores de 18 años no podrán participar de la degustación',
	  BOTON_ATRAS:'ANTERIOR',
	  BOTON_ADELANTE:'SIGUIENTE',
	  BOTON_CONFIRMAR:'CONFIRMAR',
	  INFO_BODEGA_TITULO1:'Bodega',
	  INFO_BODEGA_TITULO2:'Tours',
	  INFO_BODEGA_TITULO3:'Comentarios',
	  INFO_BODEGA_DURACIÓN:'DURACIÓN',
	  INFO_BODEGA_HORARIO:'SELECCIONE HORARIO',
	  INFO_BODEGA_RESERVA:'RESERVAR',
	  INFO_DATOS_PERSONALES:'DATOS PERSONALES',
	  INFO_DATOS_PERSONALESa:'Nombre y Apellido',
	  INFO_DATOS_PERSONALESb:'Fecha de Nacimiento',
	  INFO_DATOS_PERSONALESc:'País de Origen',
	  INFO_DATOS_PERSONALESd:'Teléfono',
	  INFO_DATOS_PERSONALESe:'Email',
	  INFO_DATOS_PERSONALESf:'Método de Pago',
	  INFO_TOUR_RESERVADOa:'Cupos Reservados',
	  INFO_TOUR_RESERVADOb:'Idioma del Tour',
	  INFO_TOUR_RESERVADOc:'Duración',
	  INFO_TOUR_VISTA_RESERVASa:'Idioma:',
	  INFO_TOUR_VISTA_RESERVASb:'Cupos y Precios:',
	  INFO_TOUR_VISTA_RESERVASc:'Subtotal:',
	  TITULO_CONTACTO:'CONTACTO',
	  INFO_CONTACTOa:'Nombre y Apellido',
	  INFO_CONTACTOb:'E-Mail',
	  INFO_CONTACTOc:'Mensaje',
	  INFO_CONTACTOd:'O envie un mail a:',
	  BOTON_CONTACTO:'ENVIAR',
	});
	$translateProvider.translations('en', {
		INICIO: 'Start',
		TITULO_DATOS: 'Get Around. Visit. Enjoy.',
	  TITULO_FOOTER_TRANSPORTE: '*Transport is not included',
	  PRECIO_TOTAL:'Total Price',
	  MENU_ITEM1: 'Start',
	  MENU_ITEM2: 'Your Bookings',
	  MENU_ITEM3: 'Contact',
	  TITULO_PASO1: 'DATE',
	  TITULO_PASO2: 'LANGUAGE',
	  TITULO_PASO3: 'NUMBER OF PEOPLE',
	  TITULO_PASO4: 'CHOOSE A WINERY',
	  TITULO_PASO5: 'CONFIRM YOUR BOOKING',
	  TITULO_IMAGENES:'IMAGES',
	  TITULO_BODEGA:'HISTORY',
	  INFOBOX_DISTANCIA:'Please bear in mind the distance between wineries when planning your transportation.',
	  INFOBOX_RECOMENDACION:'It is not advisable to book more than 4 wine tours per day.',
	  INFOBOX_PAGOS:'You will be redirected to PayPal to finish your purchase. Thanks!',
	  BOTON_CONTINUAR:'CONTINUE',
	  CONTENIDO_PASO1: 'mm.dd.yyyy',
	  CONTENIDO_PASO2a: 'spanish',
	  CONTENIDO_PASO2b: 'english',
	  CONTENIDO_PASO3a: 'adults',
	  CONTENIDO_PASO3b: 'children',
	  INFOBOX_MENORES:'People under 18 years old can\'t participate at the tasting.',
	  BOTON_ATRAS:'PREVIOUS',
	  BOTON_ADELANTE:'NEXT',
	  BOTON_CONFIRMAR:'CONFIRM',
	  INFO_BODEGA_TITULO1:'Winery',
	  INFO_BODEGA_TITULO2:'Tours',
	  INFO_BODEGA_TITULO3:'Comments',
	  INFO_BODEGA_DURACIÓN:'Duration',
	  INFO_BODEGA_HORARIO:'Schedules',
	  INFO_BODEGA_RESERVA:'RESERVE',
	  INFO_DATOS_PERSONALES:'PERSONAL DATA',
	  INFO_DATOS_PERSONALESa:'Full Name',
	  INFO_DATOS_PERSONALESb:'Age',
	  INFO_DATOS_PERSONALESc:'Nationality',
	  INFO_DATOS_PERSONALESd:'Phone',
	  INFO_DATOS_PERSONALESe:'Email',
	  INFO_DATOS_PERSONALESf:'Payment Method',
	  INFO_TOUR_RESERVADOa:'Booked Places',
	  INFO_TOUR_RESERVADOb:'Tour Language',
	  INFO_TOUR_RESERVADOc:'Duration',
	  INFO_TOUR_VISTA_RESERVASa:'Language:',
	  INFO_TOUR_VISTA_RESERVASb:'Places and Prices:',
	  INFO_TOUR_VISTA_RESERVASc:'Subtotal:',
	  TITULO_CONTACTO:'CONTACT',
	  INFO_CONTACTOa:'Name and Surname',
	  INFO_CONTACTOb:'E-Mail',
	  INFO_CONTACTOc:'Message',
	  INFO_CONTACTOd:'Or send an email to:',
	  BOTON_CONTACTO:'SEND',
	});

	$translateProvider.translations('pt', {
	  INICIO: 'Começar',
	  TITULO_DATOS: 'Percorra. Conheça. Desfrute.',
	  TITULO_FOOTER_TRANSPORTE: '*O serviço de traslado não está incluído.',
	  PRECIO_TOTAL:'Preço Total ',
	  MENU_ITEM1: 'INICIO',
	  MENU_ITEM2: 'MINA RESERVAS',
	  MENU_ITEM3: 'CONTACTO',
	  TITULO_PASO1: 'ESCOLHA UMA DATA',
	  TITULO_PASO2: 'ESCOLHA O SEU IDIOMA',
	  TITULO_PASO3: 'INDIQUE O NÚMERO DE PESSOAS',
	  TITULO_PASO4: 'SELECIONE AS VINICOLAS',
	  TITULO_PASO5: 'CONFIRME SUA RESERVA',
	  TITULO_IMAGENES:'IMÁGENES',
	  TITULO_BODEGA:'HISTORIA',
	  INFOBOX_DISTANCIA:'Por favor, verifique a distância entre as vinícolas e os meios de transporte que utilizará para os traslados.',
	  INFOBOX_RECOMENDACION:'Recomenda-se NÃO fazer reservas em mais de 4 vinícolas por dia.',
	  INFOBOX_PAGOS:'A seguir será redirecionado para o PayPal para concluir a compra. Obrigado!',
	  BOTON_CONTINUAR:'CONTINUAR',
	  CONTENIDO_PASO1: 'dd.mm.aa',
	  CONTENIDO_PASO2a: 'espanhol',
	  CONTENIDO_PASO2b: 'inglês',
	  CONTENIDO_PASO3a: 'adultos',
	  CONTENIDO_PASO3b: 'menores',
	  INFOBOX_MENORES:'menores de 18 anos não podem participar da degustação',
	  BOTON_ATRAS:'ANTERIOR',
	  BOTON_ADELANTE:'SEGUINTE',
	  BOTON_CONFIRMAR:'CONFIRMAR',
	  INFO_BODEGA_TITULO1:'Vinícola',
	  INFO_BODEGA_TITULO2:'Tours',
	  INFO_BODEGA_TITULO3:'Comentarios',
	  INFO_BODEGA_DURACIÓN:'DURACAO',
	  INFO_BODEGA_HORARIO:'SELECCIONE HORARIO',
	  INFO_BODEGA_RESERVA:'RESERVAR',
	  INFO_DATOS_PERSONALES:'DADOS PESSOAIS',
	  INFO_DATOS_PERSONALESa:'Nome Completo',
	  INFO_DATOS_PERSONALESb:'Idade',
	  INFO_DATOS_PERSONALESc:'Local de Origem',
	  INFO_DATOS_PERSONALESd:'Celular',
	  INFO_DATOS_PERSONALESe:'Email',
	  INFO_DATOS_PERSONALESf:'Método de Pago',
	  INFO_TOUR_RESERVADOa:'Lugares Reservadas',
	  INFO_TOUR_RESERVADOb:'Idioma do Passeio',
	  INFO_TOUR_RESERVADOc:'Duração',
	  INFO_TOUR_VISTA_RESERVASa:'Idioma:',
	  INFO_TOUR_VISTA_RESERVASb:'Cupos y Precios:',
	  INFO_TOUR_VISTA_RESERVASc:'Subtotal:',
	  TITULO_CONTACTO:'CONTATO',
	  INFO_CONTACTOa:'Nome Completo',
	  INFO_CONTACTOb:'E-Mail',
	  INFO_CONTACTOc:'Mensagem',
	  INFO_CONTACTOd:'Ou envie um e-mail para:',
	  BOTON_CONTACTO:'ENVIAR',
	});
	// var lg = (window.location.search.) ? regex.exec(window.location.search)[1] : window.navigator.language.split('-')[0]
	$translateProvider.useCookieStorage();
	var regex = /[lg]=([^&#]*)/g
	window.lg = ( window.location.search.search(regex) > -1 ) ? regex.exec(window.location.search)[1] : window.navigator.language.split('-')[0];
	$translateProvider.preferredLanguage(lg);
	$translateProvider.useSanitizeValueStrategy('escape');
});
(function(window){
	'use strict';
	var Wineobs = {
		init: function(){
			this.initMenu();
			// this.initDateDropper();
			// this.initDotOptions();
			// this.initMap();
			// this.initSearch();
			// this.initCardsFlip();
		},
		initReserveFormData: function(){
			// this.initMenu();
			this.initDateDropper();
			this.initDotOptions();
			// this.initMap();
			// this.initSearch();
			// this.initCardsFlip();
		},
		initResults: function(){
			// this.initMenu();
			// this.initDateDropper();
			// this.initDotOptions();
			this.initMap();
			this.initSearch();
			// this.initCardsFlip();
		},
		initDateDropper: function(){
			// $('.datedropper').dateDropper({
			// 	color: '#9f4b55',
			// 	bgColor: 'rgba(255, 255, 255, 0.95)',
			// 	borderColor: 'white',
			// 	lang: 'es',
			// 	format: 'd.m.Y',
			// 	animate_current: false,
			// 	minYear: new Date().getFullYear(),
			// 	maxYear: new Date().getFullYear()+2,
			// });
			$('.datedropper').fdatepicker({
				format: 'dd.mm.yyyy',
				startDate: new Date(Date.now()+(1000*3600*24)),
				language: 'es',
			});
		},
		initDotOptions: function(){
			[].slice.call( document.querySelectorAll( '.dotoptions > ul' ) ).forEach( function( nav ) {
				new DotNav( nav, {
					callback : function( idx ) {
						//console.log( idx )
					}
				} );
			} );
		},
		initMenu: function(){
			var menuOpen = document.querySelector('.menu-open-button');
			var menuOverlay = menuOpen.querySelector('.menu-overlay');
			var menuClose = document.querySelector('.menu-close-button');
			menuOpen.addEventListener('click',function(ev){
				menuOverlay.classList.add('open');
			})
			menuClose.addEventListener('click',function(ev){
				ev.stopPropagation();
				menuOverlay.classList.remove('open');
			})
		},
		initMap: function(){
			var mapOptions = {
				center: { lat: -32.883333, lng: -68.816667},
				zoom: 8
			};

			// if(this.map == ''){
			this.map = new google.maps.Map(document.querySelector('.map-container'), mapOptions);
			this.bounds = new google.maps.LatLngBounds();
			// }
			this.markerClusterer = new MarkerClusterer(
				this.map,[],
				{styles: [{
					url: '/assets/img/marker-cluster.png',
					height: 40,
					width: 40,
					anchor: [0,0],
					textColor: '#ffffff',
					textSize: 16
				}]}
			)

			window.addEventListener('load', function(){
				google.maps.event.trigger(this.map, 'resize');
				this.map.setZoom( this.map.getZoom() );
				this.map.setCenter( this.map.getCenter() );
			});
		},

		addWineryMarkers: function(wineries){

			wineries.forEach(function(w){
				var latLng = new google.maps.LatLng(w.Winery.latitude,w.Winery.longitude);
				Wineobs.markers[w.Winery.id] = new google.maps.Marker({
					position: latLng,
					map: Wineobs.map,
					title: w.Winery.name,
					icon: new google.maps.MarkerImage(
						'/assets/img/marker-wineobs.png',
						null,
						null,
						// new google.maps.Point(0,0),
						null,
						new google.maps.Size(36, 36)
					),
					visible: false,
					// animation: google.maps.Animation.DROP,
				});

				Wineobs.markers[w.Winery.id].addListener('mouseover',(function(id){
					Wineobs.markers[id].setZIndex(9);
					// angular.element('div[data-winery-id="'+id+'"]').addClass('highlight');
					document.querySelector('div[data-winery-id="'+id+'"]').parentNode.classList.add('highlight');
					// angular.element('.pagination-list').scope().highlightByName(id,true);
				}).bind(null,w.Winery.id));

				Wineobs.markers[w.Winery.id].addListener('mouseout',(function(id){
					Wineobs.markers[id].setZIndex(1);

					document.querySelector('div[data-winery-id="'+id+'"]').parentNode.classList.remove('highlight');
					// angular.element('.pagination-list').scope().highlightByName(id,false);
				}).bind(null,w.Winery.id));

				Wineobs.markers[w.Winery.id].addListener('click',function(){
				})

				Wineobs.bounds.extend(latLng);
				// Wineobs.markerClusterer.addMarker(Wineobs.markers[w.Winery.id]);
			})
			Wineobs.map.fitBounds(Wineobs.bounds);
		},
		initPaginator: function(){
			var paginator = $('.wineries-paginator');

			//Click on pin icon
			$('.winery').on('click','.winery-buttons .icon-wineobs-pin',function(ev){
				ev.preventDefault();
				var pin = this;

				var index = pin.getAttribute('data-winery-id');
				Wineobs.markers[index].setIcon(new google.maps.MarkerImage(
					'/assets/img/marker-hover-wineobs.png',
					null,
					null,
					// new google.maps.Point(0,0),
					null,
					new google.maps.Size(36, 36)
				));
				Wineobs.markers[index].setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
				Wineobs.map.panTo(Wineobs.markers[index].getPosition())
			})

			// //Hover on winery card
			// paginator.on('mouseout','.winery-card-front',function(ev){
			// 	ev.preventDefault();
			// 	var index = this.parentNode.getAttribute('data-winery-index');
			// 	Wineobs.markers[index].setIcon(new google.maps.MarkerImage(
			// 		'/assets/img/marker.png',
			// 		new google.maps.Size(30, 30), //Original Size
			// 		new google.maps.Point(0, 0), //Origin
			// 		new google.maps.Point(15, 15), //Anchor
			// 		null //ScaledSize
			// 	))
			// })

			var buttons = [].slice.call( document.querySelectorAll( '.winery-card-front .winery-button .wineobs-button' ) )
			buttons.forEach( function( button, idx ) {
				button.addEventListener('click', function(ev){
					button.parentNode.parentNode.parentNode.classList.add('flipped')
				})
			} )

			var closeButtons = [].slice.call( document.querySelectorAll( '.winery-card-back .winery-close' ) )
			closeButtons.forEach( function( button, idx ) {
				button.addEventListener('click', function(ev){
					button.parentNode.parentNode.classList.remove('flipped')
				})
			} )

			var pinButtons = [].slice.call( document.querySelectorAll( '.winery-icons .icon-wineobs-pin' ) )
			pinButtons.forEach( function( button, idx ) {
				var mask = button.parentNode.parentNode.parentNode.querySelector('.winery-card-top-mask');
				button.addEventListener('click', function(ev){
					ev.preventDefault();
					mask.classList.toggle('swipe-pin');
				})
			} )

			var infoButtons = [].slice.call( document.querySelectorAll( '.winery-icons .icon-wineobs-info' ) )
			var modalInfo = document.querySelector('footer .modals .modal-info-winery')
			infoButtons.forEach( function( button, idx ) {
				var closeButton = modalInfo.querySelector('.close-modal');
				button.addEventListener('click', function(ev){
					ev.preventDefault();
					modalInfo.classList.add('show');
				})
				closeButton.addEventListener('click', function(ev){
					ev.preventDefault();
					modalInfo.classList.remove('show');
				})
			} )
		},
		initSearch: function(){
			var search = document.querySelector( '.wineries .search' );
			if(search){
				var lens = search.querySelector('.search-lens');
				var input = search.querySelector('.search-input input');
				lens.addEventListener('click',function(ev){
					ev.preventDefault();
					search.classList.add('active');
					search.querySelector('input').focus();
				});
				input.addEventListener('blur',function(ev){
					ev.preventDefault();
					if(input.value.length === 0)
						search.classList.remove('active');
				})
			}
		},
		map:'',
		markers:[],
		reserveMarkers: new google.maps.MarkerImage(
			'/assets/img/marker-reserve.png',
			new google.maps.Size(30, 30), //Original Size
			new google.maps.Point(0, 0), //Origin
			new google.maps.Point(15, 15), //Anchor
			null //ScaledSize
		),
	}
	window.Wineobs = Wineobs;

})(window)
