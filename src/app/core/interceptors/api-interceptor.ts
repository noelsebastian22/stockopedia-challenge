import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { SpinnerOverlayService } from '../services/spinner-overlay.service';
import { finalize } from 'rxjs/operators';

/**
 * Prefixes all requests with `environment.serverUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  constructor(private spinnerOverlayService: SpinnerOverlayService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinnerOverlayService.show();
    request = request.clone({
      url: environment.apiPrefix + request.url,
    });
    return next
      .handle(request)
      .pipe(finalize(() => this.spinnerOverlayService.hide()));
  }
}
