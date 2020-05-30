import { async, TestBed } from '@angular/core/testing';
import { CommonMaterialModule } from './common-material.module';

describe('CommonMaterialModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonMaterialModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonMaterialModule).toBeDefined();
  });
});
