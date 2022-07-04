import { TestBed } from '@angular/core/testing';

import { MostPopularCryptoService } from './most-popular-crypto.service';

describe('MostPopularCryptoService', () => {
  let service: MostPopularCryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostPopularCryptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
