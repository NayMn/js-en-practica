const formulario = document.querySelector("#formulario");

const inputNombre = document.querySelector("#nombre");
const errorNombre = document.querySelector(".errorNombre");

const inputAsunto = document.querySelector("#asunto");
const errorAsunto = document.querySelector(".errorAsunto");

const inputMensaje = document.querySelector("#mensaje");
const errorMensaje = document.querySelector(".errorMensaje");

const resultado = document.querySelector(".resultado");


formulario.addEventListener("submit", (event) => {
    console.log("diste submit");
    event.preventDefault();

    const regex = /[a-zA-Z]/mi;

    if (regex.test(inputNombre.value)) {
        console.log("caracteres permitidos");
        errorNombre.textContent = "";

    } else {
        console.log("no se permiten esos caracteres");
        errorNombre.textContent = "El nombre es requerido";
        errorNombre.style.color = "red";
    }

    if (regex.test(inputAsunto.value)) {
        console.log("caracteres permitidos");
        errorAsunto.textContent = "";

    } else {
        console.log("no se permiten esos caracteres");
        errorAsunto.textContent = "El asunto es requerido";
        errorAsunto.style.color = "red";
    }

    if (regex.test(inputMensaje.value)) {
        console.log("caracteres permitidos");
        errorMensaje.textContent = "";

    } else {
        console.log("no se permiten esos caracteres");
        errorMensaje.textContent = "El mensaje es requerido";
        errorMensaje.style.color = "red";
    }

    if (errorNombre.textContent === "" && errorAsunto.textContent === "" && errorMensaje.textContent === "") {
        resultado.textContent = "Mensaje enviado correctamente";
        resultado.style.color = "green";

    } else {
        console.log("formulario incorrecto");

    }

})


