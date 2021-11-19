import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AuthenticationHttpService } from './authentication-http-service.service';

describe('AuthenticationHttpServiceService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: AuthenticationHttpService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    // TestBed.configureTestingModule({providers: [AuthenticationHttpService]});
    service = new AuthenticationHttpService(httpClientSpy);
  });
  
  it('should be created 2', () => {
    expect(service).toBeTruthy();
  });
});
