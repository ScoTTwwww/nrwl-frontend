import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@frontend/common/shared';
import { ConfigService, LanguageService } from '@frontend/common/shared';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'web';
  loading$ = new BehaviorSubject<boolean>(false);

  constructor(
    public themeService: ThemeService,
    public configService: ConfigService,
    private languageService: LanguageService,
    private router: Router
  ) {
    this.router.events.forEach((event) => {


      if(event instanceof NavigationEnd){
        console.log('ZZZ')
        this.loading$.next(true);
      }else {
        this.loading$.next(false);
      }
    });
  }

  ngOnInit(): void {
    this.themeService.setTheme("theme-3");
    this.configService.loadConfig();
    this.languageService.init();
  }



}
