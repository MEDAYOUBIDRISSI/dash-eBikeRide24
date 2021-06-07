import { TestBed } from '@angular/core/testing';

import { SupportUserServiceService } from './support-user-service.service';

describe('SupportUserServiceService', () => {
  let service: SupportUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
