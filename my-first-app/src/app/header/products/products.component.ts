import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

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



}
