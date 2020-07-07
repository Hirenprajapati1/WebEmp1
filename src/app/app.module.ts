// import { AuthInterceptor } from './Component/auth/auth.interceptor';
import { UpdateEmployeeComponent } from './Component/EmployeePages/update-employee/update-employee.component';
import { AddEmployeeComponent } from './Component/EmployeePages/add-employee/add-employee.component';
import { GetEmployeeComponent } from './Component/EmployeePages/get-employee/get-employee.component';
import { RouterModule } from '@angular/router';
// import { AddEmployeeComponent } from './Component/add-employee/add-employee.component';
import { CrudService } from './crud.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { GetEmployeeComponent } from './Component/get-employee/get-employee.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { UpdateEmployeeComponent } from './Component/update-employee/update-employee.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { DesignationViewComponent } from './Component/DesignationPages/designation-view/designation-view.component';
import { DepartmentViewComponent } from './Component/DepartmentPages/department-view/department-view.component';
import { DepartmentUpdateComponent } from './Component/DepartmentPages/department-update/department-update.component';
import { DesignationUpdateComponent } from './Component/DesignationPages/designation-update/designation-update.component';
import { DepartmentAddComponent } from './Component/DepartmentPages/department-add/department-add.component';
import { DesignationAddComponent } from './Component/DesignationPages/designation-add/designation-add.component';

import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginPageComponent } from './Component/login-page/login-page.component';
import { FileUploadComponent } from './Component/file-upload/file-upload.component';
//import { AgGridModule } from 'ag-grid-angular';
//import {DataTablesModule} from 'angular-datatables';

import { EmployeeComponent } from './Component2/employee/employee.component';
import { DepartmentComponent } from './Component2/department/department.component';
// import { AgGridModule } from './ag-grid-angular';
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
    DesignationAddComponent,
    LoginPageComponent,
    FileUploadComponent,
    EmployeeComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    LoadingBarRouterModule,
  //  DataTablesModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
//    AgGridModule.withComponents([]) 
  ],
  providers: [CrudService 
  //   , {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: AuthInterceptor,
  //   multi: true
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
