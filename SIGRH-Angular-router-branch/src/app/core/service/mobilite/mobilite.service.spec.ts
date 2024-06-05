import { TestBed } from '@angular/core/testing';

import { MobiliteService } from './mobilite.service';

describe('MobiliteService', () => {
  let service: MobiliteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobiliteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
