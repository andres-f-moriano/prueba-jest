const numberPrime = require("./numeroPrimo");

describe("tests en la función para saber si un número es primo", () => {
    
    test("Test 83 es un numero primo? = true ", () => {
        const result = numeroPrimo(83);
        expect(result).toBe(true);
    })

    test("test 15 es un numero primo? = false ", () => {
        const result = numeroPrimo(15);
        expect(result).toBe(false);
    })

    test("test para asegurar que 26 no sea considerado primo = false ", () => {
        const result = numeroPrimo(13);
        expect(result).toBe(false);
    })
});