import { TestBed, inject } from '@angular/core/testing';

import { LanguageInterceptor } from './language.interceptor';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LanguageInterceptor]
    });
  });

  it('should be created', inject(
    [LanguageInterceptor],
    (service: LanguageInterceptor) => {
      expect(service).toBeTruthy();
    }
  ));
});
