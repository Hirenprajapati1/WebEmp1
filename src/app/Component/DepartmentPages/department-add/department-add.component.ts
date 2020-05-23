import { Component, OnInit } from '@angular/core';
import { DepartmentData } from 'src/app/employee';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {
  dep1 : DepartmentData =new DepartmentData(0,"");
  message :any;
  message1 :any;
  
  constructor(private service:CrudService) { }

  ngOnInit(): void {
  }
  
  public AddDepartmentNow(){
    let resp=this.service.AddDepartment(this.dep1);
     resp.subscribe((data)=>this.message=data);
    if(this.message==1)
    {
    alert("Department is Added");
    }
    else{
      alert("Plese Enter Department");
    }
  }


}
