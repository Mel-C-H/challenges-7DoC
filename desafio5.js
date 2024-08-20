let listaDeCompra = {
    aseo: [],
    proteinas: [],
    cereales: [],
    frutas: [],
    lacteos: [],
    verduras: [],
    otros: []
};

let agregarAlimentos = true;

while (agregarAlimentos) {
    let pregunta = prompt("¿Desea agregar un producto? Responda 'Si' o 'No':").toLowerCase();

    if (pregunta === "si") {
        let itemAgregado = prompt("¿Qué producto desea agregar?");

        let categoria = prompt("¿En qué categoría se encuentra? Ej: aseo, proteinas, cereales, frutas, lacteos, verduras, otros.").toLowerCase();

        if (listaDeCompra.hasOwnProperty(categoria)) {
            listaDeCompra[categoria].push(itemAgregado);
        } else {
            alert("Categoría no válida. El producto se añadirá a 'otros'.");
            listaDeCompra.otros.push(itemAgregado);
        }

    } else if (pregunta === "no") {
        agregarAlimentos = false;
    } else {
        alert("Respuesta no válida. Por favor, responde 'Si' o 'No'.");
    }
}

alert("Lista de compras:\n" +
    "Aseo: " + (listaDeCompra.aseo.length > 0 ? listaDeCompra.aseo.join(", ") : "Ninguno") + "\n" +
    "Proteínas: " + (listaDeCompra.proteinas.length > 0 ? listaDeCompra.proteinas.join(", ") : "Ninguna") + "\n" +
    "Cereales: " + (listaDeCompra.cereales.length > 0 ? listaDeCompra.cereales.join(", ") : "Ninguno") + "\n" +
    "Frutas: " + (listaDeCompra.frutas.length > 0 ? listaDeCompra.frutas.join(", ") : "Ninguna") + "\n" +
    "Lácteos: " + (listaDeCompra.lacteos.length > 0 ? listaDeCompra.lacteos.join(", ") : "Ninguno") + "\n" +
    "Verduras: " + (listaDeCompra.verduras.length > 0 ? listaDeCompra.verduras.join(", ") : "Ninguna") + "\n" +
    "Otros: " + (listaDeCompra.otros.length > 0 ? listaDeCompra.otros.join(", ") : "Ninguno")
);
