import { async, TestBed } from '@angular/core/testing';
import { IonicAppModule } from './ionic-app.module';

describe('IonicAppModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IonicAppModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(IonicAppModule).toBeDefined();
  });
});
