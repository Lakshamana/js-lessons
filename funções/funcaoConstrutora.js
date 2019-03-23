function Carro(maxVeloc = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //método público
    this.acelerar = () => {
        if (velocidadeAtual + delta <= maxVeloc) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = maxVeloc
        }
    }

    this.getVelocidadeAtual = () => {
        return velocidadeAtual
    }
}

let uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)  //function
console.log(typeof ferrari)  //object -- instância da função Carro