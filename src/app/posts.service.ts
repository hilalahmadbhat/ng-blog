import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _http:HttpClient) { }

  getAllPosts(pageno:number){
    return this._http.get("http://localhost:3000/posts",{params:new HttpParams().append('page',pageno)});
  }

  getSinglePost(postid:string){
    return this._http.get(`http://localhost:3000/posts/${postid}`);
  }
}
