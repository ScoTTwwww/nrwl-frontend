import { async, TestBed } from '@angular/core/testing';
import { CommonUserModule } from './common-user.module';

describe('CommonUserModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUserModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUserModule).toBeDefined();
  });
});
