/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icons-wineobs\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-wineobs-user': '&#xf007;',
		'icon-wineobs-repeat': '&#xf01e;',
		'icon-wineobs-rotate-right': '&#xf01e;',
		'icon-wineobs-info': '&#xe60f;',
		'icon-wineobs-lens': '&#xe614;',
		'icon-wineobs-photo': '&#xe613;',
		'icon-wineobs-cross': '&#xe612;',
		'icon-wineobs-3lines': '&#xe611;',
		'icon-wineobs-wine-glass': '&#xe610;',
		'icon-wineobs-lbox': '&#xe608;',
		'icon-wineobs-paypal': '&#xe60d;',
		'icon-wineobs-mpago': '&#xe60e;',
		'icon-wineobs-facebook': '&#xe600;',
		'icon-wineobs-pin': '&#xe601;',
		'icon-wineobs-tick': '&#xe602;',
		'icon-wineobs-twitter': '&#xe603;',
		'icon-wineobs-insta': '&#xe604;',
		'icon-wineobs-person-group': '&#xe605;',
		'icon-wineobs-calendar': '&#xe606;',
		'icon-wineobs-world': '&#xe607;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-wineobs-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
