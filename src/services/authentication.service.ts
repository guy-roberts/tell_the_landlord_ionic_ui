import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


interface UserResponse {
  auth_token: string;
}

@Injectable()
export class AuthenticationService {
  public token: string;

  constructor(private http: HttpClient) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<UserResponse> {
    return this.http.post<UserResponse>('http://some-housing-association.lvh.me:3000/auth/login', {email: username, password: password})
      .map(response => {
          localStorage.setItem('currentUser', JSON.stringify({username: username, token: response.auth_token}));
          return {auth_token: response.auth_token};
        }
      );
  };

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
