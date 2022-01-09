import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTransactionComponent } from './transactions/add-transaction/add-transaction.component';
import { SpinnerOverlayComponent } from './core/components/spinner-overlay/spinner-overlay.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddTransactionComponent, SpinnerOverlayComponent],
})
export class AppModule {}
