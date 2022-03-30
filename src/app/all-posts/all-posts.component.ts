import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  public posts:any = [];
  public pageno:number = 1;
  constructor(private postsService :PostsService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.queryParams
    .subscribe((params)=>{
      this.pageno = params['page']
    })
    
    this.postsService.getAllPosts(this.pageno)
    .subscribe((data)=>{
      console.log(data)
      this.posts = data
    })
  }

}
