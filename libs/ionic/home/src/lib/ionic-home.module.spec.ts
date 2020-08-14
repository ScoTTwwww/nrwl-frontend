import { async, TestBed } from '@angular/core/testing';
import { IonicHomeModule } from './ionic-home.module';

describe('IonicHomeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IonicHomeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(IonicHomeModule).toBeDefined();
  });
});
