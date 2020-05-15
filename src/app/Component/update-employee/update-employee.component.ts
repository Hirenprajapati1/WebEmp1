import { CrudService } from './../../crud.service';
import { EmployeeWithId } from './../../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  emp : EmployeeWithId= new EmployeeWithId(0,"","","","",0,0,"",0);
  message:any;

  constructor(private service:CrudService) { }

  ngOnInit(): void {
  }
  
  public GetforUpdate(){
    if (confirm('Are you sure to Update this Record this record ?'))
     {    
     let resp=this.service.UpdateEmployee(this.emp);
     resp.subscribe((data)=>this.message=data);
     } 
  }  


}
