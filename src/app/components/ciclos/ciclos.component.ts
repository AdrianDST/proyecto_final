import { DatosService } from './../../services/datos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ciclo } from 'src/app/utils/Ciclo';
import { Asignatura } from 'src/app/utils/Asignatura';
import { DoscolumnasService } from 'src/app/services/doscolumnas.service';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent implements OnInit {

  //ActivatedRouted
  numero:number;
  elementos: string[]= [];
  elementosJSON: any[] = [];
  ciclosTotal:Ciclo[];
  ciclosPintarDam: Asignatura[];
  ciclosPintarDaw: Asignatura[];
  constructor(private gestorRutasActivas: ActivatedRoute, private servicioDatos: DatosService, private dosColumnas:DoscolumnasService) { }

  ngOnInit(): void {
    this.ciclosTotal = this.dosColumnas.getCiclo();
    this.ciclosPintarDam = this.servicioDatos.getAsignaturasDam()
    this.ciclosPintarDaw = this.servicioDatos.getAsignaturasDaw()
    //console.log(this.gestorRutasActivas.snapshot.paramMap.get('id'));
    //this.numero =  parseInt(this.getorRutasActivas.snapshot.paramMap.get('id'));
    this.gestorRutasActivas.paramMap.subscribe(param=>{
      //console.log(param.get('id'));
      this.numero = parseInt(param.get('id'));
      console.log(this.numero);
      
      
      
    })
    //console.log(this.numero);
    
    //console.log(this.servicioDatos.getArrayUno());
  }

}
