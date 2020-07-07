import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
// import { EmployeeWithId, DepartmentData, DesignationData, login, ResDataModal } from './employee';
import { EmployeeWithId, DepartmentData, DesignationData, ResDataModal} from './employee';
import { environment } from './../environments/environment';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
    apiUrl = 'https://reqres.in/api/users?page=2';

  constructor(private toastr: ToastrService,private router: Router,private http:HttpClient) { }

  getData(): Observable<ResDataModal> {
    return this.http.get<ResDataModal>(this.apiUrl);
  }



  public upload(formData) {
    return this.http.post<any>(environment.EmpUrl + '/Authentication', formData, {
      reportProgress: true,
      observe: 'events'
    });
}


  LoginAgaintoster()
  { 
    if(localStorage.getItem == null)
    {
    this.toastr.info("please Login Again!");
    }
  }
     
  AdminLogin(FormData){
    return this.http.post(environment.EmpUrl + '/Authentication',FormData)
  }

//   logout(){  
//     tap(
//         succ => { },
//         err => {
//             if (err.status == 401){
//                 localStorage.removeItem('token');
//                 this.router.navigateByUrl('/LoginPath');
//             }
//         }
//     )
// }
  
  AddEmployee(employee){
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')})
    return this.http.post(environment.EmpUrl + '/api/EmployeeMain/SaveEmployee',employee,{headers :tokenHeader })
    .pipe(
      tap(
          succ => { },
          err => {
              if (err.status == 401)
              {
                localStorage.removeItem('token');
                this.LoginAgaintoster();
                this.router.navigateByUrl('/LoginPath');
              }
          }
      )
  )
     
    // {responseType:'text' as 'json'}
    // var headerOptions = new Headers({'Content-Type': 'application/json;  charset=UTF-8',"Authorization": "Bearer " + localStorage["Authtoken2"] ,"Access-Control-Allow-Origin":environment.UIURL}); 
    // var requestOptions = new RequestOptions({method: RequestMethod.Post, headers:headerOptions,body:body});

  }

  GetEmployee(){
  var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')})
   return this.http.get(environment.EmpUrl + '/api/EmployeeMain/GetEmployee',{headers :tokenHeader })
   .pipe(
    tap(
        succ => { },
        err => {
            if (err.status == 401){
                localStorage.removeItem('token');
            
                this.router.navigateByUrl('/LoginPath');
            }    this.LoginAgaintoster();
        }
    )
)
} 

  GetEmployeeById(id: number): Observable<any>{
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')})
    return this.http.get(environment.EmpUrl + '/api/EmployeeMain/GetEmployeeById/'+id,{headers :tokenHeader })
  .pipe(
    tap(
        succ => { },
        err => {
            if (err.status == 401){
                localStorage.removeItem('token');
                this.LoginAgaintoster();
                this.router.navigateByUrl('/LoginPath');
            }
        }
    )
);
   }


  UpdateEmployee(id: number,emp: EmployeeWithId){
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')})
    return this.http.post(environment.EmpUrl + '/api/EmployeeMain/EditEmployee/'+id,emp,{headers :tokenHeader })
    .pipe(
      tap(
          succ => { },
          err => {
              if (err.status == 401){
                  localStorage.removeItem('token');
                  this.LoginAgaintoster();
                  this.router.navigateByUrl('/LoginPath');
              }
          }
      )
  );
  }
  DeleteEmployee(id){
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')})
    return this.http.delete(environment.EmpUrl + '/api/EmployeeMain/DeleteEmployee/'+id,{headers :tokenHeader })
    .pipe(
      tap(
          succ => { },
          err => {
              if (err.status == 401){
                  localStorage.removeItem('token');
                  this.LoginAgaintoster();
                  this.router.navigateByUrl('/LoginPath');
              }
          }
      )
  );
  }


  UploadFile(){ 
    // var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')})
    return this.http.post(environment.EmpUrl + '/api/FileUplode', FormData, {reportProgress: true, observe: 'events'})
    
 //   return this.http.post(environment.EmpUrl + '/api/EmployeeMain/AddDepartment',dept,{headers :tokenHeader }) 
//    .pipe(
//      tap(
//          succ => { },
//          err => {
//              if (err.status == 401){
//                  localStorage.removeItem('token');
//                  this.LoginAgaintoster();
//                  this.router.navigateByUrl('/LoginPath');
//              }
//          }
//      )
//  );
 }









  GetDepartment(){
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')})
   return this.http.get(environment.EmpUrl + '/api/EmployeeMain/GetDepartment',{headers :tokenHeader })
   .pipe(
    tap(
        succ => { },
        err => {
            if (err.status == 401){
              localStorage.removeItem('token');
              this.LoginAgaintoster();
              this.router.navigateByUrl('/LoginPath');
            }
        }
    )
);
  }

  GetDepartmentById(id: number): Observable<any>{
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')})
    return this.http.get(environment.EmpUrl + '/api/EmployeeMain/GetDepartmentById/'+id,{headers :tokenHeader })
    .pipe(
      tap(
          succ => { },
          err => {
              if (err.status == 401){
                  localStorage.removeItem('token');
                  this.LoginAgaintoster();
                  this.router.navigateByUrl('/LoginPath');
              }
          }
      )
  );
  }
 

  AddDepartment(dept){ 
     var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')})
    return this.http.post(environment.EmpUrl + '/api/EmployeeMain/AddDepartment',dept,{headers :tokenHeader }) 
    .pipe(
      tap(
          succ => { },
          err => {
              if (err.status == 401){
                  localStorage.removeItem('token');
                  this.LoginAgaintoster();
                  this.router.navigateByUrl('/LoginPath');
              }
          }
      )
  );
  }
 
   UpdateDepartment(id: number,dep: DepartmentData){
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')})
    return this.http.post(environment.EmpUrl + '/api/EmployeeMain/EditDepartment/'+id,dep,{headers :tokenHeader })
    .pipe(
      tap(
          succ => { },
          err => {
              if (err.status == 401){
                  localStorage.removeItem('token');
                  this.LoginAgaintoster();
                  this.router.navigateByUrl('/LoginPath');
              }
          }
      )
  );
  }
  
   DeleteDepartment(id){
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')})
    return this.http.delete(environment.EmpUrl + '/api/EmployeeMain/DeleteDepartment/'+id,{headers :tokenHeader })
    .pipe(
      tap(
          succ => { },
          err => {
              if (err.status == 401){
                  localStorage.removeItem('token');
                  this.LoginAgaintoster();
                  this.router.navigateByUrl('/LoginPath');
              }
          }
      )
  );
   }
 
//    getCustomerDetails() {
//     var udat = localStorage.getItem("token2");
//     if (udat != null) {
//       const _url = environment.APIURL+'Customer/GetCustomerDetails';
//       return this.http.get( _url,{
//         headers: new Headers({ "Authorization": "Bearer " + localStorage["Authtoken2"] ,"Access-Control-Allow-Origin":environment.UIURL})  
//         });
//       //return this.http.get(Globaldec + 'GetCustomerDetails');
//     }
//     else {
//       this.router.navigate(["/Login"]);
//     }
//   }


//   GetDesignation(){
//     var udat = localStorage.getItem("token");
//     if (udat != null) {
//     const _url = environment.EmpUrl + '/api/EmployeeMain/GetDesignation';
//     return this.http.get( _url,{
//       headers:new Headers({ "Authorization": "Bearer " + localStorage["Authtoken2"] ,"Access-Control-Allow-Origin":environment.UIURL})
//     });
//   }
//   else {
//     this.router.navigate(["/Login"]);
//   }
//  //   return this.http.get(environment.EmpUrl + '/api/EmployeeMain/GetDesignation');
//    }
 

   GetDesignation(){
     var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')})
    return this.http.get(environment.EmpUrl + '/api/EmployeeMain/GetDesignation',{headers :tokenHeader })
    .pipe(
      tap(
          succ => { },
          err => {
              if (err.status == 401){
                  localStorage.removeItem('token');
                  this.LoginAgaintoster();
                  this.router.navigateByUrl('/LoginPath');
              }
          }
      )
  );
   }

  GetDesignationById(id: number): Observable<any>{
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')})
    return this.http.get(environment.EmpUrl + '/api/EmployeeMain/GetDesignationById/'+id,{headers :tokenHeader })
    .pipe(
      tap(
          succ => { },
          err => {
              if (err.status == 401){
                  localStorage.removeItem('token');
                  this.LoginAgaintoster();
                  this.router.navigateByUrl('/LoginPath');
              }
          }
      )
  );
   }
  
  AddDesignation(des){
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')})
    return this.http.post(environment.EmpUrl + '/api/EmployeeMain/AddDesignation',des,{headers :tokenHeader })
    .pipe(
      tap(
          succ => { },
          err => {
              if (err.status == 401){
                  localStorage.removeItem('token');
                  this.LoginAgaintoster();
                  this.router.navigateByUrl('/LoginPath');
              }
          }
      )
  );
   }
 
   UpdateDesignation(id: number,des: DesignationData){
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')})
    return this.http.post(environment.EmpUrl + '/api/EmployeeMain/EditDesignation/'+id,des,{headers :tokenHeader })
    .pipe(
      tap(
          succ => { },
          err => {
              if (err.status == 401){
                  localStorage.removeItem('token');
                  this.LoginAgaintoster();
                  this.router.navigateByUrl('/LoginPath');
              }
          }
      )
  );
  }
  
   DeleteDesignation(id){
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')})
    return this.http.delete(environment.EmpUrl + '/api/EmployeeMain/DeleteDesignation/'+id,{headers :tokenHeader })
    .pipe(
      tap(
          succ => { },
          err => {
              if (err.status == 401){
                  localStorage.removeItem('token');
                  this.LoginAgaintoster();
                  this.router.navigateByUrl('/LoginPath');
              }
          }
      )
  );
   }
  
  // refreshList(){
  //   this.http.get(environment.EmpUrl + '/api/EmployeeMain/GetEmployees')
  //   .toPromise()
  //  }
}
