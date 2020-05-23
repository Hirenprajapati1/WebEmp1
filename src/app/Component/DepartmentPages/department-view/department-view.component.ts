// import { CrudService } from './../../crud.service';
// import { DepartmentData } from './../../employee';
import { Component, OnInit } from '@angular/core';
import { DepartmentData } from 'src/app/employee';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.css']
})
export class DepartmentViewComponent implements OnInit {
dep1 : DepartmentData =new DepartmentData(0,"");
message :any;
message1 :any;

  constructor(private service:CrudService) { }
  DepData : any;

  
  public DeleteDepartmentNow(id:number){
    if (confirm('Are you sure to delete this record ?'))
    {
    let resp= this.service.DeleteDepartment(id);
    resp.subscribe((data)=>this.DepData=data);
    }
   }
   


  ngOnInit(): void {
    this.DepData=this.service.GetDepartment().subscribe((data)=>this.DepData=data)

  }

  // public AddDepartmentNow(){
  //   let resp=this.service.AddDepartment(this.dep1);
  //    resp.subscribe((data)=>this.message=data);
  //   if(this.message==1)
  //   {
  //   alert("Department is Added");
  //   }
  //   else{
  //     alert("Plese Enter Department");
  //   }
  // }

  
  // public UpdateDepartment(){
  //   if (confirm('Are you sure to Update this Record this record ?'))
  //    {    
  //    let resp=this.service.UpdateDepartment(this.dep1);
  //    resp.subscribe((data)=>this.message1=data);
  //    } 
  // }  

}
