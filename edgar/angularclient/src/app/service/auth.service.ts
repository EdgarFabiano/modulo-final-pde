import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(usuario, senha) {

  }

  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return Boolean(localStorage.getItem('isLoggedIn'));
  }

}
