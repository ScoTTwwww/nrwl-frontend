import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSubject = new BehaviorSubject(null);
  language$ = this.languageSubject.asObservable();

  constructor(
    private translateService: TranslateService,
    private configService: ConfigService
  ) { }


  init() {
    this.configService.config$.subscribe(result => {
      if (result) {
        const language = result.language;

        this.languageSubject.next(language.default);
        this.translateService.setDefaultLang(language.default);
        this.translateService.use(language.default);
      }

    })
  }

}
