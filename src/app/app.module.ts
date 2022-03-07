import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AdminModule} from 'src/modules/admin/admin.module'
import { SeekersModule } from 'src/modules/seekers/seekers.module';
import { LabelModule } from '@progress/kendo-angular-label';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { CompanyModule } from 'src/modules/company/company.module';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';








@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    SeekersModule,
    LabelModule,
    BrowserAnimationsModule,
    InputsModule,
    CompanyModule,
    DateInputsModule,
    ChartsModule,
    DropDownsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
