import { TestBed } from '@angular/core/testing';

import { VisitorRecordService } from './visitor-record.service';

describe('VisitorRecordService', () => {
  let service: VisitorRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitorRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
