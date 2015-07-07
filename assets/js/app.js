;(function(window){
	'use strict';
	var Wineobs = {
		init: function(){
			this.initMenu();
			this.initDateDropper();
			this.initDotOptions();
			this.initMap();
			this.initSearch();
			this.initCardsFlip();
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
			function initialize() {
				var mapOptions = {
					center: { lat: -32.883333, lng: -68.816667},
					zoom: 8
				};
				var map = new google.maps.Map(document.querySelector('.map-container'),
					mapOptions);
				}
			google.maps.event.addDomListener(window, 'load', initialize);
		},
		initCardsFlip: function(){
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

			var photoButtons = [].slice.call( document.querySelectorAll( '.winery-icons .icon-wineobs-photo' ) )
			var modalGallery = document.querySelector('footer .modals .modal-image-gallery')
			var iframe = modalGallery.querySelector('iframe');
			modalGallery.style.display = "block";
			photoButtons.forEach( function( button, idx ) {
				var closeButton = modalGallery.querySelector('.close-modal');
				button.addEventListener('click', function(ev){
					ev.preventDefault();
					iframe.innerHTML = "";
					iframe.setAttribute('src','assets/GammaGallery/index.php');
					button.classList.remove('icon-wineobs-photo');
					button.classList.add('icon-wineobs-repeat');
					iframe.addEventListener('load',function(ev){
						modalGallery.classList.add('show');
						button.classList.remove('icon-wineobs-repeat');
						button.classList.add('icon-wineobs-photo');
					})
				})
				closeButton.addEventListener('click', function(ev){
					ev.preventDefault();
					modalGallery.classList.remove('show');
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
					search.classList.toggle('active');
				});
				input.addEventListener('blur',function(ev){
					ev.preventDefault();
					search.classList.remove('active');
				})
			}
		},
	}
	window.Wineobs = Wineobs;

	/*Dot options*/
	function DotNav( el, options ) {
		this.nav = el;
		this.options = extend( {}, this.options );
		extend( this.options, options );
		this._init();
	}

	DotNav.prototype.options = {};

	DotNav.prototype._init = function() {

		var dots = [].slice.call( this.nav.querySelectorAll( 'li' ) ), current = 0, self = this;

		dots.forEach( function( dot, idx ) {
			dot.addEventListener( 'click', function( ev ) {
				ev.preventDefault();
				if( idx !== current ) {
					dots[ current ].className = '';

					setTimeout( function() {
						dot.className += ' current';
						current = idx;
						if( typeof self.options.callback === 'function' ) {
							self.options.callback( current );
						}
					}, 25 );
				}
			} );
		} );
	}

	function extend( a, b ) {
		for( var key in b ) {
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	// add to global namespace
	window.DotNav = DotNav;


})(window)