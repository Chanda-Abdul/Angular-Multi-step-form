import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-progress-nav',
  templateUrl: './progress-nav.component.html',
  styleUrls: ['./progress-nav.component.scss']
})
export class ProgressNavComponent  {
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
