import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { pub } from '../interfaces';

@Injectable({
  providedIn: 'root'
})

export class Pub {

  url = 'http://localhost:8080/v1/publicacao/get_by_search/'
  
  constructor(private http: HttpClient) { }

  getBySeach(term: string) : Observable<pub[]> {
    return this.http.get<{data : pub[]}>(`${this.url}${term}`).pipe(
      map(res => res.data)
    )
  }

}
