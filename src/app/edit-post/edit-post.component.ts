import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  postForm  = new FormGroup({
    title : new FormControl(''),
    description : new FormControl('')
  })
  

  constructor(private postService:PostsService,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const { postid } = this._activatedRoute.snapshot.params
    this.postService.getSinglePost(postid)
    .subscribe((data:any)=>{
      const {title,description} = data
      this.postForm.setValue({title:title,description:description})
      
    })
  }

  updatePostData(){
    const { postid } = this._activatedRoute.snapshot.params
    console.log(postid)
    this.postService.updatePost(this.postForm.value,postid).subscribe((data)=>{
      console.log(data)
    })
    //console.log(this.postForm.value)
  }

}
