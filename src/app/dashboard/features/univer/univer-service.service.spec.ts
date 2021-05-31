import { TestBed } from '@angular/core/testing';

import { UniverServiceService } from './univer-service.service';

describe('UniverServiceService', () => {
  let service: UniverServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniverServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
