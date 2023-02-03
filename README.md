# Frontend Mentor - Multi-step Form solution
![Design preview for the Multi-step form coding challenge](/src/assets/design/desktop-preview.jpg)

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 
# Frontend Mentor - Multi-step form



## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- [x] Complete each step of the sequence
- [x] See a summary of their selections on the final step and confirm their order
- [x] View the optimal layout for the interface depending on their device's screen size
- [x] See hover and focus states for all interactive elements on the page

## Screenshots
<details>
<summary><b> Mobile Screenshots @ 375px</b></summary>

### Step 1
<img src="src/assets/screens/mobile-step-1.png" width="375px"/>

#### Error Validation
<img src="src/assets/screens/mobile-step-1-error.png" width="375px"/>

### Step 2
<img src="src/assets/screens/mobile-step-2.png" width="375px"/>

### Step 3
<img src="src/assets/screens/mobile-step-3.png" width="375px"/>

### Step 4
<img src="src/assets/screens/mobile-step-4.png" width="375px"/>

### Confirmation
<img src="src/assets/screens/mobile-step-5.png" width="375px"/>

</details>

<details>
<summary><b> Desktop Screenshots @ 1440px</b></summary>

### Step 1
<img src="src/assets/screens/desktop-step-1.png"/>

#### Error Validation
<img src="src/assets/screens/desktop-step-1-error.png"/>

### Step 2
<img src="src/assets/screens/desktop-step-2.png"/>

### Step 3
<img src="src/assets/screens/desktop-step-3.png"/>

### Step 4
<img src="src/assets/screens/desktop-step-4.png"/>

### Confirmation
<img src="src/assets/screens/desktop-step-5.png"/>

</details>

## Links

<b>Solution URL:</b> [here](https://github.com/Chanda-Abdul/Angular-Multi-step-form) | <b>Live Site URL:</b>
[here](https://dazzling-crisp-559db7.netlify.app/)

## My process
### Setup
Initially found it challenging to figure out how to decide how to arrange the form and where state should live. I started with everything inside one form component, but as the component grew it became difficult to keep track of everything, So I ultimately decided to have a <i>`<Form>`([code]() | [live]())</i> component with all of the nested childeren for each step. Each step has a decent amount of functionaly and styling so I decided this was the best approach.
- `<step-two-plan-details>`([code]() | [live]())
  - `<step-two-plan-details>`([code]() | [live]())
  - `<step-three-add-ons.component>`([code]() | [live]())
  - `<step-two-plan-details>`([code]() | [live]())- `<step-two-plan-details>`([code]() | [live]())
  - `<step-two-plan-details>`([code]() | [live]())

## State Management
- I knew that I would like to have seperate components for the <i>`<step-tracker-icons>`([code]() | [live]())</i>, and the <i>`<progression-buttons>`([code]() | [live]())</i> and the <i>`<form>`([code]() | [live]())</i>. Initally I used `@Input()`'s and `@Output()`'s within the form to update the `activeStep` and `stepForm`. 
- I knew that I would later move `activeStep` and `stepForm` to a service, for better readability, maintainabilty, and scalability.
- In `FormService` the `activeStep`piece of state can be viewed and updated with an Observable.  
  ```ts
  private activeStepSubject = new BehaviorSubject<number>(1);
  activeStep$ = this.activeStepSubject.asObservable();
  ...

  goToNextStep(number: number) {
      this.activeStepSubject.next(number + 1);
  }
  ```
- Components can access `activeStep$ ` by subscribing to the Observable
  ```ts
    this.formService.activeStep$.subscribe(
        step => this.activeStep$ = step
      );
  ```
- The reactive `stepForm` also lives within the `FormService` so that it can be viewed and updated by multiple components as necessary
```ts
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
```
### Built with
<img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular icon" height="30" /> <img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" alt="Material UI icon" height="30" /> <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass icon" height="30" /> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS icon" height="30" /> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript icon" height="30" /> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript icon" height="30" /> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML icon" height="30" /> <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify icon" height="30" /> <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma icon" height="30" />


### What I learned
- `FormGroupDirective`
- How to work with Material UI components

- How to use a Service to manage data that can be shared between multiple components


### Continued development
- Things get a bit wonky around the tablet breakpoint of 768px, so I would like to add a few tablet styles. 
- There's not much I would add to this, but this multi-step form would serve as a great tempalte for future projects.



### Useful resources
- [<img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="Youtube icon" /> Split an Angular Reactive Form model into child components ](https://youtu.be/2DOkiQFB5ic) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [<img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" alt="Material UI icon" height="30" /> Material Button toggle](https://material.angular.io/components/button-toggle/overview) - This helped me for XYZ reason. I really liked this pattern and will use it going forward. `<mat-button-toggle>` are on/off toggles with the appearance of a button. 
- [<img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" alt="Material UI icon" height="30" /> Material Checkbox](https://material.angular.io/components/checkbox/overview) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.`<mat-checkbox>` provides the same functionality as a native `<input type="checkbox">` enhanced with Material Design styling and animations.

- [<img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" alt="Material UI icon" height="30" /> Creating a Custom @NgModule for Material Components in Angular](https://armno.medium.com/creating-a-custom-material-module-in-angular-ee6a5e925d30) - To keep AppModule clean, we can create another NgModule that takes care of importing Material modules to use. 
<!-- - [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept. -->

## Author

- Frontend Mentor - [@Chanda-Abdul](https://www.frontendmentor.io/profile/Chanda-Abdul)
- Website - [Chanda Codes](https://chandacodes.com/)
- GitHub - [github.com/Chanda-Abdul](https://github.com/Chanda-Abdul)

