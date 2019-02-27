import { Component, OnInit } from '@angular/core';
import { DataService} from 'src/app/data.service';

@Component({
  selector: 'app-business-rule-claims',
  templateUrl: './business-rule-claims.component.html',
  styleUrls: ['./business-rule-claims.component.css']
})
export class BusinessRuleClaimsComponent implements OnInit {

  constructor(private datas: DataService) { }

  adminData: any;
  
  ngOnInit () {
    this.datas.getUserManagement()
    .subscribe(data => this.adminData = data)
  }

}


