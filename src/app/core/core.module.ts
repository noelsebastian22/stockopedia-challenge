import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiPrefixInterceptor } from './interceptors/api-interceptor';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerOverlayComponent } from './components/spinner-overlay/spinner-overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [CustomDatePipe, SpinnerComponent, SpinnerOverlayComponent],
  imports: [CommonModule, HttpClientModule, OverlayModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    CustomDatePipe,
  ],
  exports: [CustomDatePipe, SpinnerComponent, SpinnerOverlayComponent],
})
export class CoreModule {}
