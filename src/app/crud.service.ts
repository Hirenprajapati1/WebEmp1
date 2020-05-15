import { EmployeeWithId } from './employee';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  AddEmployee(employee){
    return this.http.post(environment.EmpUrl + '/api/EmployeeMain/SaveEmployee',employee,{responseType:'text' as 'json'});
    // {responseType:'text' as 'json'}

    // var headerOptions = new Headers({'Content-Type': 'application/json;  charset=UTF-8',"Authorization": "Bearer " + localStorage["Authtoken2"] ,"Access-Control-Allow-Origin":environment.UIURL}); 
    // var requestOptions = new RequestOptions({method: RequestMethod.Post, headers:headerOptions,body:body});


  }
  GetEmployee(){
   return this.http.get(environment.EmpUrl + '/api/EmployeeMain/GetEmployee');
  }
  UpdateEmployee(emp: EmployeeWithId){
    return this.http.post(environment.EmpUrl + '/api/EmployeeMain/EditEmployee',emp,{responseType:'text' as 'json'});
  }
  DeleteEmployee(id){
    return this.http.delete(environment.EmpUrl + '/api/EmployeeMain/DeleteEmployee/'+id);
  }

  GetDepartment(){
   return this.http.get(environment.EmpUrl + '/api/EmployeeMain/GetDepartment');
  }

  GetDesignation(){
   return this.http.get(environment.EmpUrl + '/api/EmployeeMain/GetDesignation');
  }
  
  // refreshList(){
  //   this.http.get(environment.EmpUrl + '/api/EmployeeMain/GetEmployees')
  //   .toPromise()
  //  }
}
