import { Component } from '@angular/core';
import { DatetimeService } from './datetime.service'
import { Observable } from 'rxjs';
import { HttpDataStorageService } from './http-data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  recData: any

  get(data: any) {
    this.recData = data
  }

  constructor(private ht: HttpDataStorageService) { }

  ngOnInit() {
    this.ht.getdata().subscribe((data) => {
      this.get(data);
      // console.log(data);
    });
  }

  show(data: any) {
    this.ht = data;
  }

}

