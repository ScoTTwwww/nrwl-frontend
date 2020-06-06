import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@frontend/web/shared';
import { ConfigService, LanguageService } from '@frontend/common/shared';

@Component({
  selector: 'frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'web';

  constructor(
    public themeService: ThemeService,
    public configService: ConfigService,
    private languageService: LanguageService
  ) {
  }

  ngOnInit(): void {
    this.themeService.setTheme("theme-3");
    this.configService.loadConfig();
    this.languageService.init();
  }

}
