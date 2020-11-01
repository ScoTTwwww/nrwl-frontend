import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthFacade } from '@frontend/common/auth/state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    private authFacade: AuthFacade
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.checked();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    return this.checked();
  }

  checked() {

    const token = sessionStorage.getItem('token')
    console.log('token', token)
    if (token) {
      const user = {
        id: sessionStorage.getItem('id'),
        userId: sessionStorage.getItem('userId'),
        token: token
      }
      this.authFacade.checkUser(user);
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
