function calcularTotal(cantidad, categoria) {
    let estudiante = 0.2;
    let trainee = 0.5;
    let junior = 0.85;
    let precioEntrada = 200;
    let total = 0;

    if (categoria === "estudiante") {
        total = cantidad * estudiante * precioEntrada;
    } else if (categoria === "trainee") {
        total = cantidad * trainee * precioEntrada;
    } else {
        total = cantidad * junior * precioEntrada;
    }

    return total;
}

let formulario = document.getElementById("calcularTotal");
let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");
let divResumen = document.querySelector(".total");

formulario.addEventListener("reset", () => {
    divResumen.textContent = "Total a pagar $";
});

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    divResumen.textContent = "Total a pagar $ " + calcularTotal(cantidad.value, categoria.value);
});