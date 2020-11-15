<div class="container">
	<div class="row">
		<div class="col">
			<hr>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<a  class="btn btn-outline-success my-2 my-sm-0" 
			data-toggle="modal" data-target="#modal1" id="incluir">Agregar</a>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<hr>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<center><h3>Registros Actuales</h3></center>
		</div>
	</div>
	
	<div class="row">
		<div class="col-xs-3 col-md-2">
			<label for='nr'>N X Pag</label>
            <select  class='form-control' id='nr' name='nr'>
			    <option value='3'>3</option>   
                <option value='5'>5</option>   
				<option value='10'>10</option>
                <option value='20'>20</option>
                <option value='30'>30</option>
                <option value='40'>40</option>
                <option value='50'>50</option>       
            </select>
		</div>
		<div class='col-xs-2 col-md-2'>
					<input type="hidden"  id="ibr" value=""/> 
                    <label id='ri'></label>
        </div>
               
        <div class='col-xs-1 col-md-1'>
                    <label>DE</label>
        </div>
               
        <div class='col-xs-2 col-md-2'>
                    <label id='rt'></label>
        </div>
		<div class='col-xs-2 col-md-2'>
                    <button type='button' name='rba' 
                        id='rba' class='btn btn-primary'
                        value='Anterior'>
						<span class="fa fa-arrow-left"></span>
						Anterior
                    </button>
        </div>
               
        <div class='col-xs-2 col-md-2'>
                    <button type='button' name='rbs' 
                        id='rbs' class='btn btn-primary'
                        value='Siguiente'>Siguiente
						<span class="fa fa-arrow-right"></span>
                    </button>
        </div>
	</div>
	
	<div class="row">
		<div class="col">
			<input id='filtro' name='filtro' 
                    type='text' class='form-control' 
                    placeholder='Escriba algo para filtrar'/>
					<span 
					  class="help-block" 
					  id="sfiltro">
					</span>
		</div>
	</div>
	
	<table class="table table-striped table-hover" id="tabla">
		<thead id='encabezado'>
		  
		</thead>
		<tbody id='consulta'>
		  
		</tbody>
	</table>
</div>