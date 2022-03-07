import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyCorePageComponent } from 'src/modules/company/company-core-page/company-core-page.component';
import { CompanyHomepageComponent } from 'src/modules/company/company-homepage/company-homepage.component';
import { JobPostPageComponent } from 'src/modules/company/job-post-page/job-post-page.component';
import { SeekerHomeComponent } from 'src/modules/seekers/seeker-home/seeker-home.component';

const routes: Routes = [
  {
    path: '',
    component:SeekerHomeComponent
  },
  {
    path:'company',
    component:CompanyCorePageComponent,
    children:[{
      path:'jobPost',
      component:JobPostPageComponent
    },
  {
    path:'',
    component:CompanyHomepageComponent
  }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
