import { async, TestBed } from '@angular/core/testing';
import { WebSettingModule } from './web-setting.module';

describe('WebSettingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebSettingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebSettingModule).toBeDefined();
  });
});
