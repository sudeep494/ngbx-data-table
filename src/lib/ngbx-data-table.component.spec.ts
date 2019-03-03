import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbxDataTableComponent } from './ngbx-data-table.component';

describe('NgbxDataTableComponent', () => {
  let component: NgbxDataTableComponent;
  let fixture: ComponentFixture<NgbxDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbxDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbxDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
