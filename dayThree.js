let area = prompt("Você quer seguir para a área de Front-End ou seguir para a área de Back-End? Responda com 1 para Front-End ou 2 para Back-End.");

switch (parseInt(area)) {
    case (1):
        prompt("Você quer aprender React ou Vue? Responda com 1 para React ou 2 para Vue.");
        break;
    case (2):
        prompt("Você quer aprender C# ou Java? Responda com 1 para C# ou 2 para Java.");
        break;
    default:
        alert("Opção inválida");
        break;
}

if (prompt("Você quer se especializar na área escolhida ou quer se tornar um desenvolvedor Fullstack? Responda com 1 para se especializar ou 2 para Fullstack.") == 1) {
    alert("Ótimo! Boa sorte na sua especialização.");
} else {
    alert("Legal! Ser um desenvolvedor Fullstack é uma ótima escolha.");
}

let tecnologias = [];

while (true) {
    let novaTec = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Se sim, qual? Se não, digite 'não'.");
    if (novaTec.toLowerCase() == "não") {
        break;
    } else {
        alert(novaTec + " é realmente uma ótima tecnologia!");
    }
    tecnologias.push(novaTec);
}