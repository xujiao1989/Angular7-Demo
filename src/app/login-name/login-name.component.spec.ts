import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNameComponent } from './login-name.component';

describe('LoginNameComponent', () => {
  let component: LoginNameComponent;
  let fixture: ComponentFixture<LoginNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
