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
    let pregunta = prompt("¿Deseas añadir un alimento a la lista de compras o eliminar uno? Responde 'añadir', 'eliminar' o 'no':").toLowerCase();

    if (pregunta === "añadir") {
        let itemAgregado = prompt("¿Qué producto deseas agregar?");
        let categoria = prompt("¿En qué categoría se encuentra? Ej: aseo, proteinas, cereales, frutas, lacteos, verduras, otros.").toLowerCase();

        if (listaDeCompra.hasOwnProperty(categoria)) {
            listaDeCompra[categoria].push(itemAgregado);
            alert(`${itemAgregado} ha sido añadido a la categoría ${categoria}.`);
        } else {
            alert("Categoría no válida. El producto se añadirá a 'otros'.");
            listaDeCompra.otros.push(itemAgregado);
        }

    } else if (pregunta === "eliminar") {

        let hayElementos = Object.values(listaDeCompra).some(categoria => categoria.length > 0);
        
        if (!hayElementos) {
            alert("La lista está vacía. No hay nada que eliminar.");
        } else {
            let categoriaEliminar = prompt("¿De qué categoría deseas eliminar un producto? Ej: aseo, proteinas, cereales, frutas, lacteos, verduras, otros.").toLowerCase();

            if (listaDeCompra.hasOwnProperty(categoriaEliminar) && listaDeCompra[categoriaEliminar].length > 0) {
                let itemEliminar = prompt(`Productos en la categoría ${categoriaEliminar}: ${listaDeCompra[categoriaEliminar].join(", ")}\n¿Cuál deseas eliminar?`);
                
                let index = listaDeCompra[categoriaEliminar].indexOf(itemEliminar);
                
                if (index !== -1) {
                    listaDeCompra[categoriaEliminar].splice(index, 1);
                    alert(`${itemEliminar} ha sido eliminado de la categoría ${categoriaEliminar}.`);
                } else {
                    alert("¡No fue posible encontrar el elemento en la lista!");
                }
            } else {
                alert("La categoría está vacía o no existe.");
            }
        }
        
    } else if (pregunta === "no") {
        agregarAlimentos = false;
    } else {
        alert("Respuesta no válida. Por favor, responde 'añadir', 'eliminar' o 'no'.");
    }
}

alert("Lista de compras final:\n" +
    "Aseo: " + (listaDeCompra.aseo.length > 0 ? listaDeCompra.aseo.join(", ") : "Ninguno") + "\n" +
    "Proteínas: " + (listaDeCompra.proteinas.length > 0 ? listaDeCompra.proteinas.join(", ") : "Ninguno") + "\n" +
    "Cereales: " + (listaDeCompra.cereales.length > 0 ? listaDeCompra.cereales.join(", ") : "Ninguno") + "\n" +
    "Frutas: " + (listaDeCompra.frutas.length > 0 ? listaDeCompra.frutas.join(", ") : "Ninguno") + "\n" +
    "Lácteos: " + (listaDeCompra.lacteos.length > 0 ? listaDeCompra.lacteos.join(", ") : "Ninguno") + "\n" +
    "Verduras: " + (listaDeCompra.verduras.length > 0 ? listaDeCompra.verduras.join(", ") : "Ninguno") + "\n" +
    "Otros: " + (listaDeCompra.otros.length > 0 ? listaDeCompra.otros.join(", ") : "Ninguno")
);
