import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
  {path : "posts" , component : AllPostsComponent },
  {path : "posts/:id", component : SinglePostComponent},
  {path : "posts/edit/:postid", component : EditPostComponent},
  {path : "", component : AllPostsComponent},
  {path : "**", component : NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
