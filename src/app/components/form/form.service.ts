import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private activeStepSubject = new BehaviorSubject<number>(1);
  activeStep$ = this.activeStepSubject.asObservable();


  multiStepForm: FormGroup = this.fb.group({
    personalDetails: this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],

    }),
    planDetails: this.fb.group({
      plan: ['arcade', [Validators.required]],
      duration: ['monthly', [Validators.required]],
      planCost: [9],
      totalCost: [9]
    }),
    addOnDetails: this.fb.group({
      service: [false],
      serviceCost: [0],
      storage: [false],
      storageCost: [0],
      customization: [false],
      customizationCost: [0],
    })
  })

  get stepForm(): FormGroup {
    return this.multiStepForm;
  }


  goToNextStep(number: number) {
    this.activeStepSubject.next(number + 1);
    //TO-DO => validate step 1 inputs and add error handling
    //TO-DO => step 2 confirm selection?
    //TO-DO => step 3 confirm selection?

  }
  goBackToPreviousStep(number: number) {
    this.activeStepSubject.next(number - 1);

  }

  constructor(private fb: FormBuilder) { }



  submit() {
    //TO-DO => validate form
    this.goToNextStep(4);
    setTimeout(() => {
      this.activeStepSubject.next(1);
    }, 5000);

  }


}
