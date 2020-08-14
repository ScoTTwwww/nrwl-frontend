import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject(null);
  theme$ = this.themeSubject.asObservable();

  constructor(
  ) { }

  get _theme () {
    return this.themeSubject.value;
  }
  set _theme(value) {

    this.setTheme(value);
  }

  initTheme(theme) {
    this.setTheme(theme);
  }

  setTheme(theme: string) {
    document.body.className = theme;
    this.themeSubject.next(theme);
  }

}
