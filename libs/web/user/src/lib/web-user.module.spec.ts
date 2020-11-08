import { async, TestBed } from '@angular/core/testing';
import { WebUserModule } from './web-user.module';

describe('WebUserModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebUserModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebUserModule).toBeDefined();
  });
});
