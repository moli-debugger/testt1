import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPostPageComponent } from './job-post-page/job-post-page.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateInputModule } from '@progress/kendo-angular-dateinputs';
import { IntlModule } from "@progress/kendo-angular-intl";
import { CompanyHomepageComponent } from './company-homepage/company-homepage.component';
import { CompanyNavbarComponent } from './company-navbar/company-navbar.component';
import { RouterModule } from '@angular/router';
import { CompanyCorePageComponent } from './company-core-page/company-core-page.component';
import { ChartsModule } from '@progress/kendo-angular-charts';

import "hammerjs";


@NgModule({
  declarations: [
    JobPostPageComponent,
    CompanyHomepageComponent,
    CompanyNavbarComponent,
    CompanyCorePageComponent
  ],
  imports: [
    CommonModule,
    InputsModule,
    RouterModule,
    LabelModule,
    ReactiveFormsModule,
    FormsModule,
    DateInputModule,
    IntlModule,
    ChartsModule
  ],
  exports: [CompanyCorePageComponent,JobPostPageComponent,CompanyHomepageComponent]
})
export class CompanyModule { }
