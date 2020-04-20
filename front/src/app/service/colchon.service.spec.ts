import { TestBed } from '@angular/core/testing';

import { ColchonService } from './colchon.service';

describe('ColchonService', () => {
  let service: ColchonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColchonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
