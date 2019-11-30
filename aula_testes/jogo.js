

function jogo(numeroGerado, resposta) {
    if (resposta > numeroGerado) {
        return { acertou: false, mensagemErro: 'Tente um número menor!' }
    }
    else if (resposta < numeroGerado) {
        return { acertou: false, mensagemErro: 'Tente um número maior!' }
    } else {
        return { acertou: true }
    }

}

module.exports = jogo