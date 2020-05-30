import { async, TestBed } from '@angular/core/testing';
import { WebSharedModule } from './web-shared.module';

describe('WebSharedModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebSharedModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebSharedModule).toBeDefined();
  });
});
