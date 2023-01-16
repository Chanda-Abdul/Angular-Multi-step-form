import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-one-personal-details',
  templateUrl: './step-one-personal-details.component.html',
  styleUrls: ['./step-one-personal-details.component.scss']
})
export class StepOnePersonalDetailsComponent implements OnInit {
  personalDetails!: FormGroup;

  current: any;
  name = 'fake name';
  email = 'fake email';
  phone = '555-555-5555';
  nameValidationErrorMessage!: string;

  private nameValidationMessages: any = {
    required: 'Please enter your name.',
    minlength: 'Name must be longer than 4 characters.'
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.personalDetails = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  setNameValidationErrorMessage(n: AbstractControl): void {
    this.nameValidationErrorMessage = '';
    if ((n.touched || n.dirty) && n.errors) {
      this.nameValidationErrorMessage = Object.keys(n.errors).map(
        key => this.nameValidationMessages[key]).join(' ')
    }
  }
}

