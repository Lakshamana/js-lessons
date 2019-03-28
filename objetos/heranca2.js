//Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = 'Z' //não recomendado
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: 3}
const filho = {__proto__: pai, attr3: 'C'} //sobrescreve attr3 (shadowing)
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)  //Z A B C
console.log(filho.attrNaoExiste) //undefined

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if(this.velAtual + delta > this.velMax) {
            this.velAtual = this.velMax
        } else {
            this.velAtual += delta
        }
    },
    status(){
        return `${this.velAtual}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerar(100)
console.log(volvo.status())

ferrari.acelerar(300)
console.log(ferrari.status())