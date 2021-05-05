import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

import { HNPost } from '../models/hnpost.model';

@Injectable()

export class PostService {
  private apiHackerNews: string = 'https://hacker-news.firebaseio.com/v0/';
  private postsPerPage: number = 10;

  public lastPage: number = 1;
  public loading: boolean = false;
  
  public postsHackerNews: HNPost[] = [];

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  public getPostsHackerNews(storyType: string = 'top', pageNumber: number = 1): void {
    this.loading = true;

    // Get the full list of posts of <type>
    this.http.get<number[]>(`${this.apiHackerNews}${storyType}stories.json`).subscribe(
      posts => {
        // Figure out maximum number of pages given postsPerPage
        this.lastPage = Math.ceil(posts.length / this.postsPerPage);

        // Redirect if requested page number is less than 1
        if (!(pageNumber >= 1)) {
          this.router.navigate([`/${storyType === 'job' ? 'jobs' : storyType}/1`]);
          pageNumber = 1;
        }

        // Redirect if requested page number is too high
        if (pageNumber > this.lastPage) {
          this.router.navigate([`/${storyType === 'job' ? 'jobs' : storyType}/${this.lastPage}`]);
          pageNumber = pageNumber > this.lastPage ? this.lastPage : pageNumber;
        }

        // Traverse the list according to page number
        posts.slice((pageNumber - 1) * this.postsPerPage, pageNumber * this.postsPerPage).forEach(id => {
          // Fetch each post for this page number
          this.http.get<HNPost>(`${this.apiHackerNews}item/${id}.json`).subscribe(
            post => {
              // Add to array for rendering
              this.postsHackerNews.push(post);
              this.loading = this.postsHackerNews.length === 10 ? false : true;              
            }, err => {
              console.log(err);
              this.loading = false;
            }
          );
        });
      }, err => {
        console.log(err);
        this.loading = false;
      }
    );
  }
}
