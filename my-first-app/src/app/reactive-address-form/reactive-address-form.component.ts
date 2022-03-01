import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-address-form',
  templateUrl: './reactive-address-form.component.html',
  styleUrls: ['./reactive-address-form.component.css']
})
export class ReactiveAddressFormComponent implements OnInit {

  // constructor() { }
  constructor(private fB: FormBuilder) { }

  myForm: any;
  str1 = ""
  str2 = ""
  cost = 1000
  onSubmit(form: FormGroup) {
    console.log(form.value);
    // console.log(form);
    let date1 = new Date(form.value.departDate);
    let date2 = new Date(form.value.returnDate);
    // console.log(date1);

    let time = date2.getTime() - date1.getTime();
    let days = time / (1000 * 3600 * 24);

    this.str1 = `Total ${days} days journey!`;
    this.str2 = `Total cost will be $${this.cost * days}.`;
  }



  ngOnInit(): void {
    // this.myForm = new FormGroup({
    //   name: new FormControl('ABC'),
    //   email: new FormControl('ABC@XYZ.COM'),
    //   age: new FormControl('20'),
    //   mobile: new FormControl('0000000000'),
    //   city: new FormControl('PQR'),
    //   zip: new FormControl('000000')
    // });

    this.myForm = this.fB.group({
      name: ['ABC', [Validators.required]],
      email: ['ABC@XYZ.COM', [Validators.required, Validators.email]],
      age: ['20', [Validators.required, Validators.pattern("^[0-9]*$")]],
      mobile: ['0000000000', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      city: ['PQR', [Validators.required]],
      zip: ['000000', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(6), Validators.maxLength(6)]],
      departDate: ['', [Validators.required]],
      returnDate: ['', [Validators.required]]
    });
  }

}
