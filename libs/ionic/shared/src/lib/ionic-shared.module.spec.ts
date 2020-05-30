import { async, TestBed } from '@angular/core/testing';
import { IonicSharedModule } from './ionic-shared.module';

describe('IonicSharedModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IonicSharedModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(IonicSharedModule).toBeDefined();
  });
});
