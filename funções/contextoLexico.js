const valor = 'Global'

function fn() {
    console.log(valor)
}

const that = this
function exec(){
    const valor = 'Local'
    that.fn()
    let fn = function() {
        console.log(valor)
    }
    fn()
}

exec()  //Global