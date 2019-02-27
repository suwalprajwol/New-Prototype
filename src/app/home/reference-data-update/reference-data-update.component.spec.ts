import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceDataUpdateComponent } from './reference-data-update.component';

describe('ReferenceDataUpdateComponent', () => {
  let component: ReferenceDataUpdateComponent;
  let fixture: ComponentFixture<ReferenceDataUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceDataUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceDataUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
