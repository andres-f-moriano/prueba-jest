const sum = require("./sum")

test("adds 1 + 2 to equal 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
});

test("adds 10 + 20 to equal 3", () => {
    const result = sum(10, 20);
    expect(result).toBe(30);
});

test("should return error if arguments are not passed", () => {
     const result = sum();
     expect(result).toBe("hubo un error con los argumentos")
});