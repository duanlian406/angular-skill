import { TestBed } from '@angular/core/testing';

import { AnotherHttpInterceptorService } from './another-http-interceptor.service';

describe('AnotherHttpInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnotherHttpInterceptorService = TestBed.get(AnotherHttpInterceptorService);
    expect(service).toBeTruthy();
  });
});
