import { incrementar } from "./numeros";

describe("Pruebas con numeros", () => {
  it("Debe de retornar 100, si el numero ingresado es mayor a 100", () => {
    const numero = incrementar(300);
    expect(numero).toBe(100)
  });
  it("Debe de retornar el numero ingresado + 1, si es menor a 100", () => {
    const numero = incrementar(50);
    expect(numero).toBe(51)
  });
});
