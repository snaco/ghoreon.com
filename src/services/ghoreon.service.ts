import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { StatBlock } from 'src/entities/stat-block';

@Injectable({providedIn: 'root'})
export class GhoreonService {
  constructor(private http: HttpClient) { }

  getStatBlock(): Observable<StatBlock> {
    const forms = 'weaver,observer';
    const params = {
      'forms': ['weaver', 'observer']
    }
    return this.http.get<StatBlock>(`http://ghoreon.com:8484/amalgamate?forms=${forms}`);
  }
}
