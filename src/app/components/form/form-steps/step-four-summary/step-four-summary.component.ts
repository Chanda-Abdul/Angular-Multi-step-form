import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-four-summary',
  templateUrl: './step-four-summary.component.html',
  styleUrls: ['./step-four-summary.component.scss']
})
export class StepFourSummaryComponent {
@Input() totalCost = 0;
@Input() name: string = '';
@Input() email: string = '';
@Input() phone: string = '';
}
