import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PostService } from '../../services/post.service';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  public path: string = '';
  public page: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public postService: PostService
  ) { }

  ngOnInit(): void {
    this.path = this.router.url.split('/')[1];

    this.route.params.subscribe(params => {
      this.page = parseInt(params.pageNumber);
      this.page = (this.page >= 1 ? this.page : 1);
    });
  }
}
