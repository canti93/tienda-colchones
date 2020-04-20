import { Component, OnInit } from '@angular/core';
import { ColchonService } from '../../service/colchon.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-colchon',
  templateUrl: './create-colchon.component.html',
  styleUrls: ['./create-colchon.component.css']
})
export class CreateColchonComponent implements OnInit {

  createColchon = <any>{}

  constructor(private colchonService: ColchonService, private router: Router) { }

  ngOnInit(): void {
  }

  create(){
    this.colchonService.createColchon(this.createColchon)
        .subscribe(
          res => {
            console.log(res)
            this.router.navigate(['/colchones'])
          },
          err => console.log(err)
        )
  }

}
