import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-step-two-plan-details',
  templateUrl: './step-two-plan-details.component.html',
  styleUrls: ['./step-two-plan-details.component.scss']
})

export class StepTwoPlanDetailsComponent implements OnInit {

  stepForm!: FormGroup;
  planType: string = 'arcade' || 'advanced' || 'pro';
  timeFrame: string = 'monthly' || 'yearly';
  totalCost = 0;
  checked = false;

  planOptions = [
    {
      plan: 'arcade',
      icon: '/assets/images/icon-arcade.svg',
      duration: {
        monthly: {
          price: '$9/mo',
          addToTotal: 9,
          promo: '',
        },
        yearly: {
          price: '$90/yr',
          addToTotal: 90,
          promo: '2 months free',
        },
      },
    },
    {
      plan: 'advanced',
      icon: '/assets/images/icon-advanced.svg',
      duration: {
        monthly: {
          price: '$12/mo',
          addToTotal: 12,
          promo: '',
        },
        yearly: {
          price: '$120/yr',
          addToTotal: 120,
          promo: '2 months free',
        },
      },
    },
    {
      plan: 'pro',
      icon: '/assets/images/icon-pro.svg',
      duration: {
        monthly: {
          price: '$15/mo',
          addToTotal: 15,
          promo: '',
        },
        yearly: {
          price: '$150/yr',
          addToTotal: 150,
          promo: '2 months free',
        },
      },
    },
  ];

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.stepForm = this.rootFormGroup.control.get('planDetails') as FormGroup;
    this.updatePlanType(this.planType);
  }


  updatePlanType(plan: string, cost?: number) {
    this.planType = plan;
    this.totalCost = cost
    this.stepForm.patchValue({
      plan: plan,
      planCost: cost,
      totalCost: cost
    })
  }

  updateDuration() {
    const planDetails = this.planOptions[this.planOptions.findIndex(p => p.plan == this.planType)].duration[this.timeFrame];
    this.stepForm.patchValue({
      plan: this.planType
    })
    if (this.checked === false) {
      this.stepForm.patchValue({
        duration: 'monthly',
        planCost: planDetails.addToTotal,
        totalCost: planDetails.addToTotal
      })


    } if (this.checked === true) {
      this.stepForm.patchValue({
        duration: 'yearly',
        planCost: planDetails.addToTotal,
        totalCost: planDetails.addToTotal
      })
    }
  }

  toggleDuration() {
    this.checked = !this.checked;
    if (this.checked === false) {
      this.timeFrame = 'monthly'
      this.updateDuration();
    }
    if (this.checked === true) {
      this.timeFrame = 'yearly';
      this.updateDuration();
    }
  }

  ngOnDestroy(): void {
    //TO DO => validate and save form plan details
  }
}
