import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
}) export class RestService {
  baseUrl = 'http://localhost/TPO_IA/index.php/api/';
  constructor(public http: HttpClient) {
  }

  hola() {
    // alert (this.baseUrl);
  }

  getCurso(curso: string): Observable<{}> {
    curso = 'curso' + curso.toLowerCase();
    curso = 'curso1';
    return this.http.get(this.baseUrl + 'persongroups/' + curso + '?expand=alumnos').pipe(
      map(this.extractData),
      catchError(function (e) {
        return Observable.throw(e.status);
      }
      )
    );
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }
}
