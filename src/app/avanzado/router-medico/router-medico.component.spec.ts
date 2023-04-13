import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterMedicoComponent } from "./router-medico.component";
import { ActivatedRoute, Router } from "@angular/router";
import { EMPTY, Observable, Subject, from } from "rxjs";

class FakeRouter {
  navigate(param: any) {}
}

class FakeActivatedRoute {
  // paramMap: Observable<any> = EMPTY;

  private subject = new Subject();

  push(valor:any){
    this.subject.next(valor)
  }

  get params(){
    return this.subject.asObservable();
  }
}

describe("RouterMedicoComponent", () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Debe de redireccionar a medico cuando se guarde", () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, "navigate");

    component.guardarMedico()

    expect(spy).toHaveBeenCalledWith(["/medico", "123"]);
  });

  it("Debe de colocar el id = nuevo", () => {

    const activatedRoute = TestBed.inject(ActivatedRoute);

    (<FakeActivatedRoute>(<any>activatedRoute)).push({id:"nuevo"})

    expect(component.id).toBe("nuevo");
  });
});
