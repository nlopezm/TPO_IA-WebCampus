import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
}) export class RestService {
  baseUrl = environment.apiUrl;
  constructor(public http: HttpClient) {
  }

  getCurso(curso: string): Observable<{}> {
    curso = 'curso' + curso.toLowerCase();
    return this.http.get(this.baseUrl + 'persongroups/' + curso + '?expand=alumnos,clases');
  }

  tomarAsistencia(curso: string, imagenes: any = []): Observable<{}> {
    const body = {};
    body['base64'] = imagenes;
    return this.http.post(this.baseUrl + 'persongroups/' + curso + '/asistencia', body);
  }

  tomarAsistenciaManual(curso: string, alumnos: any = []): Observable<{}> {
    const body = {};
    body['alumnos'] = alumnos;
    return this.http.post(this.baseUrl + 'persongroups/' + curso + '/asistenciaManual', body);
  }

}
