import { CrudService } from 'src/app/crud.service';
import { Component, OnInit, ViewChild } from '@angular/core';
declare var $;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  dataTable: any;
  dtOptions: any;
  tableData = [];
  @ViewChild('dataTable', {static: true}) table;

  constructor(public service : CrudService ) { }

  ngOnInit(): void {
    this.getDataFromSource();
  }
  getDataFromSource() {
    this.service.getData().subscribe(data => {
      this.tableData = data.data;
      this.dtOptions = {
        data: this.tableData,
        columns: [
          {title: 'ID', data: 'id'},
          {title: 'Email', data: 'email'},
          {title: 'First Name', data: 'first_name'},
          {title: 'Last Name', data: 'last_name'},
          {title: 'Avatar', data: 'avatar'},
        ]
      };
    },
     err => {}, () => {
      this.dataTable = $(this.table.nativeElement);
      this.dataTable.DataTable(this.dtOptions);
    }
    );
  }


}
