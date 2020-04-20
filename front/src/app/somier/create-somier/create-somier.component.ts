import { Component, OnInit } from '@angular/core';
import { SomierService} from '../../service/somier.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-somier',
  templateUrl: './create-somier.component.html',
  styleUrls: ['./create-somier.component.css']
})
export class CreateSomierComponent implements OnInit {

  createSomier = <any>{}

  constructor(private somierService: SomierService, private router: Router) { }

  ngOnInit(): void {
  }

  create(){
    this.somierService.createSomier(this.createSomier)
        .subscribe(
          res => {
            console.log(res)
            this.router.navigate(['/somieres'])
          },
          err => console.log(err)
        )
  }

}
