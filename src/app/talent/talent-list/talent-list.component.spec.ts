import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomUserHttpService } from '../random-user-http.service';

import { TalentListComponent } from './talent-list.component';

describe('TalentListComponent', () => {
  let component: TalentListComponent;
  let fixture: ComponentFixture<TalentListComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: RandomUserHttpService;

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    // TestBed.configureTestingModule({providers: [AuthenticationHttpService]});
    service = new RandomUserHttpService(httpClientSpy);

    await TestBed.configureTestingModule({
      declarations: [ TalentListComponent ],
      providers: [
        {provider: HttpClient, useValue: httpClientSpy},
        {provider: RandomUserHttpService, useValue: service}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
