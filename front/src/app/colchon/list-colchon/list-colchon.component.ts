import { Component, OnInit } from '@angular/core';
import { ColchonService } from '../../service/colchon.service';

@Component({
  selector: 'app-list-colchon',
  templateUrl: './list-colchon.component.html',
  styleUrls: ['./list-colchon.component.css']
})
export class ListColchonComponent implements OnInit {

  colchones = <any>[]

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

}
