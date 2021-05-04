import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostService } from '../../services/post.service';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [PostService]
})
export class PostListComponent implements OnInit {
  public clrDark = 'dark';
  public clrLight = 'light';
  public clrSec = 'secondary';

  constructor(
    private router: Router,
    public postService: PostService
  ) { }

  ngOnInit(): void {
    // Get the path to determine type of story we want
    // top/new/ask/show/jobs
    // If it's 'jobs' we need to substring, as the correct endpoint is 'jobstories'
    let path = this.router.url.split('/')[1];
    path = (path === 'jobs' ? path.substr(0, path.length - 1) : path);

    // Determine page number to return posts for
    let page = parseInt(this.router.url.split('/')[2]);

    // Have the service fetch our posts and update array for rendering
    // Could probably use an observable to return the array to this component
    this.postService.getPostsHackerNews(path, page);
  }
}
