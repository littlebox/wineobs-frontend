	</div> <!-- END SITE CONTENT -->
	<footer class="footer">
		<div class="footer-content">
			<div class="footer-left">
				<div class="facebook">
					<span class="icon-wineobs-facebook"></span>
				</div>
				<div class="twitter">
					<span class="icon-wineobs-twitter"></span>
				</div>
				<div class="insta">
					<span class="icon-wineobs-insta"></span>
				</div>
			</div>

			<div class="footer-center"></div>

			<div class="footer-right">
				<div class="mpago">
					<span class="icon-wineobs-mpago"></span>
				</div>
				<div class="paypal">
					<span class="icon-wineobs-paypal"></span>
				</div>
				<div class="lbox">
					<span class="icon-wineobs-lbox"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>
				</div>
			</div>
		</div>
		<div class="modals">
			<div class="modal-image-gallery" style="display:none;">
				<div class="close-modal">
					<span class="icon-wineobs-cross"></span>
				</div>
				<div class="content"></div>
				<iframe src=""></iframe>
			</div>
			<div class="modal-info-winery">
				<div class="close-modal">
					<span class="icon-wineobs-cross"></span>
				</div>
				<div class="content">
					<div class="modal-content row">
						<div class="small-3 column tabs-selector">
							<ul class="tabs vertical" data-tab>
								<li class="tab-title active"><a href="#info-bodega">Bodega</a></li>
								<li class="tab-title"><a href="#info-tours">Tours</a></li>
								<!-- <li class="tab-title"><a href="#info-comentarios">Tab 3</a></li> -->
							</ul>
							<div class="image">
								<img src="/assets/img/lagardegrande.png">
							</div>
						</div>
						<div class="small-9 column tabs-info">
							<div class="tabs-content">
								<div class="content active" id="info-bodega">
									<div class="small-12 row">
										<div class="small-7 column info-bodega-tabs">
											<ul class="tabs" data-tab>
												<li class="tab-title active"><a href="#tour-type-1">Standard</a></li>
												<li class="tab-title"><a href="#tour-type-2">Premium</a></li>
												<li class="tab-title"><a href="#tour-type-3">Black</a></li>
											</ul>
											<div class="tabs-content">
												<div class="content active" id="tour-type-1">
													<p>Fundada en 1897, Bodega Lagarde fue adquirida en el año 1969 por la familia Pescarmona, quien le imprimió un sello que marcaría su identidad de bodega familiar productora de vinos de alta gama, tanto en la Argentina como en el resto del mundo.</p>
												</div>
												<div class="content" id="tour-type-2">
													<p>Premium</p>
												</div>
												<div class="content" id="tour-type-3">
													<p>Black</p>
												</div>
											</div>
										</div>
										<div class="small-5 column modal-winery-reserve">
											<div class="winery-reserve">
												<div class="winery-hours">
													<div class="winery-hours-title">Horarios</div>
													<div class="winery-hours-grid">
														<?php for ($k=0; $k < 8; $k++):?>
															<div class="winery-hour <?= (rand(0,1) == 0)? 'disabled' : '' ?>"><?php echo date("h:i", mktime(9,$k*30,0,0,0,0)) ?></div>
														<?php endfor; ?>
													</div>
												</div>
												<div class="winery-prices">
													<div class="flex f1">
														<div class="flex f1 fcolumn">
															<div class="price">$60</div>
															<div class="text">adultos</div>
														</div>
														<div class="flex f1 fcolumn">
															<div class="price">$00</div>
															<div class="text">menores</div>
														</div>
													</div>
												</div>
												<div class="winery-button f1">
													<a class="wineobs-button">reservar</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="content" id="info-tours">
									<p>Fundada en 1897, Bodega Lagarde fue adquirida en el año 1969 por la familia Pescarmona, quien le imprimió un sello que marcaría su identidad de bodega familiar productora de vinos de alta gama, tanto en la Argentina como en el resto del mundo.</p>
								</div>
								<!-- <div class="content" id="info-comentarios">
									<p>This is the third panel of the basic tab example. This is the third panel of the basic tab example.</p>
								</div> -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
	<link rel="stylesheet" type="text/css" href="/assets/fonts/icons-wineobs/style.css">

	<script type="text/javascript" src="/assets/jquery/dist/jquery.min.js"></script>
	<script type="text/javascript" src="/assets/foundation/js/foundation.min.js"></script>
	<script type="text/javascript" src="/assets/js/app.js"></script>
	<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDEDXVukpE4oEEhjfWmhaZctW3SobbJYV4"></script>
	<!-- BEGIN DATEDROPPER -->
	<script src="/assets/plugins/datedropper/datedropper.js"></script>
	<link rel="stylesheet" type="text/css" href="/assets/plugins/datedropper/datedropper.css">
	<!-- END DATEDROPPER -->
	<script type="text/javascript">
		$(document).foundation();
		$(function(){
			// window.Wineobs.init();
		})
	</script>
	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-46727112-16', 'auto');
		ga('send', 'pageview');
	</script>
	</body>
</html>