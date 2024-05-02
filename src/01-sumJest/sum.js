function sum(a, b) {
    if(a === undefined || b === undefined){
        return "hubo un error con los argumentos"
    }

    return a + b;
}
module.exports = sum;