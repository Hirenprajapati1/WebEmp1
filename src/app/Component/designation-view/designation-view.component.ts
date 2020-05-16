import { CrudService } from './../../crud.service';
import { Component, OnInit } from '@angular/core';
import { DesignationData } from 'src/app/employee';

@Component({
  selector: 'app-designation-view',
  templateUrl: './designation-view.component.html',
  styleUrls: ['./designation-view.component.css']
})
export class DesignationViewComponent implements OnInit {
  deg1 : DesignationData =new DesignationData(0,"");
  message :any;
  message1 :any;
  
  constructor(private service:CrudService) { }
  DegData : any;

  ngOnInit(): void {
    this.DegData=this.service.GetDesignation().subscribe((data)=>this.DegData=data)
  }


  public AddDesignationNow(){
    let resp=this.service.AddDesignation(this.deg1);
     resp.subscribe((data)=>this.message=data);
    if(this.message==1)
    {
    alert("Designation is Added");
    }
    else{
      alert("Plese Enter Designation");
    }
  }

  
  public UpdateDesignation(){
    if (confirm('Are you sure to Update this Record this record ?'))
     {    
     let resp=this.service.UpdateDesignation(this.deg1);
     resp.subscribe((data)=>this.message1=data);
     } 
  }  


  public DeleteDesignationNow(id:number){
    if (confirm('Are you sure to delete this record ?'))
    {
    let resp= this.service.DeleteDesignation(id);
    resp.subscribe((data)=>this.DegData=data);
    }
   }
   
}
