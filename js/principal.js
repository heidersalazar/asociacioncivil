//document, es el documento html donde se esta trabajando
//onload evento que ocurre al cargar la pagina
//carga funcion que se crea para ejecutar las acciones al 
//momento de que se cargue la pagina
document.onload = carga();

function carga(){
	
//1ERO VALIDACIONES PARA LA CEDULA	
	document.getElementById('cedula').maxLength = 8;
	
	document.getElementById('cedula').onkeypress = function(e){
	
		er = /^[0-9]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('cedula').onfocus = function(){
	
		document.getElementById('scedula').innerText = "Solo numeros entre 7 y 8 caracteres ";
	};
	
	
	document.getElementById('cedula').onblur = function(){
		document.getElementById('scedula').innerText = "";
	};
	
	
	document.getElementById('cedula').onkeyup = function(){
	
		er = /^[0-9]{7,8}$/;
		r = validarkeyup(er,this,document.getElementById('scedula'),"Solo numeros entre 7 y 8 caracteres ");
		
	}
	
//FIN DE VALIDACIONES DE CEDULA
	
//2DO VALIDACIONES PARA CLAVE	
	document.getElementById('clave').maxLength = 12;
	
	document.getElementById('clave').onkeypress = function(e){
	
		er = /^[0-9A-Za-z-_.#]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('clave').onfocus = function(){
	
		document.getElementById('sclave').innerText = "Solo numeros, letras y - _ . o # entre 8 y 12 caracteres ";
	};
	
	
	document.getElementById('clave').onblur = function(){
		document.getElementById('sclave').innerText = "";
	};
	
	
	document.getElementById('clave').onkeyup = function(){
	
		er = /^[0-9A-Za-z-_.#]{8,12}$/;
		r = validarkeyup(er,this,document.getElementById('sclave'),"Solo numeros, letras y - _ . o # entre 8 y 12 caracteres ");
	}
	
 //FIN DE VALIDACIONES DE CLAVE
	
	
	
 //En esta parte añadiremos el codigo necesario para validar antes de enviar
 //al servidor, anteriormente validamos las entradas, pero es necesario
 //verificar antes de enviar que a pesar de que se le dijo al usuario que hacer
 //este no haya pulsado 

 document.getElementById('verificar').onclick = function(){
	
	    
		a = valida_datos(); 
		if(a!=''){
			$("#contenidodemodal").html(a);
			$("#modal1").modal("hide");
			$("#mostrarmodal").modal("show");
			setTimeout(function() {
					$("#mostrarmodal").modal("hide");
					$("#modal1").modal("show");
			},4000);
		}
		else{
			 
			 document.getElementById("f").submit();
		}
	
}	

}

function valida_datos(){ 
	var error = '';
	
	
	er = /^[0-9]{7,8}$/;
	r = validarkeyup(er,document.getElementById('cedula'),document.getElementById('scedula'),"Solo numeros entre 7 y 8 caracteres");
	if(r==0){ //r==0, indica que hubo error en la validacion de la etiqueta 
	   error = "ERROR <br/>La Cedula debe contener <br/>Solo numeros entre 7 y 8 caracteres";   
	   return error; //al colocar return aca, sale de la funcion y no ejecuta el resto	
	}
	
	er = /^[0-9A-Za-z-_.#]{8,12}$/;
	r = validarkeyup(er,document.getElementById('clave'),document.getElementById('sclave'),"Solo numeros, letras y - _ . o # entre 8 y 12 caracteres ");
	if(r==0){ //r==0, indica que hubo error en la validacion de la etiqueta 
	   error = "ERROR <br/>La clave debe contener <br/>Solo numeros, letras y - _ . o # entre 8 y 12 caracteres ";
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
	a = er.test(etiqueta.value);
	if(a){
		etiquetamensaje.innerText = "";
		return 1;
	}
	else{
		etiquetamensaje.innerText = mensaje;
		return 0;
	}
}