// Solicitar los tres números
var num1 = parseFloat(prompt("Ingrese el primer número:"));
var num2 = parseFloat(prompt("Ingrese el segundo número:"));
var num3 = parseFloat(prompt("Ingrese el tercer número:"));

// Validar que sean números
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Error: Debe ingresar valores numéricos válidos.");
    document.getElementById('resultado').innerHTML = "<p style='color: red;'>Error: Ingrese números válidos.</p>";
} else {
    // Ordenamiento burbuja con do-while
    var temp;
    var intercambio;

    do {
        intercambio = false;

        if (num1 > num2) {
            temp = num1;
            num1 = num2;
            num2 = temp;
            intercambio = true;
        }

        if (num2 > num3) {
            temp = num2;
            num2 = num3;
            num3 = temp;
            intercambio = true;
        }

    } while (intercambio);

    // Ahora num1 es el menor y num3 es el mayor
    var menor = num1;
    var mayor = num3;

    // Mostrar resultados
    var mensaje = "<p><strong>Número menor:</strong> " + menor + "</p>";
    mensaje = mensaje + "<p><strong>Número mayor:</strong> " + mayor + "</p>";
    mensaje = mensaje + "<p>Números ordenados: " + num1 + ", " + num2 + ", " + num3 + "</p>";

    document.getElementById('resultado').innerHTML = mensaje;

    alert("Menor: " + menor + "\nMayor: " + mayor);
}
