import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser = <any>{}

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.loginUser(this.loginUser).subscribe(
      res => {console.log(res)},
      err => {console.log(err)}
    )
  }
}
