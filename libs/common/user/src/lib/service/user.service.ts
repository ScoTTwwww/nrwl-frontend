import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }


  get getUser(): Observable<any> {

    return this.http.get('/api/users').pipe(
      map(o => o)
    )
  }



}
