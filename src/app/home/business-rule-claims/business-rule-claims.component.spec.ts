import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRuleClaimsComponent } from './business-rule-claims.component';

describe('BusinessRuleClaimsComponent', () => {
  let component: BusinessRuleClaimsComponent;
  let fixture: ComponentFixture<BusinessRuleClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessRuleClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessRuleClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
