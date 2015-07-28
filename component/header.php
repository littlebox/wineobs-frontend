<!DOCTYPE html>
<html ng-app="wineobsApp">
<head>
	<title>Wineobs</title>
	<link rel="stylesheet" type="text/css" href="/assets/css/app.css">
	<link rel="icon" href="/assets/img/favicon.png" type="image/x-icon" />
	<link rel="shortcut icon" href="/assets/img/favicon.png" type="image/x-icon" />
	<script src="/assets/angular/angular-1.4.2/angular.js"></script>
	<script src="/assets/js/controller.js"></script>
	<script src="/assets/js/dirPagination.js"></script>
</head>
<body class="<?= $view ?>">
	<header>
		<div class="header-content">
			<div class="header-left">
				<div class="menu">
					<div class="menu-open-button">
						<span class="menu-icon icon-wineobs-3lines"></span>
						<div class="menu-overlay overlay overlay-slide">
							<div class="menu-content">
								<div class="menu-close-button">
									<div>
										<span class="icon-wineobs-cross"></span>
									</div>
								</div>
								<div class="menu-items">
									<ul>
										<li><a href="">inicio</a></li>
										<li><a href="">sus reservas</a></li>
										<li><a href="">bodegas</a></li>
										<li><a href="">wineobs</a></li>
										<li><a href="">contacto</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="cart">
					<div class="cart-open-button">
						<span class="icon-wineobs-wine-glass"></span>
					</div>
				</div>
			</div>
			<div class="header-center">
				<div class="title">One site. One obsession</div>
				<div class="logo"></div>
			</div>
			<div class="header-right">
				<div class="languages">
					<ul>
						<li><a href="">inglés</a></li>
						<li><a href="">portugués</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="fake-background"></div>
	</header>
	<div class="site-content">