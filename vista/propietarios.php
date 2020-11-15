<html>
<?php require_once('comunes/cabecera.php'); ?>
<body>
<?php require_once("comunes/modal.php"); ?>
<?php require_once("comunes/menu.php"); ?>
<?php require_once("comunes/tabla.php"); ?>




<!-- seccion del modal -->
<div class="modal fade" tabindex="-1" role="dialog"  id="modal1">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-header text-light bg-info">
        <h5 class="modal-title" id="titulo">Agregar Vigilante</h5>
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
					   <input class="form-control" type="text" id="cedula" name="cedula"  />
					   <span id="scedula"
					   class="help-block"></span>
					</div>
					<div class="col">
					   <label for="nombres">Nombres</label>
					   <input class="form-control" type="text" id="nombres" name="nombres" />
					   <span id="snombres"
					   class="help-block"></span>
					</div>
				</div>
				<div class="row">
					<div class="col">
					   <label for="apellidos">Apellidos</label>
					   <input class="form-control" type="text" id="apellidos" name="apellidos" />
					   <span id="sapellidos"
					   class="help-block"></span>
					</div>
					<div class="col">
					   <label for="direccion">Dirección</label>
					   <input class="form-control" type="text" id="direccion" name="direccion" />
					   <span id="sdireccion"
					   class="help-block"></span>
					</div>
				</div>
			
				<div class="row">
					<div class="col">
					   <label for="telefono">Telefono</label>
					   <input class="form-control" type="text" id="telefono" name="telefono" />
					   <span id="stelefono"
					   class="help-block"></span>
					</div>
					<div class="col">
					   <label for="correo">Correo</label>
					   <input class="form-control" type="text" id="correo" name="correo" />
					   <span id="scorreo"
					   class="help-block"></span>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<hr>
					</div>
				</div>
				<div class="row">
					<div class="col">
						   <center>
						   <button type="button" class="btn btn-primary" id="ejecutar" name="ejecutar">AGREGAR</button>
						   <button type="button" class="btn btn-primary" id="modificar" name="modificar">MODIFICAR</button>
						   <button type="button" class="btn btn-primary" id="eliminar" name="eliminar">ELIMINAR</button>
						</center>
					
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


<script type="text/javascript" src="js/propietarios.js"></script>
</body>
</html>