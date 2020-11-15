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
        <h5 class="modal-title" id="titulo">Agregar Asistencia</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-content">
		<form method="post" action="" id="f">
			<div class="container">
				<div class="row">
					<div class="col">
					   <label for="vigi">Cedula del Vigilante</label>
					   <input class="form-control" type="text" id="vigi" name="vigi" />
					   <span id="svigi"
					   class="help-block"></span>
					</div>
					<div class="col">
					   <label for="fhentrada">Fecha y Hora de Entrada</label>
					   <input class="form-control" type="datetime-local" id="fhentrada" name="fhentrada"  />
					   <span id="sfhentrada"
					   class="help-block"></span>
					</div>
				</div>
					<div class="row">
					<div class="col">
					  <label for="fhsalida">Fecha y Hora de Salida</label>
					   <input class="form-control" type="datetime-local" id="fhsalida" name="fhsalida"  />
					   <span id="sfhsalida"
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
						   <button type="button" class="btn btn-primary" id="consultar" name="consultar">CONSULTAR</button>
						   <button type="button" class="btn btn-primary" id="modificar" name="modificar">MODIFICAR</button>
						   <button type="button" class="btn btn-primary" id="eliminar" name="ejecutar">ELIMINAR</button>
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


<script type="text/javascript" src="js/asistencias.js"></script>
</body>
</html>