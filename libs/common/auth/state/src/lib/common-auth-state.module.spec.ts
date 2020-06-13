import { async, TestBed } from '@angular/core/testing';
import { CommonAuthStateModule } from './common-auth-state.module';

describe('CommonAuthStateModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonAuthStateModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonAuthStateModule).toBeDefined();
  });
});
