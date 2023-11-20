//Mensaje emergente de bienvenida, que pregunta el nombre de usuario, para agregarlo ala variable "nombre"
const nombre = prompt ("Antes de iniciar, ingrese su nombre");
alert ("Hola " + nombre + ", bienvenido a ¨El Teknopata´");


//Mensaje emergente que autoriza a la venta, si elusuario es mayor de edad
let edad = prompt ("Y ahora, para continuar ingrese su edad")

if (edad >= 18 && edad <= 99){;
    alert ("Bienvenido " + nombre + ", usted esta autorizado/a para la compra de nuestros productos");
} else if (edad > 99){
    alert ("Edad invalida")
} else {
    alert ("lo siento " + nombre + ", debido a tu edad, no estas en condiciones de acceder a la compra de nuestros productos")
}


//Activacion del icono para modo nocturno
let toggle = document.getElementById("toggle");
let label = document.getElementById("iconoLuna");

toggle.addEventListener("change", (event) => {
let estado = event.target.checked;
document.body.classList.toggle("modoNoche");

if (estado == true) {
    label.innerHTML = '<i class="fa-solid fa-sun"></i>';
} else {
    label.innerHTML = '<i class="fa-solid fa-moon"></i>';
}
});


//Agregado de tag h2, citacion a direccion
const contacto = document.getElementById ("direccionJS");
const nuevoTitulo = document.createElement ("h2");
nuevoTitulo.textContent = "Venite a conocer nuestro local:";
contacto.appendChild (nuevoTitulo);


//Agregado tag p, direccion y horario de atencion
const direccion = document.createElement ("p");
direccion.textContent = "Av. Siempreviva 742, Springfield // Lu - Vie: 09:00 - 18:00 hs.";
contacto.appendChild (direccion);