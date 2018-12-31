import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const routes = {
  resume: 'resume'
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  username = 'root';
  constructor(private http: HttpClient) {}

  getResume() {
    return this.http.get(`users/${this.username}/${routes.resume}`);
  }

  updateResume(data: any) {
    return this.http.put(`users/${routes.resume}`, data);
  }
}
