import { TestBed } from '@angular/core/testing';

import { AssuranceAffaireSocialService } from './assurance-affaire-social.service';

describe('AssuranceAffaireSocialService', () => {
  let service: AssuranceAffaireSocialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssuranceAffaireSocialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
