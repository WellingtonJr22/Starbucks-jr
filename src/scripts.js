/*
JavaScript Não e Java
Variaveis(Qualquer Linguagem de Progamação )

Lógica de Progamação (Entender com o Computador Pensa)

- Algoritmo (Receita de Bolo)
    [X] Descobrir quando o usuário clicou no botão
    [X] Assim que o botão for clicado....
    [X] Trocar a imagem principal
    [X]Trocar a cor de fundo

    -Funções
        -Pedacinhos de código que, só executam quando são chamados

 */

let circulo = document.querySelector('.circulo')
let imagem = document.querySelector('.copo')


function trocarACor(cor){
    circulo.style.background = cor

}

function trocarImagem(endereco){
 imagem.src = endereco
    
}

