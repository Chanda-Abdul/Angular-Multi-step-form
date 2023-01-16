import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],

})
export class FormComponent implements OnInit {

  stepForm: FormGroup | any;

  infoFormGroup: FormGroup | any;


  addOns: FormGroup | any;
  activeStep: number = 1;
  current: any;
  name = 'fake name';
  email = 'fake email';
 phone = '555-555-5555';
  nameValidationErrorMessage!: string;

  private nameValidationMessages: any = {
    required: 'Please enter your name.',
    minlength: 'Name must be longer than 4 characters.'
  }
  @Input() timeFrame: string = 'Monthly' || 'Yearly';
  totalCost = 0;
  planOptions: any = {
    Monthly:
      [
        { icon: '/assets/images/icon-arcade.svg', type: 'Arcade', price: '$9/mo', promo: '', addToTotal: 9 },
        { icon: '/assets/images/icon-advanced.svg', type: 'Advanced', price: '$12/mo', promo: '', addToTotal: 12 },
        { icon: '/assets/images/icon-pro.svg', type: 'Pro', price: ' $15/mo', promo: '', addToTotal: 15 }]
    ,
    Yearly: [
      { icon: '/assets/images/icon-arcade.svg', type: 'Arcade', price: '$90/yr', promo: '2 months free', addToTotal: 90 },
      { icon: '/assets/images/icon-advanced.svg', type: 'Advanced', price: '$120/yr', promo: '2 months free', addToTotal: 120 },
      { icon: '/assets/images/icon-pro.svg', type: 'Pro', price: ' $150/yr', promo: '2 months free', addToTotal: 150 }],

  };



  checked = false;
  addOnOptions: any = [
    {
      addOn: 'Online service', desc: 'Access to multiplayer games', formName: 'online', timeFrame: {
        Monthly: {
          price: '+$1/mo', addToTotal: 1,
        }, Yearly: {
          price: '+$10/yr', addToTotal: 10,
        },
      },
    },
    {
      addOn: 'Larger storage', desc: 'Extra 1TB of cloud save', formName: 'larger', timeFrame: {
        Monthly: {
          price: '+$2/mo', addToTotal: 2,
        },
        Yearly: {
          price: '+$20/yr', addToTotal: 20,
        },
      },
    },
    {
      addOn: 'Customizable Profile', desc: 'Custom theme on your profile', formName: 'custom', timeFrame: {
        Monthly: {
          price: '+$2/mo', addToTotal: 2,
        },
        Yearly: {
          price: '+$20/yr', addToTotal: 20,
        },
      },
    },
  ];



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.stepForm)
    this.stepForm = this.fb.group({
     infoFormGroup: this.fb.group({
        name: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.minLength(10)]],

      }),
      planFormGroup: this.fb.group({
        plan: ['', [Validators.required]],
        duration: ['', [Validators.required]],
      }),
      addOnFormGroup: this.fb.group({
        plan: ['', [Validators.required]],
        duration: ['', [Validators.required]],
      })
    })
    // ,
    // dateGroup: this.fb.group({
    //   //   month: ['MM' || this.months, Validators.required],
    //   //   day: ['DD' || this.days, Validators.required],
    //   //   year: ['YYYY' || this.years, Validators.required],
    // }),
    //
    const nameControl = this.stepForm.get('name');
    nameControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      (value: any) =>
        this.setNameValidationErrorMessage(nameControl));


    this.addOns = this.fb.group({
      online: false,
      larger: false,
      custom: false,
    });
  }
  goBack() {
    this.activeStep = this.activeStep - 1;
    // this.currentStep.emit(this.activeStep);
  }

  nextStep() {
    this.activeStep = this.activeStep + 1;
    // this.currentStep.emit(this.activeStep);
  }

  confirm() {
    setTimeout(() => {
      this.activeStep = 1
      console.log("Hello from setTimeout");
    }, 1000);
    // this.currentStep.emit(this.activeStep);
  }

  setNameValidationErrorMessage(n: AbstractControl): void {
    this.nameValidationErrorMessage = '';
    if ((n.touched || n.dirty) && n.errors) {
      this.nameValidationErrorMessage = Object.keys(n.errors).map(
        key => this.nameValidationMessages[key]).join(' ')
    }
  }

  isSlideChecked() {
    this.checked = !this.checked
    // console.log(this.timeFrame)
    if (this.checked === false) {
      this.timeFrame = 'Monthly'

    }
    if (this.checked === true) {
      this.timeFrame = 'Yearly';
    }
  }
  setTotal(cost: any) {
    this.totalCost = cost;
    console.log(cost, this.totalCost)
  }
  updateTotal(event: any, cost: any) {
    if (event === true) {
      this.totalCost = this.totalCost + cost
    }
    else {
      this.totalCost = this.totalCost - cost
    }
    console.log(event, cost, this.totalCost)
  }
  submit() { }
}
