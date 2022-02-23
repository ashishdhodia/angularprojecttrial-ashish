import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  count=0;
  fillfield=""
  imgUrl = "./assets/user.jpg"
  temp (){
    this.count += 1;
    this.fillfield = `Temp text ${this.count}`;
  }
}
