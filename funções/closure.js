//Closure é o escopo criado quando se define uma função
//O escopo permite acessar e manipular variáveis externas à função

const x = 'Global'

const that = this
function fora() {
    const x = 'Local'
    function dentro() {
        return this
    }
    console.log(dentro())
}

const fn = fora  //fora() = dentro, logo fn = dentro, logo fn() = dentro()
fn()