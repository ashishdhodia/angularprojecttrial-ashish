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

  // user: any = `{
  //   "email": "",
  //   "password": "",
  //   "city": "",
  //   "zip": ""
  // }`;

  // onSubmit(recUser: any) {
  //   console.log(recUser);
  //   this.getJson.setData(recUser);
  // }

  // number = 0;

  // sendNumber() {
  //   this.getJson.setNumber(this.number);
  // }
  // cost = 1000
  // str1 = ""
  // str2 = ""
  // flightData: any = `{
  //     "from": "",
  //     "to": "",
  //     "departDate": "",
  //     "returnDate": ""
  //   }`;

  // departDate: any
  // onSubmit(data: any) {
  //   let date1 = new Date(data.departDate);
  //   let date2 = new Date(data.returnDate);
  //   // console.log(date1);

    // let time = date2.getTime() - date1.getTime();
    // let days = time / (1000 * 3600 * 24);

    // this.str1 = `Total ${days} days journey!`;
    // this.str2 = `Total cost will be $${this.cost * days}.`;

  // }

  ngOnInit(): void {
  }

}
