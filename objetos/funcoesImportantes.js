const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

//usando destructuring
Object.entries(pessoa).forEach(([nome, peso]) => {
    console.log(nome, peso)
})

//definição de visibilidade e congelamento de atributos
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //listável por Object.keys
    writable: false, //modificável
    value: '29/10/1990'
})

pessoa.dataNascimento = '01/01/2019'
console.log(pessoa.dataNascimento) //não alterado
console.log(Object.keys(pessoa))

//Object.assign (ES6)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
//concatena atributos de outros objetos em um só, sobrescrevendo dados já existentes
const result = Object.assign(dest, o1, o2) //dest também é modificado
console.log(dest, result)

Object.freeze(result)
result.c = 5454
console.log(result)