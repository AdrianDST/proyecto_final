import { Injectable } from '@angular/core';
import { Ciclo } from '../utils/Ciclo';

@Injectable({
  providedIn: 'root'
})
export class DoscolumnasService {

  ciclo: Ciclo[] = [
    {
      nombre: 'DAM',
      curso: 1,
      asignaturas: [],
      imagen: 'assets/images/dam.jpeg',
    },
    {
      nombre: 'DAM',
      curso: 2,
      asignaturas: [],
      imagen: 'assets/images/dam.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 1,
      asignaturas: [],
      imagen: 'assets/images/daw.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 2,
      asignaturas: [],
      imagen: 'assets/images/daw.jpeg',
    },
  ]

  constructor() { }
  getCiclo(): Ciclo[]{
    return this.ciclo;
  }
}
