import { usuarioIgresado } from "./booleanos"

describe("Pruebas de booleanos", () => {
  it("Debe de regresar true", () => {
    const resp = usuarioIgresado()

    expect(resp).toBeTrue()
  })
})
