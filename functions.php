<?php
	/**
	* a few constants
	**/
	define('ROOT', __DIR__);
	define('COMPONENT', __DIR__.'/component');
	define('VIEW', __DIR__.'/view');

	$view = isset($_GET['view']) ? $_GET['view'] : 'presentation';
?>
