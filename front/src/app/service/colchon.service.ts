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

  getColchones(){
    return this.http.get<any>(this.listColchonUrl)
  }
}
