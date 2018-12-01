import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  _credentials: any = '';
  constructor(private router: Router) {
    const savedCredentials = localStorage.getItem('credentials') || sessionStorage.getItem('credentials');
    if (savedCredentials) {
      // this._credentials = JSON.parse(savedCredentials);
      this._credentials = savedCredentials;
    }
  }

  authenticate(credentials: any): boolean {
    if (credentials.username === 'root' && credentials.password === 'root') {
      this._credentials = true;
      localStorage.setItem('credentials', 'loggedIn');
    }
    return this._credentials;
  }

  isAuthenticated(): boolean {
    return !!this._credentials;
  }

  logout() {
    this._credentials = '';
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
