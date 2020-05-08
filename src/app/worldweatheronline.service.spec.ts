import { TestBed } from '@angular/core/testing';

import { WorldweatheronlineService } from './worldweatheronline.service';

describe('WorldweatheronlineService', () => {
  let service: WorldweatheronlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldweatheronlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
