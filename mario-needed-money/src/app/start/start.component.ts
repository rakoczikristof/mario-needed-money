import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  minNameLength = 5;

  nameForm: FormGroup;
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(this.minNameLength)
  ]);

  constructor(private formBuilder: FormBuilder) {
    this.nameForm = this.formBuilder.group(this.nameFormControl);
  }



  ngOnInit() {

  }

  onSubmit() {
    if(this.nameForm.invalid) {
      return;
    }

    // TO-DO 

  }



}
