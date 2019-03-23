function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())

console.log(produto.getPreco())

const carro = {preco: 49990, desc: 0.2} //não contém função getPreco
console.log(getPreco.call(carro)) //chamar função dado o contexto carro
console.log(getPreco.apply(carro)) //aplicar função dado o contexto 

const carro2 = {preco: 49990, desc: 0.2, getPreco} //contém função getPreco
console.log(carro2.getPreco(0.17, 'US$')) //equivalente a
console.log(getPreco.call(carro, 0.17, 'US$')) //call utiliza parâmetros variáveis
console.log(getPreco.apply(global, [0.17, 'US$'])) //apply utiliza arrays