import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  _credentials: any = '';
  constructor(private router: Router, private http: HttpClient) {
    const savedCredentials =
      localStorage.getItem('credentials') ||
      sessionStorage.getItem('credentials');
    if (savedCredentials) {
      // this._credentials = JSON.parse(savedCredentials);
      this._credentials = savedCredentials;
    }
  }
  login(credentials) {
    this.http.post('auth/signin', credentials).subscribe(response => {
      if (response) {
        this.authenticate(response);
      }
    });
  }
  authenticate(credentials: any): boolean {
    if (credentials.token) {
      this._credentials = credentials.token;
      localStorage.setItem('credentials', credentials.token);
      this.router.navigate(['admin']);
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
