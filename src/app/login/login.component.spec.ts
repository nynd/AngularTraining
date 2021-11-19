import { HttpClient } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AuthenticationHttpService } from '../authentication-http-service.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: AuthenticationHttpService;

  let debugElement: DebugElement


  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new AuthenticationHttpService(httpClientSpy);

    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule],
      providers: [
        {provide: AuthenticationHttpService, useValue: service }]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable login button when form is invalid', () => {
      const hostElement: HTMLElement = fixture.nativeElement;
      const loginInput: HTMLInputElement = hostElement.querySelector('input[name="login"]')!;
      loginInput.value="abc";
      loginInput.dispatchEvent(new Event("input"))
            
      const passwordInput: HTMLInputElement = hostElement.querySelector('input[name="password"]')!;
      passwordInput.value="pass";
      passwordInput.dispatchEvent(new Event("input"))

      fixture.detectChanges();

      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('button')?.disabled).toBeTrue();
  });

  it('should enable login button when form is valid', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    const loginInput: HTMLInputElement = hostElement.querySelector('input[name="login"]')!;
    loginInput.value="abcd";
    loginInput.dispatchEvent(new Event("input"))
          
    const passwordInput: HTMLInputElement = hostElement.querySelector('input[name="password"]')!;
    passwordInput.value="pass";
    passwordInput.dispatchEvent(new Event("input"))

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.disabled).toBeFalse();
  });
});
