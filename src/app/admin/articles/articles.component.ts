import { Component, OnInit } from '@angular/core';
import { PostService } from '../../posts/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  postList: any = [];
  inshortsList: any = [];
  displayType = 'POST';
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    const displayType = this.displayType;
    this.postService.getAllPosts(displayType)
      .subscribe((response: any) => {
        if (displayType === 'POST') {
          this.postList = response.posts;
        } else {
          this.inshortsList = response.inshorts;
        }
      });
  }

  deletePost(id: any) {
    const displayType = this.displayType;
    this.postService.deletePost(displayType, id)
      .subscribe((response: any) => {
      });
  }
  changeDisplayType(type: string) {
    this.displayType = type;
    this.getAllPosts();
  }
}
