import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, NgForm, FormBuilder, FormGroup, FormGroupDirective, FormGroupName, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-step-one-personal-details',
  templateUrl: './step-one-personal-details.component.html',
  styleUrls: ['./step-one-personal-details.component.scss']
})

export class StepOnePersonalDetailsComponent implements OnInit, OnDestroy {
  stepForm!: FormGroup;

  @Input() formGroupName!: string;

  nameValidationErrorMessage!: string;

  private nameValidationMessages: any = {
    hint: 'Please enter your name.',
    required: 'Name is <strong>required</strong>',
    minlength: 'Name must be longer than 4 characters.'
  }

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.stepForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
console.log(this.stepForm.controls['name'])
  }

  ngOnDestroy(): void { }
  // setNameValidationErrorMessage(n: AbstractControl): void {
  //   this.nameValidationErrorMessage = '';
  //   if ((n.touched || n.dirty) && n.errors) {
  //     this.nameValidationErrorMessage = Object.keys(n.errors).map(
  //       key => this.nameValidationMessages[key]).join(' ')
  //   }
  // }
}

