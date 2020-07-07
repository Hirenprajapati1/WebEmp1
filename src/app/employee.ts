import { Data } from '@angular/router';

export interface ResDataModal {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: [];
  }

// export class login{
//     userId:number;
//     firstName:string;
//     lastName:string;
//     userName:string;
//     password:string;
//     token:string
// }

// {
//     "userId": 1,
//     "firstName": "Hiren",
//     "lastName": "prajapati",
//     "userName": "Hiren",
//     "password": null,
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJyb2xlIjoiQWRtaW4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiJWMy4xIiwibmJmIjoxNTkyNTQ2NDk2LCJleHAiOjE1OTI3MTkyOTYsImlhdCI6MTU5MjU0NjQ5Nn0.FT9bFbbDwwDemkBHHSBqvs5xl8wVXbj-Fga2IgJ9uqs"
// }
export class Employee{
    constructor(
        public name:string,
        public email:string,
        public employeeCode:string,
        public gender:string,
        public designation:number,
        public department:number,
        public dob:string,
        public salary:number           
    ){}
}

export class EmployeeWithId{
         id:number;
         name:string;
         email:string;
         employeeCode:string;
         gender:string;
         designation:number;
         department:number;
         dob:Date;
         salary:number           
  }
export class EmployeeData1{
    id:number;
    name:string;
    email:string;
    employeeCode:string;
    gender:string;
    designation:number;
    department:number;
    dob:string;
    salary:number;           
}


export class DepartmentData{
    
         departmentId:number;
         departmentName:string;
    
}
export class DepartmentData1{
        departmentId:number;
        departmentName:string;  
}


export class DesignationData{
    constructor(
        public designationId:number,
        public designationName:string
    ){}
}
export class DesignationData1{
     designationId:number;
     designationName:string;
 }
