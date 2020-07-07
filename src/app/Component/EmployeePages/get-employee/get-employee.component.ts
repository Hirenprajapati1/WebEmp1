import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/crud.service';
import { Router } from '@angular/router';
// import { CrudService } from './../../crud.CrudService';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {

  constructor(private toastr: ToastrService,private service:CrudService,private router: Router) { 
    this.reloadData();
  }
  EmployeeData : any;
  designation1 : any;
  department1 : any;
  term:any;


  public DeleteEmployee(id:number){
    if (confirm('Are you sure to delete this record ?'))
    {
    let resp= this.service.DeleteEmployee(id);
    resp.subscribe((data)=>{
      this.EmployeeData=data
      if(data == 1)
      {
        this.toastr.info('Deleted Successfully!');
      }  
      else
      {
        this.toastr.error('Something went wrong', 'Error');     
      //   alert("Error");
      }      

      this.reloadData()
    });
    }
   }
  
  
reloadData()
{
  this.EmployeeData=this.service.GetEmployee().subscribe((data)=>this.EmployeeData=data);
  this.designation1=this.service.GetDesignation().subscribe((data)=>this.designation1=data);
  this.department1=this.service.GetDepartment().subscribe((data)=>this.department1=data);
}

  ngOnInit(): void {
    this.reloadData();
    // this.EmployeeData.department=this.department1.departmentName;
    // this.EmployeeData.designation=this.designation1.designationName;
  }

  updateEmployee(id: number){
    this.router.navigate(['UpdateEmployeePath', id]);
  }
}
