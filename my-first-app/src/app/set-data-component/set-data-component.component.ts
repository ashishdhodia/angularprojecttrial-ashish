import { Component, OnInit } from '@angular/core';
import { GetJsonDataService } from './../get-json-data.service';


@Component({
  selector: 'app-set-data-component',
  templateUrl: './set-data-component.component.html',
  styleUrls: ['./set-data-component.component.css']
})
export class SetDataComponentComponent implements OnInit {

  constructor(public getJson: GetJsonDataService) { }

  // temp = this.getJson.send()

  // text = this.getJson.sendText()

  // user = this.getJson.sendData()
  
  // number = this.getJson.sendNumber();
  
  // arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  
  ngOnInit(): void {
  }

}
