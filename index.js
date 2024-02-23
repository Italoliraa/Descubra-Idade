
var frases = {
    crianca: 'Você é uma "Criança". Aproveite para pedir doces, porque quando você crescer, as únicas coisas que ganhará são contas para pagar.',
    jovem: 'Você é "Jovem". Vai com calma, não precisa de pressa. A derrota já é certa!!',
    adulto: 'Você é "Adulto". Está na hora de sair da casa da mamãe e do papai e ser pobre por conta própria.',
    idoso: 'Você é "Idoso". Infelizmente o fim se aproxima!'
};

function gerarQuadrado() {
    var idade = parseInt(document.getElementById("idade").value);
    var quadrado = document.getElementById("quadrado");

    quadrado.innerHTML = ''; 

    if (idade <= 14) {
        quadrado.innerHTML = '<p>' + frases.crianca + '</p>';
    } else if (idade <= 29) {
        quadrado.innerHTML = '<p>' + frases.jovem + '</p>';
    } else if (idade <= 59) {
        quadrado.innerHTML = '<p>' + frases.adulto + '</p>';
    } else {
        quadrado.innerHTML = '<p>' + frases.idoso + '</p>';
    }
}
