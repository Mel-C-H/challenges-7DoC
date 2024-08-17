let inicio = "";

while (inicio.toLowerCase() !== "front-end" && inicio.toLowerCase() !== "back-end") {
    inicio = prompt("¿Quieres seguir hacia el área de Front-End o Back-End?");

    if (inicio.toLowerCase() === "front-end") {
        let eleccionFront = "";

        while (eleccionFront.toLowerCase() !== "react" && eleccionFront.toLowerCase() !== "vue") {
            eleccionFront = prompt("¿Quieres aprender React o Vue?");

            if (eleccionFront.toLowerCase() === "react") {
                alert("¡Genial! React es una librería poderosa para construir interfaces de usuario dinámicas.");

            } else if (eleccionFront.toLowerCase() === "vue") {
                alert("¡Excelente elección! Vue es conocido por su simplicidad y flexibilidad.");
            } else {
                alert("Opción no válida. Por favor, elige entre React o Vue.");
            }
        }

    } else if (inicio.toLowerCase() === "back-end") {
        let eleccionBack = "";

        while (eleccionBack.toLowerCase() !== "c#" && eleccionBack.toLowerCase() !== "java") {
            eleccionBack = prompt("¿Quieres aprender C# o Java?");

            if (eleccionBack.toLowerCase() === "c#") {
                alert("¡Fantástico! C# es un lenguaje versátil, ampliamente utilizado en aplicaciones empresariales.");
            } else if (eleccionBack.toLowerCase() === "java") {
                alert("¡Java es una excelente elección! Es un lenguaje robusto y multiplataforma.");
            } else {
                alert("Opción no válida. Por favor, elige entre C# o Java.");
            }
        }
    } else {
        alert("Opción no válida. Por favor, elige entre Front-End o Back-End.");
    }
}

let estudio = "";

while (estudio !== "1" && estudio !== "2") {
    estudio = prompt("Escribe 1 si quieres seguir especializándote en el área elegida o 2 para desarrollarte y convertirte en Fullstack.");

    if (estudio === "1") {
        alert("¡Perfecto! La especialización te permitirá dominar profundamente tu área de elección.");

    } else if (estudio === "2") {
        alert("¡Increíble! Convertirse en Fullstack te permitirá ser versátil y manejar tanto el Front-End como el Back-End.");

    } else {
        alert("Opción no válida. Por favor, elige entre especializarme o fullstack.");
    }
}

let tecnologias = "ok";
let elecciones = [];  // Mover fuera del bucle while para almacenar todas las elecciones

while (tecnologias.toLowerCase() === "ok") {

    for (let i = 0; tecnologias.toLowerCase() === "ok"; i++) {
        let eleccion = prompt("¿Hay alguna otra tecnología que te gustaría aprender?");
        elecciones.push(eleccion);

        alert(`¡Interesante elección! Aprender ${eleccion} puede abrirte muchas oportunidades en el desarrollo.`);

        tecnologias = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Responde 'ok' para continuar o cualquier otra cosa para terminar.");
    }

    if (elecciones.length > 0) {
        alert(`Has elegido aprender las siguientes tecnologías: ${elecciones.join(", ")}`);

    } else {
        alert("No has elegido ninguna tecnología adicional.");
    }
}

alert("¡Gracias por jugar! Sigue aprendiendo y explorando nuevas tecnologías.");
