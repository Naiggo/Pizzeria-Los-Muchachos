function validarFormulario() {
    // Obtener los valores ingresados por el usuario y recortar
    // los posibles espacios en blanco al principio y al final.
    var nombre = document.getElementById("Nombre").value.trim();
    var apellido = document.getElementById("Apellido").value.trim();
    var email = document.getElementById("Email").value.trim();
    var telefono = document.getElementById("Telefono").value.trim();
    var mensaje = document.getElementById("Mensaje").value.trim();
    
    // Verificar si algún campo está en blanco
    if (nombre === "" || apellido === "" || email === "" || telefono === "" || mensaje === "") {
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    }
    
    // Verificar si el nombre contiene solo caracteres alfabéticos y espacios
    for (var i = 0; i < nombre.length; i++) {
        var charCode = nombre.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
        alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
        return false;
        }
    }
    
    // Verificar si el apellido contiene solo caracteres alfabéticos y espacios
    for (var i = 0; i < apellido.length; i++) {
        var charCode = apellido.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
        alert("El campo 'apellido' solo puede contener caracteres alfabéticos y espacios.");
        return false;
        }
    }
    
    // Elimina los espacios en blanco del número de teléfono
    telefono = telefono.replace(/\s/g, '');
    
    // Verifica que el número de teléfono solo contenga dígitos y tenga entre 8 y 10 caracteres
    var telefonoRegex = /^\d{8,10}$/;
    if (!telefonoRegex.test(telefono)){
        alert("El campo 'telefono' debe contener entre 8 y 10 caracteres, solo dígitos numéricos.");
        return false;
    }
    
    // Expresión regular para verificar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)){
        alert("La dirección de correo electrónico ingresada no es válida.");
        return false;
    }

    // Verifica que el mensaje contenga por lo menos 50 caracteres
    if (mensaje.length < 50){
        alert("El mensaje escrito es muy corto, minimo 50 caracteres.");
        return false;
    }
    
    // Si todas las validaciones son exitosas, enviar el formulario
    alert("Formulario enviado correctamente.");
    return true;
}