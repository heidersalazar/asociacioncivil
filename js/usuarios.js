 var ope = "";
 $(document).ready(function(){
 //ENCABEZADO DE LA TABLA Y NOMBRE DE BOTONES
 $("#incluir").text("Agregar Usuario");
 $("#encabezado").html('<tr>'+
		    '<th>Nombre de Usuario</th>'+
		    '<th>Cedula</th>'+
			'<th>Apellidos</th>'+
			'<th>Nombres</th>'+
			'<th>Telefono</th>'+
			'<th>Correo</th>'+
			'<th>Telefono</th>'+
			'<th>Rol de Usuario</th>'+
		    '</tr>');
 //FIN DE ENCABEZADO DE TABLA

 //Asociancion de eventos a botones
	$("#Agregar").on("click",function(){
		
		ope = "Agregar";
		$("#ejecutar").text('Agregar');
		$("#titulo").text('Registrar Usuario');
		$("#usuario").prop("disabled",false);
		$("#cedula").prop("disabled",false);
		$("#nombres").prop("disabled",false);
		$("#apellidos").prop("disabled",false);
		$("#telefono").prop("disabled",false);
		$("#correo").prop("disabled",false);
		$("#rol").prop("disabled",false);
		$("#clave").prop("disabled",false);
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

 //1ERO VALIDACIONES PARA NOMBRE DE USUARIO
    $("#usuario").prop("maxLength","12");
	$("#usuario").on("keypress", function(e){
	
		er = /^[0-9A-Za-z-_.]*$/; 
		
	
		validarkeypress(er,e);
		
	});
	$("#usuario").on("focus",function(){
	
		$("#susuario").text("Solo letras numeros y - _ .  entre 1 y 12 caracteres");
	});
	$("#usuario").on("keyup", function(){
	
		er = /^[0-9A-Za-z-_.\s\b]{1,12}$/;
		r = validarkeyup(er,$(this),$("#susuario"),"Solo letras numeros y - _ .  entre 1 y 12 caracteres");
		
	});
	
//FIN DE VALIDACIONES DE NOMBRE DE USUARIO
//2DO VALIDACIONES PARA CEDULA	
    $("#cedula").prop("maxLength","12");
	$("#cedula").on("keypress", function(e){
		er = /^[0-9\s\b]*$/; 
		validarkeypress(er,e);
	});
	$("#cedula").on("focus",function(){
		$("#scedula").text("Solo numeros 6 y 12 caracteres ");
	});
	$("#cedula").on("keyup", function(){
		er = /^[0-9\s]{6,12}$/;
		r = validarkeyup(er,$(this),$("#scedula"),"Solo numeros 6 y 12 caracteres ");
	});
//FIN DE VALIDACIONES DE CEDULA
//3RO VALIDACIONES PARA APELLIDOS	
    $("#apellidos").prop("maxLength","20");
	$("#apellidos").on("keypress", function(e){
		er = /^[A-Za-z\s\b]*$/; 
		validarkeypress(er,e);
	});
	$("#apellidos").on("focus",function(){
		$("#sapellidos").text("Solo letras entre 3 y 20 caracteres ");
	});
	$("#apellidos").on("keyup", function(){
		er = /^[0-9A-Za-z-_.#]{3,20}$/;
		r = validarkeyup(er,$(this),$("#sapellidos"),"Solo letras entre 3 y 20 caracteres ");
	});
//FIN DE VALIDACIONES DE APELLIDOS
//4TO VALIDACIONES DE NOMBRES
	$("#nombres").prop("maxLength","20");
	$("#nombres").on("keypress", function(e){
		er = /^[A-Za-z\s\b]*$/; 
		validarkeypress(er,e);
	});
	$("#nombres").on("focus",function(){
		$("#snombres").text("Solo letras entre 3 y 20 caracteres ");
	});
	$("#nombres").on("keyup", function(){
		er = /^[0-9A-Za-z-_.#]{3,20}$/;
		r = validarkeyup(er,$(this),$("#snombres"),"Solo letras entre 3 y 20 caracteres ");
	});
//FIN DE VALIDACIONES DE NOMBRES
//5TO VALIDACIONES DE TELEFONO
	$("#telefono").prop("maxLength","15");
	$("#telefono").on("keypress", function(e){
		er = /^[0-9\b]*$/; 
		validarkeypress(er,e);
	});
	$("#telefono").on("focus",function(){
		$("#stelefono").text("Solo numeros entre 11 y 15  digitos ");
	});
	$("#telefono").on("keyup", function(){
		er = /^[0-9]{11,15}$/;
		r = validarkeyup(er,$(this),$("#stelefono"),"Solo numeros entre 11 y 15 digitos ");
	});
//FIN DE VALIDACIONES DE TELEFONO
//VALIDACIONES PARA CORREO	
    $("#correo").prop("maxLength","50");
	$("#correo").on("keypress", function(e){
		er = /^[0-9A-Za-z-_.@\s]*$/; 
		validarkeypress(er,e);
	});
	$("#correo").on("focus",function(){
		$("#scorreo").text("Solo numeros, letras y - _ . @ entre 7 y 50 caracteres ");
	});
	$("#correo").on("keyup", function(){
		er = /^[0-9A-Za-z-_.@\s\b]{7,50}$/;
		r = validarkeyup(er,$(this),$("#scorreo"),"Solo letras y/o numeros 7 y 50 caracteres ");
	});
//FIN DE VALIDACIONES DE CORREO
//VALIDACIONES PARA ROL DE USUARIO	
    $("#rol").prop("maxLength","20");
	$("#rol").on("keypress", function(e){
		er = /^[A-Za-z\s\b]*$/; 
		validarkeypress(er,e);
	});
	$("#rol").on("focus",function(){
		$("#srol").text("Solo letras entre 3 y 20 caracteres ");
	});
	$("#rol").on("keyup", function(){
		er = /^[0-9A-Za-z-_.#]{3,20}$/;
		r = validarkeyup(er,$(this),$("#sapellidos"),"Solo letras entre 3 y 20 caracteres ");
	});
//FIN DE VALIDACIONES DE APELLIDOS


//VALIDACIONES PARA CLAVE	
    $("#clave").prop("maxLength","12");
	$("#clave").on("keypress", function(e){
		er = /^[0-9A-Za-z-_.#]*$/; 
		validarkeypress(er,e);
	});
	$("#clave").on("focus",function(){
		$("#sclave").text("Solo numeros, letras y - _ . o # entre 8 y 12 caracteres ");
	});
	$("#clave").on("keyup", function(){
		er = /^[0-9A-Za-z-_.#]{7,12}$/;
		r = validarkeyup(er,$(this),$("#sclave"),"Solo letras y/o numeros 7 y 12 caracteres ");
	});
//FIN DE VALIDACIONES DE CLAVE
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
			 datos.append('cedula',$("#cedula").val());
			 datos.append('nombres',$("#nombres").val());
			 datos.append('apellidos',$("#apellidos").val());
			 datos.append('telefono',$("#telefono").val());
			 datos.append('correo',$("#correo").val());
			 datos.append('usuario',$("#rol").val());
			 datos.append('clave',$("#clave").val());
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
	$("#usuario").val("");
	$("#cedula").val("");
	$("#nombres").val("");
	$("#apellidos").val("");
	$("#telefono").val("");
	$("#correo").val("");
	$("#rol").val("");
	$("#clave").val("");
}

function valida_datos(){ 
	var error = '';
	
	er = /^[0-9A-Za-z-_.\s]{1,12}$/;
	r = validarkeyup(er,$("#usuario"),$("#susuario"),"Solo letras numeros y - _ . @ entre 1 y 12 caracteres ");
	if(r==0){ //r==0, indica que hubo error en la validacion de la etiqueta 
	   error = "ERROR <br/>El nombre de usuario debe contener <br/>Solo letras numeros y - _ . @ entre 1 y 12 caracteres";   
	   return error; //al colocar return aca, sale de la funcion y no ejecuta el resto	
	}
	
	
	er = /^[0-9\s]{6,12}$/;
	r = validarkeyup(er,$("#cedula"),$("#scedula"),"Solo numeros 6 y 12 caracteres ");
	if(r==0){ //r==0, indica que hubo error en la validacion de la etiqueta 
	   error = "ERROR <br/>La Cedula debe contener <br/>Solo numeros entre 6 y 12 caracteres";   
	   return error; //al colocar return aca, sale de la funcion y no ejecuta el resto	
	}
	
	er = /^[A-Za-z\s]{3,20}$/;
	r = validarkeyup(er,$("#apellidos"),$("#sapellidos"),"Solo letras entre 3 y 20 caracteres ");
	if(r==0){ //r==0, indica que hubo error en la validacion de la etiqueta 
	   error = "ERROR <br/>El Apellido debe contener <br/>Solo letras entre 3 y 20 caracteres";   
	   return error; //al colocar return aca, sale de la funcion y no ejecuta el resto	
	}
		
	er = /^[A-Za-z\s]{3,20}$/;
	r = validarkeyup(er,$("#nombres"),$("#snombres"),"Solo letras entre 3 y 20 caracteres ");
	if(r==0){ //r==0, indica que hubo error en la validacion de la etiqueta 
	   error = "ERROR <br/>El Nombre debe contener <br/>Solo letras entre 3 y 20 caracteres";   
	   return error; //al colocar return aca, sale de la funcion y no ejecuta el resto	
	}
	
			
	er = /^[0-9]{11,15}$/;
		r = validarkeyup(er,$("#telefono"),$("#stelefono"),"Solo numeros entre 11 y 15 digitos ");
	if(r==0){ //r==0, indica que hubo error en la validacion de la etiqueta 
	   error = "ERROR <br/>La clave debe contener <br/>Solo numeros entre 11 y 15 digitos ";
	   return error; //al colocar return aca, sale de la funcion y no ejecuta el resto	
	}

	er = /^[A-Za-z\s]{3,20}$/;
	r = validarkeyup(er,$("#rol"),$("#srol"),"Solo letras entre 3 y 20 caracteres ");
	if(r==0){ //r==0, indica que hubo error en la validacion de la etiqueta 
	   error = "ERROR <br/>El Rol del Usuario debe contener <br/>Solo letras entre 3 y 20 caracteres";   
	   return error; //al colocar return aca, sale de la funcion y no ejecuta el resto	
	}

	er = /^[0-9A-Za-z-_.@\s]{7,50}$/;
	r = validarkeyup(er,$("#correo"),$("#scorreo"),"Solo numeros, letras y - _ . @ entre 7 y 50 caracteres ");
	if(r==0){ //r==0, indica que hubo error en la validacion de la etiqueta 
	   error = "ERROR <br/>EL correo debe contener <br/>solo numeros, letras y - _ . @ entre 7 y 50 caracteres ";   
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

	$("#usuario").val($(p).find("td:eq(1)").text());
	$("#cedula").val($(p).find("td:eq(2)").text());
	$("#nombres").val($(p).find("td:eq(3)").text());
	$("#apellidos").val($(p).find("td:eq(4)").text());
	$("#telefono").val($(p).find("td:eq(5)").text());
	$("#correo").val($(p).find("td:eq(6)").text());
	$("#telefono").val($(p).find("td:eq(5)").text());
	$("#rol").val($(p).find("td:eq(5)").text());
	$("#clave").val($(p).find("td:eq(5)").text());
	if(b==1){
		ope = "modificar";
		$("#ejecutar").text('Modificar');
		$("#titulo").text('Modificar Propietario');
		$("#usuario").prop("disabled",true);
		$("#cedula").prop("disabled",false);
		$("#apellidos").prop("disabled",false);
		$("#nombres").prop("disabled",false);
		$("#telefono").prop("disabled",false);
	}
	else{
		ope = "eliminar";
		$("#ejecutar").text('Eliminar');
		$("#titulo").text('Eliminar Propietario');
		$("#usuario").prop("disabled",true);
		$("#cedula").prop("disabled",true);
		$("#apellidos").prop("disabled",true);
		$("#nombres").prop("disabled",true);
		$("#telefono").prop("disabled",true);
	}
	
	$("#modal1").modal("show");
	
}