const btnSumar = document.querySelector("#btn-sumar");
const btnRestar = document.querySelector("#btn-restar");
const resultado = document.querySelector(".resultado");




btnSumar.addEventListener("click", function () {
    console.log("click en sumar");

    const valor1 = parseInt(document.querySelector("#valor1").value);
    const valor2 = parseInt(document.querySelector("#valor2").value);

    const sumar = valor1 + valor2;
    resultado.textContent = sumar;

    if (sumar < 0) {
        resultado.textContent = 0;
    }
});


btnRestar.addEventListener("click", function () {
    console.log("click en restar");

    const valor1 = parseInt(document.querySelector("#valor1").value);
    const valor2 = parseInt(document.querySelector("#valor2").value);

    const restar = valor1 - valor2;
    resultado.textContent = restar;

    if (restar < 0) {
        resultado.textContent = 0;
    }
});




