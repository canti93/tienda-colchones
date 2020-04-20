import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser = <any>{}

  constructor(private auth: AuthService,  private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.loginUser(this.loginUser).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.jwtToken)
        this.router.navigate(['/colchones'])
      },
      err => console.log(err)
    )
  }
}
