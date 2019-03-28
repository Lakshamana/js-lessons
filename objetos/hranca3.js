const pai = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) //['nome']
console.log(Object.keys(filha2)) //['nome']

for(let k in filha1) {
    let print = filha1.hasOwnProperty(k) ?
        k : `por herança: ${k}`
    console.log(print)
}