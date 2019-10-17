const valor = 'Global'

function fn() {
    console.log(valor)
}

this.fn = fn

const that = this
function exec(){
    const valor = 'Local'
    that.fn()
    console.log(that)
    let fn = function() {
        console.log(valor)
    }
    fn()
}

exec()  //Global