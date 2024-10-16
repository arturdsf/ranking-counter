const readline = require('readline');

// Interface do terminal, entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// A função abaixo coleta as informações dadas
rl.question("Digite seu nome: ", (nameHero) => {
    rl.question("Digite sua quantidade de xp: ", (xpInput) => {
        let xp = parseInt(xpInput); // Converte a entrada do XP
        let ranking; // Variável para armazenar o valor do ranking

        // O valor do XP será convertido para o valor do ranking
        if (xp < 1000) {
            ranking = "ferro";
        } else if (xp >= 1000 && xp < 2000) {
            ranking = "Bronze";
        } else if (xp >= 2000 && xp < 3000) { // Adicionada a categoria Prata para 2000-2999
            ranking = "Prata";
        } else if (xp >= 3000 && xp < 5000) { // Alterado para 3000-4999
            ranking = "Ouro";
        } else if (xp >= 5000 && xp < 7000) { // Alterado para 5000-6999
            ranking = "Platina";
        } else if (xp >= 7000 && xp < 9000) {
            ranking = "Ascendente";
        } else if (xp >= 9000 && xp < 10000) {
            ranking = "Imortal";
        } else if (xp >= 10000) {
            ranking = "Radiante";
        }

        // Exibe no terminal a classificação do herói
        console.log("O herói: " + nameHero);
        console.log("está no ranking: " + ranking);
        
        rl.close(); // Finaliza a interface de entrada
    });
});
