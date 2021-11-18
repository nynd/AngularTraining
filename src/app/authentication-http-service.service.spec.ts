import { TestBed } from '@angular/core/testing';

import { AuthenticationHttpServiceService } from './authentication-http-service.service';

describe('AuthenticationHttpServiceService', () => {
  let service: AuthenticationHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
