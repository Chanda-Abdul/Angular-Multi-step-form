import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepNavComponent } from './components/step-nav/step-nav.component';
import { ProgressNavComponent } from './components/progress-nav/progress-nav.component';
import { FormComponent } from './components/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// TO DO => move to material.module
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { StepOnePersonalDetailsComponent } from './components/form/form-steps/step-one-personal-details/step-one-personal-details.component';
import { StepTwoPlanDetailsComponent } from './components/form/form-steps/step-two-plan-details/step-two-plan-details.component';
import { StepThreeAddOnsComponent } from './components/form/form-steps/step-three-add-ons/step-three-add-ons.component';
import { StepFourSummaryComponent } from './components/form/form-steps/step-four-summary/step-four-summary.component';
import { StepFiveConfimComponent } from './components/form/form-steps/step-five-confim/step-five-confim.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    StepNavComponent,
    ProgressNavComponent,
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
    MatSlideToggleModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
