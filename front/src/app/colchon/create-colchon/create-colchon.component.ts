import { Component, OnInit } from '@angular/core';
import { ColchonService } from '../../service/colchon.service';

@Component({
  selector: 'app-create-colchon',
  templateUrl: './create-colchon.component.html',
  styleUrls: ['./create-colchon.component.css']
})
export class CreateColchonComponent implements OnInit {

  createColchon = <any>{}

  constructor(private colchonService: ColchonService) { }

  ngOnInit(): void {
  }

  create(){
    this.colchonService.createColchon(this.createColchon)
        .subscribe(
          res => {console.log(res)},
          err => console.log(err)
        )
  }

}
