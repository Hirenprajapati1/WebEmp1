import { DesignationData1 } from './../../../employee';
import { Component, OnInit } from '@angular/core';
import { DesignationData } from 'src/app/employee';
import { CrudService } from 'src/app/crud.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-designation-update',
  templateUrl: './designation-update.component.html',
  styleUrls: ['./designation-update.component.css']
})
export class DesignationUpdateComponent implements OnInit {
  form = new FormGroup({
    designationId: new FormControl('',Validators.required),
    designationName: new FormControl('',Validators.required)
  })
 
  // deg1 : DesignationData =new DesignationData1;
  deg1 : DesignationData =new DesignationData(0,"");
  // message :any;
  message1 :any;
  Designation:any;
  id: number;

  constructor(private toastr: ToastrService,private route: ActivatedRoute,private router: Router,
    private service:CrudService) { }

  ngOnInit(): void {
    this.Designation = new DesignationData1();

    this.id = this.route.snapshot.params['id'];
    
    this.service.GetDesignationById(this.id)
      .subscribe(data => {
        console.log(data)
        this.deg1 = data;
      }, error => console.log(error)); 
  }

  public UpdateDesignation(){
    // if (confirm('Are you sure to Update this Record this record ?'))
    //  {    
      this.service.UpdateDesignation(this.id, this.deg1)
          .subscribe(data =>{ console.log(data), error => console.log(error)
        // this.Designation = new deg1();
      // this.deg1=  new DesignationData1(); 
      // if(data == 1)
      // {
      //   alert("Designation is Updated Sucessfully!");
      //   this.gotoList();
      // }
      // else if( data == -1)
      // {
      //   alert("This Designation Name is already Exists");
      // }
      // else{
      //   alert("Error!!");
      // }
      if(data == 1)
      {
        this.toastr.success('Designation Updated Successfully','Updated Successfully!.');
        this.gotoList()
      }
      else if( data == -1)
      {
        this.toastr.error('Designation Name already exists','Failed.');
      }
      else{
        this.toastr.error('Something went wrong', 'Error')
      }
  

    });
    //  let resp=this.service.UpdateDesignation(this.id,this.deg1);
    //  resp.subscribe((data)=>this.message1=data);
    //  } 
  }  


  gotoList() {
    this.router.navigateByUrl('/DesignationViewPath', { skipLocationChange: true });
this.router.navigate(["/DesignationViewPath"]);    
  }

  // onSubmit() {
  //   this.UpdateDesignation();    
  // }

}
