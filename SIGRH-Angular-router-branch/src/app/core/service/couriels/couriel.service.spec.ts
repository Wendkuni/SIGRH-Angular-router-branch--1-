import { TestBed } from '@angular/core/testing';

import { CourielService } from './couriel.service';

describe('CourielService', () => {
  let service: CourielService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourielService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
