let pcNumero = Math.floor (Math.random () * 10 +1);
let intentosRestantes = 3;
let acierto = false;

while (intentosRestantes > 0 && !acierto ) {
    let intentos = parseInt(prompt ("Selecciona un número entre 1 y 10:"));

    if (intentos === pcNumero) {
        
        alert (`Acertaste. El número secreto es ${pcNumero}`);
        acierto = true;
    
    } else {
        intentosRestantes --;

        if (intentosRestantes > 0) {
            alert (`El número ${intentos} no es el correcto. Te quedan ${intentosRestantes} intentos.`);
        } else {
            alert (`Lo siento, no te quedan más intentos. El número secreto era ${pcNumero}.`);
        }
    } 
}
