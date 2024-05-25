const capitalizeText = require("./capi");

describe("tests en la función para capitalizar textos", () => {
    
    test("test para verificar la conversión de una cadena a título ", () => {
        const result = capi("adios mundo");
        expect(result).toBe("adios mundo");
    })

    test("test para comprobar que una cadena vacía devuelva una cadena vacía", () => {
        const result = capi("");
        expect(result).toBe("");
    })

    test("test para asegurar que una cadena ya en capitalizada no cambie ", () => {
        const result = capi("bay to a World");
        expect(result).toBe("bay to a wordl");
    })
});