import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() clrBackground: string;
  @Input() clrText: string;
  @Input() post: any;


  constructor() {
    this.clrBackground = '';
    this.clrText = '';
  }

  ngOnInit(): void {
  }

}
