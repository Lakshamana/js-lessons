const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

//Também é possível passar apenas a referência ao método
//equivalente a (arg0, arg1, ..., argN) => callFunction(arg0, arg1, ..., argN)
fabricantes.forEach(console.log)