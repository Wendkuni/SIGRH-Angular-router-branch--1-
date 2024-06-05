import { TestBed } from '@angular/core/testing';

import { CongeAbsenceService } from './conge-absence.service';

describe('CongeAbsenceService', () => {
  let service: CongeAbsenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CongeAbsenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
