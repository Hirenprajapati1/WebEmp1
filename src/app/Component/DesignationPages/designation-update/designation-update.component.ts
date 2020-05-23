import { Component, OnInit } from '@angular/core';
import { DesignationData } from 'src/app/employee';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-designation-update',
  templateUrl: './designation-update.component.html',
  styleUrls: ['./designation-update.component.css']
})
export class DesignationUpdateComponent implements OnInit {
  deg1 : DesignationData =new DesignationData(0,"");
  // message :any;
  message1 :any;

  constructor(private service:CrudService) { }

  ngOnInit(): void {
  }

  public UpdateDesignation(){
    if (confirm('Are you sure to Update this Record this record ?'))
     {    
     let resp=this.service.UpdateDesignation(this.deg1);
     resp.subscribe((data)=>this.message1=data);
     } 
  }  

}
