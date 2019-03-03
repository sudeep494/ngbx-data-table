import { TestBed } from '@angular/core/testing';

import { NgbxDataTableService } from './ngbx-data-table.service';

describe('NgbxDataTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgbxDataTableService = TestBed.get(NgbxDataTableService);
    expect(service).toBeTruthy();
  });
});
