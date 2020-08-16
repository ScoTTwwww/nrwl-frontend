import { async, TestBed } from '@angular/core/testing';
import { WebHomeModule } from './web-home.module';

describe('WebHomeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebHomeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebHomeModule).toBeDefined();
  });
});
