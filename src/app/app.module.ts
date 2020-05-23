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
// import { DesignationViewComponent } from './Component/designation-view/designation-view.component';
// import { DepartmentViewComponent } from './Component/department-view/department-view.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { DesignationViewComponent } from './Component/DesignationPages/designation-view/designation-view.component';
import { DepartmentViewComponent } from './Component/DepartmentPages/department-view/department-view.component';
import { DepartmentUpdateComponent } from './Component/DepartmentPages/department-update/department-update.component';
import { DesignationUpdateComponent } from './Component/DesignationPages/designation-update/designation-update.component';
import { DepartmentAddComponent } from './Component/DepartmentPages/department-add/department-add.component';
import { DesignationAddComponent } from './Component/DesignationPages/designation-add/designation-add.component';

@NgModule({
  declarations: [
    AppComponent,
    GetEmployeeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    DesignationViewComponent,
    DepartmentViewComponent,
    HomePageComponent,
    DepartmentAddComponent,
    DepartmentUpdateComponent,
    DesignationUpdateComponent,
    DesignationAddComponent
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
