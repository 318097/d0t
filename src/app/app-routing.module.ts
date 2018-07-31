import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { ViewPostComponent } from './posts/view-post/view-post.component';
import { DiaryComponent } from './diary/diary.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'expenses', component: ExpensesComponent },
  {
    path: 'posts', children: [
      { path: '', component: PostsComponent },
      { path: ':id', component: ViewPostComponent },
    ]
  },
  {
    path: 'diary', children: [
      { path: '', component: DiaryComponent },
    ]
  },
  {
    path: 'admin', children: [
      { path: '', component: PostsComponent },
      { path: 'posts/add', component: AddPostComponent },
      { path: 'posts/edit/:id', component: AddPostComponent },
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
