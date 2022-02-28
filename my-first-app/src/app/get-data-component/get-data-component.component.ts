import { Component, OnInit } from '@angular/core';
import { GetJsonDataService } from './../get-json-data.service';


@Component({
  selector: 'app-get-data-component',
  templateUrl: './get-data-component.component.html',
  styleUrls: ['./get-data-component.component.css']
})
export class GetDataComponentComponent implements OnInit {

  constructor(public getJson: GetJsonDataService) { }

  // json = this.getJson.jsonDataStudent();

  // temp = 0
  // fun() {
  //   this.getJson.change()
  //   this.temp = this.getJson.send()
  // }

  // username=""
  // copyText(){
  //   this.getJson.testToShow(this.username);
  // }
  
  user: any = `{
    "email": "",
    "password": "",
    "city": "",
    "zip": ""
  }`;
  
  onSubmit(recUser: any) {
    console.log(recUser);
    this.getJson.setData(recUser);
  }
  ngOnInit(): void {
  }

}
