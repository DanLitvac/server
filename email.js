const form = document.querySelector("form");
const boton = document.getElementById("botonEnviar");
console.log("Script Enlazado 😈");

const email = document.getElementById("email");
const emailError = document.getElementById("errorEmail");
const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function comprobarEmail() {
  if (patronEmail.test(email.value)) {
    email.classList.remove("is-danger");
    email.classList.add("is-success");
    emailError.textContent = "";
    return true;
  } else {
    email.classList.add("is-danger");
    emailError.textContent =
      "Porfavor, introduce un correo electrónico correcto.";
    return false;
  }
}

const patronTelefono = /^(\+34|0034|34|\+34 )?[6789]\d{8}$/;
const telefono = document.getElementById("telefono");
const telefonoError = document.getElementById("telefonoError");
function comprobarTelefono() {
  if (patronTelefono.test(telefono.value)) {
    telefono.classList.remove("is-danger");
    telefono.classList.add("is-success");
    telefonoError.textContent = "";
    return true;
  } else {
    telefono.classList.add("is-danger");
    telefonoError.textContent =
      "Porfavor, introduce un número de teléfono correcto.";
    return false;
  }
}

const patronCP = /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
const cp = document.getElementById("cp");
const cpError = document.getElementById("cpError");
function comprobarCP() {
  if (patronCP.test(cp.value)) {
    cp.classList.remove("is-danger");
    cp.classList.add("is-success");
    cpError.textContent = "";
    return true;
  } else {
    cp.classList.add("is-danger");
    cpError.textContent = "Porfavor, introduce un código postal correcto.";
    return false;
  }
}

const patronDNI = /^\d{8}[A-Z]$/;
const dni = document.getElementById("dni");
const dniError = document.getElementById("dniError");

function comprobarDNI() {
  if (patronDNI.test(dni.value)) {
    const numero = dni.value.substr(0, dni.value.length - 1);
    const letra = dni.value.substr(dni.value.length - 1, 1);
    const letras = "TRWAGMYFPDXBNJZSQVHLCKET";
    const index = numero % 23;
    if (letra.toUpperCase() === letras.charAt(index)) {
      dni.classList.remove("is-danger");
      dni.classList.add("is-success");
      dniError.textContent = "";
      return true;
    } else {
      dni.classList.add("is-danger");
      dniError.textContent = "Por favor, introduce un número de DNI real.";
      return false;
    }
  } else {
    dni.classList.add("is-danger");
    dniError.textContent = "Por favor, introduce un número de DNI válido.";
    return false;
  }
}

function validarTerminos() {
  const checkbox = document.getElementById("terminos");
  if (checkbox.checked) {
    return true;
  } else {
    alert("Debe aceptar los términos y condiciones para continuar.");
    return false;
  }
}



/*Asier*/
//Con dos funciones impido o permito que se visualize los elementos que contengan la clase .ocultar 
//depiendo de si han clickado un radio button diferenciados gracias a su id.
const radioIngles = document.getElementById("ingles");
radioIngles.addEventListener("click", function(){
    var niveles = document.getElementsByClassName("ocultar");
    Array.from(niveles).forEach(element =>{
        element.style.display = "list-item";
   })
});

const radioFrances = document.getElementById("frances");
radioFrances.addEventListener("click", function(){
    var niveles = document.getElementsByClassName("ocultar");
    Array.from(niveles).forEach(element =>{
        element.style.display = "none";
    })
});






// Función para validar el formulario SCRIPT DISTINTO A VALIDACIONES
const success = document.getElementById("success");
const error = document.getElementById("error");
function validarFormulario() {
  if (!comprobarEmail()) {
    return false;
  }

  if (!comprobarCP()) {
    return false;
  }

  if (!comprobarDNI()) {
    return false;
  }

  if (!comprobarTelefono()) {
    return false;
  }
  return true;
}
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que se envíe el formulario automáticamente
  if (validarFormulario()) {
    success.classList.remove("is-hidden");
    error.classList.add("is-hidden");
    //form.submit();
  } else {
    success.classList.add("is-hidden");
    error.classList.remove("is-hidden");
  }
});













//Dan**********************************
var nombreInput = document.getElementById('nombre');

function validarNombre() {
  var nombre = nombreInput.value.trim();
  var palabras = nombre.split(' ');
  if (palabras.length === 2 && palabras[0].length >= 3 && palabras[1].length >= 4) {
    return true;
  } else {
    return false;
  }
}

const nombreError = document.getElementById("nombreError")
nombreInput.addEventListener('input', function() {
  if (!validarNombre()) {
    nombreInput.focus();
    nombreError.textContent="El nombre debe contener dos palabras separadas por un espacio. La primera palabra debe tener al menos 3 letras y la segunda al menos 4 letras."
    nombreInput.classList.add('is-danger')
  }else{
    nombreError.textContent=""
    nombreInput.classList.remove('is-danger')
    nombreInput.classList.add('is-success')
  }
});
//****************************************/


