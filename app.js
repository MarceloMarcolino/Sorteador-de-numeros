function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);
    }

    alert(`Quantidade: ${quantidade}`);
    alert(`Do número: ${de}`);
    alert(`Até o número: ${ate}`);
    alert(sorteados);
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rolarD20(){
    return Math.floor(Math.random() * 20);
    //console.log(parseInt(Math.random() * 20));
    /*será imprimido no console um número inteiro de 0 a 20*/
}