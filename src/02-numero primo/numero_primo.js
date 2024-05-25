/**verificar si el numero es primo */


function numeroPrimo(Numero){
    count = 0
    for(let index = 1; index <= Numero; index++){
        let division = Numero%index;
        if(division == 0){
            count++
        }
    }
    if (count == 2){
        return true
    }else{
        return false
    }
}

module.exports = numeroPrimo;