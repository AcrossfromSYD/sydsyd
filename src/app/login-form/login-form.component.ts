import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

function usernameValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match('')) {
    return { invalidusername: false };
  }
}

function passwordValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match('')) {
    return { invalidpassword: false };
  }
}

function pinValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match('')) {
    return { invalidpin: false };
  }
}

function phoneValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^[0-9]+$/)) {
    return { invalidPhone: true };
  }
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  myForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;
  pin: AbstractControl;
  phone: AbstractControl;
  loginfalid: boolean;
  message: string;

  constructor(fb: FormBuilder, private authService: AuthServiceService) {
    this.myForm = fb.group({
      'username': ['', Validators.compose([Validators.required, usernameValidator])],
      'password': ['', Validators.compose([Validators.required, passwordValidator])],
      'pin': ['', Validators.compose([Validators.min(340826), Validators.max(340826), Validators.required, pinValidator])]
    });

    this.username = this.myForm.controls['username'];
    this.password = this.myForm.controls['password'];
    this.pin = this.myForm.controls['pin'];
    this.loginfalid = false;
  }

  ngOnInit() {
  }
  onSubmit(value: string): void {
    if (!this.myForm.valid) {
      alert('请重新登陆');
      return;
    }
    console.log('you submitted value:', value);
    this.authService.login(value, false);
    // this.httpclient.post('http://127.0.0.1:8081/login', JSON.stringify(value)).subscribe(
    //   (resp: any) => {
    //     console.log(resp);
    //     if (resp.success) {
    //       alert('登陆成功');
    //     } else {
    //       alert('登陆失败');
    //     }
    //   }
    // );
  }
}
