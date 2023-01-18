import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-nav',
  templateUrl: './step-nav.component.html',
  styleUrls: ['./step-nav.component.scss']
})
export class StepNavComponent implements OnInit {
// To-Do => add step Obseravble from service

  @Input() step: number;

  ngOnInit(): void {
  //  this.getCurrentStep(1)
  //   console.log(this.step)
  }

  getCurrentStep(step: number) {
    if (step === this.step) {
      console.log(step, this.step)
      return 'step selected'
    } else {
      return 'step'
    }
  }
}
