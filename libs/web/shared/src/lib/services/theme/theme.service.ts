import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject(null);
  theme$ = this.themeSubject.asObservable();

  constructor() { }

  get _theme () {
    return this.themeSubject.value;
  }
  set _theme(value) {
    this.setTheme(value);
  }

  initTheme() {
    const theme = "theme-2";
    this.setTheme(theme);
  }

  setTheme(theme: string) {
    this.themeSubject.next(theme);
  }

}
