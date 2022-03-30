import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  public post:any = {title:"",description:""}
  constructor(private postsService:PostsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const postid:string = this.route.snapshot.params['id']
    this.postsService.getSinglePost(postid)
    .subscribe((data)=>{
        this.post  = data
    })
  }

}
