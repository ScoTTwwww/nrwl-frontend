import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUrl = 'http://localhost:3000/api/auth/login';
  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post(this.loginUrl, user)

  }
}
