import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  public posts:any = [];
  public pageno:any = 0;
  constructor(private postsService :PostsService,private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.activatedroute.queryParams
    .subscribe((params)=>{
      this.pageno = params['page']==undefined?1:params['page']
    })

    this.postsService.getAllPosts(this.pageno)
    .subscribe((data)=>{
      console.log(data)
      this.posts = data
    })
  }

  nextPosts(){
    const pagenum:number = parseInt(this.pageno)+1
    this.router.navigate(['/posts'],{queryParams:{page:pagenum}})
  }

  prevPosts(){
    const pagenum:number = parseInt(this.pageno)-1
    this.router.navigate(['/posts'],{queryParams:{page:pagenum}})
  }

}
