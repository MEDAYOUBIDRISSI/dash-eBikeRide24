import { TestBed } from '@angular/core/testing';

import { EditeurServiceService } from './editeur-service.service';

describe('EditeurServiceService', () => {
  let service: EditeurServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditeurServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
