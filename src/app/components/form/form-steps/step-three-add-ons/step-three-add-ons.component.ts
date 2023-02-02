import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { addOnOptions } from './addOnOptions.model';

@Component({
  selector: 'app-step-three-add-ons',
  templateUrl: './step-three-add-ons.component.html',
  styleUrls: ['./step-three-add-ons.component.scss']
})
export class StepThreeAddOnsComponent implements OnInit {
  stepForm!: FormGroup;
  addOnOptions = addOnOptions;
  timeFrame: string | any = 'monthly' || 'yearly';
  previousCost = this.rootFormGroup.form.controls['planDetails'];


  constructor(private rootFormGroup: FormGroupDirective) { }


  ngOnInit(): void {
    this.timeFrame = this.previousCost.value.duration;
    this.stepForm = this.rootFormGroup.control.get('addOnDetails') as FormGroup;
    this.updateAddOns();
  }


  updateAddOns() {
    const previousTotalCost = this.previousCost.value.totalCost;

    let serviceCostUpdated = this.stepForm.value.service ? this.addOnOptions[0].timeFrame[this.timeFrame].addToTotal : 0;
    let storageCostUpdated = this.stepForm.value.storage ? this.addOnOptions[1].timeFrame[this.timeFrame].addToTotal : 0;
    let customizationCostUpdated = this.stepForm.value.customization ? this.addOnOptions[2].timeFrame[this.timeFrame].addToTotal : 0;

    this.stepForm.patchValue({
      serviceCost: serviceCostUpdated,
      storageCost: storageCostUpdated,
      customizationCost: customizationCostUpdated,
    })
    this.previousCost.patchValue({
      totalCost: previousTotalCost + serviceCostUpdated + storageCostUpdated + customizationCostUpdated
    })
  }




  toggleAddOn(event: any, addOn: any) {
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
