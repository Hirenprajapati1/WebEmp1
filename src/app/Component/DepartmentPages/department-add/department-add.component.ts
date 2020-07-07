import { Component, OnInit } from '@angular/core';
import { DepartmentData } from 'src/app/employee';
import { CrudService } from 'src/app/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {

  form = new FormGroup({
    departmentName: new FormControl('',Validators.required)
  })

  dep1 : DepartmentData =new DepartmentData();
  message :any;
  message1 :any;
  
  constructor(private toastr:ToastrService,private route: ActivatedRoute,private router: Router,
    private service:CrudService) { }

  ngOnInit(): void {
  }

      // if(this.message==1)
    // {
    // alert("Department is Added");
    // this.gotoList();
    //  }
    //  else if(this.message == -1)
    //  {
    //    alert("Department is already Exists");
    //  }
    // else{
    //   alert("Error");
    // }
  
  public AddDepartmentNow(){
  {
    let resp=this.service.AddDepartment(this.dep1);
    resp.subscribe((data)=>{(this.message=data)

    if(data == 1)
    {
      this.gotoList()
      this.toastr.success('Department Added Successfully','Added Successfully!.');
    }
    else if( data == -1)
    {
      this.toastr.error('Department Name already exists','Failed.');
    }
    else{
      this.toastr.error('Something went wrong', 'Error');
    }
  });
  }
}
  gotoList() {
//    this.router.navigateByUrl('/DepartmentViewPath', { skipLocationChange: true });
//    this.router.navigateByUrl('/DesignationAddPath', { skipLocationChange: true });
this.router.navigate(["/DepartmentViewPath"]);    
  }
}
