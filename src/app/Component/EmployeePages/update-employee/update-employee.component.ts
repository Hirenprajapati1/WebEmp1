import { EmployeeWithId, EmployeeData1 } from './../../../employee';
// import { CrudService } from './../../crud.service';
// import { EmployeeWithId, EmployeeData1 } from './../../employee';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  form = new FormGroup({
    id: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    employeeCode: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required),
    designation: new FormControl('',Validators.required),
    department: new FormControl('',Validators.required),
    dob: new FormControl('',Validators.required),
    salary: new FormControl('',Validators.required)
  })


  // emp : EmployeeWithId= new EmployeeWithId(0,"","","","",0,0,"",0);
  emp : EmployeeWithId= new EmployeeWithId();
  message:any;
  designation1 : any;
  department1 : any;
  id: number;
  Employee1:any;  

  constructor(private route: ActivatedRoute,private router: Router,private toastr:ToastrService,
    private service:CrudService) { }

  ngOnInit(): void {
    this.designation1=this.service.GetDesignation().subscribe((data)=>this.designation1=data);
    this.department1=this.service.GetDepartment().subscribe((data)=>this.department1=data);
    this.Employee1 = new EmployeeData1();
    this.id = this.route.snapshot.params['id'];
    
    this.service.GetEmployeeById(this.id)
      .subscribe(data => {
        console.log(data)
        this.emp = data;
      }, error => console.log(error)); 
  }

  // if(data == 1)
      // {
      //   alert("Employee is Updated Sucessfully!");
      //   this.gotoList();
      // }
      // else if( data == -1)
      // {
      //   alert("This Employe Code is already Exists");
      // }
      // else{
      //   alert("Error!!");
      // }
  // if (confirm('Are you sure to Update this Record this record ?'))
    //  {    
    //  let resp=this.service.UpdateEmployee(this.emp);
    //  resp.subscribe((data)=>this.message=data);
  
  public UpdateEmployee(){  
    this.service.UpdateEmployee(this.id, this.emp)
    .subscribe(data => {console.log(data), error => console.log(error)
      if(data == 1)
      {
        this.toastr.success('Employee Updated Successfully','Updated Successfully!.');
        this.gotoList();
      }
      else if( data == -3){
        this.toastr.error('Minimam 21 years age requried','Minimum age required')        
      }
      else if( data == -1)
      {
        this.toastr.error('Employee Code already exists','Failed.');
      }
      else{
        this.toastr.error('Something went wrong', 'Error')
      }
    // this.emp= new EmployeeData1();
    });
    //  } 
  }  
  
  gotoList() {
    // this.router.navigateByUrl('/GetEmployeePath', { skipLocationChange: true });
  this.router.navigate(["/GetEmployeePath"]);    
  }
}
