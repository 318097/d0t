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
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  id: number;
  isEdit: boolean;
  pageTitle: string;
  // post: Post;
  post: any = {};
  type: string;
  inshortTypes: any = [
    { 'name': 'Inshort', 'id': 1 },
    { 'name': 'Quote', 'id': 2 }
  ];
  // url: string;
  // typeId: any;
  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // console.log(this.router);
    // console.log(this.activatedRoute);
    this.isEdit = this.router.url === '/admin/posts/add' ? false : true;

    if (this.isEdit) {
      this.pageTitle = 'Edit Post';
      // this.id = this.activatedRoute.snapshot.params.id;
      this.activatedRoute.params
        .pipe(take(1))
        .subscribe(params => {
          // console.log('edit Post param id :: ', params);
          this.id = params.id;
          this.type = params.type.toUpperCase();
          this.getPostById(this.id);
        });
    } else {
      this.pageTitle = 'New Post';
    }
  }

  getPostById(id: number) {
    this.postService.getPostById(this.type, id)
      .subscribe((response: any) => {
        if (this.type === 'POST') {
          this.post = response.post;
        } else {
          this.post = response.inshorts;
        }
      });
  }

  addPost() {
    const data = this.post;
    this.postService.addPost(this.type, data)
      .subscribe((response: any) => {
        // this.expenseTypes = response;
        this.router.navigate(['/posts']);
      });
  }

  updatePost() {
    const data = {
      id: this.post.id,
      title: this.post.title,
      content: this.post.content
    };

    this.postService.updatePost(this.type, this.id, data)
      .subscribe((response: any) => {
        this.router.navigate(['/posts']);
      });
  }

}
