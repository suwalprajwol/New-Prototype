import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { DataService} from 'src/app/data.service';

@Component({
  selector: 'app-reference-data-update',
  templateUrl: './reference-data-update.component.html',
  styleUrls: ['./reference-data-update.component.css']
})
export class ReferenceDataUpdateComponent implements OnInit {
  constructor(private datas: DataService) {}
  columnDefs=[
  {'headerName': 'EXCD_Code', 'field': 'EXCD_Code' , 'sortable': 'true', 'filter': 'true'},
  {'headerName': 'Effective_Start_Date', 'field': 'Effective_Start_Date' , 'sortable': 'true', 'filter': 'true'},
  {'headerName': 'Remark_Code_Non_Par', 'field': 'Remark_Code_Non_Par', 'sortable': 'true', 'filter': 'true'},
  {'headerName': 'Remark_Code', 'field': 'Remark_Code', 'sortable': 'true', 'filter': 'true'},
  {'headerName': 'Effective_End_Date', 'field': 'Effective_End_Date', 'sortable': 'true', 'filter': 'true'},
  {'headerName': 'UPDT', 'field': 'UPDT', 'sortable': 'true', 'filter': 'true'},];
  rowData:any
  adminData: any;
  adminTable: any;
  ngOnInit () {
    this.datas.getReferenceData()
    .subscribe(data => this.adminData = data)
    this.datas.getTable()
    .subscribe(data => {
      this.adminTable = data,
      this.rowData=this.adminTable
    }
      )
  }
}
