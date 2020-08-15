import { Component, OnInit } from '@angular/core';
import { ConfigService, LanguageService } from '@frontend/common/shared';
import { ThemeService } from '@frontend/common/shared';
import { MatRadioChange } from '@angular/material';

@Component({
  selector: 'web-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(
    public configService: ConfigService,
    public themeService: ThemeService,
    public languageService: LanguageService
  ) {
  }

  ngOnInit() {
  }

}
