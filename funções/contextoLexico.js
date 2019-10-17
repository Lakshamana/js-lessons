const valor = 'Global'

function fn() {
    console.log(valor)
}

this.fn = fn

const that = this
function exec(){
    const valor = 'Local'
    that.fn() // Local
    console.log(that)
    let fn = function() {
        console.log(valor)
    }
    fn()
    // console.log('this:', this)
    console.log(this === global) // true
}

exec()  //Global
console.log(this === global) // false
console.log(this === module.exports) // true