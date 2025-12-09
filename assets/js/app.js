// Definir cantidad de números a solicitar
const numerosLista = 3;
alert("Ingrese " + numerosLista + " números.");

// Inicializar array vacío
let lista = [];

// Solicitar números al usuario y guardarlos en el array
for (let i = 0; i < numerosLista; i++) {
    let num = Number.parseFloat(prompt("Ingrese número " + (i) + ":"));
    lista.push(num);
}

// Ordenamiento burbuja con do-while
let n;

do {
    n = 0;
    
    for (let j = 1; j < lista.length; j++) {
        if (lista[j - 1] > lista[j]) {
            let loquesea = lista[j - 1];
            lista[j - 1] = lista[j];
            lista[j] = loquesea;
            n = 1;
        }
    }
} while (n != 0);

// Identificar el menor y el mayor
const menor = lista[0];
const mayor = lista.at(-1);

// Construir mensaje HTML con los resultados
let mensaje = "<p><strong>Número menor:</strong> " + menor + "</p>";
mensaje = mensaje + "<p><strong>Número mayor:</strong> " + mayor + "</p>";
mensaje = mensaje + "<p>Números ordenados: " + lista.join(", ") + "</p>";

// Mostrar resultados en la página
document.getElementById('resultado').innerHTML = mensaje;

// Mostrar alerta con resultados
alert("Menor: " + menor + "\nMayor: " + mayor);
