import { Component,Input,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],

})
export class FormComponent implements OnInit {

  stepForm!: FormGroup;

  personalDetails!: FormGroup;
  planDetails!: FormGroup;
  addOnDetails!: FormGroup;

  personal_step = false;
  plan_step = false;
  add_step = false;
  summary_step = false;
  confirmation_step = false;

  activeStep: number = 1;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // console.log(this.stepForm)

    this.planDetails = this.fb.group({
      plan: ['', [Validators.required]],
      duration: ['', [Validators.required]],
    });

    this.addOnDetails = this.fb.group({
      plan: ['', [Validators.required]],
      duration: ['', [Validators.required]],
    });

// this.stepForm = this.fb.group({
//       this.personalDetails({});
//     })

    // this.stepForm = this.fb.group({
    //   infoFormGroup: this.fb.group({

    //   }),
    //   planFormGroup: this.fb.group({
    //   }),
    //   addOnFormGroup: this.fb.group({
    //   })
    // })
    // ,
    // dateGroup: this.fb.group({
    //   //   month: ['MM' || this.months, Validators.required],
    //   //   day: ['DD' || this.days, Validators.required],
    //   //   year: ['YYYY' || this.years, Validators.required],
    // }),
    //
    // const nameControl = this.stepForm.get('name');
    // nameControl.valueChanges.pipe(
    //   debounceTime(1000)
    // ).subscribe(
    //   (value: any) =>
    //     this.setNameValidationErrorMessage(nameControl));


    // this.addOns = this.fb.group({
    //   online: false,
    //   larger: false,
    //   custom: false,
    // });
  }

  get personal() {
    return this.personalDetails.controls;
  }

  get plan() {
    return this.planDetails.controls;
  }
  get addOns() {
    return this.addOnDetails.controls;
  }
  get summary() {
    return
    this.personalDetails.controls
    this.planDetails.controls
    this.addOnDetails.controls;
  }



  nextStep() {
    this.activeStep++;
console.log(this.activeStep)
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
    if(this.activeStep == 2){
      this.personal_step = true;
      this.plan_step = false;
    }
    if(this.activeStep == 3){
      this.plan_step = true;
      this.add_step = false;
    }
    if(this.activeStep == 4){
      this.add_step = true;
      this.summary_step = false;
    }
    if(this.activeStep == 5){
      this.summary_step = true;
      this.confirmation_step = false;
    }
    this.activeStep--;
  }



  confirmAndSubmitForm() {
    setTimeout(() => {
      this.activeStep = 1;
      console.log("Hello from setTimeout");
    }, 1000);
    // this.currentStep.emit(this.activeStep);
  }





  // submit() { }
}


  //



  // infoFormGroup: FormGroup | any;


  // addOns: FormGroup | any;






  //

