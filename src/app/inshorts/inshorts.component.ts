import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inshorts',
  templateUrl: './inshorts.component.html',
  styleUrls: ['./inshorts.component.scss']
})
export class InshortsComponent implements OnInit {
  inshortsList: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllInshorts();
  }

  getAllInshorts() {
    this.http.get('inshorts')
      .subscribe((response: any) => {
        this.inshortsList = response.inshorts;
        // console.log(response);
      });
  }

}
