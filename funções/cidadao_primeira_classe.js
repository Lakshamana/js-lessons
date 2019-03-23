//Funções são First-class Objects
//high-order functions

//forma literal
function func1() { }

//Função anônima
const func2 = function() { }

//Função anônima com arrow
const func3 = () => {}

//Armazenar em um array
const array = [(a, b) => a + b, func2, func3]
console.log(array[0](2, 3))  //5

//Armazenar em objetos
const obj = {}
obj.falar = function() { return 'Opa' }
console.log(obj.falar())

//Passar como parâmetro
function run(func) {
    func()
}

run(() => console.log('Executando...'))

//Uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(1) //6

//ou então...
const cincoMais = soma(2, 3)
cincoMais(5)  //10

//Operadores
const oper = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
}

const applyOper = (a, b, _oper) => console.log(oper[_oper](a, b))

applyOper(2, 30, '/')