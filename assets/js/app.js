var wineobsApp = angular.module('wineobsApp', ['ngRoute', 'mm.foundation','pascalprecht.translate', 'ngCookies', 'jkuri.gallery']);
wineobsApp.config(function ($translateProvider) {
	$translateProvider.translations('es', {
	  INICIO: 'Inicio',
	  TITULO_DATOS: 'Recorrer. Conocer. Disfrutar.',
	  TITULO_FOOTER_TRANSPORTE: '*El servicio de transporte no está incluido',
	  PRECIO_TOTAL:'Precio Total',
	  MENU_ITEM1: 'Inicio',
	  MENU_ITEM2: 'Mis Reservas',
	  MENU_ITEM3: 'Contacto',
	  MENU_ITEM4: 'Quienes somos',
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
	  INFO_CONTACTOd:'O envíe un mail a:',
	  BOTON_CONTACTO:'ENVIAR',
		alerts: {
			ROUTE_CHANGE_TITLE: 'Advertencia',
			ROUTE_CHANGE_TEXT: 'Si continúa se borrarán las reservas realizadas.',
			FORM_DATA_INCOMPLETE_DATE_TITLE: 'Fecha incompleta!',
			FORM_DATA_INCOMPLETE_DATE_TEXT: 'Por favor ingrese una fecha',
		},
		ABOUT_US: {
			INICIO: 'Wineobs es una empresa joven creada en 2014 por Sofía Ruiz Cavanagh, Licenciada en Enología.\
				Siendo originaria de la ciudad de Mendoza y muy interesada en la vitivinicultura y el turismo regional, su mision es ofrecer una forma diferente de obsesionarnos con el vino y las bodegas.\
				Con el objetivo de facilitar a los amantes del vino la accesibilidad a degustaciones, visitas y otras actividades relacionadas al enoturismo, con WineObs proponemos un sitio web que reúne toda la información de relevancia turística de un gran número de bodegas. De esta manera, los visitantes podrán planificar de forma simple y rápida un extraordinario día de degustaciones y visitas turísticas.\
				Lo que distingue a WineObs es que ofrecemos reservas en tiempo real al mismo precio al que se encuentran los mismos servicios en cada una de las diferentes bodegas.\
				Por otra parte, el sitio también funciona como un nuevo canal de comunicación que las bodegas pueden utilizar para ofrecer y promocionar sus servicios, contribuyendo tanto a la diversificación de las bodegas visitadas, como al crecimiento y afianzamiento de la marca “vino argentino”.\
				¡Usar WineObs implica beneficios! Gestione su reserva con nosotros en rápidos y sencillos pasos.',
			TITULO_LISTA: 'RESERVAR CON WINEOBS',
			LISTA_1:'Todas las bodegas en un mismo sitio.',
			LISTA_2:'Gestión de reservas on-line. ¡Sin confirmación o tiempos de espera!',
			LISTA_3:'El mismo precio que reservar directamente en cada una de las bodegas asociadas.',
			LISTA_4:'Comentarios y puntajes reales de clientes que ya probaron wineobs y visitaron bodegas.',
			LISTA_5:'Puedes reservar desde cualquier parte del mundo, en cualquier momento del día y desde cualquier dispositivo móvil.',
			LISTA_6:'¡Reservas de último minuto!',
			LISTA_7:'Compra protegida.',
		},
		PAYMENT_TITLE: 'Seleccione un método de pago para continuar con la compra',
		TEXTO_MONEDA_MERCADOPAGO: 'Moneda: Pesos argentinos (ARS)',
		TEXTO_MONEDA_PAYPAL: 'Moneda: Dólar estadounidense (USD)',
	});
	$translateProvider.translations('en', {
		INICIO: 'Start',
		TITULO_DATOS: 'Get Around. Visit. Enjoy.',
	  TITULO_FOOTER_TRANSPORTE: '*Transport is not included',
	  PRECIO_TOTAL:'Total Price',
	  MENU_ITEM1: 'Start',
	  MENU_ITEM2: 'Your Reservations',
	  MENU_ITEM3: 'Contact',
	  MENU_ITEM4: 'About us',
	  TITULO_PASO1: 'DATE',
	  TITULO_PASO2: 'LANGUAGE',
	  TITULO_PASO3: 'NUMBER OF PEOPLE',
	  TITULO_PASO4: 'CHOOSE A WINERY',
	  TITULO_PASO5: 'CONFIRM YOUR RESERVATION',
	  TITULO_IMAGENES:'IMAGES',
	  TITULO_BODEGA:'HISTORY',
	  INFOBOX_DISTANCIA:'Please bear in mind the distance between wineries when planning your transportation.',
	  INFOBOX_RECOMENDACION:'It is not advisable to book more than 4 wine tours per day.',
	  INFOBOX_PAGOS:'You will be redirected to PayPal to finish your purchase. Thanks!',
	  BOTON_CONTINUAR:'CONTINUE',
	  CONTENIDO_PASO1: 'dd.mm.yyyy',
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
		alerts: {
			ROUTE_CHANGE_TITLE: 'Warning',
			ROUTE_CHANGE_TEXT: 'If you continue, your reservations will be deleted.',
			FORM_DATA_INCOMPLETE_DATE_TITLE: 'Incomplete date',
			FORM_DATA_INCOMPLETE_DATE_TEXT: 'Please enter the date again.',
		},
		ABOUT_US: {
			INICIO: 'WineObs is a young company created in 2014 by Sofia Ruiz Cavanagh, wine maker. Born and raised in Mendoza, Sofia´s passions are wine making and local tourism. In this web site, Sofia not only shares her passion about wines but she also invites people to enjoy and learn about the world of wine.\
				WineObs main objective is to facilitate wine lovers with tours, wine tastings, and other interesting activities related with wine-tourism. In WineObs web site, tourists are able to plan an amazing day in the most beautiful and top range wineries in Mendoza. Tourists can organize their activities in five simple and quick steps.\
				Last but not least, using WineObs bring along lots of benefits! Make your reservation now!',
			TITULO_LISTA: 'Booking with wineobs',
			LISTA_1: 'All the wineries in one site.',
			LISTA_2: 'Immediate confirmation!',
			LISTA_3: 'The same price as if booked in the winery per se.',
			LISTA_4: 'Comments and reviews from clients.',
			LISTA_5: 'Reservations can be made anytime, anywhere and from any device.',
			LISTA_6: 'Las minute reservations!',
			LISTA_7: 'Safe purchase.',
		},
		PAYMENT_TITLE: 'Select a payment method to continue shopping',
		TEXTO_MONEDA_MERCADOPAGO: 'Currency: Argentine Peso (ARS)',
		TEXTO_MONEDA_PAYPAL: 'Currency: USA Dollar (USD)',
	});

	$translateProvider.translations('pt', {
	  INICIO: 'Começar',
	  TITULO_DATOS: 'Percorra. Conheça. Desfrute.',
	  TITULO_FOOTER_TRANSPORTE: '*O serviço de traslado não está incluído.',
	  PRECIO_TOTAL:'Preço Total ',
	  MENU_ITEM1: 'Inicio',
	  MENU_ITEM2: 'Mina reservas',
	  MENU_ITEM3: 'Contacto',
	  MENU_ITEM4: 'Quem somos',
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
		alerts: {
			ROUTE_CHANGE_TITLE: 'Advertência',
			ROUTE_CHANGE_TEXT: 'Se você continuar as reservas realizadas serão apagadas.',
			FORM_DATA_INCOMPLETE_DATE_TITLE: 'Data incompleta!',
			FORM_DATA_INCOMPLETE_DATE_TEXT: 'Por favor, insira uma data.',
		},
		ABOUT_US: {
			INICIO: 'Windows é uma empresa jovem, criada em 2014 por Sofía Ruiz Cavanagh, formado em enologia. Sendo originalmente da cidade de Mendoza e muito interessado em viticultura e do turismo regional, sua missão é oferecer uma maneira diferente de obcecado com vinho e vinícolas.\
			Com o objetivo de fornecer provas de amantes do vinho de acessibilidade, passeios e outras atividades relacionadas ao turismo de vinhos, com WineObs sugerir um site que reúne toda a informação turística relevante de um grande número de vinícolas. Assim, os visitantes podem planejar forma simples e rápida um dia extraordinário de degustações e passeios. O que distingue WineObs é oferecer reservas em tempo real, ao mesmo preço a que os serviços são os mesmos em cada um dos diferentes vinícolas.\
			Além disso, o site também serve como um novo canal de comunicação que as vinícolas podem utilizar para oferecer e promover os seus serviços, contribuindo assim para a diversificação das vinícolas visitadas, eo crescimento e consolidação da marca "vinho argentino." Use WineObs implica benefícios! Gerencie sua reserva connosco em passos rápidos e fáceis.',
			TITULO_LISTA: 'LIVRO COM WINEOBS',
			LISTA_1: 'Todas las bodegas en un mismo sitio.',
			LISTA_2:'Gerenciando reservas on-line. Nenhuma confirmação ou tempos de espera!',
			LISTA_3:'O mesmo preço para reservar directamente em cada uma das vinícolas associadas.',
			LISTA_4:'Comentários e pontuações reais dos clientes já testados janelas e vinícolas visitadas.',
			LISTA_5:'Você pode reservar a partir de qualquer lugar do mundo, a qualquer hora do dia e em qualquer dispositivo móvel.',
			LISTA_6:'Reservas de última hora!',
			LISTA_7:'Compras seguras.',
		},
		PAYMENT_TITLE: 'Selecione um método de pagamento para continuar a fazer compras',
		TEXTO_MONEDA_MERCADOPAGO: 'Moneda: Pesos argentinos (ARS)',
		TEXTO_MONEDA_PAYPAL: 'Moneda: Dólar estadounidense (USD)',
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
			// this.markerClusterer = new MarkerClusterer(
			// 	this.map,[],
			// 	{styles: [{
			// 		url: '/assets/img/marker-cluster.png',
			// 		height: 40,
			// 		width: 40,
			// 		anchor: [0,0],
			// 		textColor: '#ffffff',
			// 		textSize: 16
			// 	}]}
			// )

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
