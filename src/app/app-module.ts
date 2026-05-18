import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { TransactionComponent } from './features/transactions/components/transaction/transaction';
import { provideHttpClient } from '@angular/common/http';
import { TransactionForm } from './features/transactions/components/transaction-form/transaction-form';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    TransactionComponent,
    TransactionForm,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimations(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
