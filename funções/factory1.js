//Factory simples
function criarProduto(nome, preco) {
    if(nome && preco){
        return {
            nome,
            preco
        }
    } else {
        throw new Error('Um produto deve ter nome e preço!')
    }
}

// console.log(criarProduto()) //Erro!
console.log(criarProduto('celular', 500))
console.log(criarProduto('notebook', 1500))