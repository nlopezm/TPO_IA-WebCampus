import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuadro',
  templateUrl: './cuadro.component.html',
  styleUrls: ['./cuadro.component.scss']
})
export class CuadroComponent implements OnInit {
  curso = '292996';
  dia = 'VI';
  horario = '18:30hs - 22:30hs';
  final = '10/12/2018';
  materia = 'PROGRAMACION ORIENTADA A OBJETOS - PROGRAMACION ORIENTADA A OBJETOS - APLICACIONES INTERACTIVAS';
  aula = '417';
  cantAlumnos = 34;
  constructor() { }

  ngOnInit() {
  }

}
