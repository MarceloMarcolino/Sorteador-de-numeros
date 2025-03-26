function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Valida se a faixa é suficiente para sortear a quantidade de números
    let intervalo = ate - de + 1;
    if (intervalo < quantidade) {
        alert(`Erro: O intervalo de números (${intervalo}) é menor que a quantidade especificada (${quantidade}).`);
        return;
    }

    let sorteados = [];
    let numero;
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;


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