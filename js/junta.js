var ope = "";
$(document).ready(function(){
//ENCABEZADO DE LA TABLA Y NOMBRE DE BOTONES
$("#incluir").text("Agregar Junta de Condominio");
$("#encabezado").html('<tr>'+
			'<th>Acciones</th>'+
		    '<th>Numero de Acta</th>'+
		    '<th>Fecha de Elección</th>'+
			'<th>Fecha de Finalización</th>'+
		    '</tr>');
//FIN DE ENCABEZADO DE TABLA

//Asociacion de eventos a botones
	$("#Agregar").on("click",function(){
		
		ope = "Agregar";
		$("#ejecutar").text('Agregar');
		$("#titulo").text('Registrar Usuario');
		$("#acta").prop("disabled",false);
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


// VALIDACIONES PARA NUMERO DE ACTA 
    $("#acta").prop("maxLength","12");
	$("#acta").on("keypress", function(e){
		er = /^[0-9\s]*$/; 
		validarkeypress(er,e);
	});
	$("#acta").on("focus",function(){
		$("#sacta").text("Solo numeros 6 y 12 caracteres ");
	});
	$("#acta").on("keyup", function(){
		er = /^[0-9\s\b]{6,12}$/;
		r = validarkeyup(er,$(this),$("#sacta"),"Solo numeros 6 y 12 caracteres ");
	});
//FIN DE VALIDACIONES PARA NUMERO DE ACTA


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
			 datos.append('acta',$("#acta").val());

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
	$("#acta").val("");
	
}

function valida_datos(){ 
	var error = '';
	
	er = /^[0-9\s]{6,12}$/;
	r = validarkeyup(er,$("#acta"),$("#sacta"),"Solo numeros 6 y 12 caracteres");
	if(r==0){ //r==0, indica que hubo error en la validacion de la etiqueta 
	   error = "ERROR <br/>El Numero de Acta debe contener <br/>solo numeros 6 y 12 caracteres";   
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
