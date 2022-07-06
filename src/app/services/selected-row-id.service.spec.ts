import { TestBed } from '@angular/core/testing';

import { SelectedRowIdService } from './selected-row-id.service';

describe('SelectedRowIdService', () => {
  let service: SelectedRowIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedRowIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
