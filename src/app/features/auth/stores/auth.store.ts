import { inject, Injectable, signal } from '@angular/core';
import { LoginRequest } from '../models/login-request';
import { AuthService } from '../services/auth-service';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  private readonly authService = inject(AuthService);

  private readonly loadingSignal = signal(false);
  private readonly errorSignal = signal<string | null>(null);
  private readonly authenticatedSignal = signal(false);

  readonly loading = this.loadingSignal.asReadonly();
  readonly error = this.errorSignal.asReadonly();
  readonly authenticated = this.authenticatedSignal.asReadonly();

  login(request: LoginRequest): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    this.authService.login(request).subscribe({
      next: () => {
        this.authenticatedSignal.set(true);
        this.loadingSignal.set(false);
      },
      error: (err) => {
        console.error('Login failed', err);
        this.authenticatedSignal.set(false);
        this.errorSignal.set('Invalid username or password.');
        this.loadingSignal.set(false);
      },
    });
  }
}