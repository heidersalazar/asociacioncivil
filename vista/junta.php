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
        <h5 class="modal-title" id="titulo">Agregar Junta de Condominio</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-content">
		<form method="post" action="" id="f">
			<div class="container">
				<div class="row">
					<div class="col">
					   <label for="acta">Número de Acta</label>
					   <input class="form-control" type="text" id="acta" name="acta"  />
					   <span id="sacta"
					   class="help-block"></span>
					</div>
					<div class="col">
					   <label for="eleccion">Fecha de Elección</label>
					   <input class="form-control" type="date" id="eleccion" name="eleccion" />
					   <span id="seleccion"
					   class="help-block"></span>
					</div>
				</div>
				<div class="row">
					<div class="col">
					   <label for="finalizacion">Fecha de Finalización</label>
					   <input class="form-control" type="date" id="fina" name="fina" />
					   <span id="sfina"
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


<script type="text/javascript" src="js/junta.js"></script>
</body>
</html>