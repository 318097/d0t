import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {
  diaryList: any;
  constructor() { }

  ngOnInit() {
  }

  // getAllPosts() {
  //   this.postService.getAllPosts()
  //     .subscribe((response: any) => {
  //       this.postList = response.posts;
  //       // console.log(response);
  //     });
  // }

}
