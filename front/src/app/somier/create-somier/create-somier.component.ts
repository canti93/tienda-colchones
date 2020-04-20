import { Component, OnInit } from '@angular/core';
import { SomierService} from '../../service/somier.service'

@Component({
  selector: 'app-create-somier',
  templateUrl: './create-somier.component.html',
  styleUrls: ['./create-somier.component.css']
})
export class CreateSomierComponent implements OnInit {

  createSomier = <any>{}

  constructor(private somierService: SomierService) { }

  ngOnInit(): void {
  }

  create(){
    this.somierService.createSomier(this.createSomier)
        .subscribe(
          res => {console.log(res)},
          err => console.log(err)
        )
  }

}
