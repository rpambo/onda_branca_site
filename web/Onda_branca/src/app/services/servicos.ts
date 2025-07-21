import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Service, TrainingData } from '../interfaces';

@Injectable({
  providedIn: 'root'
})

export class Servicos {
  //private urls = "https://ondabrancasite-env.up.railway.app/v1/services/get_all_services"

  private urls = "http://localhost:8080/v1/services/get_all_services"
  private urlsid = "http://localhost:8080/v1/mudoles/get_by_id"

  constructor(private http: HttpClient) { }

  getAllServices(): Observable<Service[]> {
    return this.http.get<{ data : Service[] }>(this.urls).pipe(
      map(res => res.data)
    );
  }

  servicesGetById(id: number): Observable<TrainingData[]> {
    return this.http.get<{data : TrainingData[]}>(`${this.urlsid}/${id}`).pipe(
      map(res => res.data)
    )
  }
}
