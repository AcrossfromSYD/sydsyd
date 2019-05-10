import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // 是否已经登陆//
  private loggedIn = false;

  constructor(private httpclient :HttpClient) { }

  login(user:string, password: string): boolean{
    let u = {
      username: user,
      password: password
    };
    this.httpclient.post('http://127.0.0.1:8081/login', JSON.stringify(u)).subscribe(
      (resp: any) => {
        console.log(resp);
        if (resp.success) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
      }
    );

    return true;

  }
  loggin(){
    this.loggedIn = false;

  }
  isLoggedIn(): boolean{
    return this.loggedIn;

  }
}
