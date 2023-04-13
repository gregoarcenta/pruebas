import { FormBuilder, Validators } from "@angular/forms";

export class FormularioRegister {
  public form;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }
}
