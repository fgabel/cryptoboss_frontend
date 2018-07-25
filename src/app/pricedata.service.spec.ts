import { TestBed, inject } from '@angular/core/testing';

import { PricedataService } from './pricedata.service';

describe('PricedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PricedataService]
    });
  });

  it('should be created', inject([PricedataService], (service: PricedataService) => {
    expect(service).toBeTruthy();
  }));
});
