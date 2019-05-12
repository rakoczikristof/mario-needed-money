import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
	selector: 'app-start',
	templateUrl: './start.component.html',
	styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
	minNameLength = 5;
	router: Router;

	nameForm: FormGroup;
	nameFormControl = new FormControl('', [
	Validators.required,
		Validators.minLength(this.minNameLength)
	]);

	constructor(private formBuilder: FormBuilder, _router: Router) {
		this.nameForm = this.formBuilder.group(this.nameFormControl);
		this.router = _router;
	}



	ngOnInit() {

	}

	onSubmit() {
		if(this.nameFormControl.invalid) {
			return;
		}

		var inputName = this.nameFormControl.value;

		localStorage.setItem("name", JSON.stringify(inputName));

		console.log("Inputname: " + inputName);
		console.log("Localstorage set!");

		localStorage.setItem("coins", JSON.stringify(0));
		this.router.navigateByUrl('/play');
	}



}
