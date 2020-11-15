<div class="container">
<nav class="navbar sticky-top navbar-expand-lg navbar-light bg-opaque">
  
  <label class="navbar-brand" >
	<img src="img/logo.png" class="rounded-circle" alt="">
	Asociación Civil Calle 10 Crepuscular
  </label>
  <button class="navbar-toggler" type="button" data-toggle="collapse" 
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <?php 
	  if(empty($_SESSION)){
	  session_start();
	  }
	  if(isset($_SESSION['ok'])){
	?>
    <ul class="navbar-nav mr-auto">
     
     
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Gestionar
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="?p=usuarios">Usuarios</a>
		  <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="?p=vigilantes">Vigilantes</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="?p=junta">Junta de Condominio</a>
        </div>
      </li>
      
	  <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Movimientos
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="?p=pagoavigilantes">Pago a Vigilantes</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="?p=asistencias">Control de Asistencias</a>
        </div>
      </li>
	  
	  <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Reportes
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="?p=rpagoavigilantes">Pago a Vigilantes</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="?p=rasistencia">Asistencia de Vigilantes</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="?p=rlistadovigilantes">Listado de Vigilantes</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="?p=rlistadomiembros">Listado de Miembros del Condominio</a>
        </div>
      </li>
	  
	      <form method="post" action="salida.php" id="sale"> 
		  <a class="btn btn-outline-success my-2 my-sm-0" 
		  onclick="document.getElementById('sale').submit();">
		  Cerrar Sesión</a>
		  </form>
	  
    </ul>
	<?php }  
		  else { 		
	?>
	  <a class="btn btn-outline-success my-2 my-sm-0" 
	  data-toggle="modal" data-target="#modal1">
	  Iniciar Sesión</a>
	<?php
		  }
	?>
    
  </div>
</nav>


  
  
</div>