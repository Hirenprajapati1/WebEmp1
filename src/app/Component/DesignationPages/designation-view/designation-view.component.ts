import { DesignationData1 } from './../../../employee';
// import { CrudService } from './../../crud.service';
import { Component, OnInit } from '@angular/core';
import { DesignationData } from 'src/app/employee';
import { CrudService } from 'src/app/crud.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-designation-view',
  templateUrl: './designation-view.component.html',
  styleUrls: ['./designation-view.component.css']
})
export class DesignationViewComponent implements OnInit {
  // deg1 : DesignationData =new DesignationData(0,"");
  message :any;
  message1 :any;
  deg: any;  
  term: any;
  constructor(private toastr: ToastrService,private service:CrudService ,private router: Router) { 
    this.reloadData();
  }
  DegData : any;
degid: any;
  ngOnInit(): void {
    // this.DegData=this.service.GetDesignation().subscribe((data)=>this.DegData=data)
    this.reloadData();
  }

  reloadData() {
    // this.Degs = this.service.GetDesignation();
     this.DegData=this.service.GetDesignation().subscribe((data)=>this.DegData=data)
 
  }

  
  // public UpdateDesignation(){
  //   if (confirm('Are you sure to Update this Record this record ?'))
  //    {    
  //    let resp=this.service.UpdateDesignation(this.deg1);
  //    resp.subscribe((data)=>this.message1=data);
  //    } 
  // }  


  public DeleteDesignationNow(id:number){
    if (confirm('Are you sure to delete this record ?'))
    {
    let resp= this.service.DeleteDesignation(id);
    resp.subscribe((data)=>{
      this.degid=data
      if(this.degid == 1)
      {
        this.toastr.info('Deleted Successfully!');
      }  
      else
      {
        this.toastr.error('Something went wrong', 'Error');     
      //   alert("Error");
      }      
      this.reloadData()
    });
    }
   }
   
  updateDesignation(id: number){
    this.router.navigate(['DesignationUpdatePath', id]);
  }

}
