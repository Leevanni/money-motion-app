import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { TransactionComponent } from './features/transactions/components/transaction/transaction';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { TransactionForm } from './features/transactions/components/transaction-form/transaction-form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './features/auth/components/login-component/login-component';

@NgModule({
  declarations: [
    App,
    TransactionComponent,
    TransactionForm,
    LoginComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimations(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
