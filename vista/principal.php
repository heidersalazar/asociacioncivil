<html>
<?php require_once('comunes/cabecera.php'); ?>
<body>
<?php require_once("comunes/modal.php"); ?>
<?php require_once("comunes/menu.php"); ?>
<div class="container">
<img src="img/asocivil.png" alt="logo" style="width:50%" class="mx-auto d-block"> 
</div>

<!-- seccion del modal -->
<div class="modal fade" tabindex="-1" role="dialog"  id="modal1">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-header text-light bg-info">
        <h5 class="modal-title">Acceso a Administrador</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-content">
		<form method="post" action="" id="f">
			<div class="container">
				<div class="row">
					<div class="col">
					   <label for="cedula">Cedula</label>
					   <input class="form-control" type="text" id="cedula" name="cedula" />
					   <span id="scedula"></span>
					</div>
				</div>
				<div class="row">
					<div class="col">
					   <label for="clave">Clave</label>
					   <input class="form-control" type="password" id="clave" name="clave" />
					   <span id="sclave"></span>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<hr>
					</div>
				</div>
				<div class="row">
					<div class="col">
						   <button type="button" class="btn btn-primary" id="verificar" name="verificar">VERIFICAR</button>
					</div>
				</div>
			</div>
		</form>
    </div>
	<div class="modal-footer bg-light">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
    </div>
  </div>
</div>
<!--fin de seccion modal-->


<script type="text/javascript" src="js/principal.js"></script>
</body>
</html>