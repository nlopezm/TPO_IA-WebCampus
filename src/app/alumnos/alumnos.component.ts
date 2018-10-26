import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest/rest.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {

  constructor(public rest: RestService) { }
  fechas = ['05/11', '12/11', '19/11', '26/11'];
  alumnos: any;
  ngOnInit() {
    this.rest.getCurso('293597').subscribe((data) => this.alumnos = data['alumnos'], () => { });

  }

}
