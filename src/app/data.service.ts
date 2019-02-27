import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private links = 'http://localhost:3000/links';
  private userManagement = 'http://localhost:3000/userManagement';
  private referenceData = 'http://localhost:3000/referenceData';
  private _jsonTableURL = 'assets/table.json';
  adminData: string [];
  constructor(private http: HttpClient) {}

  getLinks(){
    return this.http.get(this.links);
  }

  getUserManagement(){
    return this.http.get(this.userManagement);
  }
  
  getReferenceData(){
    return this.http.get(this.referenceData);
  }

  getTable(){
    return this.http.get(this._jsonTableURL);
  }

  ngOnInit () {
  }
}
