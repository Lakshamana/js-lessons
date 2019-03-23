let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global) //true
/**
 * false, pois o this passado equivale a module.exports (este arquivo),
 * enquanto que o this chamado em uma função comum ('function(...){...}')
 * equivale ao objeto global do runtime atual.
 */
comparaComThis(this) 

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //false
comparaComThis(obj) //true

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) //false
comparaComThisArrow(module.exports) //true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //false, pois this aponta para module.exports
comparaComThisArrow(module.exports) //true