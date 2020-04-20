import { Component, OnInit } from '@angular/core';
import { ColchonService } from '../../service/colchon.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-colchon',
  templateUrl: './list-colchon.component.html',
  styleUrls: ['./list-colchon.component.css']
})
export class ListColchonComponent implements OnInit {

  colchones = <any>[]
  createColchon = <any>{}

  constructor(private colchonService: ColchonService) { }

  ngOnInit() {
    this.colchonService.getColchones()
      .subscribe(
        res=>{
          this.colchones = res
        },
        err=> console.log(err)
      )
  }

  edit(colchonTarget){
    this.colchonService.editColchon(colchonTarget)
      .subscribe(
        res=>{
          colchonTarget.title = colchonTarget.title
          //console.log(colchon)
        },
        err=>{}
      )
  }

  delete(colchon){
    this.colchonService.deleteColchon(colchon)
      .subscribe(
        res=>{
          const index = this.colchones.indexOf(colchon)
          if(index>-1){
            this.colchones.splice(index,1)
          }
        },
        err=>{
          console.log(err)
          if(err instanceof HttpErrorResponse){
            if(err.status === 401){
            }
          }
        }
      )
  }

}
