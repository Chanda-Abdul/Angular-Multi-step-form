import { Component } from '@angular/core';

@Component({
  selector: 'app-step-nav',
  templateUrl: './step-nav.component.html',
  styleUrls: ['./step-nav.component.scss']
})
export class StepNavComponent {
  steps = {
    1: "Your info",
    2: "Select plan",
    3: "Add-ons",
    4: "Summary",
  }

  currentStep = 1;

}
