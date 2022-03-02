import { Component } from '@angular/core';
import { DatetimeService } from './datetime.service'
import { Observable } from 'rxjs';
import { HttpDataStorageService } from './http-data-storage.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // recData: any

  // get(data: any) {
  //   this.recData = data
  // }

  // constructor(private ht: HttpDataStorageService) { }

  // ngOnInit() {
  //   this.ht.getdata().subscribe((data) => {
  //     this.get(data);
  //     // console.log(data);
  //   });
  // }

  // show(data: any) {
  //   this.ht = data;
  // }

  // using dbOne.json for below
  constructor(private ht: HttpDataStorageService) { }
  ginput=1
  recData: any
  onSubmit() {
    console.log(this.ginput);
    this.ht.get(this.ginput).subscribe((data) => {
      this.getData(data);
    });
  }
  getData(data: any) {
    this.recData = data
    console.log(this.recData);
  }
  ngOnInit() {
  }
}

