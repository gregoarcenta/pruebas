import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MedicosService {

  constructor( public http: HttpClient ) { }

  getMedicos() {
    return this.http.get<any>('...').pipe(
      map( resp => resp['medicos'] )
    );
  }

  agregarMedico( medico: any ) {
    return this.http.post<any>('...', medico ).pipe(
      map( resp => resp['medico'] )
    );
  }

  borrarMedico( id: string ) {
    return this.http.delete<any>('...' ).pipe(
      map( resp => resp['medico'] )
    );
  }


}
