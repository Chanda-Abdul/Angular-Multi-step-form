import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '../form/form.service';

@Component({
  selector: 'app-progression-buttons',
  templateUrl: './progression-buttons.component.html',
  styleUrls: ['./progression-buttons.component.scss']
})
export class ProgressButtonComponent implements OnInit {
  stepForm!: FormGroup;
  activeStep$: number;

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.stepForm = this.formService.stepForm;

    this.formService.activeStep$.subscribe(
      step => this.activeStep$ = step
    );
  }

  nextStep() {
    this.formService.goToNextStep(this.activeStep$);

  }
  goBack() {
    this.formService.goBackToPreviousStep(this.activeStep$);
  }

  confirmAndSubmitForm() {
    this.formService.submit();

  }
}
