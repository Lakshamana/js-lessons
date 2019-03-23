//IIFE -> Immediately Invoked Function Expression

(function() {  //Apenas funciona definida entre parênteses
    console.log('Será executada na hora')
    console.log('Foge do escopo mais abrangente')
})(); //colocar ';' no final

(() => {
    console.log('Pode ser uma função arrow!')
})();