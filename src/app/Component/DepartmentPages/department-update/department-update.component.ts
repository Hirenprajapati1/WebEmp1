import { Component, OnInit } from '@angular/core';
import { DepartmentData } from 'src/app/employee';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
  styleUrls: ['./department-update.component.css']
})
export class DepartmentUpdateComponent implements OnInit {
  dep1 : DepartmentData =new DepartmentData(0,"");
  message :any;
  message1 :any;
  
  constructor(private service:CrudService) { }

  ngOnInit(): void {
  }

  
  public UpdateDepartment(){
    if (confirm('Are you sure to Update this Record this record ?'))
     {    
     let resp=this.service.UpdateDepartment(this.dep1);
     resp.subscribe((data)=>this.message1=data);
     } 
  }  


}
