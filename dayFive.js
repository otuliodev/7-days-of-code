const frutas = [];
const verduras = [];
const laticinios = [];
const carnes = [];
const doces = [];
const outros = [];


while (true) {
    const resposta = prompt("você deseja adicionar uma comida na sua lista de compras? (sim/não)");
    if (resposta.toLowerCase() === "sim") {
        const comida = prompt("Qual comida você deseja adicionar?");
        const categoria = prompt("Qual a categoria dessa comida? (fruta, verdura, laticinio, carne, doce, outro)");

        switch (categoria.toLowerCase()) {
            case "fruta":
                frutas.push(comida);
                break;
            case "verdura":
                verduras.push(comida);
                break;
            case "laticinio":
                laticinios.push(comida);
                break;
            case "carne":
                carnes.push(comida);
                break;
            case "doce":
                doces.push(comida);
                break;
            case "outro":
                outros.push(comida);
                break;
            default:
                alert("Categoria inválida.");
                break;
        }
    } else if (resposta.toLowerCase() === "não") {
        alert(`Lista de Compras:\n\nFrutas: ${frutas.join(", ")}\nVerduras: ${verduras.join(", ")}\nLaticínios: ${laticinios.join(", ")}\nCarnes: ${carnes.join(", ")}\nDoces: ${doces.join(", ")}\nOutros: ${outros.join(", ")}`);
        break;
    }
}
    