;(function(window){
	'use strict';
	var Wineobs = {
		init: function(){
			this.initMenu();
			this.initDateDropper();
			this.initDotOptions();
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