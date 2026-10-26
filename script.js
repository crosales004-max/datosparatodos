/*---Saludo---*/
console.log("Bienvenido a Datos para Todos");

const numero = document.getElementById("numero");
const btnContador = document.getElementById("btn-contador");
let contador = 0;

btnContador.addEventListener("click", () =>{
    contador++;
    numero.textContent = contador;
});
