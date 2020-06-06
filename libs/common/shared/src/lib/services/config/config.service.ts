import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
    private httpClient: HttpClient
  ) { }



  loadConfig() {
    this.httpClient.get('assets/config.json').subscribe(config => {
      console.log("--- Loading Finish config ---")
      this._config = config;
      this.configSubject.next(config);
    })
  }
}
