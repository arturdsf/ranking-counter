const readline = require('readline');
// Interface do terminal, entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//A função abaixo coleta as informações dadas
rl.question("Digite seu nome: ", (nameHero) => {
    rl.question("Digite sua quantidade de xp: ", (xpInput) => {
            let xp = parseInt(xpInput);// converte a entrada do xp
            let ranking;//Variável feita pra armazenar o valor do ranking

        //Logo abaixo o valor do xp será convertido para o valor do rankng
        if (xp < 1000) {
            ranking = "ferro";
        } else if (xp >= 1000 && xp < 2000) {
            ranking = "Bronze";
        } else if (xp >= 3000 && xp < 4000) {
            ranking = "Prata";
        } else if (xp >= 5000 && xp < 6000) {
            ranking = "Ouro";
        } else if (xp >= 7000 && xp < 8000) {
            ranking = "Platina";
        } else if (xp >= 8000 && xp < 9000) {
            ranking = "Ascendente";
        } else if (xp >= 9000 && xp < 10000) {
            ranking = "Imortal";
        } else if (xp >= 10000) {
            ranking = "Radiante";
        }

        //Exibe no terminal a classificação do héroi
        console.log("O herói: " + nameHero);
        console.log("está no ranking: " + ranking);
        
        rl.close(); //Finaliza a interface de entrada
    });
});
