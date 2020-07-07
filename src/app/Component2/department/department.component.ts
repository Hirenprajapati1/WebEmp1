import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/app/crud.service';
import { Component, OnInit } from '@angular/core';
declare var $ : any;
declare var jquery : any;

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})


export class DepartmentComponent implements OnInit {
  myRegion: any;
  myCreditRep : any;
  CustFormData : string = null;
  selected = null;
  URL : string;
  columns : any;
  detail_cust : any =[];

  Custdata;

  constructor(private service:CrudService, public http: HttpClient) { }

  ngOnInit(): void {

    this.GetPaymentInformation();
    // this.customerService.getidRecord().subscribe(data => {
    //   var Custdata=JSON.parse(data.json())["Table1"];
    //    //console.log("PaymentData",data);

    //   this.detail_cust=Custdata[1];
    // }, err => {
    //   this.customerService.checkError(err.status);
    // },);
  }


  GetPaymentInformation(){
//     console.log("Duns ID"+sessionStorage.getItem("dunsid").toString());
    
//     this.service.GetDepartment(sessionStorage.getItem("dunsid").toString()).subscribe(res=>{

//       this.Custdata= JSON.parse(res.json())["Table"];

// //      CommonFunc.Logg('Payment data',this.Custdata);

//              var r=$('#table_pay').DataTable({
//         data: this.Custdata,
//         aaSorting: [[4, 'desc']],
//         columns: [

//           { data: 'customerno'},
//           { data: 'InvoiceNo'},
//           { data: 'invoicedate'},
//           { data: 'PaymentAmount',render: $.fn.dataTable.render.number( ',', '.',2, '$' ) },
//           { data: 'PaymentDate'},
//           {data : 'trans No'},
//           {data : 'TranscationType'},
//           {data : 'CheckNumber'}

//       ],

//       });

//     }
//     , err => {
//       this.customerService.checkError(err.status);
//     },
//     );


  }

}
