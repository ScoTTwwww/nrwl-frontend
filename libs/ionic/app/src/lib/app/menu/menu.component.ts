import { Component, OnInit } from '@angular/core';
import { ConfigService, LanguageService } from '@frontend/common/shared';
import { ThemeService } from '@frontend/common/shared';

@Component({
  selector: 'ionic-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    public configService: ConfigService,
    public themeService: ThemeService,
    public languageService: LanguageService
  ) { }

  ngOnInit() {
  }

  switchLanguage($event) {
    this.languageService.setLanguage($event.target.value);
    console.log($event.target.value);
  }
}
