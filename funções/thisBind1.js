const pessoa = {
    saudacao: 'Olá, tudo bem?',
    falar() {
        console.log(this.saudacao)
        // console.log(saudacao) -- Erro, saudacao não declarada na função
    }
}

pessoa.falar()

/**
 * O this variou do escopo do objeto pessoa
 * para o objeto global e o atributo pessoa.saudacao 
 * não está definido no escopo global, passando o 
 * undefined para console.log na função falar().
 *  */
const falar = pessoa.falar
falar() //undefined

/**
 * Função bind recebe um objeto para o qual será
 * resolvido o this.
 */
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() //Olá, tudo bem?