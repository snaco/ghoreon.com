import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatBlock } from 'src/entities/stat-block';

@Injectable({providedIn: 'root'})
export class GhoreonService {
  constructor(private http: HttpClient) { }

  getStatBlock(forms?: string): Observable<StatBlock> {
    let request = 'https://4jj3mcijy7rypno3dj3hgp2koq0ryitt.lambda-url.us-east-1.on.aws/';
    if (forms) {
      request += `?forms=${forms}`;
    }
    return this.http.get<StatBlock>(request);
  }
}
