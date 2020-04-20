import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SomierService {

  private listSomierUrl = "http://localhost:3000/api/somieres/somieres"
  private somierUrl = "http://localhost:3000/api/somieres/somieres"

  constructor(private http: HttpClient) { }

  createSomier(somier){
    return this.http.post<any>(this.somierUrl, somier)
  }

  getSomieres(){
    return this.http.get<any>(this.listSomierUrl)
  }

  deleteSomier(somier){
    const _id = somier._id
    const url = `${this.somierUrl}/${_id}`
    return this.http.delete<any>(url)
  }
}
