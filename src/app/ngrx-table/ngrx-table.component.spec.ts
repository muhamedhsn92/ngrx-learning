import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxTableComponent } from './ngrx-table.component';

describe('NgrxTableComponent', () => {
  let component: NgrxTableComponent;
  let fixture: ComponentFixture<NgrxTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
