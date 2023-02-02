import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from './form.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],

})
export class FormComponent implements OnInit {
  stepForm!: FormGroup;
  activeStep$: number;

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.stepForm = this.formService.stepForm;

    this.formService.activeStep$.subscribe(
      step => this.activeStep$ = step
    );
  }


  confirmAndSubmitForm() {
    this.formService.submit();

  }
}


