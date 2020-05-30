import { async, TestBed } from '@angular/core/testing';
import { IonicCoreModule } from './ionic-core.module';

describe('IonicCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IonicCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(IonicCoreModule).toBeDefined();
  });
});
