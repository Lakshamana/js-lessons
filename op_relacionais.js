console.log('1.', '1' == 1)  // true
console.log('2.', '1' === 1)  // false

let a1 = 1, a2 = 1
console.log('3.', a1 === a2);  //true

var b1 = 2, b2 = 2
console.log('4.', b1 === b2);  //true

const d1 = new Date(0)
const d2 = new Date(0)

console.log('5.', d1 === d2)  // false: diferentes endereços de memória
console.log('6.', d1 == d2)  // false

console.log('7.', d1.getDate() == d2.getDate())
console.log('8.', d1.getDate() === d2.getDate())

console.log('9.', undefined == null)  // true
console.log('10.', undefined === null)  // false