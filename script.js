        // <h2>Eu amo seus <span>olhos.</span></h2>
        // <h2>Eu amo seu <span>cabelo.</span></h2>
        // <h2>Eu amo seu <span>rosto.</span></h2>
        // <h2>Eu amo sua <span>voz.</span></h2>
        // <h2>Eu amo sua <span>risada.</span></h2>
        // <h2>Eu amo seu <span>corpo.</span></h2>
        // <h2>Eu te amo</h2>

let contador = 0;
function mudarTexto() {

    let textos = ["<h2>Eu amo seus <span>olhos.</span></h2>", "<h2>Eu amo seu <span>cabelo.</span></h2>", "<h2>Eu amo seu <span>rosto.</span></h2>", "<h2>Eu amo sua <span>voz.</span></h2>", "<h2>Eu amo sua <span>risada.</span></h2>", "<h2><span>Eu te amo muito, Lu!</span></h2>"];
    let frase = document.getElementById("texto-muda");

    frase.innerHTML = textos[contador];

    if(contador === textos.length - 1) {
        contador = 0;
    } else {
        contador++;
    }
}