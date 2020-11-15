<?php
 if(is_file('vista/'.$p.'.php')){
	 if(isset($_POST['cedula'])){
		
		 session_start();
		 $_SESSION['ok'] = '1';
	 }
	 require_once('vista/'.$p.'.php');
 }
 else{
	 echo 'EN CONSTRUCCION';
 }
?>