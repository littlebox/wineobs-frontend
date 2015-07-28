<div class="content results flex fcolumn">
	<div class="flex fcolumn f1">

		<div class="step-header">
			<div class="flex fcolumn">
				<div class="step-number">4</div>
				<div class="step-text">
					<h2 class="step-title white-border">
						Seleccione las bodegas
					</h2>
				</div>
			</div>
		</div>

		<div class="step-content flex">
			<div class="map flex">
				<div class="map-container f1"></div>
			</div>
			<div class="wineries flex">
				<div class="search">
					<div class="search-input">
						<input type="text">
					</div>
					<div class="search-lens">
						<div class="lens">
							<span class="icon-wineobs-lens"></span>
						</div>
					</div>
				</div>
				<div class="flex fcolumn f1">
				<?php for ($j=0; $j < 2; $j++):?>

					<div class="flex f1">
						<?php for ($i=0; $i < 3; $i++):?>
						<div class="f1 flex fcolumn winery-card">

							<div class="winery-card-front f1 flex fcolumn">
								<div class="winery-card-top flex">
									<div class="winery-card-top-mask f1 flex">
										<div class="winery-logo f1">
											<img src="/assets/img/lagardegrande.png">
										</div>
										<div class="winery-address f1">
											<p class="address-title">Bodega Dona Paula</p>
											<p>San Martin 1745, Mayor Drummond (5507) Luján de Cuyo, Mendoza, Argentina</p>
										</div>
									</div>
								</div>
								<div class="winery-icons f1">
									<a href=""><span class="icon icon-wineobs-info"></span></a>
									<a href=""><span class="icon icon-wineobs-photo"></span></a>
									<a href=""><span class="icon icon-wineobs-pin"></span></a>
								</div>
								<div class="winery-button f1">
									<a class="wineobs-button">reservar</a>
								</div>
							</div>

							<div class="winery-card-back f1">
								<div class="winery-close">
									<span class="icon icon-wineobs-cross"></span>
								</div>
								<div class="winery-reserve">
									<div class="winery-title">Bodega Dona Paula</div>
									<div class="winery-hours">
										<div class="winery-hours-title">Horarios</div>
										<div class="winery-hours-grid">
											<?php for ($k=0; $k < 8; $k++):?>
												<div class="winery-hour <?= (rand(0,1) == 0)? 'disabled' : '' ?>"><?php echo date("h:i", mktime(9,$k*30,0,0,0,0)) ?></div>
											<?php endfor; ?>
										</div>
									</div>
									<div class="winery-tour-types">
										<div class="winery-tour-types-title">Tipos de tour</div>
										<div class="winery-tour-types-buttons">
											<div class="winery-tour-types-button">Standard</div>
											<div class="winery-tour-types-button">Premium</div>
											<div class="winery-tour-types-button">Black</div>
										</div>
									</div>
									<div class="winery-button f1">
										<a class="wineobs-button">reservar</a>
									</div>
								</div>
							</div>
						</div>
						<?php endfor; ?>


					</div>

				<?php endfor; ?>
				</div>
				<div class="pagination">
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="step-footer flex">
			<div>
				<a class="wineobs-button">Anterior</a>
			</div>
			<div>
				<a class="wineobs-button">Siguiente</a>
			</div>
		</div>
	</div>
</div>