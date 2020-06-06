import { Component, OnInit } from '@angular/core';
import { ConfigService } from '@frontend/common/shared';
import { ThemeService } from '@frontend/web/shared';
import { MatRadioChange } from '@angular/material';

@Component({
  selector: 'web-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  favoriteSeason: any = this.themeService._theme;

  constructor(
    public configService: ConfigService,
    public themeService: ThemeService
  ) {
  }

  ngOnInit() {
  }

  radioChange(event: MatRadioChange) {
    const theme = event.value;
    this.themeService.setTheme(theme);
  }
}
