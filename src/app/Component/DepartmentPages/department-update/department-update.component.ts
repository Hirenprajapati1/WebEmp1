import { DepartmentData1 } from './../../../employee';
import { Component, OnInit } from '@angular/core';
import { DepartmentData } from 'src/app/employee';
import { CrudService } from 'src/app/crud.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
  styleUrls: ['./department-update.component.css']
})
export class DepartmentUpdateComponent implements OnInit {
  
  form = new FormGroup({
    departmentId: new FormControl('',Validators.required),
    departmentName: new FormControl('',Validators.required)
  })
  dep1 : DepartmentData =new DepartmentData();
  message :any;
  message1 :any;
  id: number;
  Department:any;  
  constructor(private toastr:ToastrService,private route: ActivatedRoute,private router: Router,
    private service:CrudService) { }

  ngOnInit(): void {  
    this.Department = new DepartmentData1();
    this.id = this.route.snapshot.params['id'];
    
    this.service.GetDepartmentById(this.id)
      .subscribe(data => {
        console.log(data)
        this.dep1 = data;
      }, error => console.log(error)); 
  }
  
  public UpdateDepartment(){
    // if (confirm('Are you sure to Update this Record this record ?'))
    //  {    
    //  let resp=this.service.UpdateDepartment(this.dep1);
    //  resp.subscribe((data)=>this.message1=data);

     this.service.UpdateDepartment(this.id, this.dep1)
     .subscribe(data =>{ console.log(data), error => console.log(error) 
    //  this.dep1= new DepartmentData1(); 
  
    if(data == 1)
    {
           this.toastr.success('Department Updated Successfully','Updated Successfully!.');
           this.gotoList()

           // alert("Department is Updated Sucessfully!");
    }
    else if( data == -1)
    {
      this.toastr.error('Department Name already exists','Failed.');
      // alert("This Department Name is already Exists");
    }

    else{
      this.toastr.error('Something went wrong', 'Error');
      // alert("Error!!");
    }
  });

    //  } 
  }  
  gotoList() {
    this.router.navigateByUrl('/DepartmentViewPath', { skipLocationChange: true });
this.router.navigate(["/DepartmentViewPath"]);    
}
}
