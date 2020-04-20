import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginURL = "http://localhost:3000/api/auth"

  constructor(private http: HttpClient, private router: Router) { }

  loginUser(user){
    return this.http.post<any>(this.loginURL, user)
  }

  isLogged(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
