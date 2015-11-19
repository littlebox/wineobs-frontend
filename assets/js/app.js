var wineobsApp = angular.module('wineobsApp', ['ngAnimate', 'ngRoute', 'mm.foundation','pascalprecht.translate']);
wineobsApp.config(function ($translateProvider) {
	$translateProvider.translations('en', {
		INICIO: 'Start',
		TITULO_DATOS: 'Travel. Discover. Enjoy.'
	});
	$translateProvider.translations('es', {
		INICIO: 'Inicio',
		TITULO_DATOS: 'Recorrer. Conocer. Disfrutar.'
	});
	var regex = /[lg]=([^&#]*)/g
	// var lg = (window.location.search.) ? regex.exec(window.location.search)[1] : window.navigator.language.split('-')[0]
	var lg = ( window.location.search.search(regex) > -1 ) ? regex.exec(window.location.search)[1] : window.navigator.language.split('-')[0];
	console.log(lg);
	$translateProvider.preferredLanguage(lg);
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
			$('.datedropper').dateDropper({
				color: '#9f4b55',
				bgColor: 'rgba(255, 255, 255, 0.95)',
				borderColor: 'white',
				lang: 'es',
				format: 'd.m.Y',
				animate_current: false,
				minYear: new Date().getFullYear(),
				maxYear: new Date().getFullYear()+2,
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
						'/assets/img/marker.png',
						new google.maps.Size(30, 30), //Original Size
						new google.maps.Point(0, 0), //Origin
						new google.maps.Point(15, 15), //Anchor
						null //ScaledSize
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
					'/assets/img/marker-hover.png',
					new google.maps.Size(30, 30), //Original Size
					new google.maps.Point(0, 0), //Origin
					new google.maps.Point(15, 15), //Anchor
					null //ScaledSize
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
