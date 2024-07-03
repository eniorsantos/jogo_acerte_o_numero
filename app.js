let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagenInicial()

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}

function exibirMensagenInicial(){
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha o numero de 1 a 10');
}
function gerarNumeroAleatorio(){
    let NumeroEscolho = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeNumeros = listaDeNumerosSorteados.length;

    if (quantidadeDeNumeros == numeroMaximo){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(NumeroEscolho)){
        return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(NumeroEscolho);
        return NumeroEscolho;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1
    exibirMensagenInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


function verificarChute() { 
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){

        exibirTextoNaTela('h1', 'Acertou!');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

        let mensagemTentativa = `Voce descobriu o numero secreto com o numero de ${tentativas} ${palavraTentativa}!`;

        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'o numero secreto e menor');
        }else {
            exibirTextoNaTela('p', 'o numero secreto é maior');
        }
        tentativas ++;
        limparCampo();
    }

   


}

