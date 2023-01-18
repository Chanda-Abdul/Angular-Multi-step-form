import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, Subject, take, tap, pipe, scan } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  // To-Do => create step observable and suscriber
  private _activeStep$ = new BehaviorSubject<number>(1);
  public activeStep$ = this._activeStep$.pipe(scan((previous, increment) => previous + increment));

  personal_step = false;
  plan_step = false;
  add_step = false;
  summary_step = false;
  confirmation_step = false;

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
  get activeStep(): number {
    return Number(this.activeStep$);
  }


  get personal() {
    return this.multiStepForm
    // .personalDetails.controls;
  }

  // get plan() {
  //   return this.planDetails.controls;
  // }
  // get addOns() {
  //   return this.addOnDetails.controls;
  // }
  // get summary() {
  //   return
  //   this.personalDetails.controls
  //   this.planDetails.controls
  //   this.addOnDetails.controls;
  // }

  // readonly


  constructor(private fb: FormBuilder) { }

  // this.stepEmitterSubscription =
  // this.stepEmitter$.pipe(take(4))
  //   .subscribe({
  //     next: (value) => {

  //     },
  //     complete: () => { }
  //   })amount: number
  // getActiveStep() {
  //   return this.activeStep;
  // }
  nextStep() {

    this._activeStep$.next(1)
    // let next = +this.activeStep+1;
    // this.currentStep = this.currentStep++;
    // // console.log(this.activeStep)
    // console.log(this.multiStepForm)
    // if (this.activeStep == 1) {
    //   this.personal_step = true;

    //   if (this.personalDetails.valid) {
    //     this.activeStep++
    //     this.personal_step = false;
    //   }
    //   if (this.personalDetails.invalid) {
    //     // TO-Do => handle error
    //     return
    //   }

    // }

    // if (this.activeStep == 2) {
    //   this.plan_step = true;

    //   if (this.planDetails.valid) {
    //     this.activeStep++;
    //     this.plan_step = false;
    //   }
    //   if (this.planDetails.invalid) {
    //     // TO-DO => handle error
    //     return
    //   }
    // }

    // if (this.activeStep == 3) {
    //   this.add_step = true;

    //   if (this.addOnDetails.valid) {
    //     this.activeStep++;
    //     this.add_step = false;
    //   }
    //   if (this.addOnDetails.invalid) {
    //     // TO-DO => handle error
    //     return
    //   }
    // }

    // if (this.activeStep == 4) {
    //   this.summary_step = true;

    //   // if (this.addOnDetails.valid) {
    //   //   this.activeStep++;
    //   //   this.summary_step= false;
    //   // }
    //   // if (this.addOnDetails.invalid) {
    //   //   // TO-DO => handle error
    //   //   return
    //   // }
    // }

    // if (this.activeStep == 5) {
    //   this.confirmation_step = true;

    //   // if (this.addOnDetails.valid) {
    //   //   this.activeStep++;
    //   //   this.summary_step= false;
    //   // }
    //   // if (this.addOnDetails.invalid) {
    //   //   // TO-DO => handle error
    //   //   return
    //   // }
    // }

  }

  goBack() {
    // if (this.activeStep == 2) {
    //   this.personal_step = true;
    //   this.plan_step = false;
    // }
    // if (this.activeStep == 3) {
    //   this.plan_step = true;
    //   this.add_step = false;
    // }
    // if (this.activeStep == 4) {
    //   this.add_step = true;
    //   this.summary_step = false;
    // }
    // if (this.activeStep == 5) {
    //   this.summary_step = true;
    //   this.confirmation_step = false;
    // }
    // this.activeStep--;
  }



  submit() {
    setTimeout(() => {
      // this.activeStep = 1;
      console.log("Hello from setTimeout");
    }, 1000);
    // this.activeStep.emit(this.activeStep);
  }


}
