import { async, TestBed } from '@angular/core/testing';
import { WebAppModule } from './web-app.module';

describe('WebAppModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebAppModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebAppModule).toBeDefined();
  });
});
