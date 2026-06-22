import { inject, Injectable, signal } from '@angular/core';
import { LoginRequest } from '../models/login-request';
import { AuthService } from '../services/auth-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  private readonly loadingSignal = signal(false);
  private readonly errorSignal = signal<string | null>(null);
  private readonly authenticatedSignal = signal(false);
  private readonly returnUrlSignal = signal<string>('/dashboard');

  readonly loading = this.loadingSignal.asReadonly();
  readonly error = this.errorSignal.asReadonly();
  readonly authenticated = this.authenticatedSignal.asReadonly();
  readonly returnUrl = this.returnUrlSignal.asReadonly();

  login(request: LoginRequest): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    this.authService.login(request).subscribe({
      next: () => {
        this.authenticatedSignal.set(true);
        this.loadingSignal.set(false);
        this.router.navigate([this.returnUrlSignal()]);
      },
      error: (err) => {
        console.error('Login failed', err);
        this.authenticatedSignal.set(false);
        this.errorSignal.set('Invalid username or password.');
        this.loadingSignal.set(false);
      },
    });
  }

  clearAuth(): void {
    this.authenticatedSignal.set(false);
    this.errorSignal.set(null);
  }

  setReturnUrl(url: string): void {
    this.returnUrlSignal.set(url);
  }
}