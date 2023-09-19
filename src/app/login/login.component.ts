import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData: any = {
    email: '',
    password: ''
  };

  onLogin(form: any) {
    if (form.valid) {
      // Perform login logic here
      console.log( this.loginData);
    }
  }
}
