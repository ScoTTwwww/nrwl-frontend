import { async, TestBed } from '@angular/core/testing';
import { CommonSharedModule } from './common-shared.module';

describe('CommonSharedModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonSharedModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonSharedModule).toBeDefined();
  });
});
