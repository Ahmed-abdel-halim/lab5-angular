import { TestBed } from '@angular/core/testing';

import { ProdectserviceService } from './prodectservice.service';

describe('ProdectserviceService', () => {
  let service: ProdectserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdectserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
