// Por que eu posso modificar objetos constantes?

// pessoa -> 0x123 -> {...} : endereço de memória 0x123
const pessoa = {nome: 'Pedro'}
console.log(pessoa)

pessoa.nome = 'Paulo'
console.log(pessoa)

// // pessoa -> 0x456 -> {...} : endereço de memória modificado
// const pessoa = {nome: 'Maria'} //erro na reatribuição
// console.log(pessoa)

//Congelar objetos
Object.freeze(pessoa)

pessoa.nome = 'Maria' //ignorado, porém não dispara erro
pessoa.endereco = 'Rua ABC' //ignorado, porém não dispara erro
delete pessoa.nome //ignorado, porém não dispara erro
console.log(pessoa)