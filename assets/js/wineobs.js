var wineobsApp = angular.module('wineobsApp', ['ngRoute', 'mm.foundation','pascalprecht.translate', 'ngCookies', 'jkuri.gallery']);
wineobsApp.config(["$translateProvider", function ($translateProvider) {
	$translateProvider.translations('es', {
		WINERY: 'Bodega',
		TOUR: 'Tours',
		COMMENTS: 'Comentarios',
		TOUR_LENGTH: 'Duracion',
		SELECT_TOUR_TIME: 'Seleccione horario',
		RESERVAR: 'Reservar',
		ADULTS: 'Adultos',
		MINORS: 'Menores',
		NO_COMMENTS: 'No se han hecho comentarios sobre la bodega',
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
			RESERVES_DELETED: 'Se borraron las reservas hechas anteriormente!',
			INVALID_DATE_TITLE: 'Fecha no válida!',
			INVALID_DATE_TEXT: 'Por favor ingrese la fecha nuevamente.',
			INVALID_LANGUAGE_TITLE: 'Idioma no válido!',
			INVALID_LANGUAGE_TEXT: 'Por favor, seleccione el idioma nuevamente.',
			INVALID_MINORS_TITLE: 'Cantidad de menores no válida!',
			INVALID_MINORS_TEXT: 'Por favor, ingrese nuevamente la cantidad de menores.',
			INVALID_ADULTS_TITLE: 'Cantidad de adultos no válida!',
			INVALID_ADULTS_TEXT: 'Por favor, ingrese nuevamente la cantidad de adultos.',
			NO_RESERVES_TITLE: 'No hay reservas',
			NO_RESERVES_TEXT: 'Es necesario hacer una reserva para poder continuar.',
			INVALID_DATA_TITLE: 'Datos no válidos!',
			INVALID_DATA_TEXT: 'Por favor, revise los datos antes de continuar',
			THANKS_CONTACT_TITLE: 'Gracias por su consulta',
			THANKS_CONTACT_TEXT: 'En breve nos pondremos en contacto con usted.',
			COMMENTS_ERROR_TITLE: 'Error!',
			COMMENTS_ERROR_TEXT: 'Ya se hicieron comentarios sobre estas reservas',
			ERROR_RESERVE_TITLE: 'Error!',
			ERROR_RESERVE_TEXT: 'Hubo un error al intentar realizar la reserva.',
			WINERIES_NOT_FOUND_TITLE: 'No se encontro ninguna bodega disponible!',
			WINERIES_NOT_FOUND_TEXT: 'Por favor, realice una nueva busqueda',
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
		TOOLTIP_TITLE: 'Nueva reserva!',
		TOOLTIP_TEXT: 'Para ver sus reservas haga click en la copa.',
	});
	$translateProvider.translations('en', {
		WINERY: 'Winery',
		TOUR: 'Tours',
		COMMENTS: 'Comments',
		TOUR_LENGTH: 'Length',
		SELECT_TOUR_TIME: 'Select time',
		RESERVAR: 'Reserve',
		ADULTS: 'Adults',
		MINORS: 'Minors',
		NO_COMMENTS: 'There are not comments about this winery',
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
			RESERVES_DELETED: 'The reserves were deleted',
			INVALID_DATE_TITLE: 'The date is not valid',
			INVALID_DATE_TEXT: 'Please enter the date again',
			INVALID_LANGUAGE_TITLE: 'The language is not valid.',
			INVALID_LANGUAGE_TEXT: 'Please select the language again',
			INVALID_MINORS_TITLE: 'The number of people is not valid.',
			INVALID_MINORS_TEXT: 'Please enter again the numer of people under 18 years old.',
			INVALID_ADULTS_TITLE: 'The number of people is not valid.',
			INVALID_ADULTS_TEXT: 'Please enter again the numer of people over 18 years old.',
			NO_RESERVES_TITLE: 'There are no reservations',
			NO_RESERVES_TEXT: 'Please make a reservation to continue',
			INVALID_DATA_TITLE: 'The data is not valid',
			INVALID_DATA_TEXT: 'Please check the information entered and try again.',
			THANKS_CONTACT_TITLE: 'Thanks for your e-mail',
			THANKS_CONTACT_TEXT: 'We will contact you soon.',
			COMMENTS_ERROR_TITLE: 'Error!',
			COMMENTS_ERROR_TEXT: 'The comments of this reservations have already been sent.',
			ERROR_RESERVE_TITLE: 'Error!',
			ERROR_RESERVE_TEXT: 'There was an error trying to make the reserves.',
			WINERIES_NOT_FOUND_TITLE: 'There is not an available winery!',
			WINERIES_NOT_FOUND_TEXT: 'Please, make a new search',
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
			LISTA_6: 'Last minute reservations!',
			LISTA_7: 'Safe purchase.',
		},
		PAYMENT_TITLE: 'Select a payment method to continue shopping',
		TEXTO_MONEDA_MERCADOPAGO: 'Currency: Argentine Peso (ARS)',
		TEXTO_MONEDA_PAYPAL: 'Currency: USA Dollar (USD)',
		TOOLTIP_TITLE: 'New reservation!',
		TOOLTIP_TEXT: 'To see your reservations, click on the wine glass.',
	});

	$translateProvider.translations('pt', {
		WINERY: 'Vinicolas',
		TOUR: 'Tours',
		COMMENTS: 'Comentários',
		TOUR_LENGTH: 'Duração',
		SELECT_TOUR_TIME: 'Seleccione hora',
		RESERVAR: 'Reservar',
		ADULTS: 'Adultos',
		MINORS: 'Crianças',
		NO_COMMENTS: 'Nenhum comentário nessa adega',
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
			RESERVES_DELETED: 'Reservas borradas',
			INVALID_DATE_TITLE: 'Data inválida!',
			INVALID_DATE_TEXT: 'Por favor, indique a data de novamente.',
			INVALID_LANGUAGE_TITLE: 'Idioma inválido!',
			INVALID_LANGUAGE_TEXT: 'Por favor, selecione o idioma novamente.',
			INVALID_MINORS_TITLE: 'Número de menores inválido',
			INVALID_MINORS_TEXT: 'Por favor, indique o número de crianças novamente.',
			INVALID_ADULTS_TITLE: 'Número de adultos inválido',
			INVALID_ADULTS_TEXT: 'Por favor, indique o número de adultos novamente.',
			NO_RESERVES_TITLE: 'Não há reservas!',
			NO_RESERVES_TEXT: 'Precisa fazer uma reserva para continuar.',
			INVALID_DATA_TITLE: 'Dados inválidos!',
			INVALID_DATA_TEXT: 'Por favor verifique os dados antes de continuar',
			THANKS_CONTACT_TITLE: 'Obrigado por sua consulta!',
			THANKS_CONTACT_TEXT: 'Logo entraremos em contato com você.',
			COMMENTS_ERROR_TITLE: 'Erro!',
			COMMENTS_ERROR_TEXT: 'Foram efetuados comentários sobre estas reservas.',
			ERROR_RESERVE_TITLE: 'Error!',
			ERROR_RESERVE_TEXT: 'Houve um erro ao tentar fazer a reserva',
			WINERIES_NOT_FOUND_TITLE: 'Adega disponível não é encontrado!',
			WINERIES_NOT_FOUND_TEXT: 'Por favor faça uma nova pesquisa',
		},
		ABOUT_US: {
			INICIO: 'Windows é uma empresa jovem, criada em 2014 por Sofía Ruiz Cavanagh, formado em enologia. Sendo originalmente da cidade de Mendoza e muito interessado em viticultura e do turismo regional, sua missão é oferecer uma maneira diferente de obcecado com vinho e vinícolas.\
			Com o objetivo de fornecer provas de amantes do vinho de acessibilidade, passeios e outras atividades relacionadas ao turismo de vinhos, com WineObs sugerir um site que reúne toda a informação turística relevante de um grande número de vinícolas. Assim, os visitantes podem planejar forma simples e rápida um dia extraordinário de degustações e passeios. O que distingue WineObs é oferecer reservas em tempo real, ao mesmo preço a que os serviços são os mesmos em cada um dos diferentes vinícolas.\
			Além disso, o site também serve como um novo canal de comunicação que as vinícolas podem utilizar para oferecer e promover os seus serviços, contribuindo assim para a diversificação das vinícolas visitadas, eo crescimento e consolidação da marca "vinho argentino." Use WineObs implica benefícios! Gerencie sua reserva connosco em passos rápidos e fáceis.',
			TITULO_LISTA: 'RESERVAR CON WINEOBS',
			LISTA_1: 'Todas as vinícolas em um só lugar',
			LISTA_2:'Gerenciando reservas on-line. Sem confirmação ou tempos de espera!',
			LISTA_3:'O mesmo preço para reservar diretamente em cada uma das vinícolas associadas.',
			LISTA_4:'Comentários e pontuações reais dos clientes já e vinícolas visitadas.',
			LISTA_5:'Você pode reservar a partir de qualquer lugar do mundo, a qualquer hora do dia e em qualquer dispositivo móvel.',
			LISTA_6:'Reservas de última hora!',
			LISTA_7:'Compras seguras.',
		},
		PAYMENT_TITLE: 'Selecione um método de pagamento para continuar a fazer compras',
		TEXTO_MONEDA_MERCADOPAGO: 'Moneda: Pesos argentinos (ARS)',
		TEXTO_MONEDA_PAYPAL: 'Moneda: Dólar estadounidense (USD)',
		TOOLTIP_TITLE: 'Nova reserva!',
		TOOLTIP_TEXT: 'Para ver as suas reservas, clique na taça de vinho',
	});
	// var lg = (window.location.search.) ? regex.exec(window.location.search)[1] : window.navigator.language.split('-')[0]
	$translateProvider.useCookieStorage();
	var regex = /[lg]=([^&#]*)/g
	window.lg = ( window.location.search.search(regex) > -1 ) ? regex.exec(window.location.search)[1] : window.navigator.language.split('-')[0];
	$translateProvider.preferredLanguage(lg);
	$translateProvider.useSanitizeValueStrategy('escape');
}]);
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

function checkScrollTabs(){
  hContainer = $('div.modal-content').height();
  hScroller  = $('p.winery-description').height();
  if(hScroller > hContainer){
    $('p.winery-description').closest('.tabs-content').css('overflow-y','scroll')
  }else{
    $('p.winery-description').closest('.tabs-content').css('overflow-y','visible')
  }
}

$(document).ready(function(){
  checkScrollTabs()
})

$(window).on('resize', function(){
  checkScrollTabs()
})

wineobsApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
	$routeProvider
		.when('/datos',{
			templateUrl: '/view/reserve-form-data.html',
			// controller: 'reserveFormDataController'
		})

		.when('/inicio',{
			templateUrl: '/view/reserve-form-data.html',
			// controller: 'reserveFormDataController'
		})

		.when('/resultados',{
			templateUrl: '/view/results.html',
			// controller: 'resultsController'
		})

		.when('/contacto',{
			templateUrl: '/view/contact.html',
			// controller: 'reserveFormDataController'
		})

		.when('/datosPersonales',{
			templateUrl: '/view/personal-form-data.html'
		})

		.when('/pasos',{
			templateUrl: '/view/steps.html',
			// controller: 'stepsController'
		})

		.when('/payment_success',{
			templateUrl: '/view/payment_success.html',
		})

		.when('/payment_failure',{
			templateUrl: '/view/payment_failure.html',
		})

		.when('/payment_pending',{
			templateUrl: '/view/payment_pending.html',
		})

		.when('/cancelar',{
			templateUrl: '/view/cancelar.html',
		})

		.when('/comentarios',{
			templateUrl: '/view/comments.html',
		})

		.when('/quienes-somos',{
			templateUrl: '/view/aboutus.html',
		})

		.otherwise('/datos',{
			templateUrl: '/view/reserve-form-data.html',
		})

		$locationProvider.html5Mode(true);
}])

wineobsApp.controller('wineobsController',['$scope', '$rootScope', '$timeout', 'reservation', '$translate', '$route', '$filter', function ($scope,$rootScope,$timeout,reservation, $translate, $route, $filter){
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
				title: $filter('translate')('alerts.ROUTE_CHANGE_TITLE'),
				text: $filter('translate')('alerts.ROUTE_CHANGE_TEXT'),
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
}]);

wineobsApp.controller('stepsController', ["$scope", "$rootScope", function ($scope,$rootScope){
	$rootScope.bodyClass = 'steps';
	Wineobs.init();
}]);

wineobsApp.controller('reserveFormDataController', ["$scope", "$rootScope", "$location", "reservation", "$translate", "$filter", function ($scope,$rootScope,$location,reservation, $translate, $filter){
	$rootScope.bodyClass = 'reserve-form-data';
	$scope.date = {
		formattedDate: '',
		date: '',
	};

	if(reservation.getReservesToMake().length){
		swal({
			text: $filter('translate')('alerts.RESERVES_DELETED'),
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
				title: $filter('translate')('alerts.FORM_DATA_INCOMPLETE_DATE_TITLE'),
				text: $filter('translate')('alerts.FORM_DATA_INCOMPLETE_DATE_TEXT'),
				type: 'warning',
			});
			return
		};
		if($scope.formData.date.formattedDate == '') return;

		a = $scope.formData.date.date;
		date = new Date(a[2],a[1] - 1,a[0]);

		if(date < Date.now()){
			var title = $filter('translate')('alerts.INVALID_DATE_TITLE')
			var text = $filter('translate')('alerts.INVALID_DATE_TEXT')
			swal({
				title: title,
				text: text,
				type: 'warning',
			})
			return;
		}

		if($scope.formData.language == ''){
			var text = $filter('translate')('alerts.INVALID_LANGUAGE_TEXT');
			var title = $filter('translate')('alerts.INVALID_LANGUAGE_TITLE');
			swal({
				title: title,
				text: text,
				type: 'warning',
			});
			return;
		};
		if(parseInt($scope.formData.minors,10) < 0 ){
			var text = $filter('translate')('alerts.INVALID_MINORS_TEXT');
			var title = $filter('translate')('alerts.INVALID_MINORS_TITLE');
			swal({
				title: title,
				text: text,
				type: 'warning',
			});
			return;
		};
		if(parseInt($scope.formData.adults,10) < 1 ){
			var text = $filter('translate')('alerts.INVALID_ADULTS_TEXT');
			var title = $filter('translate')('alerts.INVALID_ADULTS_TITLE');
			swal({
				title: title,
				text: text,
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
}]);

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
.controller('resultsController', ["$q", "$scope", "$rootScope", "$http", "reservation", "$location", "$filter", "$modal", "$animate", function ($q,$scope,$rootScope,$http,reservation,$location,$filter,$modal,$animate){
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
			if(!data.length){
				title = $filter('translate')('alerts.WINERIES_NOT_FOUND_TITLE');
				text = $filter('translate')('alerts.WINERIES_NOT_FOUND_TEXT');
				swal({
					title: title,
					text:  text,
				},function(){
					window.location.pathname = '/';
				})
			};
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
			// m = new google.maps.Marker({
			// 	position: p,
			// 	// label: (k+1).toString(),//new google.maps.MarkerLabel({text: 'asdf'}),
			// 	title: 'Reserva Numero: '+(k+1).toString(),
			// 	map: Wineobs.map,
			// 	icon: Wineobs.reserveMarkers,
			// })
			m = new MarkerWithLabel({
				position: p,
				labelContent: (k+1).toString(),
				map: Wineobs.map,
				icon: Wineobs.reserveMarkers,
				labelClass: "marker-label",
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
			var text = $filter('translate')('alerts.NO_RESERVES_TEXT');
			var title = $filter('translate')('alerts.NO_RESERVES_TITLE');
			swal({
				title: title,
				text: text,
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

	$scope.modalGallery = function(winery){
		var modalInstance = $modal.open({
			templateUrl: 'view/modalGallery.html',
			controller: 'ModalGalleryController',
			windowClass: 'fullscreenModal',
			backdrop: false,
			resolve: {
				wineryId: function(){
					return (winery.Winery.has_logo) ? winery.Winery.id: null;
				},
				images: function () {
					imgs = winery.Image.map(function(i){
						return {thumb: $rootScope.apiUrl+'/img/wineries/'+i.id+'.jpg', img: $rootScope.apiUrl+'/img/wineries/'+i.id+'.jpg', description: winery.Winery.name}
					});
					return imgs;
				}
			}
		})
	}
}]);

wineobsApp.controller('personalFormDataController', ["$scope", "$rootScope", "$filter", "reservation", function ($scope, $rootScope, $filter, reservation){
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
				var text = $filter('translate')('alerts.NO_RESERVES_TEXT');
				var title = $filter('translate')('alerts.NO_RESERVES_TITLE');
				swal({
					title: title,
					text: text,
					type: 'warning',
				});
			}
		} catch (e) {
			var text = $filter('translate')('alerts.INVALID_DATA_TEXT');
			var title = $filter('translate')('alerts.INVALID_DATA_TITLE');
			swal({
				title: title,
				text: text,
				type: 'warning',
			});
		} finally {

		}
	}

	$scope.removeReserve = function($index){
		reservation.removeReserve($index);
	}
}]);

wineobsApp.controller('contactController', ["$scope", "$rootScope", function ($scope,$rootScope){
	$rootScope.bodyClass = 'contact';
	Wineobs.init();

	$scope.mail = {};

	$scope.submit = function submit(){
		if(!document.querySelector('form.contact').classList.contains('.ng-invalid'))
			$('[ng-model*="user"]').addClass('ng-touched')
			var url = $rootScope.apiUrl+'/send_email/'
			$.post(url, {mail: $scope.mail}, function(e){
				var text = $filter('translate')('alerts.THANKS_CONTACT_TEXT');
				var title = $filter('translate')('alerts.THANKS_CONTACT_TITLE');
				swal({
					title: title,
					text: text,
					type: 'success',
				},function(){
					window.location.href = '/';
				});
			})
	}
}]);

wineobsApp
	.config(["$tooltipProvider", function($tooltipProvider){
		$tooltipProvider.setTriggers({
			'new-reserve':'end-new-reserve',
		})
	}])
	.controller('cartController', ["$scope", "$rootScope", "reservation", "$filter", function ($scope,$rootScope, reservation, $filter){
		$scope.reservationQty = 0; //reservation.getReservesToMake().length;
		$scope.cartSlided = false;
		$scope.reservations = reservation.getReservesToMake();

		var title = $filter('translate')('TOOLTIP_TITLE');
		var text = $filter('translate')('TOOLTIP_TEXT');

		$scope.newReserveTooltip = '<span class="icon-wineobs-cross"></span><h1>'+title+'</h1><p>'+text+'</p>'

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
			if($scope.reservationQty > 3){
				if(!window.alert4){
					var text = $filter('translate')('INFOBOX_DISTANCIA');
					var title = $filter('translate')('alerts.ROUTE_CHANGE_TITLE');
					swal({
						title: title,
						text: text,
						type: 'warning',
					});
					window.alert4 = true;
				}
			}
			if($scope.reservationQty == 2){
				if(!window.alert2){
					var text = $filter('translate')('INFOBOX_RECOMENDACION');
					var title = $filter('translate')('alerts.ROUTE_CHANGE_TITLE');
					swal({
						title: title,
						text: text,
						type: 'warning',
					});
				}
				window.alert2 = true;
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
		data.forEach(function(v){
			s += v.tour.price * v.adults + v.tour.minors_price * v.minors;
		})
		$scope.subtotal = s;
	})
}]);

wineobsApp.controller('reservationModalController', ["$scope", "$rootScope", "reservation", function ($scope,$rootScope, reservation){
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

	$scope.formatDate = function(date){
		var d = new Date(date);
		var strDate = d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear();
		return strDate;
	}

	$scope.formatCountry = function(a){
		var isoCountries={AF:"Afghanistan",AX:"Aland Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua And Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BA:"Bosnia And Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",BN:"Brunei Darussalam",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos (Keeling) Islands",CO:"Colombia",KM:"Comoros",CG:"Congo",CD:"Congo, Democratic Republic",CK:"Cook Islands",CR:"Costa Rica",CI:"Cote D'Ivoire",HR:"Croatia",CU:"Cuba",CY:"Cyprus",CZ:"Czech Republic",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands (Malvinas)",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island & Mcdonald Islands",VA:"Holy See (Vatican City State)",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran, Islamic Republic Of",IQ:"Iraq",IE:"Ireland",IM:"Isle Of Man",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KR:"Korea",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Lao People's Democratic Republic",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libyan Arab Jamahiriya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Macedonia",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia, Federated States Of",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",AN:"Netherlands Antilles",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian Territory, Occupied",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Reunion",RO:"Romania",RU:"Russian Federation",RW:"Rwanda",BL:"Saint Barthelemy",SH:"Saint Helena",KN:"Saint Kitts And Nevis",LC:"Saint Lucia",MF:"Saint Martin",PM:"Saint Pierre And Miquelon",VC:"Saint Vincent And Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome And Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia And Sandwich Isl.",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard And Jan Mayen",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syrian Arab Republic",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad And Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks And Caicos Islands",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UM:"United States Outlying Islands",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela",VN:"Viet Nam",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S.",WF:"Wallis And Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};
		return isoCountries.hasOwnProperty(a)?isoCountries[a]:a;
	}

}])

wineobsApp.controller('paymentController', ["$scope", "$rootScope", function ($scope,$rootScope){
	$rootScope.bodyClass = 'payment';
	Wineobs.init();
}]);

wineobsApp.controller('ModalInstanceController', ["$scope", "$modalInstance", "winery", function($scope, $modalInstance, winery){
	$scope.w = winery;
	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
}])

wineobsApp.controller('ModalGalleryController', ["$rootScope", "$scope", "$modalInstance", "images", "wineryId", function($rootScope, $scope, $modalInstance, images, wineryId){
	$scope.images = images;
	$scope.logo = $rootScope.apiUrl+'/img/wineries/logos/'+wineryId+'.png'
	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
}])

wineobsApp.controller('commentsController', ["$scope", "$rootScope", "$http", function($scope,$rootScope,$http){
	$scope.getParams = function getParams(url){
		var regex = /[?&]([^=#]+)=([^&#]*)/g,
			params = {},
			match = [];
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
			var text = $filter('translate')('alerts.COMMENTS_ERROR_TEXT');
			var title = $filter('translate')('alerts.COMMENTS_ERROR_TITLE');
			swal({
				title: title,
				text: text,
		},function(){
			window.location.href = '';
		})
	});

	$scope.sendComment = function(){
		jQuery.post(postUrl,{
			token: $scope.token,
			review: $scope.comment,
		}, function(resp){
			if(!resp.error.length){
				swal({
					title: resp.content.title,
					text: resp.content.text,
					showCancelButton: false,
				},function(){
					window.location.href = '/';
				});
			}else{
				swal({
					text: resp.error.title,
					text: resp.error.text,
					showCancelButton: false,
				});
			}
		})
	}
}])

wineobsApp.service('reservation',["$rootScope", "$http", "$location", "$filter", function($rootScope, $http, $location, $filter){

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
					var payment_title = $filter('translate')('PAYMENT_TITLE');
					var texto_mp = $filter('translate')('TEXTO_MONEDA_MERCADOPAGO');
					var texto_pp = $filter('translate')('TEXTO_MONEDA_PAYPAL');
					swal({
						type: 'success',
						title: payment_title,
						text:[
							'<div class="small-12 row payment_method">',
								'<div class="small-6 column">',
									'<a target="_self" href="'+data.mp_url+'"><img src="/assets/img/mercadopago-logo.svg" style="height:120px" heigth="120px"></a>',
									'<p>'+texto_mp+'</p>',
								'</div>',
								'<div class="small-6 column">',
									'<a target="_self" href="'+data.pp_url+'"><img src="/assets/img/paypal-logo.jpg" style="height:120px" heigth="120px"></a>',
									'<p>'+texto_pp+'</p>',
								'</div>',
							'</div>'].join(''),
						html: true,
						showConfirmButton: false,
					})
				}
			}).
			error(function(data, status, headers, config) {
				var text = $filter('translate')('alerts.ERROR_RESERVE_TEXT');
				var title = $filter('translate')('alerts.ERROR_RESERVE_TITLE');
				swal({
					title: title,
					text: text,
				});
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
}])
