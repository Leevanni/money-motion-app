import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { TransactionComponent } from './component/transaction/transaction';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimations(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
