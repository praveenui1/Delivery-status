import { TestBed, inject } from '@angular/core/testing';

import { DeliverStatusService } from './deliver-status.service';

describe('DeliverStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeliverStatusService]
    });
  });

  it('should be created', inject([DeliverStatusService], (service: DeliverStatusService) => {
    expect(service).toBeTruthy();
  }));
});
