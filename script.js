function mostrarResultado() {
    const chasLegitimos = ['Chá Verde', 'Chá Preto', 'Chá Branco', 'Chá Oolong', 'Chá Pu-erh'];
    const selecao = document.querySelector('select').value;
    const resultadoElement = document.getElementById('resultado');

    if (selecao === "") {
        resultadoElement.textContent = 'Por favor, escolha uma opção válida.';
    } else if (chasLegitimos.includes(selecao)) {
        resultadoElement.textContent = 'Você escolheu ' + selecao + ': é um legítimo chá vindo da planta Camellia sinensis!';
    } else {
        resultadoElement.textContent = 'Você escolheu ' + selecao + ': é somente uma simples infusão!';
    }
}