// coleção dinâmica de pares chaves/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 300
console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56, 
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Júnior',
        idade: 21
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: () => {
        //...
    }
}

carro.proprietario.endereco.numero = 1000

//Notação útil para iteração
carro['proprietario']['endereco']['logradouro'] = 'Rua Pres. Vargas'
console.log(carro)

//excluindo elementos do objeto
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores) //foi excluído -- retorna undefined
// console.log(carro.condutores.length) //erro -- lendo propriedade de undefined
