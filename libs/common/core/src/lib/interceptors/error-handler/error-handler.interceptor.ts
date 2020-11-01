import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastService } from '@frontend/common/shared';
import { Router } from '@angular/router';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private toastService: ToastService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError((res: HttpErrorResponse) => {
          let errorMessage: string = '';

          if (res.error instanceof ErrorEvent) {
            // client side error
            errorMessage  = res.error.message;

            this.toastService.error(errorMessage);
          } else {
            // server side error
            if (res.error && res.error.error && res.status !== 401) {
              errorMessage = res.error.error._error;

              this.toastService.error(errorMessage);
            }

            if (res.status === 0 || res.status === 403) {
              this.router.navigateByUrl('/system/maintenance');
            }
          }

          return throwError(new Error(errorMessage));
        })
      );
  }
}
