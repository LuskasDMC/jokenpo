
 alert("Olá! Para começar o jogo, clique em OK.");//Mensagem para o usuário
    var escolhaUsuario2 = prompt("Você quer pedra, papel ou tesoura?");//Coleta de dados
    // Variável para receber um número randômico para uma jogada aleátoria pro parte do PC
    var escolhaPC2 = Math.random();
    //Atribuição para a jogada do PC
    if (escolhaPC2 < 0.34) {
        escolhaPC2 = "pedra";
    } else if (escolhaPC2 <= 0.67) {
        escolhaPC2 = "papel";
    } else {
        escolhaPC2 = "tesoura";
    }
    //Mensagem para o usuário
    document.getElementById("escolhaUsuario1").innerHTML = "Você escolheu: " + escolhaUsuario2;
    document.getElementById("escolhaPC1").innerHTML = "O Computador escolheu: " + escolhaPC2;

    //Comparação de escolhas para o resultado final
    var compare = function (choice1, choice2) {
        if (choice1 === choice2)
            return ("O resultado é um empate!");
        else if (choice1 === "pedra") {
            if (choice2 === "tesoura")
                return ("pedra vence");
            else {
                return ("papel vence");
            }
        }
        else if (choice1 === "papel") {
            if (choice2 === "pedra")
                return "papel vence";
            else {
                return "tesoura vence";
            }
        }
        else if (choice1 === "tesoura") {
            if (choice2 === "pedra")
                return "pedra vence";
            else {
                return "tesoura vence";
            }
        }
    };
    //Resultado Final
    document.getElementById("resultado").innerHTML = "Resultado: " + compare(escolhaUsuario2, escolhaPC2);
