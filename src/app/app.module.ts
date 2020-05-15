import { RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './Component/add-employee/add-employee.component';
import { CrudService } from './crud.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetEmployeeComponent } from './Component/get-employee/get-employee.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './Component/update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    GetEmployeeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
