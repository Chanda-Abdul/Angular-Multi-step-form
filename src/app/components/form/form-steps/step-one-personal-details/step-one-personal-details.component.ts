import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormGroupDirective, FormGroupName, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-one-personal-details',
  templateUrl: './step-one-personal-details.component.html',
  styleUrls: ['./step-one-personal-details.component.scss']
})
export class StepOnePersonalDetailsComponent implements OnInit, OnDestroy {
  stepForm!: FormGroup;

  @Input() formGroupName!: string;

  // current: any;
  // name = 'fake name';
  // email = 'fake email';
  // phone = '555-555-5555';
  nameValidationErrorMessage!: string;

  private nameValidationMessages: any = {
    required: 'Please enter your name.',
    minlength: 'Name must be longer than 4 characters.'
  }

  constructor(  private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {


    this.stepForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
// console.log(this.rootFormGroup.form.get('personalDetails').value)
  }

  ngOnDestroy(): void {}
  setNameValidationErrorMessage(n: AbstractControl): void {
    this.nameValidationErrorMessage = '';
    if ((n.touched || n.dirty) && n.errors) {
      this.nameValidationErrorMessage = Object.keys(n.errors).map(
        key => this.nameValidationMessages[key]).join(' ')
    }
  }
}

