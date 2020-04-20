import { Component, OnInit } from '@angular/core';
import { SomierService } from '../../service/somier.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-somier',
  templateUrl: './list-somier.component.html',
  styleUrls: ['./list-somier.component.css']
})
export class ListSomierComponent implements OnInit {

  somieres = <any>[]

  constructor(private somierservice: SomierService) { }

  ngOnInit() {
    this.somierservice.getSomieres()
      .subscribe(
        res => {
          this.somieres = res
        },
        err => console.log(err)
      )
  }

  delete(somier) {
    this.somierservice.deleteSomier(somier)
      .subscribe(
        res => {
          const index = this.somieres.indexOf(somier)
          if (index > -1) {
            this.somieres.splice(index, 1)
          }
        },
        err => {
          console.log(err)
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
            }
          }
        }
      )
  }

}
