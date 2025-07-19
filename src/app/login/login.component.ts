import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login() {
    const dummyToken = 'abc123token'
    localStorage.setItem('sessiontoken', dummyToken);
    setTimeout(() => {
      localStorage.clear();
    }, 5000);
  }

}
