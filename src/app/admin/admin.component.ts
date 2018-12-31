import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { Router } from '@angular/router';
import { PostService } from '../posts/post.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  postList: any = [];
  inshortsList: any = [];
  displayType = 'POST';
  resume: any = {};
  constructor(
    private adminService: AdminService,
    private router: Router,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.downloadResume();
    this.getAllPosts();
  }
  getAllPosts() {
    const displayType = this.displayType;
    this.postService.getAllPosts(displayType).subscribe((response: any) => {
      if (displayType === 'POST') {
        this.postList = response;
      } else {
        this.inshortsList = response;
      }
    });
  }

  deletePost(id: any) {
    const displayType = this.displayType;
    this.postService
      .deletePost(displayType, id)
      .subscribe((response: any) => {});
  }
  changeDisplayType(type: string) {
    this.displayType = type;
    this.getAllPosts();
  }

  downloadResume() {
    this.adminService.getResume().subscribe(response => {
      this.resume = JSON.stringify(response, undefined, 3);
    });
  }
  updateResume() {
    this.adminService
      .updateResume(JSON.parse(this.resume))
      .subscribe(response => {
        console.log('updated');
      });
  }

  disableResume() {}
  openResume() {
    this.router.navigate([this.adminService.username + '/resume']);
  }
}
