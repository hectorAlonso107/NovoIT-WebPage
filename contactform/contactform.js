function Solo_Texto(e) {
    var code;
    if (!e) var e = window.event;
    if (e.keyCode) code = e.keyCode;
    else if (e.which) code = e.which;
    var character = String.fromCharCode(code);
    var AllowRegex = /^[\ba-zA-Z\s-áéíóú]$/;
    if (AllowRegex.test(character)) return true;
    return false;
}

var n = document.getElementById("numero").value;
if (n.length == 0) {
    console.log(0);

} else {
    console.log(n);
}



function solo_numeros(e) {
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key);
    numeros = "0123456789";
    especiales = "8-37-38";
    teclado_especial = false;
    for (var i in especiales) {
        if (key == especiales[i]) {
            teclado_especial = true;
        }
    }
    if (numeros.indexOf(teclado) == -1 && !teclado_especial) {
        return false;
    }
}

function validar_asunto() {
    if (document.getElementById("asunto").value.trim().length == 0) {
        alert("Debes ingresar un Asunto antes de poder enviar el mensaje");
        return false;
    }

}

function caracteres_rut(e) {
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key);
    rut = "0123456789-k";
    especiales = "8-37-38";
    teclado_especial = false;
    for (var i in especiales) {
        if (key == especiales[i]) {
            teclado_especial = true;
        }
    }
    if (rut.indexOf(teclado) == -1 && !teclado_especial) {
        return false;
    }
}

function validar_contacto() {
    var alerta = "";
    if (document.getElementById("nombre").value.trim().length < 3) {
        alerta += "-Debes ingresar un nombre válido\n";
        document.getElementById("nombre").value = "";
    }
    if (document.getElementById("email").value.trim().length < 3) {
        alerta += "-Debes ingresar un correo electrónico válido\n";
        document.getElementById("email").value = "";
    }
    if (document.getElementById("numero").value.trim().length != 9) {
        alerta += "-Debes ingresar un número telefónico válido\n";
        document.getElementById("numero").value = "";
    }
    if (document.getElementById("asunto").value.trim().length == 0) {
        alerta += "-Debe ingresar un asunto de mensaje válido\n";
        document.getElementById("asunto").value = "";
    }
    if (document.getElementById("mensaje").value.trim().length < 8) {
        alerta += "-Debes ingresar un mensaje válido\n";
        document.getElementById("mensaje").value = "";
    }
    alert(alerta);
    return false;

}