import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { FormService } from '../../form.service';

@Component({
  selector: 'app-step-four-summary',
  templateUrl: './step-four-summary.component.html',
  styleUrls: ['./step-four-summary.component.scss']
})
export class StepFourSummaryComponent implements OnInit {
  @Input() stepForm!: FormGroup;

  personalDetails = this.rootFormGroup.form.get('personalDetails').value;
  planDetails = this.rootFormGroup.form.get('planDetails').value;
  addOnDetails = this.rootFormGroup.form.get('addOnDetails').value;

  constructor(private rootFormGroup: FormGroupDirective, private formService: FormService) { }
  ngOnInit(): void {
      }

  changePlan() {
    this.formService.goBackToPreviousStep(3)
  }
}
