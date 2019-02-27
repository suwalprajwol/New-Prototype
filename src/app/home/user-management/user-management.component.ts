import { Component, OnInit } from '@angular/core';
import { DataService} from 'src/app/data.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  adminData: any;
  constructor(private datas: DataService) { }

  ngOnInit() {
    this.datas.getLinks()
    .subscribe(data => {this.adminData = data
      console.log(data)
    })
  }

}
