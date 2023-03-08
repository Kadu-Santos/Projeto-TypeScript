"use strict";
/*
 * @Carlos Eduardo dos Santos
 * Jogo Forca
 */
//Lista com lista de temas, no qual cada tema tem o índice 0 como a dica.
let listaTemas = [
    ['animal',
        'cachorro',
        'gato',
        'leão',
        'elefante',
        'girafa',
        'tigre',
        'cobra',
        'macaco',
        'panda',
        'urso',
    ],
    ['cor',
        'vermelho',
        'azul',
        'amarelo',
        'verde',
        'roxo',
        'laranja',
        'marrom',
        'preto',
        'branco',
        'cinza',
    ],
    ['países',
        'brasil',
        'argentina',
        'canadá',
        'china',
        'espanha',
        'itália',
        'méxico',
        'alemanha',
        'portugal',
        'frança',
        'inglaterra',
        'estados unidos',
        'rússia',
        'japão',
        'índia',
        'austrália',
    ],
    ['comidas',
        'pizza',
        'hambúrguer',
        'macarrão',
        'lasanha',
        'sushi',
        'taco',
        'salada',
        'espaguete',
        'churrasco',
        'frango',
        'estrogonofe',
        'strogonoff',
        'risoto',
        'feijoada',
        'churrasco',
    ],
    ['esportes',
        'futebol',
        'basquete',
        'vôlei',
        'tênis',
        'natação',
        'boxe',
        'atletismo',
        'ginástica',
        'ciclismo',
        'surf',
        'skate',
        'patinação',
        'judô',
        'jiu-jitsu',
        'karatê',
    ],
    ['profissões',
        'médico',
        'advogado',
        'professor',
        'engenheiro',
        'programador',
        'cozinheiro',
        'policial',
        'bombeiro',
        'escritor',
        'jornalista',
        'dentista',
        'psicólogo',
        'psiquiatra',
        'arquiteto',
        'músico',
        'ator',
        'escultor',
        'pintor',
        'dançarino',
        'cantor',
    ],
    ['filmes',
        'star wars',
        'o senhor dos anéis',
        'harry potter',
        'velozes e furiosos',
        'jurassic park',
        'titanic',
        'tropa de elite',
        'batman',
        'homem aranha',
        'vingadores',
        'pantera negra',
        'mulher maravilha',
        'jumanji',
        'matrix',
        'kill bill',
        '007',
        'piratas do caribe',
        'avatar',
        'matrix',
    ],
    ['capitais do mundo',
        'lisboa',
        'paris',
        'londres',
        'roma',
        'madrid',
        'moscou',
        'pequim',
        'tóquio',
        'nairóbi',
        'nairobi',
        'nova deli',
        'mexico',
        'brasília',
        'washington',
        'moscou',
    ],
    ['marcas famosas',
        'nike',
        'adidas',
        'apple',
        'google',
        'amazon',
        'facebook',
        'microsoft',
        'cocacola',
        'pepsi',
        'redbull',
    ],
    ['instrumentos musicais',
        'guitarra',
        'bateria',
        'piano',
        'violão',
        'baixo',
        'violino',
        'flauta',
        'trompete',
        'saxofone',
        'clarinete',
    ],
];
//Atualiza imagens da forca
function atualizaImagem(tentativaRestante) {
    let caminho = `img/0${tentativaRestante}.png`;
    let img = document.getElementById('img_forca');
    if (img != null) {
        img.setAttribute('src', caminho);
    }
}
//Recarrega Página
function recarregarAPagina() {
    window.location.reload();
}
//Sortea um tema
function sorteaTema(listaTemas) {
    //Sorteia o Tema
    let n = Math.floor(Math.random() * listaTemas.length);
    return listaTemas[n];
}
//Sortea a palavra dentro do tema
function sorteaPalavra(tema) {
    let n = (Math.floor(Math.random() * tema.length));
    //Trata caso n seja igual a 0, pois o index 0 é a dica.
    if (n == 0)
        n++;
    //Retorna Palavra
    return tema[n];
}
//Função para exibir a dica
function exibeDica(tema) {
    //Dica Tema
    let dica = document.querySelector('#dicaTema');
    if (dica != null) {
        dica.textContent = tema[0];
    }
}
//Transforma a palavra em uma lista
function dividePalavra(palavra) {
    return palavra.split('');
}
//Subtrai uma tentaiva
function subTentativa() {
    const tenta = document.getElementById('tentativa');
    if (tenta != null) {
        //Number converte a string para numero
        let novaTentativa = Number(tenta.textContent);
        novaTentativa = novaTentativa - 1;
        //toString() converte o numero em uma string.
        tenta.textContent = novaTentativa.toString();
    }
}
//Define o numero de tentivas
function defTentativa(numeroTentativas) {
    let elemento = document.getElementById('tentativa');
    if (elemento != null) {
        elemento.textContent = numeroTentativas.toString();
    }
}
;
//função para desabilitar botões clicados
function disbBoton(botaoLetra, cor) {
    /// "as" é usado para converter um tipo de dado em outro tipo. 
    //É semelhante a um "cast"
    const element = document.getElementById(botaoLetra);
    if (element != null) {
        element.style.color = "white";
        element.style.backgroundColor = cor;
        element.disabled = true;
        element.style.border = "none";
    }
}
//Função para exibir espaços referente ao tamanho das palavras
function tamPalavra(palavra) {
    let campoResp = document.getElementById('respostaLetra');
    if (campoResp != null) {
        for (let i = 0; i < palavra.length; i++) {
            let li = document.createElement('li');
            if (palavra[i] == " ")
                li.textContent = '-';
            else
                li.textContent = '  ';
            li.classList.add('list-group-item');
            li.classList.add('respLet');
            li.id = ("let-" + i);
            campoResp.append(li);
        }
    }
}
;
//Função para substituir traços por letras certas
function acertoLetra(letra, palavra, listaLetras) {
    for (let i = 0; i < palavra.length; i++) {
        if (letra == palavra[i]) {
            let espaco = document.getElementById('let-' + i);
            if (espaco != null) {
                espaco.textContent = letra;
            }
            listaLetras[i] = letra;
        }
        if (palavra[i] === ' ') {
            listaLetras[i] = ' ';
        }
    }
}
;
//Função para retirar acentos e deixar todas as letras maiusculas
function rAcentos(str) {
    let com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
    let sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
    let novastr = "";
    for (let i = 0; i < str.length; i++) {
        let troca = false;
        for (let a = 0; a < com_acento.length; a++) {
            if (str.substring(i, i + 1) == com_acento.substring(a, a + 1)) {
                novastr += sem_acento.substring(a, a + 1);
                troca = true;
                break;
            }
        }
        if (troca == false)
            novastr += str.substring(i, i + 1);
    }
    return novastr.toUpperCase();
}
;
//Função GameOver
function GameOver(resposta) {
    const tela = document.getElementById("refreshScree");
    const box = document.createElement("div");
    box.id = "gameover";
    let tentativa = document.getElementById("tentativa");
    if (tentativa != null && tela != null) {
        if (tentativa.textContent == "0") {
            setTimeout(function () {
                box.innerHTML = ('<div><p id="resultado">Você foi Enforcado!!!<br>Resposta:</p><p id="respFim"></p><input type="button" id="bnt" value="Jogar Novamente" onClick="window.location.reload()"></div>');
                const inicio = tela.firstChild;
                tela.insertBefore(box, inicio);
                document.getElementById("respFim").textContent = resposta;
            }, 2000);
        }
        else if (JSON.stringify(listaAcertos) === JSON.stringify(letraPa)) {
            setTimeout(function () {
                box.innerHTML = ('<div><p id="resultado">Você Venceu!!!<br>Resposta:</p><p id="respFim"></p><input type="button" id="bnt" value="Jogar Novamente" onClick="window.location.reload()"></div>');
                const inicio = tela.firstChild;
                tela.insertBefore(box, inicio);
                document.getElementById("respFim").textContent = resposta;
            }, 1000);
        }
    }
}
//Captura letras clicladas
function clickTeclado(letra) {
    if (nTentativas <= 0) {
        return;
    }
    if (letraPa.indexOf(letra) == -1) {
        subTentativa();
        disbBoton(letra, '#E57981');
        atualizaImagem(nTentativas -= 1);
    }
    else {
        disbBoton(letra, '#67AE8B');
        acertoLetra(letra, letraPa, listaAcertos);
    }
    GameOver(palavra);
}
;
let nTentativas = 6;
//Sorteando tema.
let tema = sorteaTema(listaTemas);
//Sorteando tema e palavra
let palavra = sorteaPalavra(tema);
//Exibindo dica
exibeDica(tema);
//Tirando Acentos
palavra = rAcentos(palavra);
//Dividindo a palavra em uma lista de caracteres
let letraPa = dividePalavra(palavra);
let listaAcertos = new Array(letraPa.length);
//Definindo o numero de tentativas
defTentativa(nTentativas);
//Exibindo espaços referentes a quantidade de letras da palavras
tamPalavra(letraPa);
