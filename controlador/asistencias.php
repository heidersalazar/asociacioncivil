<?php
 if(is_file('vista/'.$p.'.php')){
    
     session_start();
     $_SESSION['ok'] = '1';
   require_once('vista/'.$p.'.php');
 }
 else{
   echo 'EN CONSTRUCCION';
 }
?>