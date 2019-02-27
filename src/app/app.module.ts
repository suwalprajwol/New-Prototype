import { DataService } from './../../../bridge/src/app/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AgGridModule} from 'ag-grid-angular';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClaimAnalysisComponent } from './home/claim-analysis/claim-analysis.component';
import { BusinessRuleClaimsComponent } from './home/business-rule-claims/business-rule-claims.component';
import { ReferenceDataUpdateComponent } from './home/reference-data-update/reference-data-update.component';
import { UserManagementComponent } from './home/user-management/user-management.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClaimAnalysisComponent,
    BusinessRuleClaimsComponent,
    ReferenceDataUpdateComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([ReferenceDataUpdateComponent]),
    RouterModule.forRoot([
      {
        path:'Claim_Analysis',
        component: ClaimAnalysisComponent
      },
      {
        path:'Business_Rule_Claims',
        component: BusinessRuleClaimsComponent
      },
      {
        path:'User_Management',
        component: UserManagementComponent
      },
      {
        path:'Reference_Data_Update',
        component: ReferenceDataUpdateComponent
      },
    ]),
    BrowserAnimationsModule,
        MatMenuModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule  ,
        MatSidenavModule,
        MatListModule,
        MatInputModule,
        MatFormFieldModule,
        MatToolbarModule
    // MaterialModule.forRoot()
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
