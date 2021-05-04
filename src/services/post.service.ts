import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { HNPost } from '../models/hnpost.model';

@Injectable()

export class PostService {
  private apiHackerNews: string = 'https://hacker-news.firebaseio.com/v0/';
  private postsPerPage: number = 10;

  public postsHackerNews: HNPost[] = [];

  constructor(private http: HttpClient) { }

  public getPostsHackerNews(storyType: string = 'top', pageNumber: number = 1): void {
    // Get the full list of posts of <type>
    this.http.get<number[]>(`${this.apiHackerNews}${storyType}stories.json`).subscribe(
      posts => {
        // Traverse the list according to page number
        posts.slice((pageNumber - 1) * this.postsPerPage, pageNumber * this.postsPerPage).forEach(id => {
          // Fetch each post for this page number
          this.http.get<HNPost>(`${this.apiHackerNews}item/${id}.json`).subscribe(
            post => {
              // Add to array for rendering
              this.postsHackerNews.push(post);
            }, err => {
              console.log(err);
            }
          );
        });
      }, err => {
        console.log(err);
      }
    );
  }
}
