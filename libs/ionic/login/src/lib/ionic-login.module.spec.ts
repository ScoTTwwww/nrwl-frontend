import { async, TestBed } from '@angular/core/testing';
import { IonicLoginModule } from './ionic-login.module';

describe('IonicLoginModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IonicLoginModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(IonicLoginModule).toBeDefined();
  });
});
