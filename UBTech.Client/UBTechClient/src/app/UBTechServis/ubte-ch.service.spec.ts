import { TestBed, inject } from '@angular/core/testing';

import { UBTeCHService } from './ubte-ch.service';

describe('UBTeCHService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UBTeCHService]
    });
  });

  it('should be created', inject([UBTeCHService], (service: UBTeCHService) => {
    expect(service).toBeTruthy();
  }));
});
