import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { ViewPostComponent } from './posts/view-post/view-post.component';
import { DiaryComponent } from './diary/diary.component';
import { InshortsComponent } from './inshorts/inshorts.component';
import { AdminLayoutComponent } from './_layouts/admin-layout/admin-layout.component';
import { PublicLayoutComponent } from './_layouts/public-layout/public-layout.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './core/authentication/authentication.guard';
import { ArticlesComponent } from './admin/articles/articles.component';

const appRoutes: Routes = [
  {
    component: AdminLayoutComponent,
    path: 'admin',
    canActivate: [AuthenticationGuard],
    children: [
      { path: '', component: AdminComponent },
      { path: 'articles', component: ArticlesComponent },
      { path: 'posts/add', component: AddPostComponent },
      { path: 'posts/edit/:type/:id', component: AddPostComponent },
      { path: 'expenses', component: ExpensesComponent },
    ]
  },
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
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
      { path: 'inshorts', component: InshortsComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
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
