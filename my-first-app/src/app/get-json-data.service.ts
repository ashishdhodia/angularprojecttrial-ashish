import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetJsonDataService {

  constructor() { }
  // json = `[
  //   {
  //     "id": 1,
  //     "name": "Pasta",
  //     "price": "99",
  //     "added": 0,
  //     "quntity_avl": "5",
  //     "stock_warehouse": "1000",
  //     "manufacturing_location": "CA",
  //     "cost": 0,
  //     "hide": 0
  //   },
  //   {
  //     "id": 2,
  //     "name": "Salad",
  //     "price": "49",
  //     "added": 0,
  //     "quntity_avl": "7",
  //     "stock_warehouse": "450",
  //     "manufacturing_location": "EL",
  //     "cost": 0,
  //     "hide": 0
  //   },
  //   {
  //     "id": 3,
  //     "name": "Bread",
  //     "price": "86",
  //     "added": 0,
  //     "quntity_avl": "30",
  //     "stock_warehouse": "890",
  //     "manufacturing_location": "EL",
  //     "cost": 0,
  //     "hide": 0
  //   },
  //   {
  //     "id": 4,
  //     "name": "Drink",
  //     "price": "33",
  //     "added": 0,
  //     "quntity_avl": "20",
  //     "stock_warehouse": "2332",
  //     "manufacturing_location": "TX",
  //     "cost": 0,
  //     "hide": 0
  //   }
  // ]`;
  // jsonData() {
  //   return this.json;
  // }

  // jsonStudent = `[
  //   {
  //     "id": 1,
  //     "name": "Json Data",
  //     "age": "33",
  //     "manufacturing_location": "Cloud",
  //     "cost": 0,
  //   }
  // ]`

  // jsonDataStudent() {
  //   return this.jsonStudent;
  // }

  // temp = 0;

  // change() {
  //   this.temp++;
  // }

  // send() {
  //   return this.temp;
  // }

  textToShow = "";
  testToShow(str: string) {
    this.textToShow = str;
  }
  sendText() {
    return this.textToShow;
  }

}
