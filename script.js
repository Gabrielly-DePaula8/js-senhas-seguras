const numeroSenha = document.querySelector('.parametro-senha__texto');

let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.paramentro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if (tamanho > 1){
        tamanhoSenha = tamanhoSenha - 1
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}

function aumentaTamanho(){
    if (tamanho < 20){
        tamanhoSenha = tamanhoSenha + 1
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}

const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');

for (i=0 ; i< checkbox.length; i++){
    checkbox[i].onclick = geraSenha;
}

