;(function(window){
	'use strict';
	var Wineobs = {
		init: function(){
			this.initDateDropper();
			this.initDotOptions();
			this.initTooltips();
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
		initTooltips: function(){
			[].slice.call( document.querySelectorAll( '.tooltip' ) ).forEach( function( tooltip ) {
				console.log(tooltip);
				var after = tooltip.querySelector(':after');
				console.log(after)
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