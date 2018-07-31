import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

export interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  currentPost: any = '<h1 class="red">hello</h1><p><b>ljkasdfjlkkdf</b></p>';
  id: number;
  isEdit = false;
  // post: Post;
  post: any = {};
  pageTitle: string;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    console.log(this.router);
    console.log(this.activatedRoute);
    this.isEdit = this.router.url === '/posts/add' ? false : true;
    if (this.isEdit) {
      this.pageTitle = 'Edit Post';
      this.id = this.activatedRoute.snapshot.params.id;
      // this.activatedRoute.params
      //   .pipe(take(1))
      //   .subscribe(params => {
      //     // console.log('edit Post param id :: ', params);
      //     this.id = params.id;
      //     // this.getPostById(this.id);
      //   });
    } else {
      this.pageTitle = 'New Post';
    }

  }

  getPostById(id: number) {
    this.postService.getPostById(id)
      .subscribe((response: any) => {
        this.currentPost = response;
      });
  }

  addPost() {
    const data = this.post;
    this.postService.addPost(data)
      .subscribe((response: any) => {
        // this.expenseTypes = response;
        this.router.navigate(['posts']);
      });
  }

  updatePost() {
    const data = {};
    this.postService.updatePost(data)
      .subscribe((response: any) => {
        // this.expenseTypes = response;
      });
  }

}
