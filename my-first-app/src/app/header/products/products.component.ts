import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetJsonDataService } from './../../get-json-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  ngOnInit(): void {
  }
  // show1 = false;
  // show2 = false;
  // show3 = false;

  // view1() {
  //   if (this.show1 == true) {
  //     this.show1 = false;
  //     return;
  //   }
  //   this.show1 = true;
  // }
  // view2() {
  //   if (this.show2 == true) {
  //     this.show2 = false;
  //     return;
  //   }
  //   this.show2 = true;
  // }
  // view3() {
  //   if (this.show3 == true) {
  //     this.show3 = false;
  //     return;
  //   }
  //   this.show3 = true;
  // }

  // @Output() eventExecutedAdd = new EventEmitter();
  // @Output() eventExecutedRemove = new EventEmitter();

  // addNewItem(){
  //   this.eventExecutedAdd.emit()
  // }
  // removeNewItem(){
  //   this.eventExecutedRemove.emit()
  // }

  // constructor(private getDJon: GetJsonDataService) { }

  // json = this.getDJon.jsonData()

  // styleOrigin = {
  //   display: 'none'
  // }

  // data = JSON.parse(this.json);
  // hideData = {
  //   display: 'none'
  // }
  // addTo(value: any) {
  //   if (this.data[value].quntity_avl == 0) {
  //     return;
  //   }
  //   this.data[value].added++;
  //   this.data[value].quntity_avl--;
  //   this.data[value].cost = this.data[value].price * this.data[value].added;
  //   // this.hideData = { color: 'black' }

  //   for (let i = 0; i < this.data.length; i++) {
  //     if (this.data[value].hide == 0) {
  //       this.data[value].hide = 1
  //     }
  //   }
  // }

  // remove(value: any) {
  //   let temp1 = this.data[value].cost;
  //   let temp2 = this.data[value].cost;
  //   this.data[value].cost = temp1 - temp2 / this.data[value].added;
  //   this.data[value].added--;
  //   this.data[value].quntity_avl++;
  //   if (this.data[value].cost < 1) {
  //     this.data[value].cost = 0
  //     this.data[value].hide = 0
  //   }

  // }


}
