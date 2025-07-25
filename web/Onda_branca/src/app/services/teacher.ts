import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Teachers } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class Teacher {

 // private UrlS = 'https://ondabrancasite-env.up.railway.app/v1/teacher/get_all_teachers'

  constructor(private http: HttpClient) { }

  //getAllTeachers(): Observable<Teachers[]> {
  //return this.http.get<{ data: Teachers[] }>(this.UrlS).pipe(
    //map(res => res.data) // Extract array from response
  //);
//}

}
