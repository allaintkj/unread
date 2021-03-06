import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [FormBuilder]
})
export class SearchComponent implements OnInit {
  public searchForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.searchForm = this._fb.group({
      'searchText': ''
    });
  }

  ngOnInit(): void { }

  get searchTextBox() {
    return this.searchForm.controls['searchText'] as FormControl;
  }

  public search(formSubmission: any): void {
    // New tab with search query
    window.open(`https://hn.algolia.com/?q=${formSubmission.searchText}`, '_blank');

    // Blank the search box
    this.searchForm = this._fb.group({
      'searchText': ''
    });
  }
}
