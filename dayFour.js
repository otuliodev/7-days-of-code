let numSortido = 7;
let tentativa = 3;



while (tentativa > 0) {
    let chute = parseInt(prompt("Vamos jogar um jogo! Você tem 3 tentativas para adivinhar o número que estou pensando, entre 1 e 10."));

    if (chute === numSortido) {
        alert("Parabéns! Você adivinhou o número!");
        break;
    } else{
        alert("Numero errado! Você ainda tem " + (tentativa - 1) + " tentativas.");
    }
    tentativa--;
}