import { DesignationViewComponent } from './Component/designation-view/designation-view.component';
import { DepartmentViewComponent } from './Component/department-view/department-view.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { UpdateEmployeeComponent } from './Component/update-employee/update-employee.component';
import { GetEmployeeComponent } from './Component/get-employee/get-employee.component';
import { AddEmployeeComponent } from './Component/add-employee/add-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo:'HomepagePath',pathMatch :'full'},
  {path:'HomepagePath',component:HomePageComponent},
  {path:'DepartmentViewPath',component:DepartmentViewComponent},
  {path:'DesignationViewPath',component:DesignationViewComponent},
  {path:'AddEmployeePath',component:AddEmployeeComponent},
  {path:'GetEmployeePath',component:GetEmployeeComponent},
  {path:'UpdateEmployeePath',component:UpdateEmployeeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
