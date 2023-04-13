import { FormularioRegister } from "./formulario";
import { FormBuilder } from "@angular/forms";
describe("Formularios", () => {
  let component: FormularioRegister;

  beforeEach(() => (component = new FormularioRegister(new FormBuilder())));

  it("Debe de crear un formulario con dos campos, email y password", () => {
    expect(component.form.contains("email")).toBeTrue();
    expect(component.form.contains("password")).toBeTrue();
  });

  it("El email debe ser obligatorio", () => {
    const control = component.form.get("email");
    control?.setValue("")

    expect(control?.valid).toBeFalse()
  });

  it("El email debe ser correo valido", () => {
    const control = component.form.get("email");
    control?.setValue("gregory@gmail.com")

    expect(control?.valid).toBeTrue()
  });
});
