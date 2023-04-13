import { Jugador } from "./clase";

describe("Pruebas de clase", () => {
  const newJugador = new Jugador();

  beforeEach(() => {
    newJugador.hp = 100;
  });

  it("Debe de retornar 80 de hp si recibe 20 de daño", () => {
    const resp = newJugador.recibeDanio(20);
    expect(resp).toBe(80);
  });
  it("Debe de retornar 50 de hp si recibe 50 de daño", () => {
    const resp = newJugador.recibeDanio(50);
    expect(resp).toBe(50);
  });
  it("Debe de retornar 0 de hp si recibe 100 de daño o mas", () => {
    const resp = newJugador.recibeDanio(150);
    expect(resp).toBe(0);
  });
});
