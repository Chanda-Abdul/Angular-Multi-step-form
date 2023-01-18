import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-step-three-add-ons',
  templateUrl: './step-three-add-ons.component.html',
  styleUrls: ['./step-three-add-ons.component.scss']
})
export class StepThreeAddOnsComponent implements OnInit {
  stepForm!: FormGroup;

  @Input() timeFrame: string | any = 'monthly' || 'yearly';
  @Input() totalCost: number = 0;
  previousCost = this.rootFormGroup.form.controls['planDetails'];

  addOnOptions = [
    {
      addOn: 'Online service', desc: 'Access to multiplayer games', formName: 'service', timeFrame: {
        monthly: {
          price: '+$1/mo', addToTotal: 1,
        },
        yearly: {
          price: '+$10/yr', addToTotal: 10,
        },
      },
    },
    {
      addOn: 'Larger storage', desc: 'Extra 1TB of cloud save', formName: 'storage', timeFrame: {
        monthly: {
          price: '+$2/mo', addToTotal: 2,
        },
        yearly: {
          price: '+$20/yr', addToTotal: 20,
        },
      },
    },
    {
      addOn: 'Customizable Profile', desc: 'Custom theme on your profile', formName: 'customization', timeFrame: {
        monthly: {
          price: '+$2/mo', addToTotal: 2,
        },
        yearly: {
          price: '+$20/yr', addToTotal: 20,
        },
      },
    },
  ];
  constructor(private rootFormGroup: FormGroupDirective) { }


  ngOnInit(): void {
    this.timeFrame = this.previousCost.value.duration;
    this.stepForm = this.rootFormGroup.control.get('addOnDetails') as FormGroup;

    // TO-Do => Check if add ons were previously selected

  }

  updateAddOns(event: any, addOn: any) {
    const previousTotalCost = this.previousCost.value.totalCost
    let addOnCost = this.addOnOptions[this.addOnOptions.findIndex(a => a.formName == addOn)].timeFrame[this.timeFrame].addToTotal;

    if (event.checked === true) {
      this.stepForm.patchValue({
        [addOn]: true,
        [addOn.concat('Cost')]: addOnCost,
      })
      this.previousCost.patchValue({
        totalCost: previousTotalCost + addOnCost
      })
    }

    if (event.checked === false) {
      this.stepForm.patchValue({
        [addOn]: false,
        [addOn.concat('Cost')]: 0,
      })
      this.previousCost.patchValue({
        totalCost: previousTotalCost - addOnCost
      })
    }

  }
}
