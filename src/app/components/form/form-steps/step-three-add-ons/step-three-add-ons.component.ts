import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-three-add-ons',
  templateUrl: './step-three-add-ons.component.html',
  styleUrls: ['./step-three-add-ons.component.scss']
})
export class StepThreeAddOnsComponent  implements OnInit{
  @Input() timeFrame: string = 'Monthly' || 'Yearly';
  @Input() totalCost: number = 0;

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

  ngOnInit(): void { this.timeFrame = 'Monthly'}
  updateTotal(event: any, cost: any) {
    if (event === true) {
      this.totalCost = this.totalCost + cost
    }
    else {
      this.totalCost = this.totalCost - cost
    }
    console.log(event, cost, this.totalCost)
  }
}
