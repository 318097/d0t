import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExpensesComponent } from './expenses/expenses.component';
import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { ApiPrefixInterceptor } from './core/http/api-prefix.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewPostComponent } from './posts/view-post/view-post.component';
import { DiaryComponent } from './diary/diary.component';
import { SafeHtmlPipe } from './shared/safe-html.pipe';
import { InshortsComponent } from './inshorts/inshorts.component';
import { AdminLayoutComponent } from './_layouts/admin-layout/admin-layout.component';
import { PublicLayoutComponent } from './_layouts/public-layout/public-layout.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ArticlesComponent } from './admin/articles/articles.component';
// import { NgxEditorModule } from 'ngx-editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ResumeComponent } from './resume/resume.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpensesComponent,
    PostsComponent,
    AddPostComponent,
    ViewPostComponent,
    DiaryComponent,
    SafeHtmlPipe,
    InshortsComponent,
    AdminLayoutComponent,
    PublicLayoutComponent,
    AdminComponent,
    LoginComponent,
    ArticlesComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
    // NgxEditorModule,
  ],
  providers: [
    // use the http interceptors to handle all outgoing requests.
    { provide: HTTP_INTERCEPTORS, useClass: ApiPrefixInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
