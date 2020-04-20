import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColchonService {

  private listColchonUrl = "http://localhost:3000/api/colchones/colchones"
  private colchonUrl = "http://localhost:3000/api/colchones/colchones"

  constructor(private http: HttpClient) { }

  createColchon(colchon){
    return this.http.post<any>(this.colchonUrl, colchon)
  }

  editColchon(colchon){
    return this.http.put<any>(this.colchonUrl, colchon)
  }

  deleteColchon(colchon){
    const _id = colchon._id
    const url = `${this.colchonUrl}/${_id}`
    return this.http.delete<any>(url)
  }

  getColchones(){
    return this.http.get<any>(this.listColchonUrl)
  }
}
