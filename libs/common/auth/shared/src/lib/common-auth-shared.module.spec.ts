import { async, TestBed } from '@angular/core/testing';
import { CommonAuthSharedModule } from './common-auth-shared.module';

describe('CommonAuthSharedModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonAuthSharedModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonAuthSharedModule).toBeDefined();
  });
});
