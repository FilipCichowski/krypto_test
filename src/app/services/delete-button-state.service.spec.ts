import { TestBed } from '@angular/core/testing';

import { DeleteButtonStateService } from './delete-button-state.service';

describe('DeleteButtonStateService', () => {
  let service: DeleteButtonStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteButtonStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
