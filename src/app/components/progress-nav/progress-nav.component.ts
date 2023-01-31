import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '../form/form.service';

@Component({
  selector: 'app-progress-nav',
  templateUrl: './progress-nav.component.html',
  styleUrls: ['./progress-nav.component.scss']
})
export class ProgressNavComponent implements OnInit {
stepForm!: FormGroup;
  // To-Do => add step observable form service
  activeStep: number = 1;
  // TO-Do => fix step emitter
  @Output() stepChanged: EventEmitter<number> = new EventEmitter<number>();



 ngOnInit(): void {
    this.stepForm = this.formService.stepForm;
    // console.log(this.activeStep)

  }

  constructor(private formService: FormService) { }

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
  // To-Do => add step tracking observable from service
 // To-Do =>  move from form component


  // ;
  // goBack() {
  //   this.step = this.step - 1;
  //   this.currentStep.emit(this.step);
  // }

  // nextStep() {
  //   this.step = this.step + 1;
  //   this.currentStep.emit(this.step);
  // }

  // confirm() {
  //   setTimeout(() => {
  //     this.step = 1
  //     console.log("Hello from setTimeout");
  //   }, 1000);
  //   // this.currentStep.emit(this.step);
  // }
}
