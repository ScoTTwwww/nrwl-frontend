import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ThemeService } from '../theme/theme.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configSubject = new BehaviorSubject<any>(null);

  config$ = this.configSubject.asObservable();

  get config() {
    return this._config;
  }

  private _config: any;

  constructor(
    private httpClient: HttpClient,
    private themeService: ThemeService
  ) { }

  loadConfig() {
    this.httpClient.get('assets/config.json').subscribe(config => {
      console.log("--- Loading Finish config ---", config)
      this._config = config;
      // this.themeService.initTheme( this._config.theme.default)
      this.configSubject.next(config);
    }, err => {
      console.log(err)
    })
  }
}
