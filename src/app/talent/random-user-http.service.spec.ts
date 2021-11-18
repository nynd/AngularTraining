import { TestBed } from '@angular/core/testing';

import { RandomUserHttpService } from './random-user-http.service';

describe('RandomUserHttpService', () => {
  let service: RandomUserHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomUserHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
