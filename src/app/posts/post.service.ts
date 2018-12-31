import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const routes = {
  POST: 'posts',
  INSHORTS: 'inshorts'
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {}

  getAllPosts(type: any) {
    return this.http.get(routes[type]);
  }

  getPostById(type: string, id: any) {
    return this.http.get(`${routes[type]}/${id}`);
  }

  addPost(type: string, data: any) {
    return this.http.post(routes[type], data);
  }

  updatePost(type: string, id: any, data: any) {
    return this.http.put(`${routes[type]}/${id}`, data);
  }

  deletePost(type: string, id: any) {
    return this.http.delete(`${routes[type]}/${id}`);
  }
}
