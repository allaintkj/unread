import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public clrDark = 'dark';
  public clrLight = 'light';
  public clrSec = 'secondary';
  public posts:any[] = [{
      "by": "colinprince",
      "descendants": 31,
      "id": 27029196,
      "kids": [
          27030054,
          27030116,
          27029609,
          27029905,
          27029748,
          27029877,
          27029717,
          27029943,
          27029723,
          27030028,
          27029660,
          27029906,
          27030017
      ],
      "score": 124,
      "time": 1620068089,
      "title": "The Unix Magic Poster",
      "type": "story",
      "url": "https://jpmens.net/2021/04/09/the-unix-magic-poster/"
  }, {
      "by": "steve-chavez",
      "descendants": 132,
      "id": 27025829,
      "kids": [
          27026691,
          27026843,
          27028343,
          27026327,
          27026315,
          27026498,
          27026566,
          27026353,
          27028554,
          27027396,
          27026445,
          27026397,
          27029151,
          27027564,
          27028203,
          27027731
      ],
      "score": 355,
      "time": 1620053714,
      "title": "Practical SQL for Data Analysis",
      "type": "story",
      "url": "https://hakibenita.com/sql-for-data-analysis"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
