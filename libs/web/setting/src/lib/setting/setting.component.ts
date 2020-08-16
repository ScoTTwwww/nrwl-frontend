import { Component, OnInit } from '@angular/core';
import { ConfigService, LanguageService } from '@frontend/common/shared';
import { ThemeService } from '@frontend/common/shared';
import { MatRadioChange } from '@angular/material';


@Component({
  selector: 'web-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  constructor(
    public configService: ConfigService,
    public themeService: ThemeService,
    public languageService: LanguageService
  ) { }

  ngOnInit() {
  }

}
