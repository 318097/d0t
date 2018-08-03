import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const routes = {
  'post': 'post',
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get(routes.post);
  }
  getPostById(id) {
    return this.http.get(`${routes.post}/${id}`);
  }
  addPost(data) {
    return this.http.post(routes.post, data);
  }
  updatePost(data) {
    return this.http.put(routes.post, data);
  }
  deletePost(id) {
    return this.http.delete(`${routes.post}/${id}`);
  }
}
