import { DesignationData } from 'src/app/employee';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-designation-add',
  templateUrl: './designation-add.component.html',
  styleUrls: ['./designation-add.component.css']
})
export class DesignationAddComponent implements OnInit {
  deg1 : DesignationData =new DesignationData(0,"");
  message :any;

  constructor(private service:CrudService) { }

  ngOnInit(): void {
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

}
