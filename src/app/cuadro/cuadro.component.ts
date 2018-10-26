import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuadro',
  templateUrl: './cuadro.component.html',
  styleUrls: ['./cuadro.component.scss']
})
export class CuadroComponent implements OnInit {
  curso = '293597';
  dia = 'VI';
  horario = '18:30hs - 22:30hs';
  final = '10/12/2018';
  materia = 'INTELIGENCIA ARTIFICIAL';
  aula = '417';
  cantAlumnos = 58;
  constructor() { }

  ngOnInit() {
  }

}
