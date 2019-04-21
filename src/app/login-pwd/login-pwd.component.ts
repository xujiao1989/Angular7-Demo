import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms'


@Component({
  selector: 'app-login-pwd',
  templateUrl: './login-pwd.component.html',
  styleUrls: ['./login-pwd.component.css']
})
export class LoginPwdComponent implements OnInit {

  loginPwdForm: FormGroup;

  constructor() {
    
  }

  ngOnInit() {
    loginPwdForm: new FormGroup({
      loginPwd: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA_Z]/)]),
      loginConfirmPwd: new FormControl('', [Validators.required])
    });
  }

}
