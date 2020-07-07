import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DepartmentData } from 'src/app/employee';
import { CrudService } from 'src/app/crud.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.css']
})
export class DepartmentViewComponent implements OnInit {
dep1 : DepartmentData =new DepartmentData();
message :any;
message1 :any;

constructor(private toastr:ToastrService,private service:CrudService,private router: Router) { 
  this.reloadData();
}
DepData : any;
term: any;
 depid: any;

ngOnInit(): void { 
  this.reloadData();
}

reloadData() {
  this.DepData=this.service.GetDepartment().subscribe((data)=>this.DepData=data);
}

public DeleteDepartmentNow(id:number){
  if (confirm('Are you sure to delete this record ?'))
  {
  let resp= this.service.DeleteDepartment(id);
  resp.subscribe((data)=>{this.depid=data;

    if(this.depid == 1)
    {
      this.toastr.info('Deleted Successfully!');
    }  
    else{
      this.toastr.error('Something went wrong', 'Error');
    }
  
    this.reloadData()});

  }
 }
  
 updateDepartment(id: number){
  this.router.navigate(['DepartmentUpdatePath', id]);
}

gotoadd(){
  if(localStorage.getItem != null)
  {
    this.router.navigate(['DepartmentAddPath']);
  }
}

}