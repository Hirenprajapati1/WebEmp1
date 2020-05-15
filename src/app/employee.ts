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
    constructor(
        public id:number,
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


export class DepartmentData{
    constructor(
        public departmentID:number
        // public departmentName:string
    ){}
}

// {"departmentID":1,"departmentName":"SAP"}

export class DesignationData{
    constructor(
        public designationID:number,
        public designationName:string
        // public designationName:string,
    ){}
}

// {"designationID":1,"designationName":"Trainee"}

// "id":1,
// "name":"Hiren prajapati",
// "email":"hiren.Prajapati@stridelysolutions1.com",
// "employeeCode":"2",
// "gender":"male",
// "designation":2,
// "designationName":"Employee",
// "department":2,
// "departmentName":".NET",
// "dob":"5/17/2020 12:00:00 AM",
// "salary":150000