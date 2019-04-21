import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPwdComponent } from './login-pwd.component';

describe('LoginPwdComponent', () => {
  let component: LoginPwdComponent;
  let fixture: ComponentFixture<LoginPwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
