import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // @Input() countIn=0;

  @Output() textOut = new EventEmitter<string>();

  addNewItem(value:string){
    this.textOut.emit(value)
  }
}
