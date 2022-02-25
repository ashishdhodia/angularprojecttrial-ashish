import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // textForFooter = "This is text for footer from header"

  // countOut = 0
  // increase() {
  //   this.countOut += 1
  // }
  // decrease() {
  //   if (this.countOut == 0) {
  //     return;
  //   }
  //   this.countOut -= 1
  // }

  // @Input() numCountIn = 0;
  // count=0;
  // productName = "";
  // addTo(nameProduct: any) {
  //   this.productName = nameProduct;
  //   this.count++;
  // console.log(this.productName);
  // }


  // count = 0;

  // addTo() {
  //   this.count++;
  // }

  // removeTo() {
  //   if (this.count == 0) {
  //     return;
  //   }
  //   this.count--;
  // }
}
