import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuadro',
  templateUrl: './cuadro.component.html',
  styleUrls: ['./cuadro.component.scss']
})
export class CuadroComponent implements OnInit {
  curso = 'WC2292996';
  cantAlumnos = 34;
  constructor() { }

  ngOnInit() {
  }

}
