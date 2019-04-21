import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-name',
  templateUrl: './login-name.component.html',
  styleUrls: ['./login-name.component.css']
})
export class LoginNameComponent implements OnInit {
  loginName: FormControl;
  constructor() {}
  ngOnInit() {
    this.loginName = new FormControl('xujiao',[Validators.required, Validators.minLength(2)]);
    this.loginName.valueChanges.subscribe((v)=>{
         console.log(v);
         console.log(this.loginName)
    })
    
  }
}
