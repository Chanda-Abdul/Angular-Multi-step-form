import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import { StepOnePersonalDetailsComponent } from './components/form/form-steps/step-one-personal-details/step-one-personal-details.component';
import { StepTwoPlanDetailsComponent } from './components/form/form-steps/step-two-plan-details/step-two-plan-details.component';
import { StepThreeAddOnsComponent } from './components/form/form-steps/step-three-add-ons/step-three-add-ons.component';
import { StepFourSummaryComponent } from './components/form/form-steps/step-four-summary/step-four-summary.component';
import { StepFiveConfimComponent } from './components/form/form-steps/step-five-confim/step-five-confim.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { ProgressButtonComponent } from './components/progression-buttons/progress-nav.component';
import { StepTrackerIconsComponent } from './components/step-nav/step-tracker-icons.component';
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [
    AppComponent,
    StepTrackerIconsComponent,
    ProgressButtonComponent,
    FormComponent,
    StepOnePersonalDetailsComponent,
    StepTwoPlanDetailsComponent,
    StepThreeAddOnsComponent,
    StepFourSummaryComponent,
    StepFiveConfimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
