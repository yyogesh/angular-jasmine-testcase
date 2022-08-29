import { Component, OnInit } from '@angular/core';
import { DataService, Post } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular_test';
  data: number[] = [];
  posts: Post[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const fetchedData = this.dataService.fetchData();

    if (fetchedData.length) {
      this.data = fetchedData;
    }

    this.getPosts();
  }

  getPosts() {
    this.dataService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }
}
