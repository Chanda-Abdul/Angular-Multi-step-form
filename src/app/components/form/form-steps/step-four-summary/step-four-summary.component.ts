import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-step-four-summary',
  templateUrl: './step-four-summary.component.html',
  styleUrls: ['./step-four-summary.component.scss']
})
export class StepFourSummaryComponent  implements OnInit{
  @Input() stepForm!: FormGroup;

  personalDetails = this.rootFormGroup.form.get('personalDetails').value;
  planDetails = this.rootFormGroup.form.get('planDetails').value;
  addOnDetails = this.rootFormGroup.form.get('addOnDetails').value;

// @Input() totalCost = 0;
// @Input() name: string = '';
// @Input() email: string = '';
// @Input() phone: string = '';
constructor(  private rootFormGroup: FormGroupDirective) { }
ngOnInit(): void{
  console.log(this.personalDetails.name,this.planDetails, this.addOnDetails.service)
}
}
