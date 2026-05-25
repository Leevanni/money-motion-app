import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/login-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  login(request: LoginRequest):Observable<void> {

    const formData = new URLSearchParams();
    formData.set('username', request.username);
    formData.set('password', request.password);   


    return this.http.post<void>(`${this.authUrl}/login`, formData.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      withCredentials: true,
    });
  }
}
