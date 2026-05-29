import { inject, Injectable } from '@angular/core';
import { DashboardResponse } from '../models/dashboard-response';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly http = inject(HttpClient);
  private readonly dashboardUrl = `${environment.apiBaseUrl}/dashboard`;
  
  getDashboard() {
    return this.http.get<DashboardResponse>(
      this.dashboardUrl,
      { withCredentials: true }
    );
  }
}