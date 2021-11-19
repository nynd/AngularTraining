import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RandomUserHttpService } from './random-user-http.service';

describe('RandomUserHttpService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: RandomUserHttpService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    // TestBed.configureTestingModule({providers: [AuthenticationHttpService]});
    service = new RandomUserHttpService(httpClientSpy);
  });

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(RandomUserHttpService);
  // });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
