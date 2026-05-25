import { Component, inject } from '@angular/core';
import { AuthStore } from '../../stores/auth.store';
import { LoginRequest } from '../../models/login-request';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  standalone: false,
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {
  readonly authStore = inject(AuthStore);

  onSubmit(loginForm: NgForm) {
      console.log('Form Submitted!', loginForm.value);
      this.login(loginForm);
  }

  login(loginForm: NgForm) {
    if (loginForm.invalid) {
      console.warn('Form is invalid');
      return;
    }
    const loginRequest: LoginRequest = {
      username: loginForm.value.username,
      password: loginForm.value.password
    };
    
    this.authStore.login(loginRequest);
    loginForm.resetForm();
  }
}
