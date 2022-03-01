import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fB: FormBuilder) { }

  myForm: any;

  onSubmit(form: FormGroup) {
    console.log(form.value);
    console.log(form);

  }

  ngOnInit(): void {
    // this.myForm = new FormGroup({
    //   name: new FormControl('Jim'),
    //   email: new FormControl(''),
    //   city: new FormControl(''),
    //   zip: new FormControl('')
    // });

    this.myForm = this.fB.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      city: ['', [Validators.required]],
      zip: ['', [Validators.required, Validators.maxLength(6)]]
    });
  }

}
