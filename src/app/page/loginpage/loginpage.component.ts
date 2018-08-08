import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '../../../../node_modules/@angular/router';
import PagePath from '../../util/pagepath';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
  providers: [LoginService]
})
export class LoginpageComponent implements OnInit {

  username: string;
  password: string;
  message: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  faceRecognize() {
    alert('开发中');
  }

  auth() {
    this.message = '';
    if (!this.checkParam()) {
      this.message = '请输入用户名和密码';
      return;
    }

    const result = this.loginService.auth(this.username, this.password);
    result.subscribe(authResult => {
      console.log(authResult);
      if (!authResult) {
        this.message = '验证失败！入侵他人网站是非法行为！';
        localStorage.setItem('login-user', '');
        localStorage.setItem('srjwt', '');
      } else {
        localStorage.setItem('srjwt', authResult);
        localStorage.setItem('login-user', this.username);
        this.router.navigate([PagePath.DASHBOARD_PAGE]);
      }
    });
  }

  private checkParam(): boolean {
    return !!this.username && !!this.password;
  }
}
