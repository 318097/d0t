import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {
  currentPost: any = {};
  id: number;
  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // console.log(this.router);
    // console.log(this.activatedRoute);
    // this.id = this.activatedRoute.snapshot.params.id;
    this.activatedRoute.params
      // .pipe(take(1))
      .subscribe(params => {
        // console.log('edit Post param id :: ', params);
        this.id = parseInt(params.id, 10);
        this.getPostById(this.id);
      });
  }

  getPostById(id: number) {
    this.postService.getPostById('POST', id)
      .subscribe((response: any) => {
        this.currentPost = response.post;
      });
  }

}
