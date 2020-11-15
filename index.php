<?php

$p='principal';

if(!Empty($_GET['p'])){
	$p=$_GET['p'];
}

if(is_file('controlador/'.$p.'.php')){
	require_once('controlador/'.$p.'.php');
}
else{
	echo 'EN CONSTRUCCION';
}


?>