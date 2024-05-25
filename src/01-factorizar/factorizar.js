/**FUNCION PARA CALCULAR EL FACTORIAL DE UN NUMERO */

function factorial(numero) {
    let factor = 1
    if(numero < 0){
        factor = NaN
        return factor  
    }else{
        for(let index = 1; index <= numero; index++){
            factor *=index
        }
        return factor
    }
}
module.exports = factorial;