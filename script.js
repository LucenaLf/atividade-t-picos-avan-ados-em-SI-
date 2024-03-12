function verificarParOuImpar() {
    const numero = parseInt(document.getElementById("numeroInput").value);
    const resultadoCampo = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultadoCampo.value = "Por favor, insira um número válido.";
    } else if (numero % 2 === 0) {
        resultadoCampo.textContent = `O número ${numero} é par.`;
    } else {
        resultadoCampo.textContent = `O número ${numero} é ímpar.`;
    }
}
const input = document.querySelector("#input")
const result = document.querySelector("#result")
let array = [];

function EnviarNumero() {

    let value = input.value;

    if (value == "") return alert("Insira um número")

    array.push(value)
    input.value = ""

    array.sort((a, b) => a - b).reverse()

    result.textContent = "Ordem decrescente: " + array;
}

function calcularIMC() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const sexo = document.getElementById("sexo").value;
    const resultadoCampoIMC = document.getElementById("resultadoIMC");

    if (isNaN(altura) || isNaN(peso)) {
        resultadoCampo.textContent = "Por favor, insira valores válidos.";
    } else {
        const imc = peso / (altura * altura);

        let categoria = "";
        if (sexo === "feminino") {
            if (imc < 19.1) {
                categoria = "Abaixo do peso";
            } else if (imc >= 19.1 && imc <= 25.8) {
                categoria = "No peso normal";
            } else if (imc > 25.8 && imc <= 27.3) {
                categoria = "Marginalmente acima do peso";
            } else if (imc > 27.3 && imc <= 32.3) {
                categoria = "Acima do peso ideal";
            } else {
                categoria = "Obeso";
            }
        } else if (sexo === "masculino") {
            if (imc < 20.7) {
                categoria = "No peso normal";
            } else if (imc >= 20.7 && imc <= 26.4) {
                categoria = "No peso normal";
            } else if (imc > 26.4 && imc <= 27.8) {
                categoria = "Marginalmente acima do peso";
            } else if (imc > 27.8 && imc <= 31.1) {
                categoria = "Acima do peso ideal";
            } else {
                categoria = "Obeso";
            }
        }

        resultadoCampoIMC.textContent = `IMC: ${imc.toFixed(2)} (${categoria})`;
    }
}
function VerificarTriangulo() {

    let lado1 = parseFloat(document.getElementById("lado1").value)
    let lado2 = parseFloat(document.getElementById("lado2").value)
    let lado3 = parseFloat(document.getElementById("lado3").value)

    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
        triangulo.textContent = "Por favor, insira valores válidos.";
    } else if (lado1 === lado2 && lado1 === lado3) {
        triangulo.textContent = "O triângulo é equlátero"
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        triangulo.textContent = "O triângulo é isósceles"
    } else {
        triangulo.textContent = "O triângulo é escaleno"
    }

}