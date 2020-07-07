import { EmployeeComponent } from './Component2/employee/employee.component';
import { FileUploadComponent } from './Component/file-upload/file-upload.component';
import { AuthGuard } from './Component/auth/auth.guard';
import { LoginPageComponent } from './Component/login-page/login-page.component';
import { UpdateEmployeeComponent } from './Component/EmployeePages/update-employee/update-employee.component';
import { GetEmployeeComponent } from './Component/EmployeePages/get-employee/get-employee.component';
import { AddEmployeeComponent } from './Component/EmployeePages/add-employee/add-employee.component';
import { DesignationUpdateComponent } from './Component/DesignationPages/designation-update/designation-update.component';
import { DepartmentUpdateComponent } from './Component/DepartmentPages/department-update/department-update.component';
import { DepartmentAddComponent } from './Component/DepartmentPages/department-add/department-add.component';
// import { DesignationViewComponent } from './Component/designation-view/designation-view.component';
// import { DepartmentViewComponent } from './Component/department-view/department-view.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
// import { UpdateEmployeeComponent } from './Component/update-employee/update-employee.component';
// import { GetEmployeeComponent } from './Component/get-employee/get-employee.component';
// import { AddEmployeeComponent } from './Component/add-employee/add-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentViewComponent } from './Component/DepartmentPages/department-view/department-view.component';
import { DesignationViewComponent } from './Component/DesignationPages/designation-view/designation-view.component';
import { DesignationAddComponent } from './Component/DesignationPages/designation-add/designation-add.component';


const routes: Routes = [
  {path:'', redirectTo:'LoginPath',pathMatch :'full'},
  {path:'LoginPath',component:LoginPageComponent},
  
  // {path:'', redirectTo:'HomepagePath',pathMatch :'full'},
  {path:'HomepagePath',component:HomePageComponent,canActivate:[AuthGuard]},
  {path:'FileUploadPath',component:FileUploadComponent,canActivate:[AuthGuard]},
 
  {path:'DepartmentViewPath',component:DepartmentViewComponent,canActivate:[AuthGuard]},
  {path:'DepartmentAddPath',component:DepartmentAddComponent,canActivate:[AuthGuard]},
  {path:'DepartmentUpdatePath/:id',component:DepartmentUpdateComponent,canActivate:[AuthGuard]},
 
  {path:'DesignationViewPath',component:DesignationViewComponent,canActivate:[AuthGuard]},
  {path:'DesignationAddPath',component:DesignationAddComponent,canActivate:[AuthGuard]},
  {path:'DesignationUpdatePath/:id',component:DesignationUpdateComponent,canActivate:[AuthGuard]},
 
  //{path:'GetEmployeePath',component:EmployeeComponent,canActivate:[AuthGuard]},
 
  {path:'AddEmployeePath',component:AddEmployeeComponent,canActivate:[AuthGuard]},
  {path:'GetEmployeePath',component:GetEmployeeComponent,canActivate:[AuthGuard]},
  {path:'UpdateEmployeePath/:id',component:UpdateEmployeeComponent,canActivate:[AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
