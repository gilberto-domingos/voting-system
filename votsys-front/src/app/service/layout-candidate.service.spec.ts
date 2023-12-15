import { TestBed } from '@angular/core/testing';

import { LayoutCandidateService } from './layout-candidate.service';

describe('LayoutCandidateService', () => {
  let service: LayoutCandidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutCandidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
