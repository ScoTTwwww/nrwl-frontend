import { TestBed, inject } from '@angular/core/testing';

import { ApiInterceptor } from './api.interceptor';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiInterceptor]
    });
  });

  it('should be created', inject(
    [ApiInterceptor],
    (service: ApiInterceptor) => {
      expect(service).toBeTruthy();
    }
  ));
});
