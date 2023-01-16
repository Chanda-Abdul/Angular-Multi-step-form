import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-step-two-plan-details',
  templateUrl: './step-two-plan-details.component.html',
  styleUrls: ['./step-two-plan-details.component.scss']
})
export class StepTwoPlanDetailsComponent {
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

  @Input() timeFrame: string = 'Monthly' || 'Yearly';
  @Output() totalCost = 0;
  checked = false;
  setTotal(cost: any) {
    this.totalCost = cost;
    console.log(cost, this.totalCost)
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


}
