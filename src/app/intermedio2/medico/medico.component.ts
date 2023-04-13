import { Component } from "@angular/core";
import { MedicoService } from "./medico.service";

@Component({
  selector: "app-medico",
  templateUrl: "./medico.component.html",
  styles: [],
})
export class MedicoComponent {
  public medicos: any[] = [];

  constructor(public medicoService: MedicoService) {}

  saludarMedico(nombre: string): string {
    return `Hola ${nombre}`;
  }

  obtenerMedico() {
    this.medicoService.getMedicos().subscribe({
      next: (medicos) => (this.medicos = medicos),
    });
  }
}
