import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '@frontend/common/shared';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private configService: ConfigService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.indexOf('api/') !== -1) {
      const url: string = this.configService.config.api || location.origin;

      req = req.clone({ url: `${url}/${req.url}` });
    }

    return next.handle(req);
  }
}
