import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  { path: 'top', component: PostListComponent },
  { path: 'top/:pageNumber', component: PostListComponent },
  { path: 'new', component: PostListComponent },
  { path: 'new/:pageNumber', component: PostListComponent },
  { path: 'ask', component: PostListComponent },
  { path: 'ask/:pageNumber', component: PostListComponent },
  { path: 'show', component: PostListComponent },
  { path: 'show/:pageNumber', component: PostListComponent },
  { path: 'jobs', component: PostListComponent },
  { path: 'jobs/:pageNumber', component: PostListComponent },
  { path: '', redirectTo: '/top', pathMatch: 'full'},
  { path: "**", redirectTo: '/top' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
