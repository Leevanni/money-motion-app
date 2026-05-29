import { Component, inject, signal } from '@angular/core';
import { DashboardService } from '../../services/dashboard-service';
import { DashboardResponse } from '../../models/dashboard-response';

@Component({
  selector: 'app-dashboard-component',
  standalone: false,
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.scss',
})
export class DashboardComponent {
  private readonly dashboardService = inject(DashboardService);

  readonly dashboard = signal<DashboardResponse | null>(null);

  ngOnInit() {
    this.dashboardService.getDashboard().subscribe({
      next: data => this.dashboard.set(data),
      error: err => console.error("Dashboard load failed", err)
    });
}
}
