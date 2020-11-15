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
        <h5 class="modal-title" id="titulo">Agregar Pago a Vigilante</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-content">
		<form method="post" action="" id="f">
			<div class="container">
				<div class="row">
					<div class="col">
					   <label for="vigi">Cedula del Vigilante a Pagar</label>
					   <input class="form-control" type="text" id="vigi" name="vigi" />
					   <span id="svigi"
					   class="help-block"></span>
					</div>
					<div class="col">
					   <label for="usuario">Cedula del Usuario que Cancela</label>
					   <input class="form-control" type="text" id="usuario" name="usuario"  />
					   <span id="susuario"
					   class="help-block"></span>
					</div>
				</div>
					<div class="row">
					<div class="col">
					   <label for="moneda"> Tipo de Moneda</label>
					   <input class="form-control" type="text" id="moneda" name="moneda" />
					   <span id="smoneda"
					   class="help-block"></span>
					</div>
					<div class="col">
					   <label for="monto">Monto a Pagar</label>
					   <input class="form-control" type="text" id="monto" name="monto" />
					   <span id="smonto"
					   class="help-block"></span>
					</div>
				    </div>

				    <div class="row">
					<div class="col">
					   <label for="fecha">Fecha</label>
					   <input class="form-control" type="date" id="fecha" name="fecha" />
					   <span id="sfecha"
					   class="help-block"></span>
					</div>
					<div class="col">
					   <label for="banco">Banco a Pagar</label>
					   <input class="form-control" type="email" id="banco" name="banco" />
					   <span id="sbanco"
					   class="help-block"></span>
					</div>
				</div>
                 
                 <div class="row">
				<div class="col">
					   <label for="refe">Referencia</label>
					   <input class="form-control" type="text" id="refe" name="refe" />
					   <span id="srefe"
					   class="help-block"></span>
					</div>
                    
					<div class="col">
					   <label for="recibo">Numero de Recibo</label>
					   <input class="form-control" type="text" id="recibo" name="recibo" />
					   <span id="srecibo"
					   class="help-block"></span>
					</div>
				</div>

				<div class="row">
				<div class="col">
					   <label for="descri">Descripción</label>
					   <input class="form-control" type="text" id="descri" name="descri" />
					   <span id="sdescri"
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


<script type="text/javascript" src="js/pagoavigilantes.js"></script>
</body>
</html>