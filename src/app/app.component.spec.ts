import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { RouterTestingModule } from "@angular/router/testing";
import { By } from "@angular/platform-browser";
import { RouterLinkWithHref, RouterOutlet } from "@angular/router";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule.withRoutes([])],
      schemas:[NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pruebas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("pruebas");
  });

  it("Debe contener un Router-Outlet", () => {
    const fixture = TestBed.createComponent(AppComponent);

    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(debugElement).not.toBeNull();
  });

  xit("Debe tener un link a la pagina de medicos", () => {
    const fixture = TestBed.createComponent(AppComponent);

    const debugElements = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref)
    );

    console.log(debugElements[0].attributes);

    let existe = false;

    for (const elem of debugElements) {
      if (elem.attributes["routerLink"] === "/medicos") {
        existe = true;
        break;
      }
    }

    expect(existe).toBeTrue();
  });
});
