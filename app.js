function sortear(){
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const de = parseInt(document.getElementById('de').value);
    const ate = parseInt(document.getElementById('ate').value);

    // Verifica se o valor inicial é maior que o valor final
    if (de > ate) {
        alert(`Erro: O número inicial (${de}) é maior que o número final (${ate}).`);
        return;
    }

    // Jeito diferente de verificar se o intervalo é suficiente para a quantidade de números
    if(quantidade > (ate - de + 1)) {
        alert(`Erro: A quantidade de números (${quantidade}) é maior que o intervalo informado pelo número inicial (${de}) até o número final (${ate}).`);
        return;
    }

    // Valida se a faixa é suficiente para sortear a quantidade de números
    const intervalo = ate - de + 1;
    if (intervalo < quantidade) {
        alert(`Erro: O intervalo de números (${intervalo}) é menor que a quantidade especificada (${quantidade}).`);
        return;
    }

    const sorteados = [];
    let numero;
    for (let i = 0; i < quantidade; i++) {
        // Gera um número aleatório
        numero = obterNumeroAleatorio(de, ate);

        // Contador para rastrear o número de tentativas
        let tentativas = 0

        // Verifica se o número já foi sorteado, caso sim, sorteia novamente
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
            tentativas++; // Incrementa o contador de tentativas
            alert(`Tentativa ${tentativas} de obter um número diferente para o ${i+1}º número. Clique em OK para repetir.`);
        }
        // Adiciona o número sorteado ao array
        sorteados.push(numero);
    }

    // Exibe os números sorteados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(', ')}</label>`;

    // Habilita o botão de reiniciar
    alterarStatusBotaoReiniciar(true);

    /*
    alert(`Quantidade: ${quantidade}`);
    alert(`Do número: ${de}`);
    alert(`Até o número: ${ate}`);

    alert(sorteados);
    */
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rolarD20(){
    return Math.floor(Math.random() * 20) + 1;
    //console.log(parseInt(Math.random() * 20) + 1);
    /*será imprimido no console um número inteiro de 1 a 20*/
}

function alterarStatusBotaoReiniciar(enable) {
    let botao = document.getElementById('btn-reiniciar');
    if (enable) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
        botao.disabled = false;
    } else {
        botao.classList.add('container__botao-desabilitado');
        botao.classList.remove('container__botao');
        botao.disabled = true;
    }
}

function reiniciar() {
    // Limpa os campos de entrada e o resultado
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';

    // Desabilita o botão de reiniciar
    alterarStatusBotaoReiniciar(false);

    // Reinicia o status do botão de sortear
    altearStatusBotaoSortear();
}

function altearStatusBotaoSortear() {
    const quantidade = document.getElementById('quantidade').value.trim();
    const de = document.getElementById('de').value.trim();
    const ate = document.getElementById('ate').value.trim();
    const btnSortear = document.getElementById('btn-sortear');

    // Habilita o botão "Sortear" somente se todos os campos estiverem preenchidos com números válidos
    if (quantidade && de && ate && !isNaN(quantidade) && !isNaN(de) && !isNaN(ate)) {
        btnSortear.classList.remove('container__botao-desabilitado');
        btnSortear.classList.add('container__botao');
        btnSortear.disabled = false;
    } else {
        btnSortear.classList.add('container__botao-desabilitado');
        btnSortear.classList.remove('container__botao');
        btnSortear.disabled = true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const iptQuantidade = document.getElementById('quantidade');
    const iptDe = document.getElementById('de');
    const iptAte = document.getElementById('ate');

    // Adiciona event listeners aos campos de entrada
    iptQuantidade.addEventListener('input', altearStatusBotaoSortear);
    iptDe.addEventListener('input', altearStatusBotaoSortear);
    iptAte.addEventListener('input', altearStatusBotaoSortear);

    // Checagem inicial para configurar os status dos botões
    altearStatusBotaoSortear(); // Verifica se o botão de sortear deve ser habilitado
    alterarStatusBotaoReiniciar(false); // Desabilita o botão de reiniciar inicialmente
})