import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postList: any;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts()
      .subscribe((response: any) => {
        this.postList = response.posts;
        // console.log(response);
      });
  }

  deletePost(id: number) {
    this.postService.deletePost(id)
      .subscribe((response: any) => {
      });
  }
}
