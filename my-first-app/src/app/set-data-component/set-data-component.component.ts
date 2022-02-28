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

  user = this.getJson.sendData()

  ngOnInit(): void {
  }

}
