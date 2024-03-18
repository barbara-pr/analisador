let add = document.getElementById('add')
add.addEventListener('click', adicionar)

function adicionar(){
    let numeros = []

    // Preenchendo o array com números de 1 a 100
    for (let n = 1; n <= 100; n++) {
        numeros.push(n)
    }

    let numUserInput = document.getElementById('numUser')
    let numUser = parseInt(document.getElementById('numUser').value)

    if (isNaN(numUser) || numUser > 100 || numUser < 1){
        window.alert('Valor inválido!')
        return 
    } else{ 
        if (resultado.querySelector(`option[value='${numUser}']`)) {
            window.alert('Você já digitou este valor antes!')
            return
        } else{
            let numEscolhidos = document.createElement('option')
            numEscolhidos.value = numUser
            numEscolhidos.innerHTML = `O valor ${numUser} foi adicionado.` 
            document.getElementById('resultado').appendChild(numEscolhidos) //resultado.appendChild(numEscolhidos)
            numUserInput.value = '' // Limpar o campo de entrada após adicionar o número
        }
    }
}

let fim = document.getElementById('fim')
fim.addEventListener('click', finalizar)

function finalizar(){
    // Verificar se há números cadastrados
    if (resultado.children.length === 0) {
        window.alert('Nenhum número foi cadastrado!')
        return
    }

    // Calcular o total de números cadastrados
    let totalNumeros = resultado.children.length

    // Encontrar o maior e o menor valor
    let maiorValor = parseInt(resultado.children[0].value)
    let menorValor = parseInt(resultado.children[0].value)

    for (let i = 1; i < resultado.children.length; i++) {
        let valorAtual = parseInt(resultado.children[i].value)
        if (valorAtual > maiorValor) {
            maiorValor = valorAtual
        }
        if (valorAtual < menorValor) {
            menorValor = valorAtual
        }
    }

    // Calcular a soma de todos os valores
    let somaValores = 0
    for (let i = 0; i < resultado.children.length; i++) {
        somaValores += parseInt(resultado.children[i].value)
    }

    // Calcular a média dos valores
    let mediaValores = somaValores / totalNumeros

    // Exibir os resultados
    window.alert(`Ao todo temos ${totalNumeros} números cadastrados.
    O maior valor informado foi ${maiorValor}.
    O menor valor informado foi ${menorValor}.
    Somando todos os valores, temos ${somaValores}.
    A média dos valores digitados é ${mediaValores.toFixed(2)}.`)
}
let finalizarButton = document.querySelector('input[value="Finalizar"]')
finalizarButton.addEventListener('click', finalizar)