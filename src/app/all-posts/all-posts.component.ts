import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  public posts:any = [];

  constructor(private postsService :PostsService) { }

  ngOnInit(): void {
    this.postsService.getAllPosts()
    .subscribe((data)=>{
      console.log(data)
      this.posts = data
    })
  }

}
