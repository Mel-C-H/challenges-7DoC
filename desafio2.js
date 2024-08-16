
idUsuario();

function idUsuario() {
alert ("Bienvenido");

const nombreUsuario = prompt ("Ingrese su nombre:").trim();

const edadUsuario = prompt ("Ingrese su edad:").trim();

const estudioUsuario = prompt ("¿Qué lenguaje de programación usas?").trim();

alert (`Hola ${nombreUsuario}, tienes ${edadUsuario} años y estas aprendiendo ${estudioUsuario}`);

const pregunta = prompt (`¿Te gusta estudiar ${estudioUsuario}? Responde con el número 1 para SÍ o 2 para NO.`);

    if (pregunta === "1") {
        alert ("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
    }

    if (pregunta === "2") {
        alert ("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
    }
}