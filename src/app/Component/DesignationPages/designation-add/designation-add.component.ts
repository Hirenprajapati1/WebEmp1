import { DesignationData } from 'src/app/employee';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-designation-add',
  templateUrl: './designation-add.component.html',
  styleUrls: ['./designation-add.component.css']
})
export class DesignationAddComponent implements OnInit {
  form = new FormGroup({
    designationName: new FormControl('',Validators.required)
  })
 
  deg1 : DesignationData =new DesignationData(0,"");
  message :any;

  constructor(private toastr:ToastrService,private route: ActivatedRoute,private router: Router,
    private service:CrudService) { }

  ngOnInit(): void {
  }

    // if(this.message==1)
    // {
    // alert("Designation is Added");
    // this.gotoList();    
    // }
    // else if(this.message == -1)
    // {
    //   alert("Designation Name is already Exists")
    // }
    // else{
    //   alert("Plese Enter Designation");
    // }

    public AddDesignationNow(){
      let resp=this.service.AddDesignation(this.deg1)
       resp.subscribe((data)=>{(this.message=data)
  
    if(data == 1)
    {
      this.toastr.success('Designation Added Successfully','Added Successfully!.');
      this.gotoList()
    }
    else if( data == -1)
    {
      this.toastr.error('Designation Name already exists','Failed.');
    }
    else{
      this.toastr.error('Something went wrong', 'Error');
    }
   });
  }

  gotoList() {
    // this.router.navigateByUrl('/DesignationViewPath', { skipLocationChange: true });
this.router.navigate(["/DesignationViewPath"]);    
  }
}
