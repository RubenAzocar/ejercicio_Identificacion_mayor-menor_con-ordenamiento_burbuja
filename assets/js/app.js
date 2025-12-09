// ========================================
// DEFINIR CANTIDAD DE NÚMEROS A INGRESAR
// ========================================
// Se define una constante con el total de números que el usuario debe ingresar
// En este caso solicitaremos 5 números
const numerosLista = 5;
// Mostramos una alerta informativa al usuario
window.alert("Ingrese " + numerosLista + " números.");

// ========================================
// INICIALIZAR ARRAY VACÍO
// ========================================
// Declaramos un array (lista) vacío donde almacenaremos todos los números
// El array irá creciendo dinámicamente con cada número ingresado
var lista = [];

// ========================================
// SOLICITAR NÚMEROS CON CICLO FOR
// ========================================
// Usamos un ciclo for que se repite según la cantidad definida en numerosLista
// En cada iteración solicitamos un número y lo agregamos al array
for (var i = 0; i < numerosLista; i++) {
    // prompt() muestra una ventana para ingresar datos
    // parseFloat() convierte el texto ingresado a número decimal
    var num = parseFloat(prompt("Ingrese número " + (i) + ":"));
    // push() agrega el número al final del array lista
    lista.push(num);
}

// ========================================
// ORDENAMIENTO BURBUJA CON DO-WHILE
// ========================================
// Variable 'n' actúa como bandera para controlar si hubo intercambios
// n = 0 significa que no hubo intercambios (lista ordenada)
// n = 1 significa que hubo al menos un intercambio (necesita otra pasada)
var n;

// El ciclo do-while ejecuta el código al menos una vez
// y continúa mientras n sea diferente de 0 (mientras haya intercambios)
do {
    // Al inicio de cada pasada, asumimos que no habrá intercambios
    n = 0;

    // Ciclo for interno que recorre el array desde la posición 1
    // Compara cada elemento con el anterior (i-1)
    for (var i = 1; i < lista.length; i++) {
        // Si el elemento anterior es mayor que el actual
        // significa que están en orden incorrecto y debemos intercambiarlos
        if (lista[i - 1] > lista[i]) {
            // Guardamos temporalmente el valor del elemento anterior
            var loquesea = lista[i - 1];
            // El elemento anterior ahora toma el valor del actual (menor)
            lista[i - 1] = lista[i];
            // El elemento actual toma el valor anterior (mayor)
            lista[i] = loquesea;
            // Marcamos que hubo un intercambio cambiando n a 1
            n = 1;
        }
    }
    // El ciclo se repite mientras n != 0 (mientras hubo intercambios en la última pasada)
} while (n != 0);

// ========================================
// IDENTIFICACIÓN DE MAYOR Y MENOR
// ========================================
// Después del ordenamiento, el array está ordenado de menor a mayor
// El primer elemento [0] es el número menor
var menor = lista[0];
// El último elemento [lista.length - 1] es el número mayor
var mayor = lista[lista.length - 1];

// ========================================
// CONSTRUCCIÓN DEL MENSAJE DE RESULTADOS
// ========================================
// Creamos una cadena HTML con los resultados para mostrar en la página
// Usamos concatenación de strings con el operador +
var mensaje = "<p><strong>Número menor:</strong> " + menor + "</p>";
mensaje = mensaje + "<p><strong>Número mayor:</strong> " + mayor + "</p>";
// join(", ") convierte el array en una cadena separada por comas
mensaje = mensaje + "<p>Números ordenados: " + lista.join(", ") + "</p>";

// ========================================
// MOSTRAR RESULTADOS EN LA PÁGINA
// ========================================
// Buscamos el elemento HTML con id 'resultado' y le insertamos el mensaje HTML
// innerHTML reemplaza todo el contenido del elemento con el nuevo mensaje
document.getElementById('resultado').innerHTML = mensaje;

// ========================================
// MOSTRAR ALERTA CON RESULTADOS
// ========================================
// Mostramos una ventana emergente con los resultados principales
// \n crea un salto de línea en la alerta
alert("Menor: " + menor + "\nMayor: " + mayor);
