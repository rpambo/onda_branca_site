import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Service } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class Servicos {
  private urls = "http://localhost:8080/v1/services/get_all_services"

  constructor(private http: HttpClient) { }

  getAllServices(): Observable<Service[]> {
    return this.http.get<{ data : Service[] }>(this.urls).pipe(
      map(res => res.data)
    );
  }
}
