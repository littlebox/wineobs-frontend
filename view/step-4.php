<div class="content step-4 flex fcolumn">
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
				<div class="flex fcolumn f1">
				<?php for ($j=0; $j < 2; $j++):?>

					<div class="flex f1">
						<?php for ($i=0; $i < 3; $i++):?>
						<div class="f1 flex fcolumn winery-card">

							<div class="winery-card-front f1 flex fcolumn">
								<div class="winery-card-top f1 flex">
									<div class="winery-logo f1">
										<img src="/assets/img/lagardegrande.png">
									</div>
									<div class="winery-address f1">
										<p>asdf</p>
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
								<div class="winery-reserve">
									<p>nico</p>
									<p>trolo</p>
								</div>
							</div>
						</div>
						<?php endfor; ?>


					</div>

				<?php endfor; ?>
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