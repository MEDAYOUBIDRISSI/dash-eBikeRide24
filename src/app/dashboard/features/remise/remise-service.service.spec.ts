import { TestBed } from '@angular/core/testing';

import { RemiseServiceService } from './remise-service.service';

describe('RemiseServiceService', () => {
  let service: RemiseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemiseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
