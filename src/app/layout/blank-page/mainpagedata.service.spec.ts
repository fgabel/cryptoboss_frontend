import { TestBed, inject } from '@angular/core/testing';

import { MainpagedataService } from './mainpagedata.service';

describe('MainpagedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainpagedataService]
    });
  });

  it('should be created', inject([MainpagedataService], (service: MainpagedataService) => {
    expect(service).toBeTruthy();
  }));
});
