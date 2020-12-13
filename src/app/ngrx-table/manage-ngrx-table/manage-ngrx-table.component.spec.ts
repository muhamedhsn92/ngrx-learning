import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNgrxTableComponent } from './manage-ngrx-table.component';

describe('ManageNgrxTableComponent', () => {
  let component: ManageNgrxTableComponent;
  let fixture: ComponentFixture<ManageNgrxTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageNgrxTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageNgrxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
