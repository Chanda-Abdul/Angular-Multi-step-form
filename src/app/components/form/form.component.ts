import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { FormService } from './form.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],

})
export class FormComponent implements OnInit {

  stepForm!: FormGroup;
// To-Do => add step observable form service
  activeStep: number =1;
  // TO-Do => fix step emitter
  @Output() stepChanged: EventEmitter<number> = new EventEmitter<number>();


  constructor(private fb: FormBuilder, private formService: FormService) { }

  ngOnInit(): void {
    this.stepForm = this.formService.stepForm;
    // console.log(this.activeStep)

  }

  // To-Do => move to service
  nextStep() {
    this.stepChanged.emit(this.activeStep++);

  }
  goBack() {
    this.stepChanged.emit(this.activeStep--);
  }

  confirmAndSubmitForm() {
    this.formService.submit();
    this.stepChanged.emit(this.activeStep++);
    // To-Do => add Timeout
  }
}


