let tela = document.getElementById('res');
let conta = '';

function appendToScreen(value) {
    conta += value;
    tela.innerHTML = conta;
}

function calcular() {
    try {
        conta = eval(conta);
        tela.innerHTML = conta;
    } catch (error) {
        tela.innerHTML = 'Erro';
        conta = '';
    }
}