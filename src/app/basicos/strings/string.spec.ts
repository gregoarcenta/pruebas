import { mensaje } from "./string"

describe("Pruebas de string", () => {

  it("Debe de regresar un string", () => {

    const respuesta = mensaje("Gregory")

    expect(typeof respuesta).toBe("string")

  })

  it("Debe de retornar un saludo con el nombre enviado", () => {

    const nombre = "Gregory"
    const respuesta = mensaje(nombre)

    expect(respuesta).toContain(nombre)

  })

})
