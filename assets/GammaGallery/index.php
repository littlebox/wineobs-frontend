<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="Gamma Gallery - A Responsive Image Gallery Experiment"/>
		<link rel="stylesheet" type="text/css" href="css/style.css"/>
		<script src="js/modernizr.custom.70736.js"></script>
		<noscript><link rel="stylesheet" type="text/css" href="css/noJS.css"/></noscript>
		<!--[if lte IE 7]><style>.main{display:none;} .support-note .note-ie{display:block;}</style><![endif]-->
	</head>
	<body>
		<div class="container">

			<div class="main">
				<header class="clearfix">

					<img id="logo" src="">

				</header>
				<!-- gamma-loading -->
				<div class="gamma-container" id="gamma-container">

					<ul class="gamma-gallery">

					</ul>

					<div class="gamma-overlay"></div>

				</div>


				<div class="gallery"></div>
			</div><!--/main-->
		</div>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
		<script src="js/jquery.masonry.min.js"></script>
		<script src="js/jquery.history.js"></script>
		<script src="js/js-url.min.js"></script>
		<script src="js/jquerypp.custom.js"></script>
		<script src="js/gamma.js"></script>
		<script type="text/javascript">

			$(function() {
				// msnr = new Masonry(document.querySelector('.gamma-gallery'),{
				// 	itemSelector: '.item',
				// });
				window.GammaSettings = {
						// order is important!
						viewport : [ {
							width : 1200,
							columns : 5
						}, {
							width : 900,
							columns : 4
						}, {
							width : 500,
							columns : 3
						}, {
							width : 320,
							columns : 2
						}, {
							width : 0,
							columns : 2
						} ]
				};

				Gamma.init( GammaSettings );
				window.msnr = Gamma.gallery.masonry;

			});

			window.init = function(w,host){
				logo = document.querySelector('#logo');
				if(typeof w != "undefined"){
					if(w.Winery.has_logo){
						logo.src = "http://reservas.wineobs.com/img/wineries/logos/"+w.Winery.id+".png"
					}else{
						logo.src = "http://reservas.wineobs.com/img/wineries/logos/default.png"
					}
				}

				if(w.Image.length > 0){
					htmlImgs = ''
					w.Image.forEach(function(img,k){
						htmlImgs += '<li class="gamma-item" style="z-index:999;">\
						<div data-alt="img03" data-description="<h3>'+w.Winery.name+'</h3>" data-max-width="1800" data-max-height="1350">\
							<div data-src="http://reservas.wineobs.com/img/wineries/'+img.id+'.jpg" data-min-width="1300"></div>\
							<div data-src="http://reservas.wineobs.com/img/wineries/'+img.id+'.jpg" data-min-width="1000"></div>\
							<div data-src="http://reservas.wineobs.com/img/wineries/'+img.id+'.jpg" data-min-width="700"></div>\
							<div data-src="http://reservas.wineobs.com/img/wineries/'+img.id+'.jpg" data-min-width="300"></div>\
							<div data-src="http://reservas.wineobs.com/img/wineries/'+img.id+'.jpg" data-min-width="200"></div>\
							<div data-src="http://reservas.wineobs.com/img/wineries/'+img.id+'.jpg" data-min-width="140"></div>\
							<div data-src="http://reservas.wineobs.com/img/wineries/'+img.id+'"></div>\
							<noscript><img src="http://reservas.wineobs.com/img/wineries/'+img.id+'"" alt="imgBodega"/></noscript>\
						</div></li>'
					})

					// window.div = document.createElement('div');
					// window.div.innerHTML = htmlImgs;

					// console.debug(htmlImgs);

					$('.gamma-gallery').html(htmlImgs);
					// msnr.appended(div.children);
					// msnr('remove')
					// msnr.append($('.gamma-gallery div'))
					Gamma.init(window.GammaSettings);

				}else{
					$('.gamma-gallery').html('<div class="not-found"><p>No se encontraron imágenes de esta bodega</p>\
						<div><img src="http://'+host+'/assets/img/shrug.svg"></div></div>');
				}

				return true;
			}

			window.loadImages = function(){
				console.log(w)
			}
		</script>
	</body>
</html>
