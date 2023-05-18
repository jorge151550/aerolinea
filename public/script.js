function validarFormulario(event) {
    event.preventDefault(); 

    var fechaPartida = new Date(document.getElementById("fechaPartida").value);
    var fechaRetorno = new Date(document.getElementById("fechaRetorno").value);
    var fechaActual = new Date();

    if (fechaPartida < fechaActual || fechaRetorno < fechaActual) {
        window.alert("Las fechas de partida y fecha de retorno no pueden ser inferior a la fecha actual.");
        return;
    }

    if (fechaPartida > fechaRetorno) {
        window.alert("La fecha de partida no puede ser posterior a la fecha de retorno.");
        return;
    }

    document.getElementById("mensajeError").style.display = "none";
 
}


  

  
