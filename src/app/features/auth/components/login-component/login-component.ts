import { Component, effect, inject } from '@angular/core';
import { AuthStore } from '../../stores/auth.store';
import { LoginRequest } from '../../models/login-request';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: false,
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {
readonly authStore = inject(AuthStore);
  private readonly router = inject(Router);

  constructor() {
    effect(() => {
      if (this.authStore.authenticated()) {
        this.router.navigate(['/dashboard']);
      }
    });
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
