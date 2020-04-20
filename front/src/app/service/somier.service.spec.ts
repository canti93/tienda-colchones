import { TestBed } from '@angular/core/testing';

import { SomierService } from './somier.service';

describe('SomierService', () => {
  let service: SomierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SomierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
