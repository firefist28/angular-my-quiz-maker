import { TestBed } from '@angular/core/testing';

import { ResultsMessagingQueueService } from './results-messaging-queue.service';

describe('ResultsMessagingQueueService', () => {
  let service: ResultsMessagingQueueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultsMessagingQueueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
