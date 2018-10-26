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
