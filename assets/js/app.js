let numeros = [];

console.log("=== Inicio del programa ===");
console.log("Solicitando 3 números al usuario...");

let num1 = parseFloat(prompt("Ingrese el primer número:"));
numeros.push(num1);

let num2 = parseFloat(prompt("Ingrese el segundo número:"));
numeros.push(num2);

let num3 = parseFloat(prompt("Ingrese el tercer número:"));
numeros.push(num3);

console.log("Números ingresados:", numeros);

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {

    alert("⚠️ Error: Debe ingresar valores numéricos válidos.");

    document.getElementById('resultado').innerHTML =
        "<p style='color: red; text-align: center;'>" +
            "<strong>⚠️ Error:</strong> Se detectaron valores no numéricos. " +
            "Por favor, recarga la página e ingresa números válidos." +
        "</p>";

} else {

    let numerosOriginales = [];

    for (let i = 0; i < numeros.length; i++) {
        numerosOriginales.push(numeros[i]);
    }

    console.log("Iniciando ordenamiento burbuja...");

    let intercambio;
    let iteracion = 0;

    do {
        intercambio = false;
        iteracion++;

        console.log("Iteración " + iteracion + ":", numeros);

        for (let i = 0; i < numeros.length - 1; i++) {

            if (numeros[i] > numeros[i + 1]) {

                console.log("  Intercambiando " + numeros[i] + " con " + numeros[i + 1]);

                let temp = numeros[i];
                numeros[i] = numeros[i + 1];
                numeros[i + 1] = temp;

                intercambio = true;
            }
        }

    } while (intercambio);

    console.log("Ordenamiento completado:", numeros);

    let menor = numeros[0];
    let mayor = numeros[numeros.length - 1];

    console.log("Menor: " + menor + ", Mayor: " + mayor);

    if (menor === mayor) {

        console.log("Todos los números son iguales");

        let mensaje =
            "<p><strong>📊 Números ingresados:</strong> " + numerosOriginales.join(", ") + "</p>" +
            "<p><strong>🔄 Array ordenado:</strong> " + numeros.join(", ") + "</p>" +
            "<hr style='border: none; border-top: 1px solid #ddd; margin: 15px 0;'>" +
            "<p style='text-align: center; font-size: 18px; color: #667eea;'>" +
                "<strong>✨ Los tres números ingresados son idénticos: " + menor + "</strong>" +
            "</p>" +
            "<p style='text-align: center; color: #666;'>" +
                "No hay un mayor ni un menor, todos tienen el mismo valor." +
            "</p>";

        document.getElementById('resultado').innerHTML = mensaje;

        alert("✨ Los tres números son iguales: " + menor);

    } else {

        console.log("Los números son diferentes");

        let mensaje =
            "<p><strong>📊 Números ingresados:</strong> " + numerosOriginales.join(", ") + "</p>" +
            "<p><strong>🔄 Array ordenado:</strong> " + numeros.join(", ") + "</p>" +
            "<hr style='border: none; border-top: 1px solid #ddd; margin: 15px 0;'>" +
            "<p><strong>🔽 Número menor:</strong> <span style='color: #dc3545; font-size: 20px;'>" + menor + "</span></p>" +
            "<p><strong>🔼 Número mayor:</strong> <span style='color: #28a745; font-size: 20px;'>" + mayor + "</span></p>" +
            "<hr style='border: none; border-top: 1px solid #ddd; margin: 15px 0;'>" +
            "<p style='font-size: 14px; color: #666;'>" +
                "<em>✅ Ordenamiento realizado con el algoritmo de burbuja usando ciclo do-while</em>" +
            "</p>";

        document.getElementById('resultado').innerHTML = mensaje;

        alert("📊 Resultados:\n\n🔽 Menor: " + menor + "\n🔼 Mayor: " + mayor + "\n\nArray ordenado: [" + numeros.join(", ") + "]");
    }

}

console.log("=== Fin del programa ===");
