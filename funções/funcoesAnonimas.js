const soma = function(x, y) {
    return x + y
}

const printResult = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

printResult(3, 4)

printResult(3, 4, soma)

printResult(3, 4, function(x, y) {
    return x - y
})

printResult(3, 4, (x, y) => x * y)

const div = (x, y) => x / y
printResult(3, 4, div)

const pessoa = {
    falarOla: function(){
        console.log('Olá')
    },

    falarTchau(){
        console.log('Tchau!')
    },

    falarBomDia: () => console.log('Bom dia!')
}

pessoa.falarOla()
pessoa.falarTchau()
pessoa.falarBomDia()