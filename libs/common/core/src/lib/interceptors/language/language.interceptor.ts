import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  languageContentKey: string = 'Content-Language';

  constructor(private translateService: TranslateService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.headers.has(this.languageContentKey)) return next.handle(req);

    const newRequest = req.clone({
      setHeaders: {
        [this.languageContentKey]: this.translateService.currentLang || 'zh-cn'
      }
    });

    return next.handle(newRequest);
  }
}
