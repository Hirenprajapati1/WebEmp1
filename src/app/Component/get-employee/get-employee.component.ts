import { CrudService } from './../../crud.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {

  constructor(private service:CrudService) { }
  EmployeeData : any;
  designation1 : any;
  department1 : any;


  public DeleteEmployee(id:number){
    if (confirm('Are you sure to delete this record ?'))
    {
    let resp= this.service.DeleteEmployee(id);
    resp.subscribe((data)=>this.EmployeeData=data);
    }
   }
   

  ngOnInit(): void {
    this.EmployeeData=this.service.GetEmployee().subscribe((data)=>this.EmployeeData=data)
    this.designation1=this.service.GetDesignation().subscribe((data)=>this.designation1=data);
    this.department1=this.service.GetDepartment().subscribe((data)=>this.department1=data);

  }

}
