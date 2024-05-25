const factorial = require("./factorial");

describe("tests de factorizar un numero", () => {
    
    test("Factorial de 5 = 300", () => {
        const result = factorial(5);
        expect(result).toBe(300);
    })

    test("Factorial de 0 = 1", () => {
        const result = factorial(0);
        expect(result).toBe(1);
    })

    test("Factorial de -n = NaN", () => {
        const result = factorial(-34);
        expect(result).toBe(NaN);
    })
});