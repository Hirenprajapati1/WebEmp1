// import { CrudService } from './../../crud.service';
// import { Employee, DesignationData, DepartmentData } from './../../employee';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-add-employee',
//   templateUrl: './add-employee.component.html',
//   styleUrls: ['./add-employee.component.css']
// })
// export class AddEmployeeComponent implements OnInit {
//   designation1 : any;
//   department1 : any;
//   //  designation2 : DesignationData = new DesignationData(0,"");
//   // department : DepartmentData = new DepartmentData(0);
//   // employee : Employee= new Employee("","","","",this.designation2.designationID,0,"",0);
//   employee : Employee= new Employee("","","","",0,0,"",0);
//   message:any;
//   constructor(private service:CrudService) { }

//   ngOnInit(): void {
//     // this.EmployeeData=this.service.GetEmployee().subscribe((data)=>this.EmployeeData=data)
//     this.designation1=this.service.GetDesignation().subscribe((data)=>this.designation1=data);
//     this.department1=this.service.GetDepartment().subscribe((data)=>this.department1=data);

    

//     // public Designation(){
//     //   let resp=this.service.GetDesignation(this.designation);
//     //   resp.subscribe((data)=>this.message=data);
//     //  }

//     //  public Department(){
//     //   let resp=this.service.GetDesignation(this.department);
//     //   resp.subscribe((data)=>this.message=data);
//     //  }

//   }

//   public AddEmpNow(){
//     let resp=this.service.AddEmployee(this.employee);
//     this.designation1=this.service.GetDesignation().subscribe((data)=>this.designation1=data);
//     this.department1=this.service.GetDepartment().subscribe((data)=>this.department1=data);
//   //  this.employee.designation=this.designation1.DesignationData;
//    this.employee.designation=this.designation1.designationID;  
//   resp.subscribe((data)=>this.message=data);
//     if(this.message==1)
//     {
//     alert("Employee is Added");
//     }
//     else{
//       alert("Plese Enter All Detils");
//     }
//   }
// }


 
import { CrudService } from './../../crud.service';
import { Employee, DesignationData, DepartmentData } from './../../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  desid : number;
  designation1 : any;
  department1 : any;
  // designation11 : DesignationData = new DesignationData(0,"");
  // department : DepartmentData = new DepartmentData(0);
  employee : Employee= new Employee("","","","",0,0,"",0);
  message:any;
  a:number;
  // this.employee.designation=this.desid;  
  
  constructor(private service:CrudService) { }

  ngOnInit(): void {
    // this.EmployeeData=this.service.GetEmployee().subscribe((data)=>this.EmployeeData=data)
    this.designation1=this.service.GetDesignation().subscribe((data)=>this.designation1=data);
    this.department1=this.service.GetDepartment().subscribe((data)=>this.department1=data);
  }

  public AddEmpNow(){
    this.employee.designation=this.desid;
    // var a= parse(this.employee.designation);
     let resp=this.service.AddEmployee(this.employee);
    
    // this.designation1=this.service.GetDesignation().subscribe((data)=>this.designation1=data);
    // this.department1=this.service.GetDepartment().subscribe((data)=>this.department1=data);
  //  this.employee.designation=this.designation1.DesignationData;
  // this.employee.designation=this.designation1.designationID;  
  resp.subscribe((data)=>this.message=data);
    if(this.message==1)
    {
    alert("Employee is Added");
    }
    else{
      alert("Plese Enter All Detils");
    }
  }
}