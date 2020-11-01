import { TestBed, inject } from '@angular/core/testing';

import { ErrorHandlerInterceptor } from './error-handler.interceptor';

describe('ErrorHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorHandlerInterceptor]
    });
  });

  it('should be created', inject(
    [ErrorHandlerInterceptor],
    (service: ErrorHandlerInterceptor) => {
      expect(service).toBeTruthy();
    }
  ));
});
