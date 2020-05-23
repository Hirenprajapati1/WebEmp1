import { DesignationUpdateComponent } from './Component/DesignationPages/designation-update/designation-update.component';
import { DepartmentUpdateComponent } from './Component/DepartmentPages/department-update/department-update.component';
import { DepartmentAddComponent } from './Component/DepartmentPages/department-add/department-add.component';
// import { DesignationViewComponent } from './Component/designation-view/designation-view.component';
// import { DepartmentViewComponent } from './Component/department-view/department-view.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { UpdateEmployeeComponent } from './Component/update-employee/update-employee.component';
import { GetEmployeeComponent } from './Component/get-employee/get-employee.component';
import { AddEmployeeComponent } from './Component/add-employee/add-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentViewComponent } from './Component/DepartmentPages/department-view/department-view.component';
import { DesignationViewComponent } from './Component/DesignationPages/designation-view/designation-view.component';
import { DesignationAddComponent } from './Component/DesignationPages/designation-add/designation-add.component';


const routes: Routes = [
  {path:'', redirectTo:'HomepagePath',pathMatch :'full'},
  {path:'HomepagePath',component:HomePageComponent},
  {path:'DepartmentViewPath',component:DepartmentViewComponent},
  {path:'DepartmentAddPath',component:DepartmentAddComponent},
  {path:'DepartmentUpdatePath',component:DepartmentUpdateComponent},
  {path:'DesignationViewPath',component:DesignationViewComponent},
  {path:'DesignationAddPath',component:DesignationAddComponent},
  {path:'DesignationUpdatePath',component:DesignationUpdateComponent},
  {path:'AddEmployeePath',component:AddEmployeeComponent},
  {path:'GetEmployeePath',component:GetEmployeeComponent},
  {path:'UpdateEmployeePath',component:UpdateEmployeeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
