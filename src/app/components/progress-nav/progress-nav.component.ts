import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-progress-nav',
  templateUrl: './progress-nav.component.html',
  styleUrls: ['./progress-nav.component.scss']
})
export class ProgressNavComponent {
  @Output() currentStep = new EventEmitter<Number>();
  step = 1;
  // console.log(this.step);
  goBack() {
    this.step = this.step - 1;
    this.currentStep.emit(this.step);
  }

  nextStep() {
    this.step = this.step + 1;
    this.currentStep.emit(this.step);
  }

  confirm() {
    setTimeout(() => {
      this.step = 1
      console.log("Hello from setTimeout");
    }, 1000);
    this.currentStep.emit(this.step);
  }
}
