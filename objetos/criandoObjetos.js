//usando a notação literal
const obj1 = {}
console.log(obj1)

//usando Object
console.log(typeof Object, typeof new Object)
const obj2 = new Object()
console.log(obj2)

//Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.preco = preco
    this.desc = desc
    this.getPrecoComDesconto = () => preco * (1 - desc)
}

const p1 = new Produto('Cadeira', '200', 0.15)
console.log(p1)
console.log(p1.getPrecoComDesconto())

//Função factory
function FuncionarioFactory(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = FuncionarioFactory('João', 7980, 4)
const f2 = FuncionarioFactory('Maria', 11000, 1)
console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha.nome)

//Utilizando JSON.parse
const fromJson = JSON.parse('{"nome": "Guilherme"}')
console.log(fromJson, fromJson.nome)