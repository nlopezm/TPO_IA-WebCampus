import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {

  constructor() { }
  fechas = ['05/11', '12/11', '19/11', '26/11'];
  alumnos = [
    { 'nombre': 'Juan', 'apellido': 'Perez', 'legajo': 1072548, 'inasistencia': 0, 'foto': './../../uade/ID_965306.jpg' },
    { 'nombre': 'Juan', 'apellido': 'Perez', 'legajo': 1072548, 'inasistencia': 0, 'foto': './../../uade/ID_971739.jpg' },
    { 'nombre': 'Juan', 'apellido': 'Perez', 'legajo': 1072548, 'inasistencia': 0, 'foto': './../../uade/ID_973340.jpg' },
    { 'nombre': 'Juan', 'apellido': 'Perez', 'legajo': 1072548, 'inasistencia': 0, 'foto': './../../uade/ID_973340.jpg' },
    { 'nombre': 'Juan', 'apellido': 'Perez', 'legajo': 1072548, 'inasistencia': 0, 'foto': './../../uade/ID_973340.jpg' },
    { 'nombre': 'Juan', 'apellido': 'Perez', 'legajo': 1072548, 'inasistencia': 0, 'foto': './../../uade/ID_973340.jpg' },
    { 'nombre': 'Juan', 'apellido': 'Perez', 'legajo': 1072548, 'inasistencia': 0, 'foto': './../../uade/ID_973340.jpg' },
    { 'nombre': 'Juan', 'apellido': 'Perez', 'legajo': 1072548, 'inasistencia': 0, 'foto': './../../uade/ID_973340.jpg' },
    { 'nombre': 'Juan', 'apellido': 'Perez', 'legajo': 1072548, 'inasistencia': 0, 'foto': './../../uade/ID_973340.jpg' },
    { 'nombre': 'Juan', 'apellido': 'Perez', 'legajo': 1072548, 'inasistencia': 0, 'foto': './../../uade/ID_973340.jpg' },
    { 'nombre': 'Juan', 'apellido': 'Perez', 'legajo': 1072548, 'inasistencia': 0, 'foto': './../../uade/ID_973340.jpg' },
    { 'nombre': 'Juan', 'apellido': 'Perez', 'legajo': 1072548, 'inasistencia': 0, 'foto': './../../uade/ID_973340.jpg' },
    { 'nombre': 'Juan', 'apellido': 'Perez', 'legajo': 1072548, 'inasistencia': 0, 'foto': './../../uade/ID_973340.jpg' },
  ];
  ngOnInit() {
  }

}
