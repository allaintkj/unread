import { Component, OnInit } from '@angular/core';

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

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPostsHackerNews();
  }
}
