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
  imagenes: any = [];
  tomandoAsistencia = false;
  cargando = true;
  ngOnInit() {
    this.rest.getCurso('293597').subscribe((data) => {
      this.alumnos = data['alumnos']; this.cargando = false;
    },
      () => { this.cargando = false; });
  }

  onSelectFile(event) {
    this.imagenes = [];
    let file: File;
    for (let i = 0; i < event.target.files.length; i++) {
      const element = event.target.files[i];
      file = element;
      this.getBase64(file);
    }

  }

  getBase64(file: File) {
    const reader: FileReader = new FileReader();
    reader.onloadend = (e) => {
      this.imagenes.push(reader.result);
    };
    reader.readAsDataURL(file);
  }

  tomarAsistencia() {
    this.tomandoAsistencia = true;
    this.rest.tomarAsistencia('curso293597', this.imagenes).subscribe(
      (clase) => {
        this.alumnos.forEach(element => {
          if (!element.presente) {
            element.presente = 0;
          }
          for (let i = 0; i < clase['alumnos'].length; i++) {
            if (element.legajo === clase['alumnos'][i].legajo) {
              element.presente = 2;
            }
          }
          this.tomandoAsistencia = false;
        });
      },
      () => this.tomandoAsistencia = false
    );
  }

  cargarImagenes() {
    document.getElementById('fileUpload').click();
  }
}
