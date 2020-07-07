import { Router } from '@angular/router';
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


 
// import { CrudService } from './../../crud.service';
// import { Employee, DesignationData, DepartmentData } from './../../employee';
import { Employee } from './../../../employee';
import { Component, OnInit } from '@angular/core';
import { ParseOptions } from 'querystring';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CrudService } from 'src/app/crud.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    employeeCode: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required),
    designation: new FormControl('',Validators.required),
    department: new FormControl('',Validators.required),
    dob: new FormControl('',Validators.required),
    salary: new FormControl('',Validators.required)
  })


  designation1 : any;
  department1 : any;
  // designation11 : DesignationData = new DesignationData(0,"");
  // department : DepartmentData = new DepartmentData(0);
  employee : Employee= new Employee("","","","",0,0,"",0);
  message:any
  // this.employee.designation=this.desid;  
  
  constructor(private route: ActivatedRoute,private router: Router,
    private service:CrudService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.designation1=this.service.GetDesignation().subscribe((data)=>this.designation1=data);
    this.department1=this.service.GetDepartment().subscribe((data)=>this.department1=data);
  }

    // this.employee.designation=this.desid;
      // this.desid== parseInt(this.employee.designation);
     
    // this.designation1=this.service.GetDesignation().subscribe((data)=>this.designation1=data);
    // this.department1=this.service.GetDepartment().subscribe((data)=>this.department1=data);
    // if(this.message==1)
    // {
    // alert("Employee is Added");
    // this.gotoList();
    // }
    // else if( this.message == -1)
    // {
    //   alert("Employee Code is already Exists")
    // }
    // else{
    //   alert("Plese Enter All Detils");
    // }

    public AddEmpNow(){
    let resp=this.service.AddEmployee(this.employee);
    resp.subscribe((data)=>{this.message=data

    // if( data == -3)
    // {
    //   alert("employe code is already taken & minmam age 21 requried")
    // } 
    if(data == 1)
    {
      this.toastr.success('Employee Added Successfully','Added Successfully!.');
      this.gotoList();
    }
    else if( data == -2)
    { 
      // alert("21 requried");
      this.toastr.error('Minimam 21 years age requried','Minimum age required');
    }
    else if( data == -1)
    { 
      // alert(" employee code is exists")
      this.toastr.error('Employee Code already exists','Failed.');
    }
    else{
      // alert("error");
      this.toastr.error('Something went wrong', 'Error')
    }
  });
  }
  gotoList() {
    // this.router.navigateByUrl('/GetEmployeePath', { skipLocationChange: true });
this.router.navigate(["/GetEmployeePath"]); 
}
}