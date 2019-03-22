function printNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratarErro(e)
    } finally {
        console.log('final')
    }
}

function tratarErro(erro) {
    //throw new Error('...')
    //throw 10
    throw {
        nome: erro.nome,
        msg: erro.message,
        date: new Date()
    }
}

const obj = { nome: 'Roberto' }
printNomeGritado(obj)