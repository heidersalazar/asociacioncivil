var ope = "";
$(document).ready(function(){
//ENCABEZADO DE LA TABLA Y NOMBRE DE BOTONES
$("#incluir").text("Agregar Pago a Vigilante");
$("#encabezado").html('<tr>'+
			'<th>Acciones</th>'+
		    '<th>Cedula del Vigilante</th>'+
		    '<th>Cedula del Usuario</th>'+
			'<th>Tipo de Moneda</th>'+
			'<th>Monto</th>'+
			'<th>Fecha</th>'+
			'<th>Banco</th>'+
			'<th>Referencia</th>'+
			'<th>Numero de Recibo</th>'+
			'<th>Descripción</th>'+
		    '</tr>');
//FIN DE ENCABEZADO DE TABLA

//Asociacion de eventos a botones
	$("#Agregar").on("click",function(){
		
		ope = "Agregar";
		$("#ejecutar").text('Agregar');
		$("#titulo").text('Registrar Usuario');
		$("#vigi").prop("disabled",false);
		$("#usuario").prop("disabled",false);
		$("#moneda").prop("disabled",false);
		$("#monto").prop("disabled",false);
		$("#fecha").prop("disabled",false);
		$("#banco").prop("disabled",false);
		$("#refe").prop("disabled",false);
		$("#recibo").prop("disabled",false);
		$("#descri").prop("disabled",false);
		limpia();
	});
	$("#ejecutar").on("click",function(){
		
		envia(ope);
	});
	
	$("#nr").on("change",function(){
		consultar(0);
	});
	
	
	
//

//Validacion de datos de entrada


// VALIDACIONES PARA CEDULA DEL VIGILANTE
    $("#vigi").prop("maxLength","12");
	$("#vigi").on("keypress", function(e){
		er = /^[0-9\s]*$/; 
		validarkeypress(er,e);
	});
	$("#vigi").on("focus",function(){
		$("#svigi").text("Solo numeros 6 y 12 caracteres ");
	});
	$("#vigi").on("keyup", function(){
		er = /^[0-9\s\b]{6,12}$/;
		r = validarkeyup(er,$(this),$("#svigi"),"Solo numeros 6 y 12 caracteres ");
	});
//FIN DE VALIDACIONES DE CEDULA DEL VIGILANTE
//3RO VALIDACIONES PARA CEDULA DEL USUARIO	
    $("#usuario").prop("maxLength","12");
	$("#usuario").on("keypress", function(e){
		er = /^[0-9\s]*$/; 
		validarkeypress(er,e);
	});
	$("#usuario").on("focus",function(){
		$("#susuario").text("Solo letras entre 6 y 12 caracteres ");
	});
	$("#usuario").on("keyup", function(){
		er = /^[0-9\s\b]{6,12}$/;
		r = validarkeyup(er,$(this),$("#susuario"),"Solo numeros entre 6 y 12 caracteres ");
	});
	// VALIDACIONES PARA MONTO
	$("#monto").prop("maxLength","50");
	$("#monto").on("keypress", function(e){
		er = /^[0-9\s]*$/; 
		validarkeypress(er,e);
	});
	$("#monto").on("focus",function(){
		$("#smonto").text("Solo numeros entre 1 y 40  digitos ");
	});
	$("#monto").on("keyup", function(){
		er = /^[0-9\s\b]{1,40}$/;
		r = validarkeyup(er,$(this),$("#smonto"),"Solo numeros entre 1 y 40 digitos ");
	});
//FIN DE VALIDACIONES DE CEDULA DEL USUARIO
//4TO VALIDACIONES DE TIPO DE MONEDA
	$("#moneda").prop("maxLength","20");
	$("#moneda").on("keypress", function(e){
		er = /^[A-Za-z\s]*$/; 
		validarkeypress(er,e);
	});
	$("#moneda").on("focus",function(){
		$("#smoneda").text("Solo letras entre 3 y 20 caracteres ");
	});
	$("#moneda").on("keyup", function(){
		er = /^[0-9A-Za-z\s\b]{3,20}$/;
		r = validarkeyup(er,$(this),$("#smoneda"),"Solo letras entre 3 y 20 caracteres ");
	});
//FIN DE VALIDACIONES DE NOMBRES

//FIN DE VALIDACIONES PARA MONTO 
//VALIDACIONES PARA BANCO	
    $("#banco").prop("maxLength","50");
	$("#banco").on("keypress", function(e){
		er = /^[A-Za-z\s]*$/; 
		validarkeypress(er,e);
	});
	$("#banco").on("focus",function(){
		$("#sbanco").text("Solo letras entre 7 y 50 caracteres ");
	});
	$("#banco").on("keyup", function(){
		er = /^[0-9A-Za-z\s\b]{7,50}$/;
		r = validarkeyup(er,$(this),$("#sbanco"),"Solo letras entre 7 y 50 caracteres ");
	});
//FIN DE VALIDACIONES DE BANCO
//VALIDACIONES PARA REFERENCIA	
     $("#refe").prop("maxLength","12");
	$("#refe").on("keypress", function(e){
		er = /^[0-9\s]*$/; 
		validarkeypress(er,e);
	});
	$("#refe").on("focus",function(){
		$("#srefe").text("Solo numeros 6 y 12 caracteres ");
	});
	$("#refe").on("keyup", function(){
		er = /^[0-9\s\b]{6,12}$/;
		r = validarkeyup(er,$(this),$("#srefe"),"Solo numeros 6 y 12 caracteres ");
	});
//FIN DE VALIDACIONES DE REFERENCIA

//VALIDACIONES PARA NUMERO DE RECIBO	
     $("#recibo").prop("maxLength","30");
	$("#recibo").on("keypress", function(e){
		er = /^[0-9\s]*$/; 
		validarkeypress(er,e);
	});
	$("#recibo").on("focus",function(){
		$("#srecibo").text("Solo numeros entre 1 y 30 caracteres ");
	});
	$("#recibo").on("keyup", function(){
		er = /^[0-9\s\b]{1,30}$/;
		r = validarkeyup(er,$(this),$("#srecibo"),"Solo numeros entre 1 y 30 caracteres ");
	});
//FIN DE VALIDACIONES DE NUMERO DE RECIBO
//VALIDACIONES PARA DESCRIPCION	
    $("#descri").prop("maxLength","200");
	$("#descri").on("keypress", function(e){
		er = /^[0-9A-Za-z\s]*$/; 
		validarkeypress(er,e);
	});
	$("#descri").on("focus",function(){
		$("#sdescri").text("Solo letras y numeros entre 3 y 50 ");
	});
	$("#descri").on("keyup", function(){
		er = /^[0-9A-Za-z\s\b]{3,50}$/;
		r = validarkeyup(er,$(this),$("#sdescri"),"Solo letras y numeros entre 3 y 50 caracteres ");
	});
//FIN DE VALIDACIONES DE DESCRIPCION

//6TO VALIDACIONES DEL FILTRO
	$("#filtro").prop("maxLength","20");
	$("#filtro").on("keypress", function(e){
		er = /^[0-9A-Za-z\s]*$/; 
		validarkeypress(er,e);
	});
	$("#filtro").on("keyup", function(){
		consultar(0);
	});
//FIN DE VALIDACIONES DEL FILTRO
//BOTONES ANTERIOR Y SIGUIENTE
	$("#rbs").on("click",function(){
		consultar(1);
	});
	$("#rba").on("click",function(){
		consultar(2);
	});
//FIN DE BOTONES
	consultar(0);

});
function coloca_filtro(d,movimiento){
	var n;
	d.append('accion','consultar');
	d.append('filtro',$("#filtro").val());
	if(movimiento==0){
		d.append('inicio',0);	
	}
	else if(movimiento==1){
		n = $("#ri").text()*1;
		d.append('inicio',n);	
	}
	else if(movimiento==2){
		var filas = $("#tabla tr").length;
			n = ($("#ri").text()*1)-2*($("#nr").val()*1);
			if($("#nr").val()*1>(filas*1-1)){
				n = ($("#ri").text()*1)-($("#nr").val()*1+(filas-1)*1);	
			}
		d.append('inicio',n);
	}
		d.append('cantidad',$("#nr").val());
	return d;		 
}
function consultar(m){
	var datos = new FormData();
		
	datos = coloca_filtro(datos,m);	
			 
	$.ajax({
		    async: true,
            url: '', //la pagina a donde se envia por estar en mvc, se omite la ruta ya que siempre estaremos en la misma pagina
            type: 'POST',//tipo de envio 
			contentType: false,
            data: datos,
			processData: false,
	        cache: false,
            success: function(respuesta) {//si resulto exitosa la transmision
			   //alert(respuesta);
			   var lee = JSON.parse(respuesta);
			   if(lee.m2!=''){
			     $("#consulta").html(lee.m2);
				 $("#rt").text(lee.m3);
				 $("#ri").text(lee.m4);
			   }
			   
            },
            error: function(){
               $("#consulta").html('');
            }
			
    }); 
}

function envia(accion){
	
	a = valida_datos(); 
	
		if(a!=''){
			
			$("#modal1").modal("hide");
			$("#contenidodemodal").html(a);
			$("#mostrarmodal").modal("show");
			setTimeout(function() {
				 
					$("#mostrarmodal").modal("hide");
					 $("#modal1").modal("show");
			},4000);
		}
		else{
			
			 var datos = new FormData();
			 datos = coloca_filtro(datos,0);
			 datos.append('accion',accion);
			 datos.append('vigi',$("#vigi").val());
			 datos.append('usuario',$("#usuario").val());
			 datos.append('moneda',$("#moneda").val());
			 datos.append('monto',$("#monto").val());
			 datos.append('banco',$("#banco").val());
			 datos.append('refe',$("#refe").val());
			 datos.append('recibo',$("#recibo").val());
			 datos.append('descri',$("#descri").val());

			 enviaAjax(datos);
			 limpia();
		}
	
}

function enviaAjax(datos){
	
	$.ajax({
		    async: true,
            url: '', //la pagina a donde se envia por estar en mvc, se omite la ruta ya que siempre estaremos en la misma pagina
            type: 'POST',//tipo de envio 
			contentType: false,
            data: datos,
			processData: false,
	        cache: false,
            success: function(respuesta) {//si resulto exitosa la transmision
			
			   var lee = JSON.parse(respuesta);
			   
			   $("#modal1").modal("hide");
			   $("#contenidodemodal").html(lee.m1);
			   if(lee.m2!=''){
			     $("#consulta").html(lee.m2);
				 $("#rt").text(lee.m3);
				 $("#ri").text(lee.m4);
			   }
			   $("#mostrarmodal").modal("show");
				setTimeout(function() {
					$("#mostrarmodal").modal("hide");
					if(ope=='incluir'){
						$("#modal1").modal("show");
					}
				},4000);
				
            },
            error: function(){
               $("#contenidodemodal").html('Error con ajax');
			   $("#modal1").modal("hide");
			   $("#mostrarmodal").modal("show");
				setTimeout(function() {
					$("#mostrarmodal").modal("hide");
					
						$("#modal1").modal("show");
					
				},4000);
            }
			
    }); 
	
}



function limpia(){
	$("#vigi").val("");
	$("#usuario").val("");
	$("#moneda").val("");
	$("#monto").val("");
	$("#banco").val("");
	$("#refe").val("");
	$("#recibo").val("");
	$("#descri").val("");
}

function valida_datos(){ 
	var error = '';
	
	er = /^[0-9\s]{6,12}$/;
	r = validarkeyup(er,$("#vigi"),$("#svigi"),"Solo numeros 6 y 12 caracteres");
	if(r==0){ //r==0, indica que hubo error en la validacion de la etiqueta 
	   error = "ERROR <br/>La Cedula del Vigilante debe contener <br/>solo numeros 6 y 12 caracteres";   
	   return error; //al colocar return aca, sale de la funcion y no ejecuta el resto	
	}
	
	
	er = /^[0-9\s]{6,12}$/;
	r = validarkeyup(er,$("#usuario"),$("#susuario"),"Solo numeros 6 y 12 caracteres ");
	if(r==0){ //r==0, indica que hubo error en la validacion de la etiqueta 
	   error = "ERROR <br/>La Cedula del Usuario debe contener <br/>solo numeros entre 6 y 12 caracteres";   
	   return error; //al colocar return aca, sale de la funcion y no ejecuta el resto	
	}
	
	er = /^[A-Za-z\s]{3,20}$/;
	r = validarkeyup(er,$("#moneda"),$("#smoneda"),"Solo letras entre 3 y 20 caracteres ");
	if(r==0){ //r==0, indica que hubo error en la validacion de la etiqueta 
	   error = "ERROR <br/>El Tipo de Moneda debe contener <br/>solo letras entre 3 y 20 caracteres";   
	   return error; //al colocar return aca, sale de la funcion y no ejecuta el resto	
	}
		
	er = /^[0-9\s]{1,50}$/;
	r = validarkeyup(er,$("#monto"),$("#smonto"),"Solo numeros entre 1 y 50 digitos ");
	if(r==0){ //r==0, indica que hubo error en la validacion de la etiqueta 
	   error = "ERROR <br/>El Monto debe contener <br/>solo numeros entre 1 y 50 digitos";   
	   return error; //al colocar return aca, sale de la funcion y no ejecuta el resto	
	}
	
			
	er = /^[A-Za-z\s]{7,50}$/;
		r = validarkeyup(er,$("#banco"),$("#sbanco"),"Solo letras entre 7 y 50 caracteres ");
	if(r==0){ //r==0, indica que hubo error en la validacion de la etiqueta 
	   error = "ERROR <br/>El Banco debe contener <br/>solo letras entre 7 y 50 caracteres ";
	   return error; //al colocar return aca, sale de la funcion y no ejecuta el resto	
	}

	er = /^[0-9\s]{6,12}$/;
	r = validarkeyup(er,$("#refe"),$("#srefe"),"Solo numeros 6 y 12 caracteres ");
	if(r==0){ //r==0, indica que hubo error en la validacion de la etiqueta 
	   error = "ERROR <br/>La Referencia debe contener <br/>Solo numeros 6 y 12 caracteres";   
	   return error; //al colocar return aca, sale de la funcion y no ejecuta el resto	
	}

	er = /^[0-9\s]{1,30}$/;
	r = validarkeyup(er,$("#recibo"),$("#srecibo"),"Solo numeros entre 1 y 30 caracteres");
	if(r==0){ //r==0, indica que hubo error en la validacion de la etiqueta 
	   error = "ERROR <br/>El Numero de Recibo debe contener <br/>solo numeros entre 1 y 30 caracteres ";   
	   return error; //al colocar return aca, sale de la funcion y no ejecuta el resto	
	}

	er = /^[0-9A-Za-z\s\b]{3,50}$/;
	r = validarkeyup(er,$("#descri"),$("#sdescri"),"Solo letras y numeros entre 3 y 50 ");
	if(r==0){ //r==0, indica que hubo error en la validacion de la etiqueta 
	   error = "ERROR <br/>La Descripción debe contener <br/>solo letras y numeros entre 3 y 50 ";   
	   return error; //al colocar return aca, sale de la funcion y no ejecuta el resto	
	}
		
	
	return error;
}

function validarkeypress(er,e){
	//key obtiene el codigo ascii
	//del evento recuerde que
	key = e.keyCode || e.which;
	
	//luego se transforma el codigo ascii
	//en un caracter
    tecla = String.fromCharCode(key);
	
	//se procede a comparar con
	//la expresion regular usando la funcion test
    a = er.test(tecla);
	
    if(!a){
		//si no coincide, se elimna la
		//pulsacion del teclado usando
		//prevent default
		e.preventDefault();
    }
	
    
}

function validarkeyup(er,etiqueta,etiquetamensaje,
mensaje){
	
	a = er.test($(etiqueta).val());
	
	if(a){
		$(etiquetamensaje).text("");
		return 1;
	}
	else{
		$(etiquetamensaje).text(mensaje);
		return 0;
	}
}

function pone(a,b){
	var p = $(a).parent().parent();

	$("#vigi").val($(p).find("td:eq(1)").text());
	$("#usuario").val($(p).find("td:eq(2)").text());
	$("#moneda").val($(p).find("td:eq(3)").text());
	$("#monto").val($(p).find("td:eq(4)").text());
	$("#banco").val($(p).find("td:eq(5)").text());
	$("#refe").val($(p).find("td:eq(6)").text());
	$("#recibo").val($(p).find("td:eq(7)").text());
	$("#descri").val($(p).find("td:eq(8)").text());
	if(b==1){
		ope = "modificar";
		$("#ejecutar").text('Modificar');
		$("#titulo").text('Modificar Propietario');
		$("#vigi").prop("disabled",true);
		$("#usuario").prop("disabled",false);
		$("#moneda").prop("disabled",false);
		$("#monto").prop("disabled",false);
		$("#banco").prop("disabled",false);
		$("#refe").prop("disabled",false);
		$("#recibo").prop("disabled",false);
		$("#descri").prop("disabled",false);
	}
	else{
		ope = "eliminar";
		$("#ejecutar").text('Eliminar');
		$("#titulo").text('Eliminar Propietario');
		$("#vigi").prop("disabled",true);
		$("#usuario").prop("disabled",true);
		$("#moneda").prop("disabled",true);
		$("#monto").prop("disabled",true);
		$("#banco").prop("disabled",true);
		$("#refe").prop("disabled",true);
		$("#recibo").prop("disabled",true);
		$("#descri").prop("disabled",true);
	}
	
	$("#modal1").modal("show");
	
}