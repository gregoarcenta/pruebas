import { HttpClientModule } from '@angular/common/http';
import { MedicoComponent } from "./medico.component";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { MedicoService } from "./medico.service";

describe("MedicoComponent", () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      // providers: [MedicoService],
      imports:[HttpClientModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Debe de crearse el componente MedicoComponent", () => {
    expect(component).toBeTruthy();
  });

  it("Debe retornar el nombre del médico", () => {
    const nombre = "Alex";
    const respuesta = component.saludarMedico(nombre);
    expect(respuesta).toContain(nombre);
  });
});
