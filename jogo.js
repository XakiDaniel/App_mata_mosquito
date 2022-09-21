
var altura  = 0;
var largura = 0;
var vidas = 1;
var tempo = 5;

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura);
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
    tempo-= 1;
    if(tempo < 0 ) {
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        window.location.href = 'vitoria.html'

    } else {
        document.getElementById('cronometro').innerHTML = tempo

    }
}, 1000)



function posicaoRandomica(){

    // remover mosquito anterior caso exita
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();
        
        // console.log('v' + vidas)
        
        if(vidas > 3) {
            window.location.href = 'fim_de_jogo.html';
        } else {
            document.getElementById('v' + vidas).src='img/coracao_vazio.png';
            vidas++;
        }
    }


    var posicaoX = Math.floor(Math.random() * largura) -90; // -90 ADICIONADO PARA NÃO ESTOURAR
    var posicaoY = Math.floor(Math.random() * altura) - 90; 

    // AJUSTANDO A PROBABILIDADE DE POSIÇÕES NEGATIVAS SENDO CRIADAS ALEATÓRIAS JÁ QUE SUBTRAIMOS O VALOR 90
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);
    
    // CRIAR O ELEMENTO HTML
    var mosquito = document.createElement('img');
    mosquito.src = 'img/mosquito.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function() {
        this.remove()
    }
    
    document.body.appendChild(mosquito);
    
    // console.log(ladoAleatorio())
//    console.log(tamanhoAleatorio());
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 2);
    console.log(classe);

    switch(classe) {
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
        
    }
}



