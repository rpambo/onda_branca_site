import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Servicecontacto {
  url = "http://localhost:8080/v1/contactos/send"

  constructor(private htpp: HttpClient) { }

  sendEmail(body: any){
    return this.htpp.post(this.url, body)
  }
}
