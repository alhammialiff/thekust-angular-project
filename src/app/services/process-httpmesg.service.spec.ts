import { TestBed } from '@angular/core/testing';

import { ProcessHTTPMesgService } from './process-httpmesg.service';

describe('ProcessHTTPMesgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcessHTTPMesgService = TestBed.get(ProcessHTTPMesgService);
    expect(service).toBeTruthy();
  });
});
