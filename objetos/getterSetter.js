//convenção: variáveis que começam com "_" são pretendidas a serem privadas para um dado objeto
//get e set flexibilizam o tratamento dos dados em fluxo do/para o objeto, i.e,
//permitem a leitura e escrita com traatamento/processamento opcional
const sequencia = {
    _valor: 1,
    get valor() { 
        return this._valor++ //leitura incrementada
    },
    set valor(v) {
        if(v > this._valor) {
            this._valor = v //atribuição sob condição
        }
    }
}
//valor é uma pseudo-variável
console.log(sequencia.valor, sequencia.valor) //na leitura é chamado o get
sequencia.valor = 1000 //na leitura é chamado o set
console.log(sequencia.valor, sequencia.valor)